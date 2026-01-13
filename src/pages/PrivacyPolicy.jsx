import { useEffect } from "react";
import { Link } from "react-router-dom";

const UPDATED_DATE = "January 10, 2026";
const COMPANY = "Elite Yachts"; 
const WEBSITE = "eliteyachtrental.com";

const EMAIL = "info@eliteyachtrental.com";

const PHONE_DISPLAY = "+971 56 900 6603";
const PHONE_TEL = "tel:971569006603";
const WHATSAPP =
  "https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85";

const CONTACT_ROUTE = "/اتصل-بنا-إيليت-يخت-دبي"; // match your site


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

function Card({ title, children, id }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div
        className="
          rounded-3xl border border-black/10 bg-white
          p-6 sm:p-7
          shadow-[0_18px_55px_rgba(15,23,42,0.10)]
          overflow-hidden relative
        "
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_55%)]" />
        <h2 className="relative text-[13px] tracking-[0.35em] uppercase text-slate-700">
          {title}
        </h2>

        <div className="relative mt-4 space-y-3 text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-black/30" />
      <span>{children}</span>
    </li>
  );
}

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = `Privacy Policy | ${COMPANY} Dubai`;
  }, []);

  return (
    <main dir="rtl" lang="ar" className="relative w-full bg-white text-slate-900">
      {/* subtle luxury background (LIGHT) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-48 right-0 h-[560px] w-[560px] rounded-full bg-black/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_38%,rgba(15,23,42,0.03))]" />
      </div>

      {/* HERO */}
      <header className="relative">
        <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-10 sm:pt-32 sm:pb-14">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-slate-600">
            <Link to="/" className="hover:text-slate-900 transition">
              الرئيسية
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-slate-900/90">سياسة الخصوصية</span>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.18em]">
            سياسة الخصوصية
          </h1>

          <p className="mt-4 max-w-[920px] text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
            <TM>
              في Elite Yachts Dubai (Elite Yacht Rental Dubai)، نحترم خصوصيتك. توضّح هذه السياسة كيف نجمع
              البيانات عند استخدام موقعنا لحجز وتأجير يخت في دبي مارينا، وكيف نستخدمها لتحسين تجربة
              Luxury Yacht Rental Dubai بشكل آمن وواضح.
            </TM>
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-2 text-[12px] text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.10)]">
            <span className="tracking-[0.22em] uppercase text-slate-600">آخر تحديث</span>
            <span className="h-4 w-px bg-black/10" />
            <span className="text-slate-900">{UPDATED_DATE}</span>
          </div>
        </div>
      </header>

      {/* BODY */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <p className="text-[12px] tracking-[0.35em] uppercase text-slate-600">
                  محتوى الصفحة
                </p>
                <nav className="mt-5 space-y-2 text-[13px] text-slate-700">
                  {[
                    ["scope", "1. نطاق السياسة"],
                    ["data", "2. البيانات التي نجمعها"],
                    ["use", "3. كيف نستخدم البيانات"],
                    ["cookies", "4. ملفات تعريف الارتباط (Cookies)"],
                    ["sharing", "5. مشاركة البيانات"],
                    ["security", "6. الأمان والاحتفاظ بالبيانات"],
                    ["rights", "7. حقوقك"],
                    ["children", "8. خصوصية الأطفال"],
                    ["changes", "9. تحديثات السياسة"],
                    ["contact", "التواصل"],
                  ].map(([id, label]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="block rounded-xl px-3 py-2 hover:bg-black/[0.03] hover:text-slate-900 transition"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* CONTENT */}
            <div className="space-y-8">
              <Card id="scope" title="1. نطاق السياسة">
                <p>
                  <TM>
                    تنطبق هذه السياسة على موقع {WEBSITE} وجميع صفحات الحجز والاستفسار الخاصة بخدمات
                    Elite Yachts Dubai بما في ذلك: تأجير يخت دبي، تأجير يخت دبي مارينا، حجز يخت خاص دبي،
                    وحفلات اليخوت والفعاليات.
                  </TM>
                </p>
              </Card>

              <Card id="data" title="2. البيانات التي نجمعها">
                <p>
                  نجمع بيانات محدودة تساعدنا على الرد بسرعة وتأكيد التوفر وتقديم تجربة حجز منظمة.
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>معلومات التواصل: الاسم، رقم الهاتف، البريد الإلكتروني.</Bullet>
                  <Bullet>تفاصيل الطلب: التاريخ، الوقت، عدد الضيوف، نوع المناسبة، اليخت المفضّل (إن وجد).</Bullet>
                  <Bullet>بيانات تقنية: نوع الجهاز والمتصفح، عنوان IP (لأغراض أمنية وتحسين الأداء).</Bullet>
                </ul>
                <p className="mt-4">
                  لا نطلب بيانات حساسة غير ضرورية للحجز.
                </p>
              </Card>

              <Card id="use" title="3. كيف نستخدم البيانات">
                <ul className="space-y-3">
                  <Bullet>الرد على استفسارك وتأكيد التوفر والأسعار والباقات المناسبة.</Bullet>
                  <Bullet>
                    <TM>
                      تحسين تجربة Elite Yacht Rental Dubai (مثل تحسين صفحات تأجير يخت دبي مارينا وتسهيل
                      خطوات الحجز).
                    </TM>
                  </Bullet>
                  <Bullet>مكافحة الاحتيال وحماية الموقع والأنظمة.</Bullet>
                  <Bullet>التواصل معك بخصوص التحديثات المرتبطة بطلبك فقط.</Bullet>
                </ul>
              </Card>

              <Card id="cookies" title="4. ملفات تعريف الارتباط (Cookies)">
                <p>
                  قد نستخدم Cookies وتقنيات مشابهة لقياس الأداء وتحسين تجربة التصفح (مثل معرفة الصفحات الأكثر
                  زيارة أو تحسين سرعة التحميل).
                </p>
                <p className="mt-3">
                  يمكنك التحكم بالـ Cookies من إعدادات المتصفح. إيقافها قد يؤثر على بعض وظائف الموقع.
                </p>
              </Card>

              <Card id="sharing" title="5. مشاركة البيانات">
                <p>
                  لا نبيع بياناتك. قد نشارك بيانات محدودة فقط مع مزوّدي خدمات موثوقين عند الحاجة لتقديم الخدمة.
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>خدمات التواصل (مثل إرسال نموذج التواصل عبر البريد).</Bullet>
                  <Bullet>خدمات التحليل/الأداء لتحسين الموقع.</Bullet>
                  <Bullet>الالتزام القانوني عند الطلب من الجهات المختصة داخل دولة الإمارات.</Bullet>
                </ul>
              </Card>

              <Card id="security" title="6. الأمان والاحتفاظ بالبيانات">
                <p>
                  نستخدم إجراءات تنظيمية وتقنية معقولة لحماية البيانات من الوصول غير المصرّح به.
                </p>
                <p className="mt-3">
                  نحتفظ بالبيانات فقط للمدة اللازمة للرد على طلبك، إتمام الحجز، وخدمة ما بعد الحجز إن وجدت،
                  أو للامتثال للمتطلبات القانونية داخل الإمارات.
                </p>
              </Card>

              <Card id="rights" title="7. حقوقك">
                <ul className="space-y-3">
                  <Bullet>طلب نسخة من بياناتك التي نحتفظ بها (إن وجدت).</Bullet>
                  <Bullet>تصحيح بيانات غير دقيقة.</Bullet>
                  <Bullet>طلب حذف بياناتك عندما لا تكون مطلوبة للحجز/الامتثال القانوني.</Bullet>
                </ul>
              </Card>

              <Card id="children" title="8. خصوصية الأطفال">
                <p>
                  خدماتنا موجهة للبالغين. لا نجمع عمداً بيانات من أطفال دون السن القانوني.
                </p>
              </Card>

              <Card id="changes" title="9. تحديثات السياسة">
                <p>
                  قد نقوم بتحديث هذه السياسة من وقت لآخر. سيتم نشر النسخة الجديدة على هذه الصفحة مع تحديث
                  تاريخ “آخر تحديث”.
                </p>
              </Card>

              {/* CONTACT */}
              <section
                id="contact"
                className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-6 sm:p-7 shadow-[0_18px_55px_rgba(15,23,42,0.10)]"
              >
                <h2 className="text-[13px] tracking-[0.35em] uppercase text-slate-700">
                  التواصل
                </h2>

                <div className="mt-4 space-y-4 text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
                  <p>
                    <TM>
                      لأي استفسار حول الخصوصية أو بيانات الحجز لدى Elite Yachts Dubai، تواصل معنا:
                    </TM>
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                      <p className="text-slate-600 text-[12px] tracking-[0.25em] uppercase">
                        البريد الإلكتروني
                      </p>
                      <p className="mt-1 text-slate-900">{EMAIL}</p>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                      <p className="text-slate-600 text-[12px] tracking-[0.25em] uppercase">
                        الهاتف
                      </p>
                      <a href={PHONE_TEL} className="mt-1 block text-slate-900 hover:underline">
                        {PHONE_DISPLAY}
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-full px-7 py-3 text-sm
                        border border-black bg-black text-white
                        shadow-[0_14px_34px_rgba(15,23,42,0.14)]
                        hover:bg-black/90 transition
                      "
                    >
                      <i className="fa-brands fa-whatsapp" />
                      واتساب
                    </a>

                    <Link
                      to={CONTACT_ROUTE}
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-full px-7 py-3 text-sm
                        border border-black/15 bg-white text-slate-900
                        shadow-[0_14px_34px_rgba(15,23,42,0.10)]
                        hover:bg-black/[0.02] transition
                      "
                    >
                      <i className="fa-solid fa-envelope" />
                      صفحة التواصل
                    </Link>
                  </div>

                  <p className="text-[12px] text-slate-500 leading-relaxed">
                    كلمات مفتاحية بشكل طبيعي: <TM>Elite Yachts Dubai</TM>، <TM>Elite Yacht Rental Dubai</TM>،
                    تأجير يخت دبي، تأجير يخت دبي مارينا، حجز يخت دبي، يخت فاخر دبي.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
