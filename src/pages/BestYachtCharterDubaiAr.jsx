// src/pages/BestYachtCharterDubaiAr.jsx
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import Schema from "../components/Schema";
import YachtsSection from "../components/YachtsSection";
import CTASection from "../components/CTASection";

function applyTM(input = "") {
  let out = String(input);

  out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
  out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");

  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
}

function TMText({ children }) {
  if (typeof children !== "string") return children;
  return applyTM(children);
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-3 py-1 text-[12px] text-black/65 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
      {children}
    </span>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/80 p-4 text-center shadow-[0_16px_44px_rgba(15,23,42,0.10)]">
      <div className="text-[18px] sm:text-[20px] font-medium tracking-[0.04em] text-black/90">
        {value}
      </div>
      <div className="mt-1 text-[12px] sm:text-[13px] leading-[1.7] text-black/60">
        {label}
      </div>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white/85 backdrop-blur-[2px] p-5 sm:p-6 shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
          <i className={`${icon} text-[16px] text-[var(--accent)]`} />
        </div>
        <div className="min-w-0">
          <h3 className="text-[15px] sm:text-[16px] font-medium tracking-[0.02em] text-black/90">
            {title}
          </h3>
          <div className="mt-2 text-[13px] sm:text-[14px] leading-[1.9] text-black/65">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group rounded-3xl border border-black/10 bg-white/85 px-5 py-4 shadow-[0_16px_44px_rgba(15,23,42,0.08)]">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <div className="text-[14px] sm:text-[15px] font-medium leading-[1.8] text-black/90">
          {q}
        </div>
        <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 transition group-open:rotate-45">
          <i className="fa-solid fa-plus text-[12px]" />
        </div>
      </summary>
      <div className="mt-3 text-[13px] sm:text-[14px] leading-[1.95] text-black/65">
        {a}
      </div>
    </details>
  );
}

export default function BestYachtCharterDubaiAr() {
  const ACCENT = "#0F172A";

  const BASE_URL = "https://eliteyachtsdubai.com";
  const { pathname } = useLocation();
  const CANONICAL = `${BASE_URL}${pathname}`;

  // HERO background (yacht image)
  const HERO_BG = "/images/banners/bestcompany.png"; // ضيفها في public

  const ogImage = `${BASE_URL}/images/og/bestcompany.webp`; // يفضل webp
  const title =
    "أفضل شركة تأجير يخوت في دبي | إيليت يخوت™ – رقم 1 في دبي";
  const description =
    "إيليت يخوت™ هي أفضل شركة تأجير يخوت في دبي: أسطول فاخر من 36 قدم إلى 300 قدم، سعة من 10 إلى 200 ضيف، حفلات ومناسبات وVIP، توفر فوري، وحجز مباشر عبر واتساب أو الاتصال.";

  const keywords = [
    "أفضل شركة تأجير يخوت في دبي",
    "رقم 1 يخوت دبي",
    "تأجير يخوت دبي",
    "تأجير يخت دبي مارينا",
    "حجز يخت دبي واتساب",
    "يخت فاخر دبي",
    "Dubai Marina Yacht Charter",
    "Luxury Yacht Rental Dubai",
    "VIP Yacht Dubai",
  ].join(", ");

  const faq = useMemo(
    () => [
      {
        q: "هل إيليت يخوت™ توفر حجوزات فورية وتوفر لحظي؟",
        a: "نعم. نوفر لك خيارات متاحة فورًا حسب التاريخ والمدة وحجم اليخت، مع تأكيد سريع عبر واتساب أو الاتصال.",
      },
      {
        q: "ما هو الحد الأدنى لمدة الحجز؟",
        a: "الحد الأدنى عادةً ساعتان. بعض اليخوت أو الأوقات قد تتطلب مدة مختلفة حسب الموسم والتوفر.",
      },
      {
        q: "كم سعة الضيوف؟",
        a: "لدينا يخوت تناسب مجموعات من 10 إلى 200 شخص حسب حجم اليخت وخيار الفعالية.",
      },
      {
        q: "هل يوجد خدمات VIP مثل الشيف والديكور والمواصلات؟",
        a: "نعم. شيف على متن اليخت (حسب الطلب)، ديكورات فاخرة جدًا (قد تُطبق رسوم إضافية)، ومواصلات VIP عند الطلب.",
      },
      {
        q: "هل يُسمح بإحضار الحيوانات الأليفة؟",
        a: "لأسباب تتعلق بالسلامة والنظافة، الحيوانات الأليفة غير مسموح بها على أغلب الرحلات.",
      },
      {
        q: "من أين يتم الانطلاق؟",
        a: "غالبًا من دبي مارينا، ويمكن ترتيب نقاط صعود/نزول أخرى حسب اليخت والتصاريح.",
      },
      {
        q: "هل يمكن إضافة كيترنج ومشروبات؟",
        a: "نعم. نوفر خيارات ضيافة وكيترنج حسب المستوى المطلوب، ويمكن تخصيص القائمة وفق المناسبة.",
      },
      {
        q: "هل يمكن تنظيم حفلة عيد ميلاد أو عرض زواج؟",
        a: "أكيد. نوفر تنسيق حفلات وطلبات زواج مع ديكور وتصوير وخطة رحلة مناسبة للمكان والوقت.",
      },
    ],
    []
  );

  const schemaData = useMemo(() => {
    const heroImgAbs = `${BASE_URL}${HERO_BG.startsWith("/") ? "" : "/"}${HERO_BG}`;
    const pageName = title;

    const breadcrumb = {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "أفضل شركة تأجير يخوت في دبي", item: CANONICAL },
      ],
    };

    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: applyTM(f.q),
        acceptedAnswer: { "@type": "Answer", text: applyTM(f.a) },
      })),
    };

    return [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL}#webpage`,
        url: CANONICAL,
        name: pageName,
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
        url: heroImgAbs,
        contentUrl: heroImgAbs,
        caption: "أفضل شركة تأجير يخوت في دبي - إيليت يخوت™",
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Elite Yachts Dubai",
        alternateName: ["إيليت يخوت", "إيليت يخوت دبي", "Elite Yacht Dubai"],
        url: BASE_URL,
        areaServed: "AE",
        sameAs: [],
      },
      breadcrumb,
      faqSchema,
    ];
  }, [BASE_URL, CANONICAL, faq, description, title, HERO_BG]);

  return (
    <>
      <Seo
        key={pathname}
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

      <main dir="rtl" lang="ar" className="w-full bg-white text-black" style={{ ["--accent"]: ACCENT }}>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            {/* Yacht background image */}
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${HERO_BG}')` }}
              aria-hidden="true"
            />
           
          </div>

          <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
            <div className="mx-auto max-w-4xl text-center rounded-3xl border border-black/10 bg-white/85 drop-blur backdrop-blur-[2px] px-4 sm:px-8 py-8 sm:py-10 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Chip>Dubai Marina</Chip>
                <Chip>VIP</Chip>
                <Chip>
                  <TMText>إيليت يخوت</TMText>
                </Chip>
              </div>

              <h1 className="mt-4 text-[22px] sm:text-4xl lg:text-[44px] font-light tracking-[0.06em] leading-[1.25] text-black/90">
                <TMText>إيليت يخوت</TMText> – أفضل شركة تأجير يخوت في دبي
              </h1>

              <p className="mt-4 text-[14px] sm:text-[16px] leading-[1.95] text-black/70">
                <TMText>
                  لأننا لا نقدم مجرد يخت… نحن نصنع تجربة فاخرة متكاملة. أسطول من 36 قدم إلى 300 قدم،
                  حفلات ومناسبات وVIP، أسعار مباشرة بدون وسطاء، وتأكيد سريع عبر واتساب أو الاتصال.
                </TMText>
              </p>

              <div className="mt-6 inline-flex max-w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-4 sm:px-5 py-2 text-[12px] sm:text-[13px] tracking-[0.08em] text-black/60 shadow-[0_10px_26px_rgba(15,23,42,0.08)]">
                <i className="fa-solid fa-shield-halved text-[var(--accent)] shrink-0" />
                <span className="leading-[1.6] break-words">
                  توفر لحظي • حجز مباشر • خيارات VIP • دعم سريع
                </span>
              </div>

              <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <a
                  href="https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-9 py-3 border border-black bg-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_18px_52px_rgba(15,23,42,0.26)] sm:min-w-[260px]"
                >
                  <i className="fa-brands fa-whatsapp text-[16px]" />
                  <span className="text-[13px] sm:text-sm tracking-[0.04em] truncate max-w-[85vw] sm:max-w-none">
                    احجز عبر واتساب الآن
                  </span>
                </a>

                <a
                  href="tel:+971569006603"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-9 py-3 border border-black/12 bg-white text-black/85 shadow-[0_14px_34px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-black/25 hover:shadow-[0_18px_46px_rgba(15,23,42,0.16)] sm:min-w-[260px]"
                >
                  <i className="fa-solid fa-phone text-[14px] text-[var(--accent)]" />
                  <span className="text-[13px] sm:text-sm tracking-[0.04em] truncate max-w-[85vw] sm:max-w-none">
                    اتصال سريع وحجز فوري
                  </span>
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <Stat value="36FT–300FT" label="أحجام الأسطول" />
                <Stat value="10–200" label="سعة الضيوف" />
                <Stat value="2+ ساعات" label="الحد الأدنى" />
                <Stat value="VIP" label="خدمات فاخرة" />
              </div>

              {/* extra SEO paragraph */}
              <p className="mt-6 text-[12px] sm:text-[13px] leading-[1.9] text-black/60">
                <TMText>
                  تبحث عن أفضل شركة لتأجير اليخوت في دبي مارينا؟ نوفر لك يخوت فاخرة للرحلات الخاصة، حفلات أعياد الميلاد،
                  فعاليات الشركات، عروض الزواج، ورحلات الغروب—مع تنظيم VIP وتأكيد سريع للتوفر.
                </TMText>
              </p>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[20px] sm:text-[28px] font-light tracking-[0.06em] text-black/90">
              لماذا <TMText>إيليت يخوت</TMText>™ هي رقم 1 في دبي؟
            </h2>
            <p className="mt-3 text-[14px] sm:text-[16px] leading-[1.95] text-black/70">
              تجربة فاخرة منظمة من البداية للنهاية: اختيار اليخت، التأكيد، الاستقبال، الإبحار،
              والعودة مع خدمة راقية وتفاصيل محسوبة.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <Card icon="fa-solid fa-bolt" title="توفر لحظي وتأكيد سريع">
              نطابق احتياجك حسب التاريخ والمدة والميزانية وعدد الضيوف ونقترح أفضل الخيارات المتاحة فورًا مع تأكيد خلال دقائق.
            </Card>
            <Card icon="fa-solid fa-crown" title="خيارات VIP حقيقية">
              شيف على متن اليخت حسب الطلب، ضيافة راقية، موسيقى، ديكور فاخر جدًا، وتنسيق مناسبات لأعلى مستوى.
            </Card>
            <Card icon="fa-solid fa-people-group" title="سعات متنوعة للرحلات والفعاليات">
              من رحلات رومانسية صغيرة إلى حفلات خاصة وفعاليات شركات مع يخوت تناسب من 10 إلى 200 ضيف.
            </Card>
            <Card icon="fa-solid fa-tags" title="أسعار مباشرة بدون تعقيد">
              عروض واضحة حسب اليخت والمدة والخدمات بدون مفاجآت مع خيارات ترقية مرنة حسب طلبك.
            </Card>
            <Card icon="fa-solid fa-location-dot" title="أفضل مسارات دبي">
              دبي مارينا، بلوواترز، عين دبي، نخلة جميرا، أتلانتس ونضبط المسار حسب وقتك وتجربتك المطلوبة.
            </Card>
            <Card icon="fa-solid fa-shield" title="راحة وتنظيم واحتراف">
              طاقم محترف، تنظيم صعود ونزول، وإرشادات واضحة لأن تجربة الفخامة تبدأ من التفاصيل.
            </Card>
          </div>

          {/* SEO rich content block */}
          <div className="mt-10 max-w-5xl mx-auto rounded-3xl border border-black/10 bg-white p-6 sm:p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <p className="text-[12px] tracking-[0.25em] uppercase text-black/55 text-center">
              <TMText>Best Yacht Charter Dubai</TMText> • Dubai Marina • VIP
            </p>
            <div className="mx-auto mt-3 mb-4 h-px w-40 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
            <div className="text-[14px] sm:text-[15px] leading-[2.0] text-black/70 text-right">
              <TMText>
                عند اختيارك أفضل شركة تأجير يخوت في دبي، الأهم هو: جودة الأسطول، سرعة التأكيد، تنظيم الرحلة، ووضوح الأسعار.
                مع إيليت يخوت™ ستحصل على تجربة واضحة: حد أدنى ساعتين (حسب اليخت/الموسم)، سعات من 10 إلى 200 ضيف،
                وأسعار مباشرة بدون وسطاء. يمكن إضافة ديكور (قد توجد رسوم إضافية)، شيف على متن اليخت حسب الطلب،
                كيترنج، تصوير، ومواصلات VIP—وكل ذلك بتنسيق سريع عبر واتساب.
              </TMText>
            </div>
          </div>
        </section>

        {/* SERVICES + IMAGE */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_35%,rgba(15,23,42,0.03))]" />
          <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
              <div className="rounded-3xl border border-black/10 bg-white/85 p-6 sm:p-8 shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
                <h2 className="text-[18px] sm:text-[24px] font-light tracking-[0.06em] text-black/90">
                  خدمات وتجارب جاهزة للحجز
                </h2>
                <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.95] text-black/70">
                  اختر هدف رحلتك وسنجهز لك كل شيء: يخت مناسب، طاقم، ضيافة وتجهيزات حسب مستوى الفخامة الذي تريده.
                </p>

                <ul className="mt-5 space-y-3 text-[13px] sm:text-[14px] text-black/70 leading-[1.95]">
                  <li className="flex gap-3">
                    <i className="fa-solid fa-check mt-1 text-[var(--accent)]" />
                    <span>حفلات خاصة مع ديكور (أساسي/فاخر جدًا) وقد تُطبق رسوم إضافية.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-check mt-1 text-[var(--accent)]" />
                    <span>شيف على متن اليخت حسب الطلب + خيارات ضيافة وكيترنج.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-check mt-1 text-[var(--accent)]" />
                    <span>فعاليات شركات مع تنظيم VIP وتصوير/موسيقى عند الطلب.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-check mt-1 text-[var(--accent)]" />
                    <span>مواصلات فاخرة عند الطلب + تنسيق نقاط الصعود حسب التصاريح.</span>
                  </li>
                  <li className="flex gap-3">
                    <i className="fa-solid fa-check mt-1 text-[var(--accent)]" />
                    <span>الحيوانات الأليفة غير مسموح بها على أغلب الرحلات.</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-8 py-3 border border-black bg-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] sm:min-w-[240px]"
                  >
                    <i className="fa-brands fa-whatsapp text-[15px]" />
                    <span className="text-[13px] sm:text-sm tracking-[0.04em]">اطلب عرض السعر الآن</span>
                  </a>

                  <a
                    href="/تأجير-يخوت-دبي"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-8 py-3 border border-black/12 bg-white text-black/85 shadow-[0_14px_34px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-black/25 sm:min-w-[240px]"
                  >
                    <i className="fa-solid fa-sailboat text-[14px] text-[var(--accent)]" />
                    <span className="text-[13px] sm:text-sm tracking-[0.04em]">تصفح الأسطول</span>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-black/10 bg-white/85 p-3 sm:p-4 shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src="/images/banners/bestcompany.png"
                    alt="أفضل شركة تأجير يخوت في دبي - إيليت يخوت™"
                    className="h-[260px] sm:h-[340px] lg:h-[420px] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/55" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-center">
                    <div className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-[12px] sm:text-[13px] text-black/70 shadow-[0_14px_34px_rgba(15,23,42,0.10)]">
                      <i className="fa-solid fa-star text-[var(--accent)]" />
                      <span>
                        <TMText>إيليت يخوت</TMText>™ • Luxury • Dubai
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-black/10 bg-white p-4 text-center">
                    <div className="text-[13px] sm:text-[14px] font-medium text-black/85">حجز سريع</div>
                    <div className="mt-1 text-[12px] text-black/60 leading-[1.7]">
                      واتساب أو اتصال مع تأكيد خلال دقائق
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 text-center">
                    <div className="text-[13px] sm:text-[14px] font-medium text-black/85">تجربة فاخرة</div>
                    <div className="mt-1 text-[12px] text-black/60 leading-[1.7]">
                      ديكور وشيف وخيارات VIP حسب الطلب
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <Chip>بدون وسطاء</Chip>
              <Chip>تجهيزات حفلات</Chip>
              <Chip>فعاليات شركات</Chip>
              <Chip>مسارات دبي الأجمل</Chip>
              <Chip>فريق محترف</Chip>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[20px] sm:text-[28px] font-light tracking-[0.06em] text-black/90">
              الأسئلة الشائعة عن أفضل شركة تأجير يخوت في دبي
            </h2>
            <p className="mt-3 text-[14px] sm:text-[16px] leading-[1.95] text-black/70">
              كل ما تحتاج معرفته قبل الحجز بشكل واضح وسريع.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {faq.map((f, idx) => (
              <FAQItem
                key={idx}
                q={<TMText>{f.q}</TMText>}
                a={<TMText>{f.a}</TMText>}
              />
            ))}
          </div>
        </section>

        {/* FLEET / YACHTS SECTION (end page) */}
        <section className="w-full py-12 sm:py-16 bg-white">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="text-center max-w-4xl mx-auto mb-10">
              <p className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                Dubai Marina • VIP • <TMText>Elite Yachts</TMText>™
              </p>
              <div className="mx-auto mt-3 mb-4 h-px w-40 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
              <h2 className="text-[20px] sm:text-[28px] font-light tracking-[0.06em] text-black/90">
                اختر اليخت المناسب وابدأ الحجز
              </h2>
              <p className="mt-3 text-[14px] sm:text-[16px] leading-[1.95] text-black/70">
                <TMText>
                  تصفح الأسطول واختر الحجم المناسب (36FT–300FT). أرسل لنا التاريخ والمدة وعدد الضيوف وسنؤكد التوفر بسرعة.
                </TMText>
              </p>
            </div>
          </div>

          <YachtsSection />
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.10),transparent_60%)]" />
          <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
            <div className="mx-auto max-w-4xl text-center rounded-3xl border border-black/10 bg-white/85 backdrop-blur-[2px] px-4 sm:px-10 py-8 sm:py-10 shadow-[0_18px_60px_rgba(15,23,42,0.12)]">
              <h2 className="text-[18px] sm:text-[28px] font-light tracking-[0.06em] text-black/90">
                جاهز تحجز يخت فاخر في دبي اليوم؟
              </h2>
              <p className="mt-3 text-[14px] sm:text-[16px] leading-[1.95] text-black/70">
                أرسل لنا تاريخك وعدد الضيوف والمدة وسنقترح لك أفضل الخيارات المتاحة فورًا.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <a
                  href="https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-10 py-3 border border-black bg-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_18px_52px_rgba(15,23,42,0.26)] sm:min-w-[280px]"
                >
                  <i className="fa-brands fa-whatsapp text-[16px]" />
                  <span className="text-[13px] sm:text-sm tracking-[0.04em] truncate max-w-[85vw] sm:max-w-none">
                    احجز عبر واتساب خلال دقائق
                  </span>
                </a>

                <a
                  href="tel:+971569006603"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-10 py-3 border border-black/12 bg-white text-black/85 shadow-[0_14px_34px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-black/25 hover:shadow-[0_18px_46px_rgba(15,23,42,0.16)] sm:min-w-[280px]"
                >
                  <i className="fa-solid fa-phone text-[14px] text-[var(--accent)]" />
                  <span className="text-[13px] sm:text-sm tracking-[0.04em] truncate max-w-[85vw] sm:max-w-none">
                    اتصال سريع وتأكيد فوري
                  </span>
                </a>
              </div>

              <div className="mt-6 text-[12px] text-black/55 leading-[1.8]">
                <TMText>
                  ملاحظة: الحد الأدنى غالبًا ساعتان • الحيوانات الأليفة غير مسموح بها • قد تُطبق رسوم إضافية للديكور والخدمات الخاصة
                </TMText>
              </div>
            </div>
          </div>
        </section>

        {/* optional global CTA */}
        <div className="relative">
          <CTASection variant="fleet" />
        </div>
      </main>
    </>
  );
}
