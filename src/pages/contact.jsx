import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";
import CTASection from "../components/CTASection";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

function TM({ children }) {
  const text = typeof children === "string" ? children : "";
  let out = text;

  // Arabic (longest first)
  out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
  out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");

  // English (longest first)
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return <>{out}</>;
}

export default function ContactAr() {
  // FULL BLACK (NO GOLD)
  const eliteGold = "#000"; // keep variable name to avoid touching styles, but it's black

  const phone = "+971569006603";
  const phoneTel = "tel:+971569006603"; // ✅ fixed
  const whatsapp =
    "https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85";
  const email = "info@eliteyachtdubai.com";

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [sending, setSending] = useState(false);
  const [sentOk, setSentOk] = useState(false);
  const [sendErr, setSendErr] = useState("");

  // ✅ SEO (NO DESIGN/CONTENT CHANGES)
  const BASE_URL = "https://eliteyachtdubai.com";
  const { pathname } = useLocation();
  const CANONICAL = `${BASE_URL}${pathname || "/contact-us"}`;
  const ogImage = `${BASE_URL}/images/og/contact.webp`;

  const title =
    "تواصل مع إيليت يخت دبي | حجز يخت دبي مارينا واتساب | تأجير يخوت فاخرة";
  const description =
    "تواصل مع إيليت يخت دبي لحجز تأجير يخت في دبي مارينا: توفر سريع، أسعار واضحة، تنسيق VIP، وخيارات ديكور وضيافة حسب الطلب. احجز عبر واتساب أو اتصل الآن.";
  const keywords = [
    "تواصل إيليت يخت دبي",
    "حجز يخت دبي واتساب",
    "تأجير يخت دبي مارينا",
    "تأجير يخوت فاخرة في دبي",
    "يخت خاص دبي",
    "يخت حفلات دبي",
    "Yacht Rental Dubai Marina",
    "Luxury Yacht Rental Dubai",
    "Elite Yacht Dubai",
    "Dubai Marina Yacht Charter",
  ].join(", ");

  const schemaData = useMemo(() => {
    const orgId = `${BASE_URL}/#organization`;
    const webId = `${BASE_URL}/#website`;
    const pageId = `${CANONICAL}#webpage`;

    return [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: CANONICAL,
        name: title,
        description,
        inLanguage: "ar-AE",
        isPartOf: { "@id": webId },
        about: { "@id": orgId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/contact/hero.png`,
        },
      },
      {
        "@type": "ContactPage",
        "@id": `${CANONICAL}#contactpage`,
        url: CANONICAL,
        name: "صفحة التواصل",
        inLanguage: "ar-AE",
        mainEntity: { "@id": orgId },
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Elite Yacht Dubai",
        alternateName: ["إيليت يخت دبي", "Elite Yachts Dubai", "Elite Yacht Dubai"],
        url: BASE_URL,
        email,
        telephone: phone,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: phone,
            contactType: "customer service",
            availableLanguage: ["ar", "en"],
            areaServed: "AE",
          },
        ],
        sameAs: [
          "https://www.instagram.com/eliteyachtdubai_official/",
          "https://www.facebook.com/eliteyachtdubaiofficial",
          "https://www.linkedin.com/company/elite-yacht-dubai/",
          "https://www.youtube.com/@eliteyachtdubaiofficial",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: BASE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "تواصل معنا",
            item: CANONICAL,
          },
        ],
      },
    ];
  }, [BASE_URL, CANONICAL, title, description, email, phone]);

  const mapSrc = useMemo(
    () =>
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231113.64847719067!2d55.06256768211787!3d25.164386922608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b0a25763815%3A0x914c2fcffe4a4dc8!2sELITE%20YACHTS%20%7C%20ELITE%20YACHTS%20RENTAL%20DUBAI%20%7C%20ELITE%20YACHT%20CHARTER!5e0!3m2!1sen!2sae!4v1765804501510!5m2!1sen!2sae",
    []
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    setSentOk(false);
    setSendErr("");

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setSendErr("خدمة الإيميل غير مُعدّة (متغيرات EmailJS ناقصة).");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      to_email: "info@eliteyachtrental.com",
      name: data.get("name") || "",
      phone: data.get("phone") || "",
      email: data.get("email") || "",
      guests: data.get("guests") || "",
      date: data.get("date") || "",
      time: data.get("time") || "",
      message: data.get("message") || "",
      source: "Elite Yacht Dubai - Contact Page (AR)",
    };

    try {
      setSending(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, { publicKey: PUBLIC_KEY });
      setSentOk(true);
      form.reset();
    } catch (err) {
      console.error("EmailJS send error:", err);
      setSendErr("فشل الإرسال. جرّب مرة أخرى أو تواصل معنا عبر واتساب.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div dir="rtl" lang="ar" className="relative w-full bg-white text-black">
      {/* ✅ SEO + Schema (NO DESIGN/CONTENT CHANGES) */}
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        canonical={CANONICAL}
        ogTitle={title}
        ogDescription={description}
        ogImage={ogImage}
        ogUrl={CANONICAL}
        lang="ar"
        dir="rtl"
        ogLocale="ar_AE"
        ogType="website"
      />
      <Schema data={schemaData} />

      {/* subtle luxury background (LIGHT, FULL BLACK ACCENT) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(0,0,0,0.10), transparent 55%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_35%,rgba(15,23,42,0.03))]" />
      </div>


      <section
        className="
    relative w-full flex items-center
    min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:min-h-[80vh]
    overflow-hidden
  "
        style={{
          backgroundImage: "url('/images/contact/hero.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "scroll",
        }}
      >
        <div className="relative w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 md:py-16 lg:py-20 text-center">
            <div
              className="
          mx-auto max-w-[980px]
          rounded-2xl sm:rounded-3xl
          border border-black/10
          bg-black/50
          px-5 py-8
          sm:px-8 sm:py-10
          md:px-10 md:py-12
          shadow-[0_18px_60px_rgba(15,23,42,0.12)]
        "
            >
              <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase">
                إيليت يخت دبي • دبي مارينا • VIP
              </p>

              <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
                <div className="h-px mx-auto w-32 sm:w-48 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.12em] sm:tracking-[0.18em] md:tracking-[0.22em] text-white leading-tight px-2">
                إيليت يخت دبي — تأجير اليخوت الفاخرة والرحلات البحرية الخاصة
              </h1>

              <p className="mt-4 sm:mt-5 md:mt-6 text-white/90 leading-relaxed max-w-3xl mx-auto text-xs sm:text-sm md:text-base px-2">
                تجربة <span className="font-semibold text-white">إيليت يخت دبي</span>{" "}
                لتأجير اليخوت في دبي مارينا: رحلات خاصة وعائلية، حفلات أعياد ميلاد، فعاليات شركات،
                طلبات زواج، ورحلات غروب. تنسيق VIP احترافي يشمل خط سير الرحلة، الطاقم،
                الضيافة، الموسيقى، والديكور حسب الطلب — مع حجز سريع عبر واتساب وأسعار واضحة.
              </p>

              <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
                <a
                  href="https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
                  target="_blank"
                  rel="noreferrer"
                  className="
              inline-flex items-center justify-center gap-2
              rounded-full px-6 sm:px-8 md:px-9 py-2.5 sm:py-3
              border border-black
              bg-white
              text-black
              shadow-[0_14px_34px_rgba(0,0,0,0.12)]
              transition-all duration-300
              hover:bg-black hover:text-white
              w-full sm:w-auto sm:min-w-[200px] md:min-w-[230px]
              whitespace-nowrap
            "
                  aria-label="واتساب"
                >
                  <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm tracking-wider">احجز عبر واتساب</span>
                </a>

                <a
                  href="tel:971569006603"
                  className="
              inline-flex items-center justify-center gap-2
              rounded-full px-6 sm:px-8 md:px-9 py-2.5 sm:py-3
              border border-black
              bg-black
              text-white
              shadow-[0_16px_40px_rgba(0,0,0,0.16)]
              transition-all duration-300
              hover:bg-white hover:text-black
              w-full sm:w-auto sm:min-w-[200px] md:min-w-[230px]
              whitespace-nowrap
            "
                  aria-label="اتصال الآن"
                >
                  <i className="fa-solid fa-phone text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm tracking-wider">اتصل الآن</span>
                </a>
              </div>

              <div className="mt-5 sm:mt-10 text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.32em] uppercase text-white/70">
                دبي مارينا • نخلة جميرا • برج العرب
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CONTENT */}
      <section className="relative py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          {/* 2 columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.35em] text-black/55 uppercase">
                نحن هنا لمساعدتك
              </p>

              <h2 className="mt-4 text-2xl md:text-3xl font-light tracking-widest text-black/85">
                دعم <TM>Elite Yacht Dubai</TM> لحجز اليخوت الفاخرة
              </h2>

              <p className="mt-4 text-black/65 leading-relaxed">
                سواء كانت رحلة خاصة، عيد ميلاد، عرض زواج، فعالية شركة، أو تجربة VIP —
                فريق <TM>Elite Yachts</TM> يساعدك باختيار اليخت المناسب والمسار والوقت.
                أرسل طلبك الآن وسنرجع لك بتأكيد التوفر وأفضل الخيارات بسرعة.
              </p>

              <p className="mt-4 text-black/65 leading-relaxed">
                نخدم دبي مارينا ومسارات نخلة جميرا وأتلانتس وبرج العرب — مع تنظيم كامل للتجربة
                وإضافات حسب الطلب مثل الديكور والضيافة وخيارات الاحتفال.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InfoCard
                  title="سرعة الرد"
                  text="رد سريع عبر واتساب أو عبر نموذج التواصل لتأكيد التوفر والأسعار."
                  icon="fa-bolt"
                  eliteGold={eliteGold}
                />
                <InfoCard
                  title="نقطة الانطلاق"
                  text="دبي مارينا (ومراسي قريبة حسب توفر اليخت وخطة الرحلة)."
                  icon="fa-location-dot"
                  eliteGold={eliteGold}
                />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="/images/contact/hero-bg-1600.webp"
                  alt="Elite Yacht Dubai - دبي مارينا"
                  className="w-full h-[320px] sm:h-[480px] object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-transparent pointer-events-none" />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 55% 15%, rgba(0,0,0,0.14), transparent 58%)",
                  }}
                />
              </div>
              <div className="pointer-events-none absolute -left-2 -bottom-2 h-full w-full rounded-2xl border border-black/10" />
            </div>
          </div>

          {/* Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactCard
              phone={phone}
              phoneTel={phoneTel}
              whatsapp={whatsapp}
              email={email}
              eliteGold={eliteGold}
            />
            <SocialCard eliteGold={eliteGold} />
            <LocationCard eliteGold={eliteGold} />
          </div>

          {/* Form */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs tracking-[0.35em] text-black/55 uppercase">
                طلب عرض سعر
              </p>

              <h3 className="mt-4 text-2xl md:text-3xl font-light tracking-widest text-black/85">
                خلّنا نرتب تجربتك مع <TM>Elite Yacht Dubai</TM>
              </h3>

              <p className="mt-4 text-black/65 leading-relaxed">
                عبّئ النموذج وسنرسل لك أفضل خيارات تأجير يخت في دبي حسب التاريخ، عدد الضيوف،
                ووقت الرحلة. إذا كنت تعرف اسم اليخت، اذكره — وإن لم تكن متأكدًا، سنرشّح لك الأفضل
                حسب ميزانيتك.
              </p>

              <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.10)]">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-shield-halved" style={{ color: eliteGold }} />
                  <p className="text-sm text-black/60">
                    خصوصيتك مهمة لنا. نستخدم بياناتك فقط للتواصل بخصوص حجز اليخت.
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-10 rounded-2xl bg-white border border-black/10 overflow-hidden shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                <div className="px-6 pt-5 pb-3">
                  <p className="text-[11px] tracking-[0.3em] text-black/55 uppercase">
                    خريطة جوجل
                  </p>
                  <p className="mt-1 text-black/80 text-sm">
                    <TM>ELITE YACHTS RENTAL LLC.</TM>
                  </p>
                </div>

                <div className="h-[320px] w-full border-t border-black/10">
                  <iframe
                    title="موقع Elite Yacht Dubai"
                    src={mapSrc}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-black/10 p-6 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]"
              style={{ ["--gold"]: eliteGold }}
              aria-label="نموذج حجز وتأجير يخت في دبي"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <div>
                  <p className="text-[11px] tracking-[0.3em] text-black/55 uppercase">
                    نموذج <TM>Elite Yacht Dubai</TM>
                  </p>
                  <p className="mt-1 text-black/80 text-sm">أرسل تفاصيل الحجز</p>
                </div>

                <span
                  className="
                    hidden sm:inline-flex items-center gap-2
                    rounded-full
                    bg-white/85 backdrop-blur
                    border border-black/10
                    px-3 py-1
                    text-[11px] font-semibold
                    text-black/70
                    shadow-[0_10px_26px_rgba(15,23,42,0.12)]
                  "
                >
                  <i className="fa-solid fa-crown" style={{ color: eliteGold }} />
                  VIP
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldAr label="الاسم الكامل" name="name" placeholder="اكتب اسمك" required eliteGold={eliteGold} />
                <FieldAr label="رقم الهاتف" name="phone" placeholder="+971..." required eliteGold={eliteGold} />
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldAr
                  label="البريد الإلكتروني"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  eliteGold={eliteGold}
                />
                <FieldAr label="عدد الضيوف" name="guests" placeholder="مثال: 10" eliteGold={eliteGold} />
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FieldAr label="التاريخ" name="date" type="date" eliteGold={eliteGold} />
                <FieldAr label="الوقت" name="time" type="time" eliteGold={eliteGold} />
              </div>

              <div className="mt-4">
                <label className="block text-[11px] tracking-[0.3em] text-black/55 uppercase mb-2">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  rows={11}
                  placeholder="اذكر اسم اليخت (إن وجد)، المسار المفضل، نوع المناسبة، وأي إضافات ترغب بها…"
                  className="
                    w-full rounded-2xl bg-white
                    border border-black/10
                    px-4 py-3 text-sm text-black/80
                    placeholder:text-black/35
                    outline-none transition
                    focus:border-[var(--gold)]
                    focus:ring-2 focus:ring-[var(--gold)]/20
                    shadow-[inset_0_0_0_1px_rgba(15,23,42,0.03)]
                  "
                />
              </div>

              {(sentOk || sendErr) && (
                <div className="mt-4 rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-3">
                  {sentOk && (
                    <p className="text-sm text-black/75">
                      تم الإرسال بنجاح. سيتواصل معك فريق <TM>Elite Yacht Dubai</TM> قريبًا.
                    </p>
                  )}
                  {sendErr && <p className="text-sm text-black/75">⚠️ {sendErr}</p>}
                </div>
              )}

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className="
                    inline-flex items-center justify-center gap-3
                    rounded-full px-8 py-3 text-sm
                    border border-black
                    bg-black text-white
                    shadow-[0_16px_40px_rgba(15,23,42,0.18)]
                    transition-all duration-300
                    hover:bg-black/90
                    hover:shadow-[0_18px_52px_rgba(0,0,0,0.22)]
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  <i className="fa-solid fa-paper-plane" />
                  {sending ? "جارٍ الإرسال..." : "إرسال الطلب"}
                </button>

                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center gap-3
                    rounded-full px-8 py-3 text-sm
                    border border-black/10
                    bg-white
                    text-black/85
                    shadow-[0_14px_34px_rgba(15,23,42,0.12)]
                    transition-all duration-300
                    hover:border-black/25
                    hover:text-black
                    hover:shadow-[0_18px_46px_rgba(0,0,0,0.18)]
                  "
                  style={{ ["--gold"]: eliteGold }}
                >
                  <i className="fa-brands fa-whatsapp" style={{ color: eliteGold }} />
                  محادثة واتساب
                </a>
              </div>

              {/* SEO chips (black) */}
              <div className="mt-5 flex flex-wrap gap-2 justify-end">
                {[
                  "تأجير يخت دبي",
                  "حجز يخت دبي مارينا",
                  "تأجير يخوت فاخرة في دبي",
                  "يخت خاص دبي",
                  "يخت حفلات دبي",
                  "Elite Yacht Dubai",
                  "Yacht Rental Dubai Marina",
                ].map((t) => (
                  <span
                    key={t}
                    className="
                      inline-flex items-center
                      rounded-full
                      border border-black/10
                      bg-white
                      px-3 py-1.5
                      text-[12px]
                      text-black/70
                      shadow-[0_10px_22px_rgba(15,23,42,0.06)]
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-[12px] text-black/45 leading-relaxed">
                كلمات بحث مهمة: تأجير يخت دبي، حجز يخت دبي مارينا، يخت خاص دبي، يخت فاخر دبي،
                <TM>Elite Yacht Dubai</TM>، Yacht Charter Dubai، <TM>Elite Yachts</TM>.
              </p>
            </form>
          </div>
        </div>
      </section>

      <CTASection variant="contact" />
    </div>
  );
}

function InfoCard({ title, text, icon, eliteGold }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.10)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className={`fa-solid ${icon}`} style={{ color: eliteGold }} />
        </span>
        <p className="text-[11px] tracking-[0.3em] uppercase text-black/55">{title}</p>
      </div>
      <p className="mt-3 text-black/65">{text}</p>
    </div>
  );
}

function ContactCard({ phone, phoneTel, whatsapp, email, eliteGold }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className="fa-solid fa-phone" style={{ color: eliteGold }} />
        </span>
        <div>
          <p className="text-[11px] tracking-[0.3em] text-black/55 uppercase">التواصل</p>
          <p className="text-black/85 mt-1">اتصال / واتساب</p>
        </div>
      </div>

      <div className="mt-5 space-y-2 text-sm text-black/70">
        <a className="hover:text-black transition block" href={phoneTel}>
          {phone}
        </a>
        <a className="hover:text-black transition block" href={whatsapp} target="_blank" rel="noreferrer">
          محادثة واتساب
        </a>
        <a className="hover:text-black transition block" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </div>
  );
}

function SocialCard({ eliteGold }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className="fa-solid fa-share-nodes" style={{ color: eliteGold }} />
        </span>
        <div>
          <p className="text-[11px] tracking-[0.3em] text-black/55 uppercase">السوشيال</p>
          <p className="text-black/85 mt-1">تابعنا / راسلنا</p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4 text-black/70">
        <a className="hover:text-black transition" href="https://www.instagram.com/eliteyachtdubai_official/">
          <i className="fa-brands fa-instagram text-xl" />
        </a>
        <a className="hover:text-black transition" href="https://www.facebook.com/eliteyachtdubaiofficial">
          <i className="fa-brands fa-facebook-f text-xl" />
        </a>
        <a className="hover:text-black transition" href="https://www.linkedin.com/company/elite-yacht-dubai/">
          <i className="fa-brands fa-linkedin-in text-xl" />
        </a>
        <a className="hover:text-black transition" href="https://www.youtube.com/@eliteyachtdubaiofficial">
          <i className="fa-brands fa-youtube text-xl" />
        </a>
      </div>

      <p className="mt-4 text-sm text-black/60 leading-relaxed">
        راسل <TM>Elite Yacht Dubai</TM> لمعرفة التوفر، الأسعار، والباقات الخاصة.
      </p>
    </div>
  );
}

function LocationCard({ eliteGold }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className="fa-solid fa-location-dot" style={{ color: eliteGold }} />
        </span>
        <div>
          <p className="text-[11px] tracking-[0.3em] text-black/55 uppercase">الموقع</p>
          <p className="text-black/85 mt-1">دبي، الإمارات</p>
        </div>
      </div>

      <div className="mt-5 text-sm text-black/65 leading-relaxed">
        <p className="text-black/80">المكتب الرئيسي</p>
        <p>مكتب 506، برج سعيد 1، دبي، الإمارات</p>

        <p className="mt-4 text-black/80">موقع القارب</p>
        <p>ممشى دبي مارينا — إيست مارينا — دبي</p>
      </div>
    </div>
  );
}

function FieldAr({ label, name, type = "text", placeholder = "", required = false, eliteGold }) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.3em] text-black/55 uppercase mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="
          w-full rounded-2xl bg-white
          border border-black/10
          px-4 py-3 text-sm text-black/80
          placeholder:text-black/35
          outline-none transition
          focus:border-[var(--gold)]
          focus:ring-2 focus:ring-[var(--gold)]/20
          shadow-[inset_0_0_0_1px_rgba(15,23,42,0.03)]
        "
        style={{
          caretColor: eliteGold,
          ["--gold"]: eliteGold,
        }}
      />
    </div>
  );
}
