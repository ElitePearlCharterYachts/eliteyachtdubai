// src/pages/FAQ.jsx
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

import FAQPAGE from "../components/FAQPAGE";
import ReviewsSlider from "../components/ReviewsSlider";
import CTASection from "../components/CTASection";

export default function FAQ() {
  const { pathname } = useLocation();

  const BASE_URL = "https://eliteyachtsdubai.com";
  const CANONICAL = `${BASE_URL}${pathname}`;
  const ogImage = `${BASE_URL}/images/og/faq.webp`;

  const title =
    "الأسئلة الشائعة | تأجير يخوت دبي مارينا | إيليت يخوت™ وحجز واتساب";
  const description =
    "الأسئلة الشائعة عن تأجير اليخوت في دبي: الأسعار، مدة الحجز (الحد الأدنى ساعتان)، المسارات (دبي مارينا/نخلة جميرا/برج العرب)، السعة (10–200)، الحجز عبر واتساب، السلامة، وخدمات VIP مثل الديكور والكيترنج والشيف.";
  const keywords = [
    "الأسئلة الشائعة تأجير يخوت دبي",
    "FAQ تأجير يخت دبي",
    "تأجير يخوت دبي مارينا",
    "حجز يخت دبي واتساب",
    "أسعار تأجير اليخوت دبي",
    "مسارات اليخوت دبي مارينا",
    "Luxury Yacht Rental Dubai",
    "Dubai Marina Yacht Charter",
    "إيليت يخوت",
  ].join(", ");

  const schemaData = useMemo(() => {
    const breadcrumb = {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "الأسئلة الشائعة", item: CANONICAL },
      ],
    };

    // FAQPage schema (عام + مطابق لنص الصفحة)
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${CANONICAL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "ما هو الحد الأدنى لمدة الحجز؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "الحد الأدنى غالبًا ساعتان. قد تختلف بعض اليخوت أو الأوقات حسب الموسم والتوفر.",
          },
        },
        {
          "@type": "Question",
          name: "من أين يتم الانطلاق؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "غالبًا من دبي مارينا، ويمكن ترتيب نقاط صعود/نزول أخرى حسب اليخت والتصاريح.",
          },
        },
        {
          "@type": "Question",
          name: "ما هي المسارات الأكثر شيوعًا؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "المسارات الشائعة تشمل دبي مارينا، بلوواترز/عين دبي، نخلة جميرا، أتلانتس، وبرج العرب حسب مدة الرحلة والوقت.",
          },
        },
        {
          "@type": "Question",
          name: "كم سعة الضيوف المتاحة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "تتوفر يخوت بسعات مختلفة عادةً من 10 إلى 200 ضيف حسب حجم اليخت ونوع الرحلة أو الفعالية.",
          },
        },
        {
          "@type": "Question",
          name: "هل يمكن إضافة خدمات VIP مثل الديكور والكيترنج والشيف؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم. تتوفر إضافات مثل الديكور (قد تُطبق رسوم إضافية)، الكيترنج، وشيف على متن اليخت حسب الطلب، إضافة إلى خدمات تصوير ومواصلات VIP عند الطلب.",
          },
        },
        {
          "@type": "Question",
          name: "هل الحيوانات الأليفة مسموح بها؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "غالبًا الحيوانات الأليفة غير مسموح بها لأسباب تتعلق بالسلامة والنظافة على أغلب الرحلات.",
          },
        },
        {
          "@type": "Question",
          name: "كيف يتم الحجز بسرعة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "أرسل التاريخ والمدة وعدد الضيوف عبر واتساب أو اتصل بنا وسنؤكد التوفر بسرعة ونقترح أفضل الخيارات.",
          },
        },
        {
          "@type": "Question",
          name: "هل توجد إجراءات سلامة على متن اليخت؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم. تتوفر تجهيزات السلامة اللازمة وإرشادات الطاقم قبل الإبحار لضمان رحلة آمنة ومريحة.",
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
        breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
        mainEntity: { "@id": `${CANONICAL}#faq` },
      },
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Elite Yachts Dubai",
        alternateName: ["إيليت يخوت", "Elite Yacht Dubai", "Elite Yachts Dubai"],
        url: BASE_URL,
        areaServed: "AE",
        sameAs: [],
      },
      breadcrumb,
      faqSchema,
    ];
  }, [BASE_URL, CANONICAL, title, description]);

  return (
    <div className="w-full bg-white text-slate-900">
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

      {/* HERO (Light theme) */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/banners/faq-banner.webp"
            alt="الأسئلة الشائعة | تأجير يخوت دبي"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
          />
          {/* Light overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-white/25 to-white/90" />
        </div>

        {/* Content */}
        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-24 text-center">
            <p className="text-[11px] tracking-[0.35em] text-slate-600 uppercase">
              تأجير يخوت دبي
            </p>

            <div className="h-px my-[10px] mx-auto w-72 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
              الأسئلة الشائعة
            </h1>

            <p className="mt-6 text-slate-700 max-w-3xl mx-auto leading-relaxed">
              كل ما تحتاج معرفته عن تأجير اليخوت في دبي — الأسعار، المسارات، خطوات
              الحجز، السلامة، وتجربة الرحلة على متن اليخت.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (Arabic + RTL only here) */}
      <section dir="rtl" lang="ar" className="bg-white text-slate-900">
        <FAQPAGE />
      </section>

     <div dir="ltr">
      <ReviewsSlider />
     </div>

      {/* CTA */}
      <CTASection variant="contact" />
    </div>
  );
}
