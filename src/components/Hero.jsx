import hero600 from "../assets/hero/hero-mobile-600.webp";
import hero900 from "../assets/hero/hero-mobile-900.webp";
import hero1600 from "../assets/hero/hero-bg-1600.webp";

export default function Hero() {
  return (
    <section lang="ar" dir="rtl" className="relative w-full bg-white">
      <div className="relative w-full h-[72svh] sm:h-[86svh] lg:h-screen overflow-hidden">
        <picture>
          <source
            media="(max-width: 640px)"
            type="image/webp"
            srcSet={`${hero600} 600w, ${hero900} 900w`}
            sizes="100vw"
          />
          <source
            media="(min-width: 641px)"
            type="image/webp"
            srcSet={`${hero1600} 1600w`}
            sizes="100vw"
          />
          <img
            src={hero900}
            width="900"
            height="1200"
            alt="تأجير يخوت فاخرة في دبي مارينا مع إيليت يخوت دبي"
            className="absolute inset-0 h-full w-full object-cover object-[50%_70%] sm:object-center scale-[1.04] sm:scale-100"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable="false"
          />
        </picture>

        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />

        <div className="absolute inset-0">
          <div className="max-w-[1700px] mx-auto h-full px-4 sm:px-6 lg:px-10">
            <div className="h-full flex items-center justify-center">
              <div className="w-full max-w-[560px] sm:max-w-[680px] lg:max-w-[920px] rounded-3xl border border-white/25 bg-white/10 backdrop-blur-lg shadow-[0_30px_90px_rgba(0,0,0,0.35)] p-4 sm:p-7 lg:p-9 text-center">
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] sm:text-[11px] tracking-[0.22em] text-white/90">
                    دبي مارينا
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] sm:text-[11px] tracking-[0.22em] text-white/90">
                    خصوصية تامة
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] sm:text-[11px] tracking-[0.22em] text-white/90">
                    خدمة VIP
                  </span>
                </div>

                <h1 className="mt-4 text-white font-logo leading-[1.05] text-[26px] sm:text-[42px] lg:text-[74px]">
                  تأجير يخوت فاخرة في دبي
                  <span className="block text-white/85 mt-2 text-[14px] sm:text-[18px] lg:text-[22px] font-semibold tracking-wide">
                    إيليت يخوت دبي™ — تجربة راقية للعائلات والأصدقاء
                  </span>
                </h1>

                <div className="mt-4 sm:mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <p className="mt-4 sm:mt-5 text-white/85 leading-relaxed text-[12px] sm:text-[13px] lg:text-[14px] max-w-[720px] mx-auto">
                  احجز يخت في دبي مارينا مع طاقم محترف وخيارات تناسب العائلات والمجموعات. رحلات غروب، حفلات، مناسبات خاصة،
                  وتجارب VIP بحجز مباشر وتأكيد سريع.
                </p>

                <div className="mt-5 sm:mt-6 flex justify-center">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-[520px]">
                    <a
                      href="https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="واتساب"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-4 sm:px-7 py-3 bg-white text-black border border-white text-[12px] sm:text-[14px] font-bold tracking-[0.10em] sm:tracking-[0.18em] shadow-[0_18px_46px_rgba(0,0,0,0.30)] hover:bg-white/90 hover:shadow-[0_22px_60px_rgba(0,0,0,0.35)] transition w-full"
                    >
                      <i className="fa-brands fa-whatsapp text-[16px]" />
                      احجز واتساب
                    </a>

                    <a
                      href="tel:+971569006603"
                      aria-label="اتصل الآن"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-4 sm:px-7 py-3 bg-transparent text-white border border-white/35 text-[12px] sm:text-[14px] font-bold tracking-[0.10em] sm:tracking-[0.18em] hover:border-white/60 hover:bg-white/10 transition w-full"
                    >
                      <i className="fa-solid fa-phone text-[14px]" />
                      اتصل الآن
                    </a>
                  </div>
                </div>

                <div className="mt-4 sm:mt-5 flex flex-wrap justify-center items-center gap-3 text-[10px] sm:text-[11px] tracking-[0.18em] text-white/80">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    حجز مباشر
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    طاقم محترف
                  </span>
                  <span className="opacity-40">•</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    رحلات VIP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
