import { useMemo } from "react";
import CTASection from "../components/CTASection";
import FAQSection from "../components/FAQSection";
import ReviewsSlider from "../components/ReviewsSlider";
import YachtsSection from "../components/YachtsSection";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

const ACCENT = "#111827";
const WHATSAPP =
  "https://wa.me/971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85";
const PHONE_TEL = "tel:+971569006603";

const SERVICES = [
  {
    title: "تأجير يخت خاص في دبي",
    icon: "fa-solid fa-anchor",
    desc:
      "استمتع بتجربة تأجير يخت خاص في دبي مارينا مع خصوصية تامة وخدمة VIP. مثالي للأزواج والعائلات والمجموعات الصغيرة مع طاقم محترف وتنظيم دقيق من لحظة الحجز.",
    bullets: ["انطلاق من دبي مارينا", "مسارات مخصصة حسب رغبتك", "طاقم محترف وخدمة VIP"]
  },
  {
    title: "أعياد ميلاد واحتفالات على اليخت",
    icon: "fa-solid fa-cake-candles",
    desc:
      "احتفل بعيد الميلاد وذكرى الزواج والخطوبة والمناسبات الخاصة على يخت فاخر في دبي. أجواء راقية وموسيقى وإطلالات مميزة على أفق دبي مع خيارات ديكور وترتيبات حسب الطلب.",
    bullets: ["إضافات ديكور حسب الطلب", "نظام صوت وتجهيزات حفلة", "تصوير مع المعالم"]
  },
  {
    title: "فعاليات الشركات على يخت فاخر",
    icon: "fa-solid fa-briefcase",
    desc:
      "استضف عملاءك وفريقك على يخت فاخر في دبي لتنظيم فعاليات الشركات والاجتماعات التنفيذية وإطلاق المنتجات. تجربة راقية تعكس صورتك الاحترافية مع ضيافة وتنظيم VIP.",
    bullets: ["استضافة راقية للعملاء", "خصوصية وراحة VIP", "تنسيق احترافي للفعالية"]
  },
  {
    title: "رحلات الغروب والمعالم في دبي",
    icon: "fa-solid fa-sun",
    desc:
      "رحلة يخت وقت الغروب في دبي خيار مثالي للصور واللحظات الخاصة. مسارات أيقونية تمر على نخلة جميرا وأتلانتس وبرج العرب مع تجربة إبحار سلسة.",
    bullets: ["توقيت الغروب المثالي", "أبرز معالم دبي البحرية", "إبحار هادئ وتجربة راقية"]
  },
  {
    title: "تجربة يخت الحفلات في دبي",
    icon: "fa-solid fa-music",
    desc:
      "حوّل رحلتك إلى حفلة على اليخت في دبي مع أجواء ممتعة ومساحات جلوس واسعة وسطح مفتوح. مناسب للمجموعات مع تنظيم سريع عبر واتساب.",
    bullets: ["تجهيز حفلة متكامل", "سطح واسع وأجواء ممتعة", "مناسب للمجموعات"]
  },
  {
    title: "خدمات كونسيرج VIP لليخوت",
    icon: "fa-solid fa-crown",
    desc:
      "كونسيرج نخبة لتأجير اليخوت الفاخرة في دبي: تخطيط الرحلة وترشيح أفضل الخيارات وتأكيد سريع للتوفر. دعم كامل للإضافات مثل الديكور والضيافة والتنسيق الخاص.",
    bullets: ["حجز سريع عبر واتساب", "دعم للإضافات والخدمات", "تنسيق VIP من البداية للنهاية"]
  }
];

export default function ServicesAr() {
  const BASE_URL = "https://eliteyachtdubai.com";
  const PAGE_PATH = "/خدمات-تأجير-اليخوت-في-دبي";
  const CANONICAL = `${BASE_URL}${PAGE_PATH}`;
  const ogImage = `${BASE_URL}/images/og/services.webp`;

  const title = "خدمات تأجير اليخوت في دبي مارينا | إيليت يخت دبي وحجز سريع";
  const description =
    "اكتشف خدمات إيليت يخت دبي لتأجير اليخوت في دبي مارينا: يخت خاص، حفلات ومناسبات، فعاليات شركات، رحلات غروب، وتجارب VIP. حجز سريع عبر واتساب وتنظيم احترافي من البداية للنهاية.";
  const keywords = [
    "خدمات تأجير اليخوت في دبي",
    "تأجير يخت دبي مارينا",
    "يخت خاص في دبي",
    "حفلات على اليخت دبي",
    "فعاليات الشركات على اليخت",
    "رحلات غروب دبي",
    "تأجير يخوت فاخرة في دبي",
    "حجز يخت دبي واتساب",
    "VIP Yacht Dubai",
    "Dubai Marina Yacht Charter"
  ].join(", ");

  const schemaData = useMemo(() => {
    const items = SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      description: s.desc,
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
          numberOfItems: items.length,
          itemListElement: items
        }
      }
    ];
  }, [BASE_URL, CANONICAL, title, description]);

  return (
    <div dir="rtl" lang="ar" className="w-full bg-white text-slate-900">
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

      <section className="relative min-h-[70svh] sm:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/banners/service-hero.webp"
            alt="خدمات تأجير اليخوت الفاخرة في دبي مارينا"
            className="w-full h-full object-cover object-[50%_62%] sm:object-center scale-[1.06] sm:scale-100"
            loading="eager"
            decoding="async"
            draggable="false"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.44),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(0,0,0,0.18),transparent_62%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,transparent_35%,rgba(0,0,0,0.34))]" />
        </div>

        <div className="relative w-full">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-24">
            <div className="w-full max-w-[720px] md:max-w-3xl rounded-3xl border border-white/25 bg-white/10 backdrop-blur-md text-white shadow-[0_22px_70px_rgba(0,0,0,0.25)] p-5 sm:p-8 md:p-10 mx-auto md:mx-0">
              <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-white/90 uppercase">
                إيليت يخت دبي
              </p>

              <div className="mt-4 h-px w-full bg-white/20" />
              <div
                className="mt-3 h-[3px] w-24 sm:w-28 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)"
                }}
              />

              <h1 className="text-[22px] mt-5 sm:text-3xl md:text-4xl font-semibold tracking-[0.12em] sm:tracking-[0.14em] text-white leading-[1.25]">
                خدمات تأجير اليخوت الفاخرة في دبي
              </h1>

              <p className="mt-4 sm:mt-5 text-white/85 leading-relaxed max-w-2xl text-[13px] sm:text-[15px]">
                نقدم خدمات تأجير يخت في دبي مارينا للرحلات الخاصة وحفلات أعياد الميلاد وفعاليات
                الشركات ورحلات الغروب وتجارب VIP. تنظيم احترافي وتأكيد سريع عبر واتساب مع خيارات
                إضافية مثل الديكور والضيافة حسب الطلب.
              </p>

              <div className="mt-7">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-[520px]">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-3 sm:px-8 py-3 text-[12px] sm:text-sm border border-white/30 bg-white text-slate-900 shadow-[0_14px_36px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-white/90 w-full"
                  >
                    <i className="fa-brands fa-whatsapp" style={{ color: ACCENT }} />
                    واتساب
                  </a>

                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-3 sm:px-8 py-3 text-[12px] sm:text-sm border border-white/25 bg-black/70 text-white shadow-[0_16px_44px_rgba(0,0,0,0.22)] transition-all duration-300 hover:bg-black/80 w-full"
                  >
                    <i className="fa-solid fa-phone" />
                    اتصل الآن
                  </a>
                </div>
              </div>

              <div className="mt-6 sm:mt-7 text-[10px] sm:text-[11px] tracking-[0.30em] uppercase text-white/75">
                دبي مارينا • نخلة جميرا • برج العرب
              </div>

              <p className="sr-only">
                إيليت يخت دبي يقدم خدمات تأجير اليخوت في دبي مارينا: يخت خاص، حفلات، فعاليات شركات،
                رحلات غروب، وخدمات VIP مع حجز سريع عبر واتساب.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-[15px] tracking-[0.35em] text-black font-bold uppercase">ماذا نقدم</p>

            <div className="relative mx-auto mt-3 mb-4 h-[10px] w-[72%]">
              <div className="h-px mx-auto w-48 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-[0.14em] text-slate-900">
              تجارب فاخرة على البحر في دبي
            </h2>

            <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-relaxed">
              من تأجير يخت خاص في دبي مارينا إلى فعاليات الشركات على اليخت، خدماتنا مصممة للراحة
              والأمان والضيافة الراقية مع تنظيم VIP وتأكيد سريع.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-3xl bg-white p-6 border border-black/10 shadow-[0_18px_48px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_26px_60px_rgba(0,0,0,0.14)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
                    <i className={s.icon} style={{ color: ACCENT }} />
                  </span>

                  <div className="min-w-0 text-right">
                    <p className="text-[11px] tracking-[0.3em] text-slate-500 uppercase">خدمة نخبة</p>
                    <h3 className="mt-1 text-sm tracking-[0.18em] text-slate-900 truncate">{s.title}</h3>
                  </div>
                </div>

                <div className="mt-4 h-px w-full bg-black/10" />

                <p className="mt-4 text-slate-600 text-sm leading-relaxed">{s.desc}</p>

                <ul className="mt-5 space-y-2 text-sm text-slate-700">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center justify-end gap-2">
                      <span>{b}</span>
                      <i className="fa-solid fa-circle-check text-[12px] text-black/60" />
                    </li>
                  ))}
                </ul>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm border border-black bg-white text-slate-900 transition-all duration-300 hover:border-black/25 hover:shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
                  >
                    <i className="fa-brands fa-whatsapp" style={{ color: ACCENT }} />
                    واتساب
                  </a>

                  <a
                    href={PHONE_TEL}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm border border-black bg-black text-white transition-all duration-300 hover:bg-black/90"
                  >
                    <i className="fa-solid fa-phone" />
                    اتصال
                  </a>
                </div>

                <p className="mt-5 text-[12px] text-slate-600 leading-relaxed text-right">
                  تأجير يخت دبي • دبي مارينا • VIP • حجز سريع
                </p>

                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(17,24,39,0.85), transparent)"
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <YachtsSection />

      <div dir="ltr" className="[direction:ltr] bg-white text-slate-900">
        <ReviewsSlider />
      </div>

      <div className="bg-white text-slate-900">
        <FAQSection />
      </div>

      <CTASection variant="services" />
    </div>
  );
}
