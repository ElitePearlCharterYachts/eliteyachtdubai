// src/pages/AboutAr.jsx
import { useMemo } from "react";
import CTASection from "../components/CTASection";
import ReviewsSlider from "../components/ReviewsSlider";
import BrandsGroupSection from "../components/BrandsGroupSection";
import YachtsSection from "../components/YachtsSection";
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

  return out;
}

const ACCENT = "#111827"; // charcoal
const PHONE_TEL = "tel:+971569006603";
const WHATSAPP =
  "https://wa.me/971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85";

export default function AboutAr() {
  const BASE_URL = "https://eliteyachtdubai.com";
  const PAGE_PATH = "/من-نحن"; // غيّرها لو كان مسارك مختلف
  const CANONICAL = `${BASE_URL}${PAGE_PATH}`;
  const ogImage = `${BASE_URL}/images/og/about.webp`;

  const title =
    "من نحن | إيليت يخوت™ دبي مارينا لتأجير اليخوت الفاخرة وحجز واتساب";
  const description =
    "تعرف على إيليت يخوت™ دبي: تشغيل مباشر ضمن Elite Yacht Group لتأجير يخوت فاخرة في دبي مارينا. يخوت حديثة، طاقم محترف، تسعير واضح، وحجز سريع عبر واتساب لرحلات الغروب والحفلات وفعاليات الشركات.";
  const keywords = [
    "من نحن إيليت يخوت",
    "إيليت يخوت دبي",
    "Elite Yachts Dubai",
    "تأجير يخت دبي",
    "تأجير يخوت فاخرة في دبي",
    "تأجير يخت دبي مارينا",
    "يخت خاص في دبي",
    "حجز يخت دبي واتساب",
    "حفلات اليخوت في دبي",
    "فعاليات الشركات على اليخت",
    "Luxury Yacht Rental Dubai",
    "Dubai Marina Yacht Charter",
  ].join(", ");

  const schemaData = useMemo(() => {
    const orgName = "Elite Yachts Dubai";
    const orgLegal = "Elite Yacht Group";
    const logo = `${BASE_URL}/images/logo.png`; // عدّل لو مسار اللوجو عندك مختلف
    const heroImg = `${BASE_URL}/images/banners/fleet.webp`;

    const breadcrumb = {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: `${BASE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "من نحن",
          item: CANONICAL,
        },
      ],
    };

    const faq = {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "هل أنتم جهة تشغيل مباشرة أم وسيط؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، نحن نعمل كجهة تشغيل ضمن Elite Yacht Group لتقديم جودة موحّدة، تسعير واضح، وتنسيق احترافي للتفاصيل من البداية للنهاية.",
          },
        },
        {
          "@type": "Question",
          name: "أين تكون مسارات الرحلات؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "أشهر المسارات تشمل دبي مارينا، نخلة جميرا، أتلانتس، وبرج العرب، مع إمكانية تخصيص المسار حسب الوقت والتوفر.",
          },
        },
        {
          "@type": "Question",
          name: "كيف يتم الحجز الأسرع؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "الحجز الأسرع عبر واتساب: أرسل التاريخ والوقت وعدد الضيوف وسنؤكد التوفر بسرعة.",
          },
        },
      ],
    };

    return [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL}#webpage`,
        url: CANONICAL,
        name: title,
        description,
        inLanguage: "ar-AE",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` },
        primaryImageOfPage: { "@id": `${CANONICAL}#primaryimage` },
        breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
      },
      {
        "@type": "ImageObject",
        "@id": `${CANONICAL}#primaryimage`,
        url: heroImg,
        contentUrl: heroImg,
        caption: "حول إيليت يخوت™ دبي - تأجير يخوت فاخرة في دبي مارينا",
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: orgName,
        legalName: orgLegal,
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: logo,
        },
        areaServed: "AE",
        sameAs: [],
      },
      breadcrumb,
      faq,
    ];
  }, [BASE_URL, CANONICAL, title, description]);

  return (
    <div dir="rtl" lang="ar" className="relative w-full bg-white text-slate-900">
      <Seo
        title={title}
        description={description}
        keywords={keywords}
        canonical={CANONICAL}
        ogTitle={title}
        ogDescription={description}
        ogImage={ogImage}
        ogUrl={CANONICAL}
      />
      <Schema data={schemaData} />

      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_38%,rgba(15,23,42,0.03))]" />
      </div>

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[320px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/banners/fleet.webp"
            alt="حول إيليت يخوت™ دبي - تأجير يخوت فاخرة في دبي مارينا"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.18),transparent_62%)]" />
        </div>

        <div className="relative h-full">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 h-full flex items-center pb-10">
            <div
              className="
                max-w-3xl
                rounded-3xl
                border border-white/15
                bg-black/45
                shadow-[0_22px_70px_rgba(15,23,42,0.14)]
                p-6 sm:p-8 md:p-10
              "
            >
              <p className="text-[11px] tracking-[0.35em] uppercase text-white">
                <TM>Elite Yachts Dubai</TM> • Dubai Marina • VIP
              </p>

              <div className="mt-4 h-px w-full bg-white/60" />

              <h1 className="text-2xl mt-5 sm:text-3xl md:text-4xl font-semibold tracking-[0.18em] text-white">
                <TM>من نحن — Elite Yachts</TM>
              </h1>

              <p className="mt-4 text-white/90 leading-relaxed">
                <TM>
                  نحن في Elite Yachts نوفّر تجربة تأجير يخت فاخر في دبي مارينا بمعيار
                  VIP أولاً: يخوت حديثة، طاقم محترف، تسعير واضح، وحجز سريع عبر واتساب.
                  هدفنا تقديم رحلة منظمة وراقية تناسب الرحلات الخاصة، الحفلات، وفعاليات
                  الشركات على متن يخت.
                </TM>
              </p>

              <p className="mt-4 text-white/90 leading-relaxed">
                <TM>
                  هذه الصفحة تتبع <span className="font-semibold">Elite Yacht Group</span>{" "}
                  — إدارة وتشغيل مباشر للأسطول والخدمات، بدون ذكر أي علامة أخرى. نتعامل
                  معك كجهة تشغيل واحدة لضمان جودة التجربة وتنسيق التفاصيل من البداية
                  للنهاية.
                </TM>
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center justify-center gap-3
                    rounded-full px-7 py-3 text-sm
                    border border-black
                    bg-black text-white
                    shadow-[0_16px_40px_rgba(15,23,42,0.18)]
                    transition-all duration-300
                    hover:bg-[var(--accent)]
                    hover:border-[var(--accent)]
                    hover:shadow-[0_18px_52px_rgba(0,0,0,0.20)]
                    cursor-pointer
                  "
                  style={{ ["--accent"]: ACCENT }}
                  aria-label="حجز يخت عبر واتساب"
                >
                  <i className="fa-brands fa-whatsapp" />
                  حجز واتساب
                </a>

                <a
                  href={PHONE_TEL}
                  className="
                    inline-flex items-center justify-center gap-3
                    rounded-full px-7 py-3 text-sm
                    border border-white/20
                    bg-white/10 text-white
                    shadow-[0_14px_34px_rgba(15,23,42,0.10)]
                    transition-all duration-300
                    hover:bg-white/15
                    cursor-pointer
                  "
                  aria-label="اتصال الآن لحجز يخت"
                >
                  <i className="fa-solid fa-phone" />
                  اتصال الآن
                </a>
              </div>

              <p className="mt-5 text-[11px] text-white/80 leading-relaxed">
                <TM>
                  كلمات بحث: تأجير يخت دبي • تأجير يخت دبي مارينا • يخت خاص في دبي • حفلات
                  اليخوت • فعاليات الشركات • حجز واتساب سريع
                </TM>
              </p>

              <p className="sr-only">
                من نحن Elite Yachts Dubai: تأجير يخت دبي، تأجير يخوت فاخرة في دبي مارينا،
                يخت خاص في دبي، حفلات على اليخت، فعاليات الشركات، رحلات الغروب، حجز عبر واتساب،
                تشغيل مباشر ضمن Elite Yacht Group.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          {/* 2 columns: story + image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.35em] text-slate-600 uppercase">
                <TM>قصة Elite Yachts</TM>
              </p>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-widest text-slate-900">
                <TM>معيار فخامة لتأجير اليخوت صُمّم لدبي</TM>
              </h2>

              <p className="mt-4 text-slate-700 leading-relaxed">
                <TM>
                  Elite Yachts في دبي مبنية على وعد واحد: تجربة تأجير يخت منظمة وسهلة
                  وواضحة. من الرحلات الخاصة إلى حفلات أعياد الميلاد وفعاليات الشركات،
                  نركّز على جودة اليخت، احترافية الطاقم، وسرعة التواصل لتحقيق تجربة VIP
                  حقيقية.
                </TM>
              </p>

              <p className="mt-4 text-slate-700 leading-relaxed">
                <TM>
                  نعمل من دبي مارينا ومسارات قريبة مثل نخلة جميرا وبرج العرب، مع باقات
                  مرنة ومسارات مخصصة وتأكيدات سريعة — خصوصاً عبر واتساب. تشغيلنا ضمن
                  Elite Yacht Group لضمان توحيد الجودة وإدارة تفاصيل الرحلة باحتراف.
                </TM>
              </p>

              {/* 2 mini-cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <MiniCard
                  title="الخدمة"
                  text="حجز سريع، تسعير واضح، ودعم VIP من الاستفسار حتى الصعود — بمعايير Elite Yachts."
                />
                <MiniCard
                  title="الجودة"
                  text="يخوت مختارة بعناية، نظافة عالية، صيانة قوية، وطاقم محترف وفق معيار Elite."
                />
              </div>

              {/* keyword chips */}
              <div className="mt-7 flex flex-wrap gap-2 justify-end">
                {[
                  "تأجير يخت دبي",
                  "تأجير يخوت فاخرة في دبي",
                  "دبي مارينا",
                  "يخت خاص في دبي",
                  "حجز يخت واتساب",
                  "VIP Yacht Dubai",
                  "Luxury Yacht Rental Dubai",
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
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="/images/about/about-1.webp"
                  alt="تأجير يخت فاخر في دبي مارينا - إيليت يخوت™ دبي"
                  className="w-full h-[320px] sm:h-[480px] object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="pointer-events-none absolute -left-2 -bottom-2 h-full w-full rounded-2xl border border-black/10" />
            </div>
          </div>

          {/* 4 cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fa-solid fa-crown",
                title: "تجربة Elite",
                text: "تأجير يخت فاخر في دبي مارينا مصمم للراحة والخصوصية ولحظات لا تُنسى مع Elite Yachts.",
              },
              {
                icon: "fa-solid fa-shield-halved",
                title: "ثقة ووضوح",
                text: "باقات واضحة وتأكيدات سريعة — بدون مفاجآت. Elite Yachts = شفافية.",
              },
              {
                icon: "fa-solid fa-user-tie",
                title: "طاقم محترف",
                text: "قباطنة وطاقم بخبرة عالية يركزون على جودة الخدمة ورضا الضيوف بمعايير Elite.",
              },
              {
                icon: "fa-solid fa-location-dot",
                title: "مسارات دبي مارينا",
                text: "رحلات دبي مارينا، نخلة جميرا، أتلانتس، وبرج العرب مع تنظيم احترافي من Elite Yachts.",
              },
            ].map((c) => (
              <FeatureCard key={c.title} {...c} />
            ))}
          </div>

          {/* our brands */}
          <div className="mt-14">
            <BrandsGroupSection />
          </div>

          {/* 2 columns: offer + image */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
                <img
                  src="/images/about/about-2.webp"
                  alt="تأجير يخت VIP في دبي - إيليت يخوت™ دبي"
                  className="w-full h-[320px] sm:h-[520px] object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="pointer-events-none absolute -left-2 -bottom-2 h-full w-full rounded-2xl border border-black/10" />
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs tracking-[0.35em] text-slate-600 uppercase">
                ماذا نقدم
              </p>

              <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-widest text-slate-900">
                <TM>تأجير يخوت • رحلات • فعاليات • باقات VIP — Elite Yachts</TM>
              </h2>

              <p className="mt-4 text-slate-700 leading-relaxed">
                <TM>
                  من تأجير يخت في دبي إلى تأجير يخت في دبي مارينا، نقدم خيارات مرنة لكل
                  مناسبة. اختر حجم اليخت وعدد الضيوف ووقت الرحلة — وسنؤكد التوفر بسرعة
                  وننسّق التفاصيل: المسار، وقت الإبحار، الضيافة، الموسيقى، والديكور حسب
                  الطلب.
                </TM>
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BulletCard
                  title="رحلات خاصة"
                  icon="fa-solid fa-ship"
                  text="رحلات غروب، عروض زواج، وجولات خاصة مع راحة فاخرة على متن اليخت."
                />
                <BulletCard
                  title="احتفالات"
                  icon="fa-solid fa-champagne-glasses"
                  text="أعياد ميلاد ومناسبات وحفلات يخت داخل دبي مارينا — بتنسيق VIP."
                />
                <BulletCard
                  title="فعاليات شركات"
                  icon="fa-solid fa-briefcase"
                  text="اجتماعات وفعاليات راقية على متن اليخت مع تنظيم احترافي وتجربة فخمة."
                />
                <BulletCard
                  title="حجز سريع"
                  icon="fa-brands fa-whatsapp"
                  text="أرسل التاريخ + عدد الضيوف وسنؤكد التوفر بسرعة عبر واتساب."
                />
              </div>

              <div className="mt-7 flex flex-wrap gap-2 justify-end">
                {[
                  "تأجير يخت دبي مارينا",
                  "يخوت للإيجار في دبي",
                  "يخت حفلات دبي",
                  "يخت خاص دبي",
                  "Elite Yachts Dubai",
                  "Dubai Marina Yacht Charter",
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
            </div>
          </div>
        </div>
      </section>

      <section
        dir="rtl"
        lang="ar"
        aria-label="تأجير يخت دبي - أسطول إيليت يخوت™ دبي مارينا | Elite Yachts Dubai"
        className="w-full py-20 bg-white"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="mb-14 text-center max-w-5xl mx-auto">
            <p className="text-[11px] tracking-[0.35em] text-black/60 uppercase mb-3">
              تأجير يخت دبي • Dubai Marina • VIP
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black leading-tight">
              تأجير يخت في دبي مع <span className="font-bold">إيليت يخوت™</span> — Luxury Yacht Rental Dubai
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-black/75">
              إذا كنت تبحث عن{" "}
              <span className="text-black font-semibold">تأجير يخت دبي</span>{" "}
              بأعلى معايير الفخامة والخصوصية، فإن{" "}
              <span className="text-black font-semibold">إيليت يخوت™ دبي</span>{" "}
              تقدم لك تجربة متكاملة في{" "}
              <span className="text-black font-semibold">دبي مارينا</span>{" "}
              تشمل يخوت فاخرة، طاقم محترف، وخدمة{" "}
              <span className="text-black font-semibold">VIP</span>{" "}
              تناسب الرحلات العائلية والمجموعات وفعاليات الشركات والحفلات الخاصة. اختر{" "}
              <span className="text-black font-semibold">يخت خاص في دبي</span>{" "}
              بالحجم المناسب وعدد الضيوف المناسب، واستمتع بجولة بحرية على ساحل دبي
              مع خيارات إضافية مثل الديكور الفاخر وخدمات الضيافة والرحلات المخصصة.
              نحن جهة تشغيل ضمن <span className="text-black font-semibold">Elite Yacht Group</span>{" "}
              لتقديم جودة موحّدة وتجربة حجز سريعة وواضحة.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2 text-[12px]">
              {[
                "تأجير يخوت دبي مارينا",
                "يخت للإيجار في دبي",
                "حجز يخت دبي واتساب",
                "رحلات بحرية خاصة",
                "يخوت VIP دبي",
                "Luxury Yacht Charter Dubai",
              ].map((t) => (
                <span
                  key={t}
                  className="
                    inline-flex items-center
                    rounded-full
                    border border-black/10
                    bg-white
                    px-3 py-1.5
                    text-black/75
                    shadow-[0_10px_24px_rgba(15,23,42,0.06)]
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="sr-only">
              Elite Yacht Group: Elite Yachts Dubai تشغيل مباشر لتأجير يخوت فاخرة في دبي مارينا،
              يخت خاص في دبي، حفلات اليخوت، فعاليات الشركات، رحلات الغروب، حجز واتساب سريع وأسعار واضحة.
            </p>
          </div>
        </div>

        <YachtsSection />
      </section>

      <div className="relative" dir="ltr">
        <ReviewsSlider />
      </div>

      <div className="relative">
        <CTASection variant="fleet" />
      </div>
    </div>
  );
}

function MiniCard({ title, text }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.10)]">
      <p className="text-[11px] tracking-[0.3em] text-slate-600 uppercase">
        <TM>{title}</TM>
      </p>
      <p className="mt-2 text-slate-800 leading-relaxed">
        <TM>{text}</TM>
      </p>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)] hover:border-black/20">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className={`${icon}`} style={{ color: "#111827" }} />
        </span>
        <p className="text-[11px] tracking-[0.3em] text-slate-600 uppercase">
          <TM>{title}</TM>
        </p>
      </div>

      <p className="mt-4 text-sm text-slate-700 leading-relaxed">
        <TM>{text}</TM>
      </p>
    </div>
  );
}

function BulletCard({ title, text, icon }) {
  return (
    <div className="rounded-2xl bg-white border border-black/10 p-5 shadow-[0_14px_34px_rgba(15,23,42,0.10)] transition hover:border-black/20">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
          <i className={`${icon}`} style={{ color: "#111827" }} />
        </span>
        <p className="text-[11px] tracking-[0.3em] text-slate-600 uppercase">
          <TM>{title}</TM>
        </p>
      </div>

      <p className="mt-3 text-sm text-slate-700 leading-relaxed">
        <TM>{text}</TM>
      </p>
    </div>
  );
}