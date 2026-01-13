import yachtImg from "../assets/sections/yacht-intro.png";
import logoMark from "../assets/logo.png";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

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

export default function AboutContainer() {
  const WHATSAPP =
    "https://wa.me/971569006603?text=%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%8A%D8%AE%D8%AA%20%D9%81%D9%8A%20%D8%AF%D8%A8%D9%8A";
  const PHONE = "tel:+971569006603";

  const bullets = [
    "تأجير يخوت فاخرة في دبي مارينا بحجز مباشر وتأكيد سريع",
    "رحلات خاصة للعائلات والأصدقاء بخصوصية تامة وخدمة راقية",
    "خيارات مناسبات وحفلات وفعاليات شركات وتجارب VIP",
    "طاقم محترف وتنظيم دقيق ومسارات مميزة في دبي",
  ].map(applyTM);

  return (
    <section
      lang="ar"
      dir="rtl"
      className="relative w-full bg-white text-black py-16 sm:py-20 overflow-hidden"
      aria-label="عن إيليت يخوت دبي"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent_35%,rgba(0,0,0,0.02))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(0,0,0,0.03),transparent_52%)]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-4 mb-5 justify-start">
            <div className="h-px w-14 bg-gradient-to-l from-black/45 to-transparent" />
            <span className="text-[12px] sm:text-[13px] tracking-wide text-black/80">
              دبي مارينا • خصوصية تامة • خدمة VIP
            </span>
          </div>

          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] leading-tight font-semibold text-black">
            <TMText>إيليت يخوت</TMText>دبي — تأجير يخوت فاخرة وتجارب بحرية راقية
          </h2>

          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-black max-w-[760px]">
            إذا كنت تبحث عن{" "}
            <span className="font-semibold">تأجير يخوت فاخرة في دبي</span>{" "}
            مع حجز سريع وخدمة منظمة، فإن{" "}
            <span className="font-semibold">
              <TMText>إيليت يخوت</TMText>
            </span>{" "}
            تقدم لك تجربة واضحة من أول تواصل حتى نهاية الرحلة. ننطلق عادةً من{" "}
            <span className="font-semibold">دبي مارينا</span>{" "}
            مع خيارات تناسب العائلات والمجموعات، ورحلات الغروب، والمناسبات الخاصة.
          </p>

          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-black max-w-[760px]">
            نهتم بالتفاصيل التي تصنع الفرق: اختيار اليخت المناسب، تنسيق وقت الإبحار،
            تجهيزات الضيافة حسب الطلب، وتنظيم احترافي للصعود والنزول. هدفنا أن تحصل
            على{" "}
            <span className="font-semibold">يخت خاص في دبي</span>{" "}
            بخصوصية تامة وخدمة راقية وتجربة VIP بدون تعقيد.
          </p>

          <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px] sm:text-[15px] text-black">
            {bullets.map((t, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/60 shrink-0" />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-[640px]">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="احجز يخت عبر واتساب"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-black bg-black text-white font-semibold text-[15px] shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition hover:bg-black/90 active:scale-[0.99]"
            >
              <FaWhatsapp className="text-[18px]" />
              احجز عبر واتساب
            </a>

            <a
              href={PHONE}
              aria-label="اتصل الآن لحجز يخت في دبي"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-black/15 bg-white text-black font-semibold text-[15px] shadow-[0_18px_55px_rgba(0,0,0,0.12)] transition hover:bg-[#FAFAFA] active:scale-[0.99]"
            >
              <FaPhone className="text-[16px]" />
              اتصل الآن
            </a>
          </div>

          <p className="mt-6 text-[12px] sm:text-[13px] text-black/70 tracking-wide">
            تأجير يخوت دبي • دبي مارينا • حجز يخت دبي واتساب • رحلات VIP • يخت خاص في دبي
          </p>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center">
          <div className="relative w-full max-w-[600px]">
            <div className="absolute -inset-6 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.05),transparent_60%)] blur-2xl pointer-events-none" />

            <div
              className="relative rounded-3xl overflow-hidden border border-black/10 bg-[#0B0B0B]"
              style={{ boxShadow: "0 26px 75px rgba(0,0,0,0.22)" }}
            >
              <div className="absolute top-4 left-4 z-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-[0_14px_35px_rgba(0,0,0,0.22)] ring-1 ring-black/10">
                  <img
                    src={logoMark}
                    alt="شعار إيليت يخوت دبي"
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain select-none pointer-events-none"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </div>
              </div>

              <img
                src={yachtImg}
                alt="تأجير يخوت فاخرة في دبي مارينا مع إيليت يخوت دبي"
                className="w-full h-[290px] sm:h-[430px] object-cover"
                loading="lazy"
                decoding="async"
                draggable="false"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.10),transparent_55%)]" />

              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[11px] tracking-wide text-white/90 backdrop-blur">
                  <TMText>إيليت يخوت</TMText> • دبي
                </span>
              </div>
            </div>

            <div className="pointer-events-none absolute -right-2 -bottom-2 w-full h-full rounded-3xl border border-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
