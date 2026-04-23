import React, { useState } from "react";
import { Link } from "react-router-dom";

function SectionBar({ title }) {
  return (
    <div className="mt-12 rounded-md border border-black/10 bg-white px-4 py-2 shadow-[0_10px_26px_rgba(15,23,42,0.06)]">
      <h3 className="text-[12px] tracking-[0.28em] uppercase text-black/70">
        {title}
      </h3>
    </div>
  );
}

function Divider() {
  return <div className="my-3 h-px w-full bg-black/8" />;
}

const yachtTypes = [
  {
    title: "Sport & Leisure Cruisers (25–45 ft)",
    capacity: "حتى 12 ضيف",
    price: "400–600 درهم / الساعة",
    desc: "الخيار المفضل للمجموعات من 4 إلى 12 شخصًا — سريعة، مرنة، ومناسبة تمامًا لرحلات الغروب لمدة 2–4 ساعات، رحلات الصيد، أو الجولات السياحية. يشمل معظمها قبطانًا وطاقمًا أساسيًا.",
    tag: "الأكثر شعبية",
  },
  {
    title: "Motor Yachts (50–75 ft)",
    capacity: "حتى 25 ضيف",
    price: "1,200–2,500 درهم / الساعة",
    desc: "الفئة المتوسطة التي تستوعب غالبية الفعاليات المؤسسية والتجمعات الاجتماعية الأكبر. يخت بطول 65 قدمًا يستوعب بشكل مريح 15 إلى 25 ضيفًا مع مساحة سطح مناسبة، صالة مكيفة، حمامات، ومطبخ.",
    tag: "الأمثل للمجموعات",
  },
  {
    title: "Luxury & Superyachts (80 ft+)",
    capacity: "حتى 50 ضيف",
    price: "تبدأ من 15,000 درهم / اليوم",
    desc: "أجنحة رئيسية، طوابق متعددة، جاكوزي، تجهيزات طعام كاملة، وطاقم ضيافة من أربعة إلى ثمانية أفراد. هذه هي اليخوت التي يتم حجزها عندما يتطلب الحدث مكانًا يوازيه.",
    tag: "الفئة الملكية",
  },
  {
    title: "Catamarans & Sailing Yachts",
    capacity: "مجموعات كبيرة",
    price: "أسعار متوسطة",
    desc: "مناسبة للمجموعات التي تفضل المساحة والاستقرار أكثر من السرعة — شائعة لرحلات الغطس، رحلات الغروب مع أعداد أكبر، والفعاليات التي يفضل فيها الضيوف البقاء في الخارج.",
    tag: "مثالية للعائلات",
  },
];

const priceTable = [
  { label: "Sport Cruiser (25–45 ft)", guests: "حتى 12 ضيف", price: "400–700 AED / الساعة" },
  { label: "Mid-Range Motor Yacht (50–65 ft)", guests: "حتى 25 ضيف", price: "1,200–2,500 AED / الساعة" },
  { label: "Large Motor Yacht (70–80 ft)", guests: "حتى 35 ضيف", price: "2,500–5,000 AED / الساعة" },
  { label: "Superyacht (80 ft+)", guests: "حتى 50 ضيف", price: "5,000–15,000+ AED / الساعة" },
];

const occasions = [
  {
    title: "أعياد الميلاد",
    icon: "🎂",
    desc: "عيد ميلاد على يخت خاص يختلف فعلًا عن حجز مطعم. مجموعتك تمتلك اليخت بالكامل — لا طاولات مجاورة، لا ضغط لتسليم المكان، ولا غرباء. أحضر زيناتك الخاصة، طلب كعكة مخصصة، أو اترك الطاقم يجهز كل شيء.",
    to: "/عروض-اليخوت",
  },
  {
    title: "رحلات الغروب الرومانسية",
    icon: "🌅",
    desc: "بين أكتوبر وأبريل، الفترة من 6 إلى 8 مساءً في دبي تقدم إضاءة مذهلة. رحلة غروب خاصة لشخصين مع عشاء على السطح تغطي معظم احتياجات الذكرى السنوية أو عروض الزواج.",
    to: "/عروض-اليخوت",
  },
  {
    title: "فعاليات الشركات",
    icon: "💼",
    desc: "استئجار اليخوت يعمل بشكل ممتاز للاستخدامات المؤسسية — إطلاق المنتجات، ترفيه العملاء، أيام الفريق، وفعاليات نهاية العام. البيئة المغلقة والحصرية تخلق ظروفًا لبناء علاقات حقيقية.",
    to: "/corporate-yacht-events-dubai",
  },
  {
    title: "عطلات نهاية الأسبوع والرحلات الليلية",
    icon: "🌙",
    desc: "للعملاء الذين يريدون أكثر من بضع ساعات، الرحلات الليلية باتجاه شبه جزيرة مسندم أو نزولًا على الساحل الشرقي تقدم إيقاعًا مختلفًا تمامًا. فيوردات مسندم تُذكر باستمرار كأكثر رحلة تقديرًا.",
    to: "/خدمات-تأجير-اليخوت-في-دبي",
  },
];

const locations = [
  {
    title: "دبي مارينا",
    desc: "نقطة الانطلاق الأكثر شعبية، والأكثر روعة من الناحية البصرية. الأبراج التي تصطف على جانبي قناة بطول 3 كيلومترات تنفتح على الخليج. الإبحار لمدة 30 دقيقة من مدخل المارينا إلى واجهة JBR يقدم تنوعًا بصريًا أكثر مما تقدمه معظم الجولات.",
    to: "/يخوتنا-يخت-النخبة-دبي",
  },
  {
    title: "نخلة جميرا",
    desc: "من البحر يمنحك منظورًا لا يمكن لأي زيارة برية أن توفره. فيلات السعف، أبراج أتلانتس، والأفق المفتوح وراء الحاجز البحري تشكّل جولة لا تُنسى لمدة 2–3 ساعات.",
    to: "/خدمات-تأجير-اليخوت-في-دبي",
  },
  {
    title: "برج العرب وجميرا بيتش",
    desc: "يُعد خيارًا أساسيًا في معظم جولات مشاهدة معالم دبي. منظر برج العرب من مستوى سطح الماء، مع الامتداد الكامل لشاطئ جميرا في الخلفية، هو أحد تلك المشاهد التي تفي فعليًا بما تعد به الصور.",
    to: "/خدمات-تأجير-اليخوت-في-دبي",
  },
  {
    title: "شبه جزيرة مسندم",
    desc: "لرحلات التأجير متعددة الأيام، تقدم مناظر فيورد لا تشبه إطلاقًا ساحل دبي. يمكن الوصول إلى خصب في رحلة إبحار ليوم كامل. أما مسار الساحل الشرقي عبر الفجيرة فيضيف صيد الأسماك في المياه المفتوحة والغوص في الشعاب المرجانية.",
    to: "/خدمات-تأجير-اليخوت-في-دبي",
  },
];

const tips = [
  {
    title: "احجز من الثلاثاء إلى الخميس",
    desc: "الرحلات خلال منتصف الأسبوع تكون أرخص بشكل ملحوظ مقارنة بعطلة نهاية الأسبوع في معظم الأساطيل. التوفير يستحق إذا كان تاريخك مرنًا.",
  },
  {
    title: "فكّر في الصيف",
    desc: "من يونيو إلى سبتمبر تنخفض معدلات الطلب وتقدم الشركات أسعارًا مخفضة. التواجد على متن يخت متحرك عند شروق الشمس أو في المساء يكون مريحًا حقًا.",
  },
  {
    title: "جمّع الإضافات عند الحجز",
    desc: "خدمات التموين، معدات الرياضات المائية، التصوير، والديكورات تكون دائمًا تقريبًا أرخص عند إضافتها مسبقًا بدلًا من طلبها في يوم الرحلة.",
  },
  {
    title: "اختر اليخت المناسب لمجموعتك",
    desc: "الدفع مقابل يخت بطول 75 قدمًا بينما يمكن لمجموعتك المكونة من 10 أشخاص أن تكون مرتاحة على يخت بطول 50 قدمًا هو خطأ شائع جدًا ويمكن تجنبه تمامًا.",
  },
  {
    title: "تأكد من تكلفة الوقود والإكرامية كتابيًا",
    desc: "هذان البندان هما الأكثر شيوعًا في التسبب بمفاجآت في الفواتير بعد انتهاء الرحلة. احرص على توضيحهما كتابيًا قبل توقيع أي شيء.",
  },
  {
    title: "احجز مبكرًا للمواعيد المزدحمة",
    desc: "ليلة رأس السنة، اليوم الوطني لدولة الإمارات (2 ديسمبر)، وعطلات نهاية الأسبوع الخاصة بالفعاليات الكبرى تمتلئ قبل أسابيع.",
  },
];

const faqs = [
  {
    q: "ما تكلفة استئجار يخت في دبي؟",
    a: "تبدأ الأسعار من حوالي 400 درهم إماراتي في الساعة ليخت رياضي صغير، وقد تصل إلى 15,000 درهم إماراتي في الساعة أو أكثر ليخت فاخر كبير. عادةً ما تبلغ تكلفة رحلة غروب لمدة 4 ساعات على يخت بمحرك بطول 60 قدمًا لـ 10–15 ضيف حوالي 5,000–9,000 درهم إماراتي.",
  },
  {
    q: "كم عدد الضيوف الذين يمكنهم الصعود على متن اليخت؟",
    a: "تختلف السعة حسب الأسطول. تستوعب اليخوت الرياضية من 4 إلى 12 ضيفًا. اليخوت المتوسطة بمحركات بطول 50–70 قدمًا تعمل بشكل جيد لـ 10–25 ضيفًا. يمكن لليخوت الفاخرة استيعاب 30–50 ضيفًا لفعالية واقفة. اسأل عن السعة المريحة بدلًا من الحد الأقصى.",
  },
  {
    q: "هل يشمل السعر الطعام؟",
    a: "تشمل المشروبات الأساسية — الماء، والمشروبات الغازية، وأحيانًا وجبات خفيفة — عادةً في السعر القياسي. أما الوجبات الكاملة، والمشروبات الكحولية، والقوائم المخصصة فتُفرض عليها رسوم إضافية في معظم الحالات. تحقق بالضبط مما هو مشمول عند الحجز.",
  },
  {
    q: "ما هو أفضل وقت في السنة لاستئجار يخت في دبي؟",
    a: "الفترة من أكتوبر إلى أبريل هي الأكثر راحة — درجات حرارة بين 20 و32 درجة مئوية، بحر الخليج مستقر، وسماء صافية. ديسمبر ويناير هما الأكثر طلبًا. من مايو إلى سبتمبر تكون الأجواء حارة لكن الرحلات المسائية والصباحية المبكرة قابلة للإدارة تمامًا، والأسعار أكثر جاذبية.",
  },
  {
    q: "هل يمكننا إحضار طعامنا ومشروباتنا الخاصة؟",
    a: "يسمح معظم المشغلين بذلك، أحيانًا مع رسوم إضافية (corkage) للمشروبات الكحولية. تختلف السياسات — فبعض اليخوت التي تضم طاقم مطبخ كامل تفضل إدارة خدمة الطعام بالكامل. قم بالتنسيق مع الطاقم قبل وقت كافٍ من الإبحار.",
  },
  {
    q: "كم من الوقت يجب أن أحجز مسبقًا؟",
    a: "عادةً ما تكون مدة 3 إلى 7 أيام كافية للحجوزات في منتصف الأسبوع. حجوزات عطلة نهاية الأسبوع تتطلب 1 إلى 2 أسبوع. أما التواريخ المزدحمة — مثل ليلة رأس السنة، اليوم الوطني لدولة الإمارات، وعطلات العيد — فتحتاج إلى 3–6 أسابيع على الأقل.",
  },
];

export default function ContentSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section dir="rtl" lang="ar" className="relative w-full bg-white text-black">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.05),transparent_55%)]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 py-16 lg:py-24 text-[15px] sm:text-[16px]">

        {/* ── INTRO ── */}
        <div className="flex justify-center mb-6">
          <span className="h-px w-24 bg-black/20" />
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black leading-snug">
            تأجير يخوت فاخرة في دبي
          </h2>
          <p className="mt-2 text-sm tracking-[0.22em] uppercase text-black/40">
            الإيجارات · الأسعار · ونصائح صادقة
          </p>
          <p className="mt-2 text-xs text-black/40 tracking-widest">
            Elite Yacht Dubai · Dubai Marina · Palm Jumeirah · جميع مياه الإمارات
          </p>
        </div>

        <p className="mt-8 leading-loose text-black/70 text-[15px]">
          تبدو دبي مختلفة تمامًا عند رؤيتها من الماء. يظهر برج العرب بشكل مختلف عندما تكون على بعد 400 متر في عرض البحر، ويصبح شكل نخلة جميرا منطقيًا أخيرًا عندما تبحر على طول هلالها، أما أفق Dubai Marina — الذي يُعد بالفعل من أكثر المناظر تصويرًا في العالم — فيتحول إلى تجربة مختلفة تمامًا عند مشاهدته من على سطح يخت وقت غروب الشمس.
        </p>
        <p className="mt-4 leading-loose text-black/70 text-[15px]">
          تقوم <strong className="text-black/90">Elite Yacht Dubai</strong> بتأجير اليخوت في جميع أنحاء Dubai Marina وPalm Jumeirah وعلى طول سواحل الإمارات — بدءًا من رحلات الغروب الخاصة وحفلات أعياد الميلاد، وصولًا إلى الفعاليات المؤسسية، ورحلات الصيد، وتأجيرات المبيت.
        </p>

        {/* ── WHY DUBAI ── */}
        <SectionBar title="لماذا يعمل تأجير اليخوت بشكل ممتاز في دبي؟" />

        <p className="mt-6 leading-loose text-black/70">
          أكثر من 70 كيلومترًا من السواحل، ومرسى يُعد فعلًا من الطراز العالمي، وطقس يجعل الخليج مريحًا لمعظم أشهر السنة — دبي، من الناحية العملية، تُعد واحدة من أفضل الأماكن على الكوكب للتواجد على متن قارب.
        </p>
        <p className="mt-4 leading-loose text-black/70">
          ما يقدمه اليخت الخاص ولا تستطيع معظم التجارب الفاخرة على اليابسة تقديمه: <strong className="text-black/90">خصوصية حقيقية.</strong> غرفة طعام خاصة لا تزال تضعك داخل مبنى مليء بالغرباء. أما اليخت الخاص فيضعك في عرض المياه المفتوحة مع الأشخاص الذين اخترت دعوتهم فقط — أمر مهم لأعياد الميلاد، عروض الزواج، أمسيات العملاء للشركات، وعشاءات الذكرى السنوية.
        </p>

        {/* ── YACHT TYPES ── */}
        <SectionBar title="أنواع اليخوت المتاحة" />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {yachtTypes.map((y) => (
            <div
              key={y.title}
              className="rounded-xl border border-black/10 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <p className="text-[14px] font-semibold text-black/90 leading-snug">{y.title}</p>
                <span className="shrink-0 text-[10px] tracking-[0.18em] uppercase border border-black/15 rounded-full px-2.5 py-0.5 text-black/55">
                  {y.tag}
                </span>
              </div>
              <div className="flex gap-4 text-[12px] text-black/50 flex-wrap">
                <span>👥 {y.capacity}</span>
                <span>💰 {y.price}</span>
              </div>
              <p className="text-[13px] leading-relaxed text-black/65">{y.desc}</p>
            </div>
          ))}
        </div>

        {/* ── PRICING ── */}
        <SectionBar title="أسعار تأجير اليخوت في دبي — ما يجب وضعه في الميزانية" />

        <p className="mt-5 text-[14px] text-black/60 leading-relaxed">
          تختلف الأسعار حسب حجم اليخت، ووقت السنة، ويوم الأسبوع، وما يتضمنه العرض. النطاقات أدناه إرشادات عملية واقعية — وليست عروض أسعار ثابتة.
        </p>

        {/* Price table */}
        <div className="mt-5 overflow-x-auto rounded-xl border border-black/10 shadow-[0_8px_24px_rgba(15,23,42,0.05)]">
          <table className="w-full min-w-[480px] text-[13px] sm:text-[14px]">
            <thead>
              <tr className="border-b border-black/8 bg-black/[0.02]">
                <th className="text-right py-3 px-4 font-semibold text-black/70 w-[45%]">نوع اليخت</th>
                <th className="text-right py-3 px-4 font-semibold text-black/70 w-[25%]">السعة</th>
                <th className="text-right py-3 px-4 font-semibold text-black/70 w-[30%]">السعر</th>
              </tr>
            </thead>
            <tbody>
              {priceTable.map((row, i) => (
                <tr key={i} className="border-b border-black/5 last:border-0 hover:bg-black/[0.015] transition">
                  <td className="py-3 px-4 text-black/80">{row.label}</td>
                  <td className="py-3 px-4 text-black/60">{row.guests}</td>
                  <td className="py-3 px-4 text-black/80 font-medium">{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[13px]">
          {[
            { label: "نصف يوم (4 ساعات)", note: "≈ 3.5× السعر بالساعة" },
            { label: "يوم كامل (8 ساعات)", note: "6–7× مع خصومات" },
            { label: "تكون أسعار الجمعة والسبت", note: "أعلى بنسبة 15–25%" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-black/8 bg-black/[0.015] px-4 py-3">
              <p className="font-semibold text-black/80">{item.label}</p>
              <p className="text-black/50 mt-0.5">{item.note}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[13px] text-black/55 leading-relaxed">
          تشمل حزمة التأجير القياسية عادةً اليخت، والقبطان والطاقم، ومعدات السلامة، والمشروبات الأساسية. أما الطعام الذي يتجاوز الوجبات الخفيفة، ومعدات الرياضات المائية، والزينة، والتصوير، فعادةً ما يتم احتسابها بشكل منفصل.
        </p>

        {/* ── OCCASIONS ── */}
        <SectionBar title="أفضل المناسبات لاستئجار يخت في دبي" />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {occasions.map((o) => (
            <Link
              key={o.title}
              to={o.to}
              className="group rounded-xl border border-black/10 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_16px_44px_rgba(0,0,0,0.09)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{o.icon}</span>
                <p className="text-[14px] font-semibold text-black/90">{o.title}</p>
              </div>
              <p className="text-[13px] leading-relaxed text-black/65">{o.desc}</p>
              <div className="mt-4">
                <span className="inline-flex rounded-full px-3 py-1 text-[11px] tracking-[0.2em] uppercase border border-black/10 text-black/55 group-hover:border-black/25 group-hover:text-black transition">
                  اكتشف
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── LOCATIONS ── */}
        <SectionBar title="أفضل مواقع تأجير اليخوت في دبي والإمارات" />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((l) => (
            <Link
              key={l.title}
              to={l.to}
              className="group rounded-xl border border-black/10 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_16px_44px_rgba(0,0,0,0.09)]"
            >
              <p className="text-[14px] font-semibold text-black/90 mb-2">{l.title}</p>
              <p className="text-[13px] leading-relaxed text-black/60">{l.desc}</p>
              <div className="mt-4">
                <span className="inline-flex rounded-full px-3 py-1 text-[11px] tracking-[0.2em] uppercase border border-black/10 text-black/55 group-hover:border-black/25 group-hover:text-black transition">
                  عرض المسار
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── HOW TO CHOOSE ── */}
        <SectionBar title="كيفية اختيار شركة موثوقة لتأجير اليخوت في دبي" />

        <div className="mt-6 space-y-5 text-[15px] leading-loose text-black/70">
          <div>
            <p className="font-semibold text-black/85 mb-1">أولًا: الترخيص</p>
            <p>يجب أن تحمل كل سفينة تجارية في مياه الإمارات ترخيصًا ساريًا من Dubai Maritime City Authority (DMCA) أو من الجهة البحرية المختصة. اطلب الاطلاع عليه قبل الحجز — فالمشغل الجيد سيقدمه فورًا.</p>
          </div>
          <Divider />
          <div>
            <p className="font-semibold text-black/85 mb-1">مؤهلات الطاقم</p>
            <p>يجب أن يحمل القبطان شهادة معترف بها في الإمارات تتناسب مع فئة السفينة ومنطقة الإبحار. كما ينبغي أن يحمل الطاقم شهادات تدريب السلامة STCW سارية. اسأل عن ذلك.</p>
          </div>
          <Divider />
          <div>
            <p className="font-semibold text-black/85 mb-1">حالة اليخت</p>
            <p>اطلب زيارة قبل الحجز أو اطلب صورًا التقطها ضيوف فعليون — وليس مواد تسويقية. حالة التنجيد، نظافة المطبخ، وحالة معدات الإنقاذ كلها تعكس كيفية صيانة المشغل لممتلكاته.</p>
          </div>
        </div>

        {/* ── SAFETY ── */}
        <SectionBar title="السلامة والتراخيص — ما تتطلبه القوانين" />

        <p className="mt-6 leading-loose text-black/70">
          يفرض قانون الملاحة البحرية في دولة الإمارات العربية المتحدة وجود معدات سلامة محددة على كل رحلة تأجير تجارية: سترات نجاة لجميع الركاب، طفايات حريق، مشاعل إنذار، حقيبة إسعافات أولية، وجهاز راديو VHF. يجب أن يكون تسجيل خفر السواحل ساريًا ومعروضًا على متن القارب.
        </p>
        <p className="mt-3 leading-loose text-black/70">
          قبل الانطلاق، سيقوم الطاقم بتقديم إحاطة تتعلق بالسلامة تشمل مواقع سترات النجاة، مخارج الطوارئ، حالة البحر، وأي مناطق يجب تجنبها. الإكرامية ليست إلزامية لكنها متعارف عليها — 10–15% من رسوم التأجير يُعتبر دليلًا مناسبًا عندما يقدم الطاقم خدمة جيدة.
        </p>

        {/* ── TIPS ── */}
        <SectionBar title="نصائح عملية للحصول على قيمة أفضل عند حجز اليخت" />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="rounded-xl border border-black/10 bg-white p-4 shadow-[0_6px_20px_rgba(15,23,42,0.05)]"
            >
              <div className="flex items-start gap-2">
                <span className="mt-1 text-[11px] font-bold text-black/30 tracking-widest shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-black/85 mb-1">{tip.title}</p>
                  <p className="text-[12px] leading-relaxed text-black/60">{tip.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── FAQ ── */}
        <SectionBar title="الأسئلة الشائعة" />

        <div className="mt-6 space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="rounded-xl border border-black/10 bg-white shadow-[0_4px_14px_rgba(15,23,42,0.04)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-3 px-5 py-4 text-right transition hover:bg-black/[0.015]"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14px] font-semibold text-black/85 leading-snug">{faq.q}</span>
                  <span
                    className={`shrink-0 text-black/40 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[13px] leading-relaxed text-black/65 border-t border-black/6 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-14 text-center">
          <div className="inline-block rounded-2xl border border-black/10 bg-black/[0.02] px-8 py-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] max-w-xl w-full">
            <p className="text-[11px] tracking-[0.28em] uppercase text-black/40 mb-3">هل أنت مستعد للحجز؟</p>
            <p className="text-[15px] text-black/70 leading-relaxed mb-6">
              أخبرنا بتاريخك، وعدد الأشخاص، ونوع المناسبة — وسنقوم بمطابقتك مع اليخت المناسب وإرسال عرض تفصيلي خلال بضع ساعات.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact-us"
                className="rounded-full bg-black text-white text-[13px] tracking-[0.15em] uppercase px-7 py-3 hover:bg-black/80 transition"
              >
                احجز الآن
              </Link>
              <Link
                to="/يخوتنا-يخت-النخبة-دبي"
                className="rounded-full border border-black/20 text-black/70 text-[13px] tracking-[0.15em] uppercase px-7 py-3 hover:border-black/40 hover:text-black transition"
              >
                استعرض الأسطول
              </Link>
            </div>
            <div className="mt-6 pt-5 border-t border-black/8 text-[11px] text-black/40 space-y-1">
              <p>Company: Elite Yacht Dubai</p>
              <p>Departure: Dubai Marina Yacht Club & JBR Waterfront</p>
              <p>Service Area: Dubai Marina · Palm Jumeirah · Jumeirah Beach · Abu Dhabi · Fujairah · All UAE Waters</p>
              <p>Operating Hours: 7 أيام في الأسبوع — رحلات الشروق تبدأ من 6:00 صباحًا · تتوفر رحلات ليلية طوال الليل</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
