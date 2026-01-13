import { useState } from "react";

const FAQS = [
  {
    q: "ما الذي يشمله سعر تأجير اليخت؟",
    a: "عادةً يشمل السعر: اليخت، القبطان والطاقم، الوقود للمسارات القياسية، ومرافق اليخت الأساسية. يمكن إضافة خيارات مثل الضيافة (Catering)، الديكور، أو مسارات خاصة حسب الطلب.",
  },
  {
    q: "كم عدد الأشخاص المسموح بهم على اليخت؟",
    a: "السعة تعتمد على نوع اليخت. كل يخت له حد أقصى للضيوف. ولتجربة أكثر راحة، ننصح بعدم تجاوز السعة المعلنة.",
  },
  {
    q: "ما أقل مدة للحجز؟",
    a: "أغلب اليخوت تبدأ من حد أدنى 1–2 ساعة. وفي أيام الذروة أو اليخوت الفاخرة قد تكون المدة الدنيا أعلى.",
  },
  {
    q: "هل يمكننا إحضار الطعام والمشروبات معنا؟",
    a: "نعم، يمكنكم إحضار طعامكم ومشروباتكم. ويمكننا أيضاً توفير خيارات ضيافة عند الطلب.",
  },
  {
    q: "هل توفرون BBQ أو خيارات ضيافة؟",
    a: "نعم. تتوفر باقات BBQ وطبخ مباشر وباقات ضيافة مميزة. شاركنا عدد الضيوف وتفضيلاتك لنقترح عليك الخيارات المناسبة.",
  },
  {
    q: "ماذا يحدث إذا كان الطقس سيئًا؟",
    a: "السلامة أولاً. إذا كانت الظروف غير آمنة للإبحار، سنقوم بإعادة جدولة الحجز أو تقديم أفضل بديل متاح وفق السياسة المعتمدة.",
  },
  {
    q: "كيف أؤكد الحجز؟",
    a: "يتم تأكيد الحجز بعد الدفع/العربون. بعد التأكيد نشارككم موقع الانطلاق بالتفصيل وبيانات القبطان.",
  },
  {
    q: "أين موقع الانطلاق (الاستلام)؟",
    a: "يعتمد على اليخت وتوفر المرسى. نقاط الانطلاق الشائعة تشمل دبي مارينا ومراسي قريبة أخرى.",
  },
  {
    q: "هل تسمحون بالديكور لأعياد الميلاد أو عروض الزواج؟",
    a: "نعم. يمكننا تجهيز ديكور مخصص، بالونات، كيك، ورود، وتجهيزات عروض الزواج. أخبرنا بالفكرة والوقت لنرتب كل شيء.",
  },
  {
    q: "ما هي سياسة الإلغاء؟",
    a: "تختلف سياسة الإلغاء حسب نوع اليخت وتوقيت الإلغاء. تواصل معنا ببيانات حجزك وسنشاركك السياسة المناسبة.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx)); // open one, close others
  };

  return (
    // RTL + Light theme (matches your FAQ page)
    <section dir="rtl" lang="ar" className="w-full bg-white text-slate-900 py-16 sm:py-20">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* FAQ list */}
        <div className="mx-auto max-w-[1100px] space-y-4">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="
                  rounded-2xl bg-white
                  border border-slate-200
                  overflow-hidden
                  shadow-[0_18px_60px_rgba(2,6,23,0.08)]
                "
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="
                    w-full flex items-center justify-between gap-4
                    px-5 sm:px-6 py-4
                    text-right
                    transition
                    hover:bg-slate-50
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300
                  "
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] sm:text-sm font-semibold tracking-wide text-slate-900">
                      {item.q}
                    </p>
                    <div className="mt-2 h-px w-full bg-slate-200" />
                  </div>

                  <span
                    className="
                      shrink-0
                      inline-flex items-center justify-center
                      h-10 w-10
                      rounded-full
                      border border-slate-200
                      bg-white
                      text-slate-800
                      transition-all duration-300
                      hover:bg-slate-50
                    "
                    aria-hidden="true"
                    title={isOpen ? "إغلاق" : "فتح"}
                  >
                    <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-chevron-down"}`} />
                  </span>
                </button>

                {/* Answer (smooth open/close) */}
                <div
                  className={`
                    grid transition-all duration-500 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 text-slate-700 leading-relaxed text-sm">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12 text-slate-600 text-sm">
          ما زلت لديك أسئلة؟{" "}
          <a
            href="https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85"
            target="_blank"
            rel="noreferrer"
            className="text-slate-900 underline underline-offset-4 hover:opacity-80 transition"
          >
            تواصل معنا عبر واتساب
          </a>
          .
        </div>
      </div>
    </section>
  );
}
