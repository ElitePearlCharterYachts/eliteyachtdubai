// src/components/LicenseTrustSectionAr.jsx
import React from "react";

const ACCENT = "#111827"; // slate-900 / charcoal

/**
 * Adds ™ to all brand mentions (Arabic + English), without double ™.
 * - Elite -> Elite™
 * - Elite Yachts / Elite Yacht -> Elite Yachts™ / Elite Yacht™
 * - إيليت -> إيليت™
 * - إيليت يخوت -> إيليت يخوت™
 */
function TM({ children }) {
  const text = typeof children === "string" ? children : "";
  let out = text;

  // Arabic (longest first)
  out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
  out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");

  // English (longest first)
  out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
  out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);

  return out;
}

const COMPLIANCE_POINTS = [
  {
    icon: "fa-solid fa-certificate",
    title: "شركة Elite Yachts مرخّصة لتأجير اليخوت في دبي",
    text:
      "في Elite Yachts نلتزم بمتطلبات الترخيص والتشغيل المعمول بها في دبي لتقديم تجربة تأجير يخت آمنة واحترافية ضمن دبي مارينا والمناطق البحرية المعتمدة. عند حجزك مع Elite Yachts تحصل على تفاصيل واضحة قبل التأكيد.",
    bullets: [
      "تشغيل من مراسٍ معتمدة (مثل دبي مارينا) بحسب التوفر — عبر Elite Yachts",
      "توثيق إجراءات التشغيل والسلامة وفق معايير Elite Yachts",
      "شفافية كاملة في المعلومات قبل تأكيد الحجز مع Elite",
    ],
  },
  {
    icon: "fa-solid fa-user-tie",
    title: "طاقم Elite Yachts مرخّص وخبرة بحرية",
    text:
      "سلامتك وراحتك تبدأ من الطاقم. في Elite Yachts نوفر كابتن وطاقمًا محترفين بخبرة في إدارة الرحلات، التعامل مع الضيوف، وتنفيذ المعايير التشغيلية على متن اليخت — بأسلوب Elite Yacht Rental Dubai.",
    bullets: ["كابتن وطاقم محترفون من Elite Yachts", "أسلوب ضيافة VIP بمعايير Elite", "تجاوب سريع مع طلبات الضيوف"],
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "سلامة وتجهيزات أساسية على متن يخوت Elite",
    text:
      "تجهيزات السلامة جزء أساسي من أي تجربة يخت فاخرة في دبي. لذلك تحرص Elite Yachts على توفر أدوات السلامة الأساسية والإرشادات اللازمة حسب نوع اليخت وسعته، مع شرح واضح للضيوف قبل الانطلاق.",
    bullets: ["إجراءات سلامة واضحة قبل الانطلاق مع Elite Yachts", "معدات أمان أساسية على متن اليخت", "توجيهات للضيوف عند الصعود"],
  },
  {
    icon: "fa-solid fa-clipboard-check",
    title: "معايير تشغيل Elite Yachts قبل الإبحار",
    text:
      "قبل كل رحلة، تقوم Elite Yachts بالتأكد من جاهزية اليخت وخدمات الضيافة وخطة المسار. هذا يساعد على ضمان رحلة سلسة لليخوت الخاصة، حفلات اليخوت، والرحلات الرومانسية — بمعايير Elite.",
    bullets: ["تأكيد التوفر والمسار قبل الإبحار مع Elite", "جاهزية اليخت والطاقم", "تنسيق توقيت الضيوف والانطلاق بدقة"],
  },
];

const FAQ = [
  {
    q: "هل كل شركات تأجير اليخوت في دبي يجب أن تكون مرخّصة؟",
    a: "نعم. اختيار شركة مرخّصة وتشغيل من مراسٍ معتمدة يقلل المخاطر ويضمن تجربة أكثر احترافية. Elite Yachts تركز على الوضوح في تفاصيل تأجير يخت دبي مارينا قبل التأكيد.",
  },
  {
    q: "هل يشمل الحجز كابتن وطاقم من Elite Yachts؟",
    a: "في أغلب الحالات نعم. عادةً يتضمن تأجير اليخت في دبي كابتن وطاقم لتقديم تجربة آمنة ومريحة—والتفاصيل تُذكر عند تأكيد نوع اليخت والباقة مع Elite.",
  },
  {
    q: "ما الذي يثبت الالتزام بالسلامة في Elite Yachts؟",
    a: "يظهر ذلك عبر جاهزية معدات السلامة، إرشادات الطاقم، تنظيم الصعود والانطلاق، والشفافية قبل تأكيد الحجز. اسأل فريق Elite Yachts عن التفاصيل حسب نوع اليخت والسعة.",
  },
];

function Card({ icon, title, text, bullets }) {
  return (
    <div
      className="
        group relative overflow-hidden
        rounded-3xl bg-white
        border border-black/10
        shadow-[0_22px_70px_rgba(15,23,42,0.10)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_28px_78px_rgba(0,0,0,0.14)]
        hover:border-black/20
      "
    >
      {/* top accent */}
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.45), transparent)" }}
      />

      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
              <TM>الثقة والاعتماد — Elite Yachts</TM>
            </p>
            <h3 className="mt-2 text-lg sm:text-xl font-semibold text-slate-900">
              <TM>{title}</TM>
            </h3>
          </div>

          <span
            className="
              shrink-0 inline-flex h-12 w-12 items-center justify-center
              rounded-full border border-black/10 bg-white
              shadow-[0_14px_30px_rgba(15,23,42,0.10)]
            "
            aria-hidden="true"
          >
            <i className={icon} style={{ color: ACCENT }} />
          </span>
        </div>

        <div className="mt-5 h-px w-full bg-black/10" />

        <p className="mt-4 text-slate-700/90 leading-relaxed text-sm">
          <TM>{text}</TM>
        </p>

        {bullets?.length ? (
          <ul className="mt-5 space-y-2 text-sm text-slate-700/90">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <i className="fa-solid fa-circle-check mt-1 text-[12px] text-black/60" />
                <span><TM>{b}</TM></span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* subtle neutral glow */}
      <div
        className="
          pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full
          opacity-0 blur-3xl transition duration-700
          group-hover:opacity-70
        "
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.10), transparent 70%)",
        }}
      />
    </div>
  );
}

function LinkPill({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-2
        rounded-full border border-black/10 bg-white
        px-4 py-2 text-sm
        text-slate-800
        shadow-[0_14px_30px_rgba(15,23,42,0.08)]
        transition-all duration-300
        hover:border-black/25
        hover:text-black
        hover:shadow-[0_18px_44px_rgba(0,0,0,0.12)]
      "
      aria-label={label}
    >
      <i className={icon} style={{ color: ACCENT }} />
      <span className="underline decoration-black/10 hover:decoration-black/30">
        <TM>{label}</TM>
      </span>
    </a>
  );
}

function FAQItem({ q, a }) {
  return (
    <div
      className="
        rounded-3xl bg-white
        border border-black/10
        shadow-[0_20px_60px_rgba(15,23,42,0.08)]
        p-6 sm:p-7
      "
    >
      <div className="flex items-start gap-3">
        <span
          className="
            inline-flex h-10 w-10 items-center justify-center
            rounded-full border border-black/10 bg-white
            shadow-[0_14px_30px_rgba(15,23,42,0.08)]
          "
          aria-hidden="true"
        >
          <i className="fa-solid fa-circle-question" style={{ color: ACCENT }} />
        </span>
        <div className="min-w-0">
          <h4 className="text-base sm:text-lg font-semibold text-slate-900">
            <TM>{q}</TM>
          </h4>
          <p className="mt-2 text-sm text-slate-700 leading-relaxed">
            <TM>{a}</TM>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LicenseTrustSectionAr() {
  return (
    <section
      dir="rtl"
      lang="ar"
      className="w-full bg-white text-slate-900 py-16 sm:py-20"
      aria-label="الترخيص والسلامة لتأجير اليخوت في دبي"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* ===== HEADER ===== */}
        <header className="text-center max-w-4xl mx-auto">
          <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
            <TM>ثقة • ترخيص • سلامة — Elite Yachts</TM>
          </p>

          <div className="mx-auto mt-3 mb-4 w-[72%]">
            <div className="h-px mx-auto w-52 sm:w-64 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
            <div className="mx-auto mt-2 h-[3px] w-16 rounded-full" style={{ background: ACCENT }} />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.14em] text-slate-900">
            <TM>تأجير يخت مرخّص في دبي مع Elite Yachts وطاقم محترف ومعايير سلامة</TM>
          </h2>

          <p className="mt-5 text-slate-700 leading-relaxed">
            <TM>
              عند اختيار تأجير يخت دبي أو تأجير يخت دبي مارينا، الأهم هو الترخيص والطاقم ومعايير السلامة—ليس السعر فقط.
              في Elite Yachts نركز على تجربة فاخرة منظمة: حجز سريع، تأكيد توفر، طاقم محترف، وتجربة VIP تناسب الرحلات الخاصة،
              حفلات اليخوت، والفعاليات.
            </TM>
          </p>

          {/* External links */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <LinkPill
              href="https://www.dmca.ae/"
              label="هيئة دبي البحرية (DMCA)"
              icon="fa-solid fa-arrow-up-right-from-square"
            />
            <LinkPill
              href="https://u.ae/"
              label="بوابة حكومة الإمارات"
              icon="fa-solid fa-arrow-up-right-from-square"
            />
            <LinkPill
              href="https://www.visitdubai.com/"
              label="Visit Dubai"
              icon="fa-solid fa-arrow-up-right-from-square"
            />
          </div>

          <p className="mt-4 text-sm text-slate-600">
            <TM>
              ملاحظة: تختلف تفاصيل الترخيص والمتطلبات حسب نوع اليخت والسعة وموقع التشغيل. فريق Elite Yachts يشاركك التفاصيل ذات الصلة
              عند اختيار اليخت والباقة المناسبة.
            </TM>
          </p>
        </header>

        {/* ===== CARDS ===== */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPLIANCE_POINTS.map((c) => (
            <Card key={c.title} {...c} />
          ))}
        </div>

        {/* ===== POLICY STRIP ===== */}
        <div className="mt-14 rounded-3xl border border-black/10 bg-white p-8 sm:p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.10)] overflow-hidden relative">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]" />

          <p className="relative text-[11px] tracking-[0.35em] uppercase text-slate-600">
            <TM>ما الذي يجب أن تتأكد منه قبل الحجز مع Elite Yachts؟</TM>
          </p>

          <div className="relative mx-auto mt-3 mb-4 w-[72%]">
            <div className="h-px mx-auto w-52 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
            <div className="mx-auto mt-2 h-[3px] w-16 rounded-full" style={{ background: ACCENT }} />
          </div>

          <h3 className="relative text-xl sm:text-2xl font-semibold tracking-[0.14em] text-slate-900">
            <TM>قائمة تحقق سريعة لتأجير يخت دبي مارينا مع Elite Yachts</TM>
          </h3>

          <div className="relative mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-right">
            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
                <TM>الترخيص</TM>
              </p>
              <p className="mt-2 text-slate-800 leading-relaxed text-sm">
                <TM>اختر شركة مرخّصة وتشغيل من مراسٍ معتمدة، واطلب تفاصيل واضحة عن اليخت والمسار من فريق Elite Yachts.</TM>
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
                <TM>الطاقم</TM>
              </p>
              <p className="mt-2 text-slate-800 leading-relaxed text-sm">
                <TM>تأكد من وجود كابتن وطاقم محترفين، وخبرة في استقبال الضيوف وخدمة VIP بمعايير Elite.</TM>
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
                <TM>السلامة</TM>
              </p>
              <p className="mt-2 text-slate-800 leading-relaxed text-sm">
                <TM>اسأل عن التجهيزات الأساسية وإرشادات السلامة، خصوصًا لرحلات العائلات والمجموعات عند الحجز مع Elite Yachts.</TM>
              </p>
            </div>
          </div>

          <p className="relative mt-6 text-slate-600 text-sm">
            <TM>
              كلمات بحث طبيعية (SEO): تأجير يخت دبي، تأجير يخت دبي مارينا، يخت خاص دبي، حجز يخت دبي،
              يخت فاخر دبي، Elite Yachts Dubai، yacht rental Dubai marina، luxury yacht rental Dubai.
            </TM>
          </p>
        </div>

        {/* ===== MINI FAQ ===== */}
        <div className="mt-14">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-[0.14em] text-slate-900 text-center">
            <TM>أسئلة سريعة عن Elite Yachts والترخيص والطاقم والسلامة</TM>
          </h3>

          <div className="mx-auto mt-4 mb-10 w-[72%]">
            <div className="h-px mx-auto w-52 bg-gradient-to-r from-transparent via-black/15 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FAQ.map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>
        </div>

        {/* ===== FINAL SEO PARAGRAPH ===== */}
        <div className="mt-14 max-w-5xl mx-auto text-right">
          <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <p className="text-[11px] tracking-[0.35em] uppercase text-slate-600">
              <TM>لماذا هذا القسم مهم لدى Elite Yachts؟</TM>
            </p>

            <div className="mt-4 h-px w-full bg-black/10" />

            <p className="mt-5 text-slate-700 leading-relaxed">
              <TM>
                في سوق يخوت دبي، اختيار شركة ترخيصها واضح وطاقمها محترف يعطيك تجربة أفضل. Elite Yachts تقدم تجربة منظمة وواضحة:
                تفاصيل اليخت والسعة والمسار والإضافات قبل التأكيد. سواء كنت تبحث عن تأجير يخت خاص في دبي للعائلات،
                أو يخت حفلات دبي للمجموعات، أو رحلة غروب دبي مارينا للأزواج — Elite Yachts تجعل تجربة Luxury Yacht Rental Dubai
                أكثر راحة وثقة.
              </TM>
            </p>

            <div className="mt-6 flex flex-wrap gap-2 justify-end">
              {[
                "Elite Yachts Dubai",
                "تأجير يخت دبي",
                "حجز يخت دبي مارينا",
                "يخت فاخر دبي",
                "يخت خاص دبي",
                "يخت حفلات دبي",
                "yacht rental Dubai marina",
              ].map((k) => (
                <span
                  key={k}
                  className="
                    inline-flex items-center
                    rounded-full border border-black/10 bg-white/90
                    px-3 py-1 text-[11px] text-slate-700
                    shadow-[0_10px_22px_rgba(15,23,42,0.06)]
                  "
                >
                  <TM>{k}</TM>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
