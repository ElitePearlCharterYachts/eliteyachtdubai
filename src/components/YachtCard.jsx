import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function YachtCard({ yacht }) {
  return (
    <article
      dir="rtl"
      lang="ar"
      className="
        group relative w-full
        rounded-[28px] bg-white
        border border-black/10
        shadow-[0_18px_55px_rgba(15,23,42,0.10)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_28px_75px_rgba(0,0,0,0.14)]
      "
    >
      {/* IMAGE AREA (rounded + clipped) */}
      <div className="relative p-4 pb-0">
        {/* Image wrapper is clipped, but badge is OUTSIDE of it (so it won't cut) */}
        <div className="relative rounded-[22px] overflow-hidden border border-black/10">
          <img
            src={yacht.mainImage}
            alt={yacht.title}
            className="
              w-full object-cover
              h-[260px] sm:h-[320px]
              transition-transform duration-700
              group-hover:scale-[1.04]
            "
            loading="lazy"
          />

          {/* Top-right small label (like screenshot) */}
          <div className="absolute top-3 right-3 z-10">
            <span
              className="
                inline-flex items-center
                rounded-full
                bg-white/85 backdrop-blur
                border border-black/10
                px-3 py-1
                text-[11px] font-semibold
                text-black/70
                shadow-[0_10px_26px_rgba(15,23,42,0.12)]
              "
            >
              إيليت  يخت
            </span>
          </div>
        </div>

        {/* Center LOGO badge (not clipped) */}
        <div className="absolute left-1/2 top-5 -translate-x-1/2 z-20">
          <div
            className="
              h-12 w-12 sm:h-14 sm:w-14
              rounded-full
              bg-white
              border border-black/10
              shadow-[0_14px_34px_rgba(15,23,42,0.16)]
              grid place-items-center
            "
          >
            <img
              src={logo}
              alt="Elite Yacht Dubai"
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
              draggable="false"
            />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="px-6 pb-6 pt-4 text-center">
        {yacht.yachtKeyword ? (
          <p className="mt-2 text-[12px] font-bold text-black/55"> {yacht.title}</p>
        ) : (
          <p className="mt-2 text-[12px] text-black/55">إيليت يخوت دبي</p>
        )}
        <h3 className="text-[18px] mt-2  sm:text-[25px] font-bold text-black">
          {yacht.yachtKeyword ? yacht.yachtKeyword : "تأجير يخوت فاخرة في دبي"}
        </h3>





        {/* PRICE */}
        <div className="mt-5">


          <div className="mt-2 flex items-end justify-center gap-2 text-black">
            <span className="text-[14px] text-black/60 font-semibold">
              / الساعة
            </span>
            {yacht.oldPrice ? (
              <div className="flex items-center justify-center gap-2 text-black/40 text-sm">
                <span className="line-through">{yacht.oldPrice}</span>
              </div>
            ) : null}
            <span className="text-[30px] font-extrabold tracking-tight">
              {yacht.price}
            </span>
            <span className="text-[14px] text-black/60 font-semibold">
              درهم
            </span>
          </div>
        </div>

        {/* SPECS */}
        <div className="mt-5 flex justify-center">
          <div
            className="
              w-full
              rounded-2xl
              border border-black/10
              bg-white
              shadow-[0_10px_24px_rgba(15,23,42,0.06)]
              px-4 py-3
              flex flex-wrap items-center justify-center
              gap-x-5 gap-y-2
              text-[12px] text-black/70
            "
          >
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <i className="fa-solid fa-ruler text-black/50" />
              الطول: {yacht.lengthFt}
            </span>

            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <i className="fa-solid fa-bed text-black/50" />
              كبائن: {yacht.cabins}
            </span>

            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <i className="fa-solid fa-user-group text-black/50" />
              أشخاص: {yacht.capacity}
            </span>

            <span className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap">
              <i className="fa-solid fa-user-tie text-black/50" />
              طاقم: {yacht.crew}
            </span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {/* WhatsApp (primary black like screenshot button) */}
          <a
            href="https://wa.me/971569006603"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full py-2.5
              text-[12px] font-bold
              bg-black text-white
              border border-black
              shadow-[0_12px_28px_rgba(0,0,0,0.18)]
              hover:bg-black/90
              transition
              flex items-center justify-center gap-2
            "
            aria-label="واتساب"
          >
            <i className="fa-brands fa-whatsapp text-[15px]" />
            <span className="hidden sm:inline">واتساب</span>
          </a>

          {/* Call */}
          <a
            href="tel:+971569006603"
            className="
              rounded-full py-2.5
              text-[12px] font-bold
              bg-white text-black
              border border-black/15
              shadow-[0_10px_24px_rgba(15,23,42,0.08)]
              hover:border-black/30
              hover:bg-black/[0.02]
              transition
              flex items-center justify-center gap-2
            "
            aria-label="اتصال"
          >
            <i className="fa-solid fa-phone text-[14px]" />
            <span className="hidden sm:inline">اتصال</span>
          </a>

          {/* Details */}
          <Link
            to={`/${encodeURIComponent(yacht.slug)}`}
            className="
              rounded-full py-2.5
              text-[12px] font-bold
              bg-white text-black
              border border-black/15
              shadow-[0_10px_24px_rgba(15,23,42,0.08)]
              hover:border-black/30
              hover:bg-black/[0.02]
              transition
              flex items-center justify-center gap-2
            "
            aria-label={`التفاصيل: ${yacht.title}`}
          >
            <i className="fa-solid fa-circle-info text-[14px]" />
            <span className="hidden sm:inline">التفاصيل</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
