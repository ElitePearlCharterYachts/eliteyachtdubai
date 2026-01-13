import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ReviewsSlider from "../components/ReviewsSlider";
import YachtsSection from "../components/YachtsSection";

const WHATSAPP =
  "https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85";
const PHONE = "tel:+971569006603";
const EMAIL =
  "mailto:info@eliteyachtrental.com?subject=%D8%AD%D8%AC%D8%B2%20%D8%B1%D9%8A%D8%A7%D8%B6%D8%A7%D8%AA%20%D9%85%D8%A7%D8%A6%D9%8A%D8%A9%20%D9%81%D9%8A%20%D8%AF%D8%A8%D9%8A";

const BTN = `
  rounded-full py-2 text-[12px]
  text-black text-center
  border border-black/15
  bg-gradient-to-b from-black/5 via-black/[0.03] to-white
  transition-all duration-300
  hover:from-black/10 hover:via-black/[0.06] hover:to-white
  hover:border-black/30
  hover:shadow-[0_10px_25px_rgba(0,0,0,0.10)]
`;

function EliteUnderline() {
  return (
    <div className="relative mx-auto mt-3 mb-4 h-[10px] w-[72%]">
      <div className="h-px mx-auto w-56 bg-gradient-to-r from-transparent via-black/60 to-transparent" />
    </div>
  );
}

function SectionHead({ eyebrow = "ELITE YACHTS", title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-[11px] tracking-[0.35em] opacity-80 uppercase text-black/70">
        {eyebrow}
      </p>
      <EliteUnderline />
      <h2 className="text-[22px] sm:text-[30px] font-bold uppercase tracking-[0.22em] opacity-95 text-black">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl mx-auto text-sm sm:text-[15px] leading-relaxed text-black/70">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function GlowPanel({ children, className = "" }) {
  return (
    <div
      className={`relative rounded-2xl bg-white ring-1 ring-black/10 ${className}`}
      style={{
        boxShadow: "0 18px 50px rgba(15,23,42,0.10)",
      }}
    >
      {children}
    </div>
  );
}

function Chip({ icon, text }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-[12px] text-black/85">
      <i className={icon} />
      {text}
    </span>
  );
}

function IconCard({ icon, title, desc }) {
  return (
    <GlowPanel className="p-6">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 shrink-0 rounded-full bg-black/5 ring-1 ring-black/10 flex items-center justify-center">
          <i className={`${icon} text-black/80`} />
        </div>
        <div className="text-right">
          <h3 className="text-[15px] font-bold uppercase tracking-[0.22em] text-black/90">
            {title}
          </h3>
          <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-black/70">
            {desc}
          </p>
        </div>
      </div>
    </GlowPanel>
  );
}

function SportCard({ title, icon, points, tag }) {
  return (
    <GlowPanel className="p-6 overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-black/[0.06] blur-3xl" />
      <div className="relative text-right">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 shrink-0 rounded-full bg-black/5 ring-1 ring-black/10 flex items-center justify-center">
            <i className={`${icon} text-black/80`} />
          </div>
          <div className="flex-1">
            <h3 className="text-[15px] font-bold uppercase tracking-[0.22em] text-black/90">
              {title}
            </h3>
            {tag ? (
              <div className="mt-2">
                <span className="inline-flex rounded-full border border-black/15 bg-black/[0.03] px-4 py-1.5 text-[11px] tracking-[0.25em] uppercase text-black/70">
                  {tag}
                </span>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm text-black/70">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-3 justify-end">
              <p className="leading-relaxed">{p}</p>
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-black/50" />
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a className={BTN} href={PHONE}>
            <i className="fa-solid fa-phone ml-2" />
            اتصل الآن
          </a>
          <a className={BTN} href={WHATSAPP} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp ml-2" />
            واتساب
          </a>
        </div>
      </div>
    </GlowPanel>
  );
}

function FAQItem({ q, a }) {
  return (
    <GlowPanel className="p-6 text-right">
      <h4 className="text-[13px] font-bold uppercase tracking-[0.22em] text-black/90">
        {q}
      </h4>
      <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-black/70">
        {a}
      </p>
    </GlowPanel>
  );
}

export default function WaterSports() {
  const [yachts, setYachts] = useState([]);

  useEffect(() => {
    fetch("/data/yachts.json")
      .then((r) => r.json())
      .then(setYachts)
      .catch(console.error);
  }, []);

  const featured = useMemo(() => yachts.slice(0, 6), [yachts]);

  return (
    <div dir="rtl" lang="ar" className="w-full bg-white text-black">
      {/* HERO */}
      <section
        className="relative w-full"
        style={{
          backgroundImage: "url('/images/banners/watersports.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/45 to-white" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 pb-14">
          <div className="max-w-3xl text-right">
            <p className="text-[11px] tracking-[0.35em] opacity-80 uppercase text-black/70">
              ELITE YACHTS • رياضات مائية في دبي
            </p>

            <h1 className="mt-3 text-[28px] sm:text-[52px] font-bold uppercase tracking-[0.22em] opacity-95 leading-[1.05] text-black">
              تجربة <br className="hidden sm:block" />
              الرياضات المائية
            </h1>

            <p className="mt-5 text-sm sm:text-[15px] leading-relaxed text-black/75">
              أضف جرعة من الحماس ليومك على اليخت مع أفضل الرياضات المائية — جت سكي، سي بوب،
              وايك بورد، بنانا رايد وأكثر. نحن نتولى التجهيز والسلامة لتستمتع بالتجربة بكل راحة.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 justify-end">
              <Chip icon="fa-solid fa-jet-fighter-up" text="جت سكي" />
              <Chip icon="fa-solid fa-person-swimming" text="سي بوب" />
              <Chip icon="fa-solid fa-water" text="وايك بورد" />
              <Chip icon="fa-solid fa-life-ring" text="السلامة أولاً" />
            </div>

            <div className="mt-7 flex flex-wrap gap-3 justify-end">
              <a className={BTN + " px-7"} href={WHATSAPP} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp ml-2" />
                احجز الرياضات المائية
              </a>
              <a className={BTN + " px-7"} href={PHONE}>
                <i className="fa-solid fa-phone ml-2" />
                اتصل الآن
              </a>
              <a className={BTN + " px-7"} href={EMAIL}>
                <i className="fa-regular fa-envelope ml-2" />
                البريد الإلكتروني
              </a>
            </div>

            <div className="mt-8">
              <span className="inline-flex rounded-full border border-black/15 bg-black/[0.03] px-4 py-2 text-[11px] tracking-[0.25em] uppercase text-black/70">
                إضافة متاحة مع أي حجز يخت
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SPORTS GRID */}
      <section className="py-14">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <SectionHead
            title="اختر الرياضات المائية المناسبة"
            subtitle="اختر نشاطاً واحداً أو اجمع بين عدة أنشطة — وسنقترح الأفضل حسب عدد الضيوف والمسار والوقت."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <SportCard
              title="جت سكي"
              icon="fa-solid fa-person-rays"
              tag="الأكثر طلباً"
              points={[
                "متعة السرعة مع إطلالات أفق دبي",
                "مثالي للمجموعات بالتناوب",
                "إضافة رائعة لحجوزات 2–4 ساعات",
              ]}
            />
            <SportCard
              title="سي بوب"
              icon="fa-solid fa-fish-fins"
              tag="فاخر وسلس"
              points={[
                "تجربة انزلاق تحت الماء بمستوى فاخر",
                "سهل التعلم ونتائج فيديو سينمائية",
                "مثالي للأوقات الهادئة على الماء",
              ]}
            />
            <SportCard
              title="وايك بورد"
              icon="fa-solid fa-person-snowboarding"
              tag="أدرينالين"
              points={[
                "مناسب للضيوف النشطين ومحبي التحدي",
                "رائع لمجموعات أعياد الميلاد",
                "نوفر الإرشادات ومتطلبات السلامة",
              ]}
            />
            <SportCard
              title="بنانا رايد"
              icon="fa-solid fa-people-group"
              tag="متعة للمجموعات"
              points={[
                "نشاط جماعي مليء بالضحك والحماس",
                "مناسب للعائلات والأصدقاء",
                "مثالي للحظات سريعة بطاقة عالية",
              ]}
            />
            <SportCard
              title="دونات رايد"
              icon="fa-solid fa-circle-nodes"
              tag="سريع وممتع"
              points={[
                "تجربة سحب حماسية مع أمواج ومنعطفات",
                "الأفضل للمجموعات والاحتفالات",
                "تجهيز سريع ومتعة فورية",
              ]}
            />
            <SportCard
              title="بادِل بورد"
              icon="fa-solid fa-person-walking"
              tag="استرخاء"
              points={[
                "نشاط هادئ لمسارات مناظر طبيعية",
                "مثالي للشروق / الغروب",
                "مناسب للأزواج والعائلات",
              ]}
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a className={BTN + " px-7"} href={WHATSAPP} target="_blank" rel="noreferrer">
              احصل على عرض سعر للرياضات المائية
            </a>
            <a className={BTN + " px-7"} href={PHONE}>
              اتصل الآن
            </a>
          </div>
        </div>
      </section>

      {/* SAFETY / WHAT TO EXPECT */}
      <section className="py-14 border-t border-black/10">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <SectionHead
            title="ماذا تتوقع؟"
            subtitle="بسيط وآمن وبمستوى فاخر — نحن نتولى التجهيز لتبقى تجربتك سلسة."
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <IconCard
              icon="fa-solid fa-life-ring"
              title="السلامة والتعليمات"
              desc="نوفر مستلزمات السلامة وتعليمات سريعة قبل بدء النشاط."
            />
            <IconCard
              icon="fa-solid fa-clock"
              title="تنظيم الوقت بسلاسة"
              desc="نحدد أفضل توقيت خلال رحلتك (حسب المسار وحالة البحر)."
            />
            <IconCard
              icon="fa-solid fa-camera"
              title="لحظات تصوير رائعة"
              desc="مثالي للصور والفيديو — خصوصاً قرب المعالم ومسارات الأفق."
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a className={BTN + " px-7"} href={WHATSAPP} target="_blank" rel="noreferrer">
              اسألنا عن الأنسب لليخت
            </a>
            <Link className={BTN + " px-7"} to="/elite-yachts-fleet">
              مشاهدة الأسطول
            </Link>
          </div>
        </div>
      </section>

      <YachtsSection />

      <ReviewsSlider />

      {/* FAQ */}
      <section className="py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <SectionHead
            title="الأسئلة الشائعة"
            subtitle="إجابات سريعة — تواصل معنا لمعرفة التوفر والأسعار بدقة."
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FAQItem
              q="هل يمكن إضافة الرياضات المائية لأي يخت؟"
              a="معظم اليخوت تدعم الإضافات. سنؤكد التوافق حسب اليخت والمسار ومدة الحجز."
            />
            <FAQItem
              q="هل هي آمنة للمبتدئين؟"
              a="نعم. نقدم إرشادات سريعة ومستلزمات السلامة. أخبرنا بمستوى مجموعتك وسنقترح الأفضل."
            />
            <FAQItem
              q="ما أفضل وقت للرياضات المائية؟"
              a="عادةً خلال أوقات البحر الهادئ وقبل الغروب. سننصحك بأفضل توقيت حسب مسارك."
            />
            <FAQItem
              q="هل يمكن دمج أكثر من نشاط؟"
              a="نعم. كثير من الضيوف يجمعون بين جت سكي + سي بوب أو يضيفون نشاطاً جماعياً (بنانا/دونات) للحظات ممتعة."
            />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a className={BTN + " px-7"} href={WHATSAPP} target="_blank" rel="noreferrer">
              اسأل عبر واتساب
            </a>
            <a className={BTN + " px-7"} href={PHONE}>
              اتصل الآن
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <GlowPanel className="p-10 text-center overflow-hidden">
            <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-black/[0.06] blur-3xl" />
            <div className="relative">
              <p className="text-[11px] tracking-[0.35em] opacity-80 uppercase text-black/70">
                ELITE YACHTS
              </p>
              <EliteUnderline />
              <h3 className="text-[18px] sm:text-[28px] font-bold uppercase tracking-[0.22em] opacity-95 text-black">
                جاهز للرياضات المائية؟
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-black/70 max-w-2xl mx-auto">
                أخبرنا باسم اليخت (أو عدد الضيوف)، التاريخ، والأنشطة التي تريدها — وسنرسل لك عرضاً مميزاً.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a className={BTN + " px-7"} href={WHATSAPP} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-whatsapp ml-2" />
                  واتساب
                </a>
                <a className={BTN + " px-7"} href={PHONE}>
                  <i className="fa-solid fa-phone ml-2" />
                  اتصال
                </a>
                <a className={BTN + " px-7"} href={EMAIL}>
                  <i className="fa-regular fa-envelope ml-2" />
                  بريد
                </a>
              </div>

              <div className="mt-4 text-[12px] text-black/55">
                <span dir="ltr" className="font-semibold">+971 56 900 6603</span>
              </div>
            </div>
          </GlowPanel>
        </div>
      </section>
    </div>
  );
}
