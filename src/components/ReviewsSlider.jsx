import { useEffect, useMemo, useRef, useState } from "react";

const REVIEWS = [
  {
    name: "عائشة م.",
    location: "حفلة على اليخت",
    rating: 5,
    text:
      "أفضل تجربة تأجير يخوت فاخرة في دبي. اليخت كان نظيفًا جدًا، الطاقم محترف، والحجز كان سلسًا. مثالي لرحلة يخت خاصة في دبي مارينا.",
  },
  {
    name: "عمر ر.",
    location: "حفلة كشف جنس المولود",
    rating: 5,
    text:
      "تأجير يخت في دبي بجودة عالية وخدمة مميزة. نظام صوت ممتاز، جلسات مريحة، والكابتن ودود جدًا. أنصح به لتأجير يخت في دبي مارينا.",
  },
  {
    name: "سارة ك.",
    location: "حفلة Marry Me على اليخت",
    rating: 5,
    text:
      "حجزنا يخت خاص في دبي لعيد ميلاد وكانت التجربة VIP. يخت نظيف، طاقم ملتزم بالمواعيد، وإطلالة رائعة. من أفضل شركات تأجير اليخوت في دبي.",
  },
  {
    name: "دانيال هـ.",
    location: "طلب زواج على اليخت",
    rating: 5,
    text:
      "تأجير يخوت فاخرة في دبي بالشكل الصحيح. رد سريع على واتساب، أسعار واضحة، ويخت راقٍ. عملية حجز يخت في دبي كانت سهلة جدًا.",
  },
  {
    name: "فاطمة أ.",
    location: "حفلة زفاف على اليخت",
    rating: 5,
    text:
      "تجربة تأجير يخت دبي ممتازة مع ضيافة رائعة. اليخت حديث ونظيف جدًا. مثالي لرحلة غروب وتجربة فاخرة في دبي مارينا.",
  },
  {
    name: "محمد س.",
    location: "فعالية شركات على اليخت",
    rating: 5,
    text:
      "طاقم احترافي وتجربة تأجير يخوت فاخرة في دبي. مناسبة جدًا لضيوف الشركات. إذا تبحث عن يخت في دبي، هذه خدمة بريميوم فعلًا.",
  },
];

function Stars({ value = 5 }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${value} من 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`fa-solid fa-star text-[12px] ${
            i < value ? "text-black" : "text-black/20"
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSlider() {
  const getPerView = () => {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1280) return 2;
    return 3;
  };

  const [perView, setPerView] = useState(getPerView());
  const [index, setIndex] = useState(0);

  const timerRef = useRef(null);
  const isHoverRef = useRef(false);

  const maxIndex = useMemo(() => Math.max(0, REVIEWS.length - perView), [perView]);

  useEffect(() => {
    const onResize = () => setPerView(getPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const next = () => setIndex((v) => (v >= maxIndex ? 0 : v + 1));
  const prev = () => setIndex((v) => (v <= 0 ? maxIndex : v - 1));

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      if (!isHoverRef.current) next();
    }, 4200);

    return () => clearInterval(timerRef.current);
  }, [maxIndex, perView]);

  const dots = useMemo(
    () => Array.from({ length: maxIndex + 1 }).map((_, i) => i),
    [maxIndex]
  );

  return (
    <section
      lang="ar"
      aria-label="تقييمات إيليت يخوت دبي - تأجير يخوت فاخرة في دبي مارينا"
      className="relative w-full bg-white py-20 overflow-hidden"
    >
      {/*  SEO (clean, light) */}
      <p className="sr-only">
        تقييمات موثّقة لتجارب تأجير يخوت فاخرة في دبي مع إيليت يخوت. حجز سريع عبر واتساب،
        خدمة VIP، طاقم محترف، ويخوت مناسبة للرحلات الخاصة والحفلات وفعاليات الشركات في دبي مارينا.
      </p>

      {/* light premium texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(0,0,0,0.035),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.03),transparent_35%,rgba(0,0,0,0.02))]" />
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-14 max-w-4xl mx-auto">
          <p className="text-[11px] tracking-[0.35em] text-black/55 uppercase">
            آراء العملاء • Dubai Marina • VIP
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.18em] text-black">
            ماذا يقول ضيوف <span className="font-bold">إيليت يخوت</span>؟
          </h2>

          <p className="mt-5 text-black/70 max-w-3xl mx-auto leading-relaxed text-[15px] sm:text-[16px]">
            تقييمات حقيقية من ضيوف اختاروا{" "}
            <span className="text-black font-semibold">تأجير يخت في دبي</span>{" "}
            مع{" "}
            <span className="text-black font-semibold">إيليت يخوت دبي</span>{" "}
            للرحلات الخاصة، الحفلات، وفعاليات الشركات — خدمة VIP، طاقم محترف، وتجربة حجز سريعة.
          </p>

          {/* SEO chips (light premium) */}
          <div className="mt-7 flex flex-wrap justify-center gap-2 text-[12px]">
            {[
              "تأجير يخت دبي مارينا",
              "حجز يخت دبي واتساب",
              "يخوت فاخرة في دبي",
              "يخت خاص في دبي",
              "رحلات VIP دبي",
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
                  text-black/75
                  shadow-[0_10px_24px_rgba(15,23,42,0.06)]
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => (isHoverRef.current = true)}
          onMouseLeave={() => (isHoverRef.current = false)}
        >
          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            aria-label="السابق"
            className="
              absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10
              h-11 w-11 rounded-full
              border border-black/10
              bg-white
              text-black/60
              shadow-[0_10px_28px_rgba(0,0,0,0.10)]
              transition
              hover:border-black/25
              hover:text-black
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)]
              active:scale-[0.99]
            "
          >
            <i className="fa-solid fa-chevron-left text-[12px]" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="التالي"
            className="
              absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10
              h-11 w-11 rounded-full
              border border-black/10
              bg-white
              text-black/60
              shadow-[0_10px_28px_rgba(0,0,0,0.10)]
              transition
              hover:border-black/25
              hover:text-black
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.16)]
              active:scale-[0.99]
            "
          >
            <i className="fa-solid fa-chevron-right text-[12px]" />
          </button>

          {/* Track */}
          <div className="overflow-hidden">
            <div className="-mx-3">
              <div
                className="flex transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
              >
                {REVIEWS.map((r, i) => (
                  <div
                    key={r.name + i}
                    className="px-3 shrink-0"
                    style={{ width: `${100 / perView}%` }}
                  >
                    <ReviewCard review={r} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {dots.map((d) => (
              <button
                key={d}
                type="button"
                aria-label={`انتقل إلى التقييم رقم ${d + 1}`}
                onClick={() => setIndex(d)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  d === index
                    ? "w-9 bg-black shadow-[0_0_18px_rgba(0,0,0,0.16)]"
                    : "w-2 bg-black/20 hover:bg-black/45"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  return (
    <div
      className="
        group relative h-full
        rounded-2xl bg-white
        border border-black/10
        p-6
        shadow-[0_14px_40px_rgba(0,0,0,0.08)]
        transition-all duration-500
        hover:-translate-y-1
        hover:border-black/20
        hover:shadow-[0_18px_55px_rgba(0,0,0,0.12)]
      "
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <Stars value={review.rating} />

        <div className="min-w-0 text-right">
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm tracking-wider text-black/80 truncate">
              {review.name}
            </p>

            {/* keep BLUE tick same */}
            <span className="inline-flex items-center gap-1 text-[11px] text-black/50">
              <i className="fa-solid fa-circle-check text-[#0AABF7]/90" />
              Verified
            </span>
          </div>

          <p className="text-[11px] tracking-[0.28em] uppercase text-black/40 mt-1">
            {review.location}
          </p>
        </div>
      </div>

      {/* Divider (mono) */}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      {/* Review text */}
      <p className="mt-4 text-black/65 leading-relaxed text-sm text-right">
        “{review.text}”
      </p>

      {/* bottom label */}
      <div className="mt-6 flex items-center justify-between text-[11px] tracking-[0.28em] uppercase text-black/45">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-black/50" />
          Dubai
        </span>
        <span className="text-black/80 text-[15px]">إيليت يخوت</span>
      </div>
    </div>
  );
}
