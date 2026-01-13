// src/pages/OwnerAr.jsx
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../components/Seo";
import Schema from "../components/Schema";
import CTASection from "../components/CTASection";

export default function OwnerAr() {
  const { pathname } = useLocation();

  // ===== SEO CONFIG =====
  const BASE_URL = "https://eliteyachtsdubai.com";
  const CANONICAL = `${BASE_URL}${pathname}`;
  const ogImage = `${BASE_URL}/images/og/owner.webp`;

const title =
  "وئام عبدالله | مؤسس إيليت يخوت™ دبي | إيليت يخت دبي";


  const description =
    "تعرّف على وئام عبدالله، المدير العام ومالك الشركة ضمن Elite Yachts Group: خبرة طويلة في العمليات البحرية والضيافة الفاخرة وتنظيم رحلات اليخوت VIP في دبي مارينا وفعاليات الشركات.";
  const keywords = [
    "مالك شركة إيليت يخوت دبي",
    "وئام عبدالله",
    "Elite Yachts Group",
    "Elite Yacht Dubai",
    "تأجير يخوت دبي مارينا",
    "تأجير يخت VIP دبي",
    "تنظيم فعاليات على اليخت دبي",
    "Luxury Yacht Rental Dubai",
    "Dubai Marina Yacht Charter",
  ].join(", ");

  const schemaData = useMemo(() => {
    const breadcrumb = {
      "@type": "BreadcrumbList",
      "@id": `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${BASE_URL}/` },
        { "@type": "ListItem", position: 2, name: "مالك الشركة", item: CANONICAL },
      ],
    };

    const organization = {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Elite Yachts Dubai",
      alternateName: ["إيليت يخوت", "Elite Yacht Dubai", "Elite Yachts Dubai"],
      url: BASE_URL,
      areaServed: "AE",
      sameAs: [],
    };

    // Person schema for the owner/GM
    const person = {
      "@type": "Person",
      "@id": `${CANONICAL}#person`,
      name: "وئام عبدالله",
      jobTitle: "المدير العام",
      worksFor: { "@id": `${BASE_URL}/#organization` },
      image: `${BASE_URL}/images/about/wiam.webp`,
      url: CANONICAL,
      description:
        "خبرة في العمليات البحرية والضيافة الفاخرة وتنظيم رحلات وفعاليات اليخوت VIP في دبي وخارجها.",
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
        about: [{ "@id": `${BASE_URL}/#organization` }, { "@id": `${CANONICAL}#person` }],
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${BASE_URL}/images/banners/hero.png`,
        },
        breadcrumb: { "@id": `${CANONICAL}#breadcrumb` },
        mainEntity: { "@id": `${CANONICAL}#person` },
      },
      organization,
      breadcrumb,
      person,
    ];
  }, [BASE_URL, CANONICAL, title, description]);

  return (
    <div dir="rtl" lang="ar" className="w-full bg-white text-slate-900">
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

      {/* HERO */}
      <section className="relative w-full min-h-[55vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/banners/hero.png"
            className="w-full h-full object-cover object-[50%_70%]"
            alt="Elite Yacht Dubai"
            loading="eager"
            decoding="async"
            draggable="false"
          />

          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 50% 15%, rgba(59,130,246,0.10), transparent 55%)",
            }}
          />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 pb-14 pt-28">
            {/* GLASS WRAPPER */}
            <div
              className="
                inline-block
                rounded-3xl
                border border-white/30
                bg-white/20 backdrop-blur-lg
                px-8 sm:px-10 py-8
                shadow-[0_20px_60px_rgba(0,0,0,0.18)]
              "
            >
              <p className="text-[11px] tracking-[0.35em] text-white font-bold uppercase">
                مالك الشركة
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold tracking-wide">
                وئام عبدالله
              </h1>

              <p className="mt-2 text-slate-200 leading-relaxed max-w-3xl">
                المدير العام
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    cursor-pointer
                    inline-flex items-center justify-center gap-3
                    rounded-full px-8 py-3 text-sm
                    border border-white/40
                    bg-white/70 backdrop-blur-md
                    text-slate-900
                    shadow-[0_18px_50px_rgba(2,6,23,0.12)]
                    transition-all duration-300
                    hover:bg-white
                    hover:shadow-[0_24px_70px_rgba(2,6,23,0.16)]
                    overflow-hidden relative
                  "
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition duration-700"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 40%, rgba(2,6,23,0.06) 50%, transparent 60%)",
                    }}
                  />
                  <span className="relative inline-flex items-center gap-3">
                    <i className="fa-brands fa-whatsapp text-[16px] text-emerald-600" />
                    <span className="relative font-semibold">واتساب</span>
                  </span>
                </a>

                {/* Call */}
                <a
                  href="tel:+971569006603"
                  className="
                    cursor-pointer
                    inline-flex items-center justify-center gap-3
                    rounded-full px-8 py-3 text-sm
                    border border-white/40
                    bg-white/65 backdrop-blur-md
                    text-slate-900
                    shadow-[0_18px_50px_rgba(2,6,23,0.10)]
                    transition-all duration-300
                    hover:bg-white
                    hover:shadow-[0_24px_70px_rgba(2,6,23,0.14)]
                    overflow-hidden relative
                  "
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition duration-700"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 40%, rgba(2,6,23,0.06) 50%, transparent 60%)",
                    }}
                  />
                  <span className="relative inline-flex items-center gap-3">
                    <i className="fa-solid fa-phone text-[14px] text-sky-700" />
                    <span className="relative font-semibold">اتصل الآن</span>
                  </span>
                </a>
              </div>
            </div>
            {/* END GLASS */}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          {/* Top: Photo + Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-10 items-start">
            {/* Photo card */}
            <div
              className="
                relative rounded-2xl bg-white
                border border-slate-200
                overflow-hidden
                shadow-[0_24px_70px_rgba(2,6,23,0.10)]
              "
            >
              <div className="relative">
                <img
                  src="/images/about/wiam.webp"
                  alt="وئام عبدالله"
                  className="w-full h-[520px] object-cover"
                  loading="lazy"
                  draggable="false"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/65 via-white/10 to-transparent" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-55"
                  style={{
                    background:
                      "radial-gradient(circle at 65% 12%, rgba(2,6,23,0.08), transparent 55%)",
                  }}
                />

                <div className="absolute left-6 bottom-6 right-6">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div>
                      <p className="text-[11px] tracking-[0.35em] text-slate-600 uppercase">
                        Elite Yachts Group
                      </p>
                      <p className="mt-2 text-lg font-semibold tracking-wide text-slate-900">
                        المدير العام
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <InfoChip icon="fa-solid fa-ship" label="بحري" value="عمليات" />
                  <InfoChip icon="fa-solid fa-handshake" label="فاخر" value="ضيافة" />
                  <InfoChip icon="fa-solid fa-crown" label="إيليت" value="تأجير" />
                </div>

                <div className="mt-5 h-px w-full bg-slate-200" />

                <p className="mt-5 text-slate-700 leading-relaxed text-sm">
                  وئام عبدالله هو مالك ومؤسس شركة إيليت بيرل لتأجير اليخوت، ويحرص
                  على تقديم خدمة استثنائية وتجارب بحرية فاخرة للعملاء الذين يبحثون
                  عن مغامرات مميزة في الخليج العربي، ضمن أعلى معايير الاحتراف
                  والخصوصية.
                </p>
              </div>

              {/* corner accent */}
              <div className="pointer-events-none absolute -left-2 -bottom-2 h-full w-full rounded-2xl border border-slate-200/60" />
            </div>

            {/* Right: Journey + Highlights */}
            <div className="space-y-6">
              <SectionHeader
                eyebrow="المسيرة المهنية"
                title="من بدايات بحرية عملية إلى تأجير يخوت إيليت"
              />

              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.08)]">
                <p className="text-slate-700 leading-relaxed">
                  بدأ وئام مسيرته بقيادة قارب صيد بسيط أثناء سعيه للحصول على رخصة
                  قبطان، حيث اكتسب خبرة عملية قوية في العمليات البحرية. وبعد سنوات
                  من العمل بين قطاع الضيافة الفاخرة والمجال البحري، انتقل إلى قطاع
                  تأجير اليخوت في عام 2006، وطور مهاراته في تطوير الأعمال وعلاقات
                  العملاء—لتكون النتيجة تأسيس مجموعة شركات إيليت لليخوت.
                </p>

                <p className="mt-4 text-slate-700 leading-relaxed">
                  اليوم، يُعرف بتنظيم رحلات يخوت السوبر والميغا للفعاليات وإدارة
                  الشركات، وتقديم تجارب إبحار راقية في دبي للباحثين عن يخوت فاخرة
                  وخدمة VIP.
                </p>
              </div>

              {/* Prestige highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HighlightCard
                  icon="fa-solid fa-award"
                  title="عملاء مميزون"
                  text="تشمل قائمة عملائه علامات مثل Tag Heuer وEtihad Airways ومستشفى برجيل."
                />
                <HighlightCard
                  icon="fa-solid fa-star"
                  title="ضيوف من كبار الشخصيات"
                  text="قدّم خدماته لعملاء من الفئة الأولى، بما في ذلك مشاهير مثل Nicki Minaj وJennifer Lopez وVin Diesel وWill Smith."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <HighlightCard
                  icon="fa-solid fa-earth-americas"
                  title="تأجير عالمي"
                  text="نظم رحلات وفعاليات على يخوت السوبر والميغا في وجهات مثل ميكونوس ونيس (جنوب فرنسا) وماربيا (إسبانيا) والجبل الأسود."
                />
                <HighlightCard
                  icon="fa-solid fa-flag-checkered"
                  title="خبرة فورمولا 1"
                  text="يُعد من أبرز المنظمين لليخوت الأكبر خلال سباق جائزة فورمولا 1 الكبرى."
                />
              </div>

              {/* quick CTA */}
              <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.08)]">
                <p className="text-[11px] tracking-[0.35em] text-slate-600 uppercase">
                  معيار إيليت
                </p>
                <p className="mt-3 text-slate-700 leading-relaxed">
                  تأجير يخوت فاخرة في دبي يعتمد على الثقة والاحترافية والثبات—كل
                  تفصيل يجب أن يبدو “إيليت”.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/elite-yachts-fleet"
                    className="
                      cursor-pointer
                      inline-flex items-center justify-center gap-2
                      rounded-full px-8 py-3
                      border border-slate-200
                      bg-slate-900 text-white
                      shadow-[0_18px_50px_rgba(2,6,23,0.18)]
                      transition-all duration-300
                      hover:bg-slate-800
                      hover:shadow-[0_24px_70px_rgba(2,6,23,0.22)]
                    "
                  >
                    <i className="fa-solid fa-arrow-left relative text-white" />
                    <span className="relative font-semibold">استكشاف الأسطول</span>
                  </a>

                  <a
                    href="/contact-us"
                    className="
                      cursor-pointer
                      inline-flex items-center justify-center gap-2
                      rounded-full px-8 py-3
                      border border-slate-200
                      bg-white text-slate-900
                      transition-all duration-300
                      hover:bg-slate-50
                      hover:shadow-[0_18px_50px_rgba(2,6,23,0.10)]
                    "
                  >
                    <i className="fa-solid fa-envelope text-sky-700" />
                    <span className="font-semibold">تواصل مع الفريق</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: SEO section */}
          <div className="mt-14">
            <SectionHeader
              eyebrow="Elite Yachts Dubai"
              title="فخامة على الماء بقيادة احترافية"
            />

            <div className="mt-6 rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.08)]">
              <p className="text-slate-700 leading-relaxed">
                تقدم Elite Yachts تجربة تأجير يخوت فاخرة في دبي مع تركيز على
                الخدمة الراقية والعمليات الموثوقة والتجارب المميزة—مثالية لـ تأجير
                يخت خاص في دبي، فعاليات الشركات، الاحتفالات، وتأجير يخوت VIP في
                دبي.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Luxury Yacht Rental Dubai",
                  "Yacht Charter Dubai",
                  "Dubai Marina Yacht Rental",
                  "Private Yacht Dubai",
                  "VIP Yacht Rental Dubai",
                ].map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-slate-600"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA (optional) */}
      <CTASection variant="contact" />
    </div>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.35em] text-slate-600 uppercase">
        {eyebrow}
      </p>

      <div className="mt-3 h-px w-full bg-slate-200" />
      <div className="mt-2 h-[2px] w-20 rounded-full bg-slate-900/10" />

      <h2 className="mt-5 text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-slate-900">
        {title}
      </h2>
    </div>
  );
}

function InfoChip({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
      <div className="flex items-center gap-3">
        <i className={`${icon} text-slate-700`} />
        <div className="min-w-0">
          <p className="text-[10px] tracking-[0.28em] uppercase text-slate-500">
            {label}
          </p>
          <p className="text-sm text-slate-800 tracking-wide font-semibold">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function HighlightCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.08)]">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
          <i className={`${icon} text-slate-700`} />
        </span>

        <div className="min-w-0">
          <p className="text-[11px] tracking-[0.3em] text-slate-600 uppercase">
            {title}
          </p>
          <p className="mt-3 text-slate-700 leading-relaxed text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
}
