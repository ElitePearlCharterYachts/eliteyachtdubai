import { Link } from "react-router-dom";

const KEYWORDS = [
  { label: "تأجير يخوت في دبي", to: "/" },
  { label: "تأجير يخوت دبي", to: "/" },
  { label: "يخوت للايجار في دبي", to: "/" },
  { label: "يخوت للإيجار في دبي", to: "/" },

  { label: "تأجير يخت دبي", to: "/خدمات-تأجير-اليخوت-في-دبي" },
  { label: "استئجار يخت دبي", to: "/خدمات-تأجير-اليخوت-في-دبي" },
  { label: "ايجار يخت في دبي", to: "/خدمات-تأجير-اليخوت-في-دبي" },
  { label: "تاجير يخت في دبي", to: "/خدمات-تأجير-اليخوت-في-دبي" },
  { label: "يخت للإيجار في دبي", to: "/" },
  { label: "يخت للايجار في دبي", to: "/" },
  { label: "حجز يخت دبي", to: "/خدمات-تأجير-اليخوت-في-دبي" },

  { label: "اسعار تاجير اليخوت في دبي", to: "/عروض-اليخوت" },
  { label: "عروض يخوت دبي", to: "/عروض-اليخوت" },
  { label: "حفلة يخت دبي", to: "/عروض-اليخوت" },
  { label: "يخت عيد ميلاد دبي", to: "/عروض-اليخوت" },
  { label: "يخت للشركات دبي", to: "/عروض-اليخوت" },
  { label: "فعالية على يخت دبي", to: "/عروض-اليخوت" },
  { label: "يخت رومانسي دبي", to: "/عروض-اليخوت" },

  { label: "تأجير يخوت فاخرة دبي", to: "/يخوتنا-يخت-النخبة-دبي" },
  { label: "يخت خاص في دبي", to: "/يخوتنا-يخت-النخبة-دبي" },
  { label: "تأجير يخت VIP دبي", to: "/يخوتنا-يخت-النخبة-دبي" },
  { label: "تأجير ميغا يخت دبي", to: "/يخوتنا-يخت-النخبة-دبي" },
  { label: "تأجير يخت بريميوم دبي", to: "/يخوتنا-يخت-النخبة-دبي" },

  { label: "تأجير يخت دبي مارينا", to: "/" },
  { label: "رحلة يخت في دبي", to: "/" },
  { label: "جولة يخت دبي", to: "/" },
  { label: "يخت غروب دبي", to: "/" },

  { label: "أفضل تأجير يخوت دبي", to: "/" },
  { label: "رحلات يخوت دبي", to: "/" },
];

const safeTo = (path) => encodeURI(path);

export default function KeywordCloud() {
  return (
    <section dir="rtl" lang="ar" className="w-full bg-transparent py-10 sm:py-12">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="rounded-2xl border border-black/10 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] px-4 sm:px-6 py-6">
          <div className="text-center mb-4 sm:mb-6">
            <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-black/50 uppercase">
              عمليات البحث الشائعة
            </p>
            <div className="h-px my-[10px] mx-auto w-48 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
            <div className="mx-auto h-[2px] w-20 bg-black/25" />
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {KEYWORDS.map((item) => (
              <Link
                key={item.label}
                to={safeTo(item.to)}
                prefetch="false"
                className="
                  inline-flex items-center justify-center
                  rounded-full border border-black/10 bg-white
                  text-black/70 whitespace-nowrap
                  px-3 py-1.5 text-[13px]
                  sm:px-4 sm:py-2 sm:text-[13px]
                  lg:px-5 lg:py-2.5 lg:text-[14px]
                  shadow-[0_8px_20px_rgba(15,23,42,0.06)]
                  transition-all duration-300
                  hover:border-black/30 hover:text-black hover:bg-black/[0.03]
                  hover:shadow-[0_14px_40px_rgba(0,0,0,0.15)]
                  hover:-translate-y-[1px]
                "
                aria-label={item.label}
                title={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
