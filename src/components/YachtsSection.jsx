import { useEffect, useMemo, useState } from "react";
import YachtCard from "./YachtCard";
import Watermark from "./Watermark";

export default function YachtsSection() {
  const [yachts, setYachts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();

    fetch("/data/yachts.json", {
      signal: ctrl.signal,
      cache: "force-cache",
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        setYachts(Array.isArray(json) ? json : []);
        setLoading(false);
      })
      .catch((e) => {
        if (e?.name !== "AbortError") console.error(e);
        setLoading(false);
      });

    return () => ctrl.abort();
  }, []);

  const CHIPS = useMemo(
    () => [
      "تأجير يخت دبي",
      "تأجير يخوت فاخرة في دبي",
      "يخت خاص في دبي مارينا",
      "حجز يخت دبي واتساب",
      "رحلات يخت VIP دبي",
      "حفلات على اليخت دبي",
      "فعاليات الشركات على يخت",
      "رحلات الغروب دبي",
      "يخت للإيجار في دبي",
      "أفضل شركة تأجير يخوت في دبي",
    ],
    []
  );

  return (
    <section dir="rtl" lang="ar" className="relative w-full bg-white py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_52%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.03),transparent_35%,rgba(15,23,42,0.02))]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <Watermark />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] mb-3 text-black/55 uppercase">
            مجموعة اليخوت الفاخرة
          </p>

          <h2 className="font-logo text-2xl md:text-4xl font-light tracking-widest text-black">
            أسطول إيليت يخوت الفاخر في دبي
          </h2>

          <div className="mx-auto mt-5 h-px w-40 bg-black/10" />

          <p className="mt-5 text-black/70 max-w-2xl mx-auto leading-relaxed text-sm md:text-[15px]">
            نُدير أسطولنا بشكل مباشر، ما يمنحك تجربة منظمة وأسعار واضحة وخدمة VIP في دبي مارينا. اختر اليخت المناسب لرحلة خاصة،
            حفلة، فعالية شركات، أو رحلة غروب، مع حجز سريع عبر الهاتف أو واتساب.
          </p>

          <div className="mt-6 text-[13px] md:text-[14px] leading-relaxed text-black/60 max-w-3xl mx-auto">
            إذا كنت تبحث عن تأجير يخوت فاخرة في دبي أو يخت خاص في دبي مارينا، ستجد هنا خيارات متعددة تناسب عدد الضيوف والميزانية
            ونوع المناسبة مع تأكيد سريع.
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {CHIPS.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1.5 text-[12px] text-black/75 shadow-[0_10px_24px_rgba(15,23,42,0.06)] hover:border-black/20 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-3xl border border-black/10 bg-white/85 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="h-44 rounded-2xl bg-black/5" />
                <div className="mt-4 h-4 w-2/3 rounded bg-black/5" />
                <div className="mt-2 h-4 w-1/2 rounded bg-black/5" />
                <div className="mt-4 h-10 rounded-full bg-black/5" />
              </div>
            ))}
          </div>
        ) : yachts.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yachts.map((yacht) => (
              <YachtCard key={yacht.slug} yacht={yacht} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl text-center rounded-3xl border border-black/10 bg-white/85 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <h3 className="text-[18px] md:text-[20px] font-light tracking-widest text-black">
              لا توجد يخوت متاحة للعرض حاليًا
            </h3>
            <p className="mt-3 text-black/65 leading-relaxed text-sm md:text-[15px]">
              تواصل معنا الآن وسنقترح لك أفضل الخيارات المتاحة حسب التاريخ والمدة وعدد الضيوف.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="tel:+971569006603"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-sm tracking-[0.18em] uppercase font-bold text-black border border-black/15 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-black/30 hover:bg-black/[0.02] hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)]"
              >
                <i className="fa-solid fa-phone" />
                اتصل بنا
              </a>
              <a
                href="https://wa.me/971569006603"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-sm tracking-[0.18em] uppercase font-bold text-white border border-black bg-black shadow-[0_10px_28px_rgba(15,23,42,0.14)] transition-all duration-300 hover:bg-black/90 hover:shadow-[0_14px_40px_rgba(0,0,0,0.20)]"
              >
                <i className="fa-brands fa-whatsapp" />
                واتساب
              </a>
            </div>
          </div>
        )}

        <div className="mt-20 text-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-black/10" />
            <span className="text-xs tracking-[0.35em] text-black/45 uppercase">
              هل تحتاج مساعدة؟
            </span>
            <div className="h-px flex-1 bg-black/10" />
          </div>

          <h3 className="text-xl md:text-2xl font-light tracking-widest text-black">
            لم تجد اليخت الذي تبحث عنه؟
          </h3>

          <p className="mt-3 text-black/65 max-w-xl mx-auto leading-relaxed text-sm md:text-[15px]">
            فريقنا يساعدك في اختيار اليخت المثالي حسب عدد الأشخاص والميزانية والمناسبة مع ترشيحات سريعة لخيارات تأجير يخت دبي
            ويخت خاص في دبي مارينا وتجارب VIP.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+971569006603"
              aria-label="اتصل بنا الآن لحجز يخت في دبي"
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-sm tracking-[0.18em] uppercase font-bold text-black border border-black/15 bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-black/30 hover:bg-black/[0.02] hover:shadow-[0_14px_36px_rgba(0,0,0,0.12)]"
            >
              <i className="fa-solid fa-phone" />
              اتصل بنا
            </a>

            <a
              href="https://wa.me/971569006603"
              target="_blank"
              rel="noreferrer"
              aria-label="تواصل معنا عبر واتساب لحجز يخت في دبي"
              className="inline-flex items-center justify-center gap-3 rounded-full px-8 py-3 text-sm tracking-[0.18em] uppercase font-bold text-white border border-black bg-black shadow-[0_10px_28px_rgba(15,23,42,0.14)] transition-all duration-300 hover:bg-black/90 hover:shadow-[0_14px_40px_rgba(0,0,0,0.20)]"
            >
              <i className="fa-brands fa-whatsapp" />
              واتساب
            </a>
          </div>

          <p className="mt-6 text-[11px] tracking-[0.22em] text-black/45 uppercase">
            خدمة VIP • دبي مارينا • حجز سريع عبر الهاتف أو واتساب
          </p>
        </div>
      </div>
    </section>
  );
}
