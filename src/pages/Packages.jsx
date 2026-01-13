import { useMemo } from "react";
import CTASection from "../components/CTASection";
import YachtsSection from "../components/YachtsSection";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

function TM({ children }) {
  const text = typeof children === "string" ? children : "";
  let out = text;

  out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
  out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");

  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
}

const ACCENT = "#111827";
const PHONE_TEL = "tel:+971569006603";
const WHATSAPP =
  "https://wa.me/971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85";

const PACKAGES = [
  {
    tag: "الأكثر حجزًا",
    title: "باقة رحلة الغروب",
    icon: "fa-solid fa-sun",
    duration: "ساعتان (الحد الأدنى)",
    ideal: "الأزواج • العائلات • ضيوف VIP",
    highlights: [
      "إطلالات ساحرة على أفق دبي وقت الغروب",
      "مسار نخلة جميرا وأتلانتس",
      "مثالية للصور وطلبات الزواج",
      "حجز سريع عبر واتساب وتأكيد فوري للتوفر"
    ],
    includes: ["كابتن وطاقم محترف", "مياه ومشروبات غازية", "نظام صوت بلوتوث بريميوم", "معدات السلامة"]
  },
  {
    tag: "بريميوم",
    title: "باقة احتفال عيد الميلاد",
    icon: "fa-solid fa-cake-candles",
    duration: "3 ساعات",
    ideal: "الأصدقاء • العائلات • مجموعات الحفلات",
    highlights: [
      "تجربة جاهزة للحفلة على اليخت",
      "جلسات مريحة وسطح مفتوح للأجواء",
      "أفضل خيار لحفلات اليخوت في دبي",
      "إمكانية إضافة ديكور وتنسيق حسب الطلب"
    ],
    includes: ["كابتن وطاقم", "ثلج + مياه + مشروبات غازية", "دعم تجهيز عيد الميلاد", "ضيافة بريميوم"]
  },
  {
    tag: "VIP",
    title: "باقة الرومانسية الفاخرة",
    icon: "fa-solid fa-heart",
    duration: "2–3 ساعات (الحد الأدنى ساعتان)",
    ideal: "الأزواج • طلبات الزواج • الذكرى السنوية",
    highlights: [
      "يخت خاص في دبي لتجربة رومانسية",
      "أجواء فاخرة ومسار هادئ",
      "غروب الشمس مع أبرز المعالم",
      "ترتيبات خاصة متاحة (ديكور/ضيافة/تصوير)"
    ],
    includes: ["كابتن وطاقم", "مياه ومشروبات غازية", "نظام موسيقى", "مرونة في توقيت المسار"]
  },
  {
    tag: "إيليت",
    title: "باقة الشركات VIP",
    icon: "fa-solid fa-briefcase",
    duration: "3–4 ساعات",
    ideal: "العملاء • المدراء التنفيذيون • الفرق",
    highlights: [
      "تأجير يخت راقٍ لفعاليات الأعمال",
      "ضيافة أنيقة لإبهار العملاء",
      "خصوصية عالية وتنظيم احترافي",
      "إمكانية تنسيق ضيافة/ديكور/موسيقى حسب الطلب"
    ],
    includes: ["كابتن وطاقم", "مياه ومشروبات غازية", "دعم استضافة احترافي", "جدول مرن"]
  },
  {
    tag: "فاخر",
    title: "باقة جولة دبي مارينا",
    icon: "fa-solid fa-water",
    duration: "ساعتان (الحد الأدنى)",
    ideal: "السياح • الجولات • العائلات",
    highlights: ["جولة مشاهدة معالم دبي مارينا", "مثالية للزوار لأول مرة", "خيار ممتاز لتأجير يخت دبي بسرعة", "مسارات مرنة حسب توقيتك"],
    includes: ["كابتن وطاقم", "مياه ومشروبات غازية", "نظام موسيقى", "معدات السلامة"]
  },
  {
    tag: "حفلة",
    title: "باقة الأصدقاء وعطلة نهاية الأسبوع",
    icon: "fa-solid fa-music",
    duration: "3 ساعات",
    ideal: "الأصدقاء • خطط نهاية الأسبوع",
    highlights: ["أجواء حفلات اليخوت في دبي", "جلسات واسعة وسطح مفتوح", "مناسبة لتجمعات الأصدقاء", "حجز سريع وتأكيد فوري للتوفر"],
    includes: ["كابتن وطاقم", "مياه ومشروبات غازية", "صوت بلوتوث", "مسار مرن"]
  }
];

export default function PackagesAr() {
  const BASE_URL = "https://eliteyachtdubai.com";
  const PAGE_PATH = "/عروض-اليخوت";
  const CANONICAL = `${BASE_URL}${PAGE_PATH}`;
  const ogImage = `${BASE_URL}/images/og/packages.webp`;

  const title = "باقات تأجير يخت في دبي مارينا | إيليت يخت دبي وحجز واتساب";
  const description =
    "اختر باقات إيليت يخت دبي لتأجير اليخوت في دبي مارينا: رحلة غروب، عيد ميلاد، رومانسية، شركات VIP وجولات دبي مارينا. الحد الأدنى ساعتان مع حجز سريع عبر واتساب وتأكيد للتوفر وخيارات ديكور وضيافة حسب الطلب.";
  const keywords = [
    "باقات تأجير يخت دبي",
    "تأجير يخت دبي مارينا",
    "رحلة غروب دبي",
    "حفلات اليخوت في دبي",
    "باقة عيد الميلاد على اليخت",
    "باقة رومانسية يخت دبي",
    "فعاليات الشركات على اليخت",
    "حجز يخت دبي واتساب",
    "يخت خاص في دبي",
    "Luxury Yacht Rental Dubai"
  ].join(", ");

  const schemaData = useMemo(() => {
    const itemList = PACKAGES.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      description: `${p.duration} - ${p.ideal}`,
      url: CANONICAL
    }));

    return [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL}#webpage`,
        url: CANONICAL,
        name: title,
        description,
        inLanguage: "ar-AE",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` }
      },
      {
        "@type": "CollectionPage",
        "@id": `${CANONICAL}#collection`,
        url: CANONICAL,
        name: title,
        inLanguage: "ar-AE",
        mainEntity: {
          "@type": "ItemList",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: PACKAGES.length,
          itemListElement: itemList
        }
      }
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

      <section className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/banners/packages.webp"
            alt="باقات تأجير يخت في دبي مارينا"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.18),transparent_62%)]" />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20 lg:py-24 text-center">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase">
              <TM>Elite Yacht Dubai</TM> • دبي مارينا • VIP
            </p>

            <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
              <div className="h-px mx-auto w-32 sm:w-52 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>

            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.15em] sm:tracking-[0.18em] text-white leading-tight">
              <TM>باقات وتجارب Elite Yacht Dubai</TM>
            </h1>

            <p className="mt-4 sm:mt-6 text-white/90 leading-relaxed max-w-3xl mx-auto text-xs sm:text-base px-2">
              <TM>
                اختر باقات تأجير يخت في دبي مارينا مع Elite Yachts™ — رحلات غروب، أعياد ميلاد، طلبات زواج، وفعاليات شركات VIP.
                الحد الأدنى لمدة الحجز ساعتان، مع تنظيم احترافي وتأكيد سريع للتوفر وخيارات إضافية مثل الديكور والضيافة حسب الطلب.
              </TM>
            </p>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm border border-black bg-black text-white shadow-[0_16px_40px_rgba(15,23,42,0.16)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] sm:min-w-[240px]"
                style={{ ["--accent"]: ACCENT }}
              >
                <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                الحجز عبر واتساب
              </a>

              <a
                href={PHONE_TEL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full px-6 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm border border-white/20 bg-white/10 text-white shadow-[0_14px_34px_rgba(15,23,42,0.10)] transition-all duration-300 hover:bg-white/15 sm:min-w-[240px]"
              >
                <i className="fa-solid fa-phone text-base sm:text-lg" />
                اتصال الآن
              </a>
            </div>

            <p className="mt-5 sm:mt-6 text-[11px] sm:text-[13px] text-white/85 max-w-4xl mx-auto leading-relaxed px-2">
              <TM>
                تشمل التجارب: تأجير يخت خاص في دبي، حفلات اليخوت، رحلات غروب الشمس، تنظيم فعاليات الشركات، طلبات الزواج، ومسارات دبي مارينا ونخلة جميرا وبرج العرب.
              </TM>
            </p>

            <p className="mt-3 text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-white/70">
              الحد الأدنى للحجز: ساعتان • تنسيق VIP • تأكيد سريع للتوفر
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-slate-600 uppercase">
              <TM>خيارات Elite Yachts</TM>
            </p>

            <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
              <div className="h-px mx-auto w-32 sm:w-52 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.15em] sm:tracking-[0.18em] text-slate-900">
              اختر تجربتك
            </h2>

            <p className="mt-3 sm:mt-4 text-slate-700 leading-relaxed max-w-3xl mx-auto text-xs sm:text-base px-2">
              <TM>
                باقات تأجير يخت فاخر في دبي مصممة للراحة والخصوصية والإطلالات مع خدمة VIP وتنظيم احترافي.
                الحد الأدنى لمدة الحجز ساعتان.
              </TM>
            </p>

            <p className="mt-3 text-[12px] sm:text-[13px] text-slate-600 max-w-4xl mx-auto leading-relaxed px-2">
              <TM>
                إضافات حسب الطلب: ديكور (أساسي/فاخر)، ضيافة وكيترنج، شيف على متن اليخت، نقل فاخر، وخطط فعاليات متكاملة.
              </TM>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
            {PACKAGES.map((p) => (
              <PackageCard key={p.title} pkg={p} />
            ))}
          </div>
        </div>
      </section>

      <div className="relative">
        <YachtsSection />
      </div>

      <div className="relative">
        <CTASection variant="fleet" />
      </div>
    </div>
  );
}

function PackageCard({ pkg }) {
  return (
    <div className="group relative rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-6 border border-black/10 shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)] hover:border-black/20">
      <div className="flex items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0 text-right">
          <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
            <TM>{pkg.tag}</TM>
          </p>

          <h3 className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-[15px] tracking-[0.18em] sm:tracking-[0.22em] uppercase text-slate-900">
            <TM>{pkg.title}</TM>
          </h3>
        </div>

        <span className="inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)] flex-shrink-0">
          <i className={`${pkg.icon} text-sm sm:text-base`} style={{ color: ACCENT }} />
        </span>
      </div>

      <div className="mt-3 sm:mt-4 h-px w-full bg-black/10" />

      <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 sm:gap-3">
        <div className="rounded-xl sm:rounded-2xl border border-black/10 bg-black/[0.03] p-2.5 sm:p-3 text-right">
          <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
            المدة
          </p>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-800">
            <TM>{pkg.duration}</TM>
          </p>
        </div>

        <div className="rounded-xl sm:rounded-2xl border border-black/10 bg-black/[0.03] p-2.5 sm:p-3 text-right">
          <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
            مناسبة لـ
          </p>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-slate-800">
            <TM>{pkg.ideal}</TM>
          </p>
        </div>
      </div>

      <p className="mt-4 sm:mt-5 text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
        المميزات
      </p>

      <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-700">
        {pkg.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/45 flex-shrink-0" />
            <span>
              <TM>{h}</TM>
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-5 sm:mt-6 text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] text-slate-600 uppercase">
        يشمل
      </p>

      <div className="mt-2 sm:mt-3 flex flex-wrap gap-1.5 sm:gap-2 justify-end">
        {pkg.includes.map((i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-black/10 bg-white px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-[12px] text-slate-700 shadow-[0_10px_22px_rgba(15,23,42,0.06)]"
          >
            <i className="fa-solid fa-star text-[9px] sm:text-[10px] text-black/60" />
            <TM>{i}</TM>
          </span>
        ))}
      </div>

      <div className="mt-5 sm:mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm border border-black bg-black text-white shadow-[0_14px_34px_rgba(15,23,42,0.14)] transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)]"
          style={{ ["--accent"]: ACCENT }}
        >
          <i className="fa-brands fa-whatsapp text-sm sm:text-base" />
          احجز عبر واتساب
        </a>

        <a
          href={PHONE_TEL}
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm border border-black/15 bg-white text-slate-900 shadow-[0_14px_34px_rgba(15,23,42,0.10)] transition-all duration-300 hover:border-black/30 hover:bg-black/[0.02]"
        >
          <i className="fa-solid fa-phone text-sm sm:text-base" />
          اتصل الآن
        </a>
      </div>

      <p className="mt-4 sm:mt-5 text-[11px] sm:text-[12px] text-slate-600 leading-relaxed text-right">
        <TM>Elite Yacht Dubai • تأجير يخت دبي مارينا • الحد الأدنى ساعتان • باقات VIP • حجز سريع</TM>
      </p>
    </div>
  );
}
