// src/components/EndPageContent.jsx
import React from "react";
import { Link } from "react-router-dom";

function EliteTM({ className = "" }) {
  return (
    <span className={className}>
      إيليت يخوت
      <span className="text-[11px] opacity-70 align-super mr-1">™</span>
    </span>
  );
}

function EliteYachtsTM({ className = "" }) {
  return (
    <span className={className}>
      Elite Yachts
      <span className="text-[11px] opacity-70 align-super ml-1">™</span>
    </span>
  );
}

function SectionBar({ title }) {
  return (
    <div className="mt-10 rounded-md border border-black/10 bg-white px-4 py-2 shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
      <h3 className="text-[12px] tracking-[0.28em] uppercase text-black/70">
        {title}
      </h3>
    </div>
  );
}

export default function EndPageContent() {
  const occasionCards = [
    {
      title: "حفلات أعياد الميلاد",
      text: "احتفل بأجواء راقية مع ديكور مميز، موسيقى، وتجربة طاقم احترافية على متن يخت Elite Yachts™.",
      to: "/عروض-اليخوت",
    },
    {
      title: "الذكرى السنوية",
      text: "رحلات رومانسية بإطلالات أفق دبي، لحظات غروب ساحرة، وخيارات ضيافة حسب الطلب مع إيليت يخوت™.",
      to: "/عروض-اليخوت",
    },
    {
      title: "فعاليات الشركات",
      text: "استضف الاجتماعات، احتفالات الفرق، أو ضيوف VIP في أجواء يخت راقية مع Elite Yachts™.",
      to: "/corporate-yacht-events-dubai",
    },
    {
      title: "التجمعات العائلية",
      text: "جلسات مريحة، إبحار هادئ، وتجربة فاخرة وآمنة لجميع الأعمار عبر إيليت يخوت™ في دبي.",
      to: "/خدمات-تأجير-اليخوت-في-دبي",
    },
  ];

  const locations = [
    {
      title: "برج العرب",
      text: "الإبحار نحو أيقونة دبي العالمية لالتقاط صور فاخرة لا تُنسى مع Elite Yachts™.",
      to: "/خدمات-تأجير-اليخوت-في-دبي",
    },
    {
      title: "نخلة جميرا",
      text: "إطلالات بحرية واسعة، إبحار فاخر، ومناظر بانورامية مذهلة مع إيليت يخوت™.",
      to: "/خدمات-تأجير-اليخوت-في-دبي",
    },
    {
      title: "دبي مارينا",
      text: "نقطة الانطلاق الأشهر مع أفق نابض بالحياة وساحل أنيق — تجربة Elite Yachts™.",
      to: "/يخوتنا-يخت-النخبة-دبي",
    },
    {
      title: "جزر العالم",
      text: "وجهة بحرية فريدة مثالية للرحلات الأطول والتجارب الحصرية عبر إيليت يخوت™.",
      to: "/خدمات-تأجير-اليخوت-في-دبي",
    },
  ];

  return (
    <section
      dir="rtl"
      lang="ar"
      className="relative w-full bg-white text-black"
    >
      {/* subtle background (mono) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_52%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_35%,rgba(15,23,42,0.02))]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 py-16 lg:py-24 text-[15px] sm:text-[16px]">
        {/* Top accent */}
        <div className="flex justify-center mb-4">
          <span className="h-px w-24 bg-black/20" />
        </div>

        {/* Intro */}
        <SectionBar title="تأجير يخوت فاخرة في دبي — بأسلوب سهل واحترافي" />

        <p className="mt-6 text-[15px] leading-relaxed text-black/70">
          مرحبًا بكم في{" "}
          <span className="text-black/90 font-semibold">
            <EliteTM />
          </span>{" "}
          — بوابتكم الفاخرة لرحلات{" "}
          <span className="text-black/90 font-semibold">تأجير يخوت فاخرة في دبي</span>{" "}
          وتجارب{" "}
          <span className="text-black/90 font-semibold">يخت خاص في دبي مارينا</span>.
          مع <EliteYachtsTM className="text-black/90 font-semibold" /> نقدم أسلوبًا
          احترافيًا للحجز وتجربة VIP راقية.
        </p>

        <p className="mt-4 text-[15px] leading-relaxed text-black/70">
          يتيح لك تأجير يخت خاص الاستمتاع بساحل دبي بعيدًا عن الازدحام، مع حرية
          التحكم بالضيوف، الموسيقى، المسار، وتجربة الإبحار بالكامل. هدف{" "}
          <EliteTM className="text-black/90 font-semibold" /> بسيط: تقديم تجربة{" "}
          <span className="text-black/90 font-semibold">تأجير يخت فاخر في دبي</span>{" "}
          بسلاسة تامة من الحجز حتى العودة — على طريقة Elite Yachts™.
        </p>

        {/* Why choose */}
        <SectionBar title="لماذا تختار تأجير يخت خاص في دبي؟" />

        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-black/70">
          <p>
            يمنحك تأجير اليخوت الخاصة الخصوصية، المرونة، والتخصيص الكامل. سواء كنت
            تبحث عن رحلة غروب هادئة أو احتفال نابض بالحياة، يصبح اليخت مساحتك
            الخاصة على الماء مع{" "}
            <EliteTM className="text-black/90 font-semibold" /> و{" "}
            <EliteYachtsTM className="text-black/90 font-semibold" />.
          </p>

          <p className="text-black/90 font-semibold tracking-[0.08em]">
            يومك • بطريقتك
          </p>
          <p>
            اختر مسار الإبحار، الموسيقى، أسلوب الضيافة، والتوقيت. يمكنك تعزيز
            التجربة بخيارات مثل الضيافة، الديكور، منسقي الأغاني، أو الأنشطة
            المائية — وكلها بتنظيم فريق{" "}
            <EliteTM className="text-black/90 font-semibold" />.
          </p>

          <p className="text-black/90 font-semibold tracking-[0.08em]">
            الخصوصية والحصرية
          </p>
          <p>
            استمتع بوقتك دون انقطاع مع العائلة، الأصدقاء، أو زملاء العمل. يُعد
            اليخت الخاص خيارًا مثاليًا لطلبات الزواج، الذكريات الخاصة، ضيوف VIP،
            وفعاليات الشركات الراقية مع Elite Yachts™.
          </p>

          <ul className="mt-3 space-y-2 list-disc pr-6">
            <li>يخوت فاخرة بتصميم داخلي نظيف ومساحات واسعة — مع إيليت يخوت™</li>
            <li>طاقم محترف وإبحار سلس — تجربة Elite Yachts™</li>
            <li>
              خيارات{" "}
              <Link
                to="/yacht-catering-dubai"
                className="underline decoration-black/20 hover:decoration-black/60 text-black/80 hover:text-black transition"
              >
                الضيافة
              </Link>{" "}
              و{" "}
              <Link
                to="/elite-yachts-private-dj"
                className="underline decoration-black/20 hover:decoration-black/60 text-black/80 hover:text-black transition"
              >
                منسق أغاني خاص
              </Link>{" "}
              مع إيليت يخوت™
            </li>
            <li>مسارات مميزة تشمل دبي مارينا، أتلانتس، وبرج العرب</li>
          </ul>
        </div>

        {/* Fleet */}
        <SectionBar title="أسطولنا — راحة وأناقة" />

        <p className="mt-6 text-[15px] leading-relaxed text-black/70">
          تم اختيار أسطول{" "}
          <EliteYachtsTM className="text-black/90 font-semibold" /> بعناية للضيوف
          الذين يتوقعون أعلى معايير الفخامة. كل يخت مجهز ليمنحك أجواء راقية وتجربة
          مميزة منذ لحظة الصعود — مع{" "}
          <EliteTM className="text-black/90 font-semibold" />.
        </p>

        <p className="mt-3 text-[15px] leading-relaxed text-black/70">
          تأجير اليخت ليس مجرد وسيلة تنقل — بل تجربة متكاملة. استرخِ مع إطلالات
          الأفق، استمتع بالضيافة على متن اليخت، واصنع ذكريات لا تُنسى مع Elite Yachts™.
        </p>

        {/* Occasion cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {occasionCards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="
                group rounded-xl
                border border-black/10 bg-white
                p-4
                shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                transition
                hover:-translate-y-0.5
                hover:border-black/20
                hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)]
              "
            >
              <p className="text-[14px] font-semibold tracking-[0.06em] text-black/90">
                {c.title}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-black/65">
                {c.text}
              </p>
              <div className="mt-4">
                <span className="inline-flex rounded-full px-3 py-1 text-[11px] tracking-[0.22em] uppercase border border-black/10 text-black/60 group-hover:border-black/25 group-hover:text-black transition">
                  استكشف
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-7 text-center text-[13px] text-black/60">
          تواصل مع فريق{" "}
          <EliteTM className="text-black/85 font-semibold" /> لمعرفة التوفر والتوصيات.{" "}
          <Link to="/contact-us" className="underline text-black hover:text-black/70 transition">
            احجز الآن
          </Link>
        </p>

        {/* Discover */}
        <SectionBar title="اكتشف كنوز ساحل دبي" />

        <p className="mt-5 text-[15px] leading-relaxed text-black/70">
          يضم ساحل دبي معالم عالمية ووجهات بحرية فاخرة. يعتمد مسار الرحلة على مدة
          الإبحار، حالة البحر، ونوع التجربة التي ترغب بها مع{" "}
          <EliteYachtsTM className="text-black/90 font-semibold" />.
        </p>

        <ul className="mt-4 space-y-2 list-disc pr-6 text-[15px] text-black/70">
          <li>
            <strong>دبي مارينا:</strong> أفق عصري وأجواء نابضة بالحياة
          </li>
          <li>
            <strong>نخلة جميرا:</strong> ساحل أيقوني وتجربة إبحار راقية
          </li>
          <li>
            <strong>برج العرب:</strong> وجهة التصوير الأشهر في دبي
          </li>
          <li>
            <strong>جزر العالم:</strong> مياه هادئة ومشاهد حصرية
          </li>
        </ul>

        {/* Location cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((l) => (
            <Link
              key={l.title}
              to={l.to}
              className="
                group rounded-xl
                border border-black/10 bg-white
                p-4
                shadow-[0_12px_30px_rgba(15,23,42,0.06)]
                transition
                hover:-translate-y-0.5
                hover:border-black/20
                hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)]
              "
            >
              <p className="text-[14px] font-semibold tracking-[0.06em] text-black/90">
                {l.title}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-black/65">
                {l.text}
              </p>
              <div className="mt-4">
                <span className="inline-flex rounded-full px-3 py-1 text-[11px] tracking-[0.22em] uppercase border border-black/10 text-black/60 group-hover:border-black/25 group-hover:text-black transition">
                  عرض المسار
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
