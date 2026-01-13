import { useEffect, useMemo, useState } from "react";
import YachtCard from "../components/YachtCard";
import CTASection from "../components/CTASection";
import ReviewsSlider from "../components/ReviewsSlider";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

function applyTM(input = "") {
  let out = String(input);
  out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
  out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");
  return out;
}

export default function Yachts() {
  const [yachts, setYachts] = useState([]);

  const BASE_URL = "https://eliteyachtdubai.com";
  const PAGE_PATH = "/يخوتنا-يخت-النخبة-دبي";
  const CANONICAL = `${BASE_URL}${PAGE_PATH}`;

  useEffect(() => {
    fetch("/data/yachts.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((json) => setYachts(Array.isArray(json) ? json : []))
      .catch(console.error);
  }, []);

  const pageTitle = useMemo(
    () =>
      applyTM(
        "أسطول إيليت يخت دبي | تأجير يخوت فاخرة في دبي مارينا وحجز سريع"
      ),
    []
  );

  const pageDesc = useMemo(
    () =>
      applyTM(
        "استعرض أسطول إيليت يخت دبي لتأجير يخوت فاخرة في دبي مارينا. يخوت للرحلات الخاصة والعائلية، حفلات ومناسبات، فعاليات شركات، مسارات دبي مارينا ونخلة جميرا وبرج العرب، وحجز سريع عبر واتساب."
      ),
    []
  );

  const pageKeywords = useMemo(
    () =>
      [
        "إيليت يخت دبي",
        "تأجير يخوت دبي",
        "تأجير يخوت فاخرة في دبي",
        "يخت خاص في دبي مارينا",
        "حجز يخت دبي واتساب",
        "حفلات اليخوت في دبي",
        "فعاليات الشركات على اليخت",
        "رحلات غروب الشمس دبي",
        "Dubai Marina Yacht Charter",
        "Luxury Yacht Rental Dubai"
      ].join(", "),
    []
  );

  const ogImage = `${BASE_URL}/images/og/fleet.webp`;

  const fleetSchema = useMemo(() => {
    const itemList = (Array.isArray(yachts) ? yachts : [])
      .slice(0, 80)
      .map((y, i) => {
        const slug = y?.slug ? String(y.slug).replace(/^\//, "") : "";
        const url = slug ? `${BASE_URL}/${slug}` : CANONICAL;

        const name =
          y?.name_ar ||
          y?.name ||
          y?.title_ar ||
          y?.title ||
          "يخت فاخر في دبي";

        const image =
          y?.image ||
          y?.imageUrl ||
          y?.cover ||
          y?.hero ||
          null;

        const entry = {
          "@type": "ListItem",
          position: i + 1,
          url,
          name
        };

        if (image) entry.image = image.startsWith("http") ? image : `${BASE_URL}${image}`;

        return entry;
      });

    return [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL}#webpage`,
        url: CANONICAL,
        name: pageTitle,
        description: pageDesc,
        inLanguage: "ar-AE",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#organization` }
      },
      {
        "@type": "CollectionPage",
        "@id": `${CANONICAL}#collection`,
        url: CANONICAL,
        name: pageTitle,
        inLanguage: "ar-AE",
        mainEntity: {
          "@type": "ItemList",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: itemList.length,
          itemListElement: itemList
        }
      }
    ];
  }, [yachts, CANONICAL, BASE_URL, pageTitle, pageDesc]);

  return (
    <div dir="rtl" lang="ar" className="w-full bg-white text-black">
      <Seo
        title={pageTitle}
        description={pageDesc}
        keywords={pageKeywords}
        canonical={CANONICAL}
        ogTitle={pageTitle}
        ogDescription={pageDesc}
        ogImage={ogImage}
        ogUrl={CANONICAL}
      />

      <Schema data={fleetSchema} />

      <section
        className="relative w-full flex items-center min-h-[50vh] sm:min-h-[55vh] lg:min-h-[60vh] overflow-hidden"
        style={{
          backgroundImage: "url('/images/banners/fleet-hero.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative w-full">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-16 lg:py-20 text-center">
            <div className="mx-auto max-w-[980px] rounded-2xl sm:rounded-3xl border border-white/15 bg-black/45 px-4 py-6 sm:px-10 sm:py-10 shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
              <p className="text-[9px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] text-white uppercase">
                إيليت يخت دبي • دبي مارينا • VIP
              </p>

              <div className="mx-auto mt-2 mb-3 sm:mt-3 sm:mb-4 w-[72%]">
                <div className="h-px mx-auto w-32 sm:w-48 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <h1 className="text-lg sm:text-3xl md:text-4xl font-light tracking-[0.15em] sm:tracking-[0.22em] text-white leading-tight">
                إيليت يخت دبي — تأجير اليخوت الفاخرة والرحلات البحرية الخاصة
              </h1>

              <p className="mt-3 sm:mt-6 text-white/90 leading-relaxed max-w-3xl mx-auto text-xs sm:text-base">
                تجربة إيليت يخت دبي لتأجير اليخوت في دبي مارينا: رحلات خاصة وعائلية، حفلات أعياد
                ميلاد، فعاليات شركات، طلبات زواج، ورحلات غروب. تنسيق VIP يشمل خط سير الرحلة،
                الطاقم، الضيافة، الموسيقى، والديكور حسب الطلب، مع حجز سريع عبر واتساب وأسعار واضحة.
              </p>

              <div className="mt-5 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-[520px] mx-auto">
                <a
                  href="https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-9 py-3 border border-black bg-white text-black shadow-[0_14px_34px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-black hover:text-white sm:min-w-[230px] whitespace-nowrap"
                  aria-label="واتساب"
                >
                  <i className="fa-brands fa-whatsapp text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm tracking-wider">احجز عبر واتساب</span>
                </a>

                <a
                  href="tel:+971569006603"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-9 py-3 border border-black bg-black text-white shadow-[0_16px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:bg-white hover:text-black sm:min-w-[230px] whitespace-nowrap"
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

      <section
        aria-label="أسطول إيليت يخت دبي - تأجير يخوت فاخرة في دبي مارينا"
        className="w-full py-20 bg-white"
      >
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="mb-14 text-center max-w-5xl mx-auto">
            <p className="text-[12px] sm:text-[13px] font-bold tracking-[0.32em] text-black/60 uppercase mb-3">
              أسطول إيليت يخت دبي
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-black leading-tight">
              تأجير يخوت فاخرة في دبي مارينا
            </h2>

            <p className="mt-6 text-[15px] sm:text-[16px] leading-relaxed text-black/75">
              اختر اليخت المناسب لتجربتك في دبي: يخت خاص في دبي للرحلات الهادئة والعائلية،
              حفلات اليخوت للمناسبات، وفعاليات الشركات على اليخت للضيافة الراقية. فريق إيليت يخت
              دبي ينسق لك التفاصيل من أول تواصل حتى نهاية الرحلة.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2 text-[12px]">
              {[
                "إيليت يخت دبي",
                "تأجير يخوت فاخرة في دبي",
                "يخت خاص في دبي مارينا",
                "رحلات VIP على اليخت",
                "حفلات اليخوت في دبي",
                "فعاليات الشركات على اليخت",
                "رحلات غروب الشمس دبي"
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-black/75 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yachts.map((yacht) => (
              <YachtCard key={yacht.slug} yacht={yacht} />
            ))}
          </div>
        </div>
      </section>

      <div dir="ltr" lang="en" className="[direction:ltr]">
        <ReviewsSlider />
      </div>

      <CTASection variant="fleet" />
    </div>
  );
}
