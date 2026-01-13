// src/pages/Terms.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";

const SITE = "eliteyachtrental.com";
const ADDRESS = "Dubai, United Arab Emirates";
const LAST_UPDATED = "January 10, 2026";

// ✅ requested contact
const EMAIL = "info@eliteyachtrental.com";
const PHONE_DISPLAY = "+971 56 900 6603";
const PHONE_TEL = "tel:971569006603";
const WHATSAPP =
  "https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85";

// Brand strings (will get ™ automatically)
const BRAND_EN = "Elite Yachts";
const BRAND_FULL_EN = "Elite Yacht Rental Dubai";
const BRAND_AR = "إيليت يخوت";

// ========= TM helper (same logic you wanted) =========
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

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.18em] text-slate-900 font-semibold">
        {title}
      </h2>

      <div className="mt-4 space-y-3 text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
        {children}
      </div>

      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </section>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-black/35" />
      <span>{children}</span>
    </li>
  );
}

export default function Terms() {
  useEffect(() => {
    document.title = `Terms & Conditions | ${BRAND_EN} Dubai`;
  }, []);

  return (
    <main dir="rtl" lang="ar" className="relative w-full bg-white mt-[-10px] text-slate-900">
      {/* Light background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-48 right-0 h-[560px] w-[560px] rounded-full bg-black/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_40%,rgba(15,23,42,0.03))]" />
      </div>

      {/* HERO */}
      <header className="relative">
        <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-10 sm:pt-32 sm:pb-14">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-slate-600">
            <Link to="/" className="hover:text-slate-900 transition">
              الرئيسية
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-slate-900/90">الشروط والأحكام</span>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[0.14em]">
            الشروط والأحكام
          </h1>

          <p className="mt-4 max-w-[920px] text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
            <TM>
              مرحبًا بك في {SITE}. تحكم هذه الشروط استخدام الموقع وجميع خدمات تأجير اليخوت والرحلات
              التي تقدمها Elite Yachts Dubai وElite Yacht Rental Dubai. باستخدامك للموقع أو
              بإتمام الحجز، فإنك توافق على هذه الشروط.
            </TM>
          </p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-2 text-[12px] text-slate-700 shadow-[0_12px_28px_rgba(15,23,42,0.10)]">
            <span className="tracking-[0.22em] uppercase text-slate-600">آخر تحديث</span>
            <span className="h-4 w-px bg-black/10" />
            <span className="text-slate-900">{LAST_UPDATED}</span>
          </div>
        </div>

        {/* Note box */}
        <div className="mx-auto max-w-[1200px] px-6 pb-10">
          <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-7 shadow-[0_18px_55px_rgba(15,23,42,0.10)]">
            <p className="text-slate-700 text-[13px] sm:text-[14px] leading-relaxed">
              <span className="text-slate-900 font-semibold">مهم:</span> هذه الشروط تُعد نموذجًا عامًا لخدمات
              <TM>تأجير يخت دبي</TM> و<TM>تأجير يخت دبي مارينا</TM>. يُفضّل مراجعتها قانونيًا حسب الترخيص
              والتأمين وسياسات التشغيل الفعلية.
            </p>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            {/* TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <p className="text-[12px] tracking-[0.35em] uppercase text-slate-600">
                  في هذه الصفحة
                </p>

                <nav className="mt-5 space-y-2 text-[13px] text-slate-700">
                  {[
                    ["general", "1. أحكام عامة"],
                    ["bookings", "2. الحجز والتأكيد"],
                    ["payments", "3. المدفوعات"],
                    ["cancellations", "4. الإلغاء والاسترجاع"],
                    ["weather", "5. الطقس وحالة البحر"],
                    ["conduct", "6. سلوك الضيوف"],
                    ["damage", "7. الأضرار والمسؤولية"],
                    ["safety", "8. السلامة وسلطة الكابتن"],
                    ["routes", "9. المسارات والمارينا والتوقيت"],
                    ["services", "10. الإضافات والخدمات الخارجية"],
                    ["prohibited", "11. الممنوعات"],
                    ["media", "12. التصوير والمحتوى"],
                    ["privacy", "13. الخصوصية"],
                    ["ip", "14. الملكية الفكرية"],
                    ["changes", "15. تعديل الشروط"],
                    ["contact", "16. التواصل"],
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

            {/* TERMS */}
            <div className="space-y-10">
              <Section id="general" title="1. أحكام عامة">
                <p>
                  <TM>
                    تقدم Elite Yachts Dubai وElite Yacht Rental Dubai خدمات تأجير يخت فاخر في دبي
                    والمياه المحيطة، بما في ذلك رحلات دبي مارينا، نخلة جميرا، وأبرز المعالم حسب
                    المسار والتصاريح وحالة البحر.
                  </TM>
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>يجب أن يكون عمر الحاجز 18 سنة أو أكثر.</Bullet>
                  <Bullet>أنت تقرّ بأن لديك صلاحية قانونية لإتمام الحجز نيابة عن جميع الضيوف.</Bullet>
                  <Bullet>تلتزم بجميع قوانين دولة الإمارات واللوائح البحرية المعمول بها.</Bullet>
                </ul>
              </Section>

              <Section id="bookings" title="2. الحجز والتأكيد">
                <ul className="mt-4 space-y-3">
                  <Bullet>جميع الحجوزات تعتمد على التوفر وتأكيدنا النهائي.</Bullet>
                  <Bullet>
                    يعتبر الحجز مؤكدًا فقط بعد استلام الدفعة (عربون أو كامل المبلغ) وتأكيدها من
                    <TM>Elite Yachts</TM>.
                  </Bullet>
                  <Bullet>وقت الرحلة يبدأ وينتهي حسب الموعد المحدد. التأخير لا يمدّد مدة الحجز.</Bullet>
                </ul>
              </Section>

              <Section id="payments" title="3. المدفوعات">
                <ul className="mt-4 space-y-3">
                  <Bullet>الأسعار بالدرهم الإماراتي AED ما لم يتم ذكر غير ذلك.</Bullet>
                  <Bullet>قد نطلب دفعًا كاملاً قبل الانطلاق حسب اليخت والتاريخ والخدمات.</Bullet>
                  <Bullet>
                    أي وقت إضافي، ترقيات، ضيافة، ديكور، أو طلبات خاصة قد تُحسب بشكل منفصل.
                  </Bullet>
                </ul>
              </Section>

              <Section id="cancellations" title="4. الإلغاء والاسترجاع">
                <p>
                  تختلف سياسة الإلغاء حسب نوع اليخت والموسم. ما لم يتم الاتفاق كتابيًا على سياسة مختلفة:
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>إلغاء قبل 72 ساعة أو أكثر قد يكون مؤهلًا لإعادة جدولة (حسب التوفر).</Bullet>
                  <Bullet>الإلغاء خلال 72 ساعة عادةً غير قابل للاسترجاع.</Bullet>
                  <Bullet>عدم الحضور والتأخير الكبير غير قابلين للاسترجاع.</Bullet>
                </ul>
                <p className="mt-3">
                  قد نقوم بالإلغاء/إعادة الجدولة بسبب الطقس، السلامة، تعليمات الجهات المختصة، أو قوة قاهرة.
                  في هذه الحالات قد نقترح حلولًا مناسبة حسب الوضع وبما يتوافق مع التشغيل الآمن.
                </p>
              </Section>

              <Section id="weather" title="5. الطقس وحالة البحر">
                <p>
                  الرحلات تعتمد على حالة البحر الآمنة حسب تقدير الكابتن و/أو تعليمات الجهات المختصة.
                  السلامة دائمًا أولاً.
                </p>
                <p className="mt-3">
                  في حال عدم مناسبة الظروف، قد يتم تأخير الانطلاق، تغيير المسار، أو العودة مبكرًا.
                  الاسترجاع بسبب الطقس غير مضمون إلا إذا طُبق بموجب الأنظمة أو اتفاق مكتوب.
                </p>
              </Section>

              <Section id="conduct" title="6. سلوك الضيوف">
                <p>يلتزم الضيوف بما يلي:</p>
                <ul className="mt-4 space-y-3">
                  <Bullet>اتباع تعليمات السلامة وإرشادات الطاقم.</Bullet>
                  <Bullet>احترام اليخت والطاقم والضيوف الآخرين.</Bullet>
                  <Bullet>استخدام المعدات بعناية ومسؤولية.</Bullet>
                </ul>
                <p className="mt-3">
                  نحتفظ بحق إنهاء الرحلة دون استرجاع إذا حدث سلوك خطر/مسيء/غير قانوني.
                </p>
              </Section>

              <Section id="damage" title="7. الأضرار والمسؤولية">
                <p>
                  يتحمل المستأجر مسؤولية أي أضرار تتجاوز الاستهلاك الطبيعي ناتجة عن المستأجر أو الضيوف.
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>قد يتم احتساب تكاليف الإصلاح/الاستبدال وتوقف التشغيل إذا لزم.</Bullet>
                  <Bullet>
                    <TM>Elite Yachts</TM> غير مسؤولة عن فقدان المتعلقات الشخصية إلا في حالة إهمال جسيم.
                  </Bullet>
                </ul>
              </Section>

              <Section id="safety" title="8. السلامة وسلطة الكابتن">
                <p>
                  للكابتن صلاحية كاملة لضمان السلامة. ويجب الالتزام بتعليماته بما يشمل:
                </p>
                <ul className="mt-4 space-y-3">
                  <Bullet>تعديل المسار حسب حالة البحر/الازدحام البحري</Bullet>
                  <Bullet>إدارة سلامة الضيوف والسلوك على متن اليخت</Bullet>
                  <Bullet>اتخاذ قرارات تشغيلية للحفاظ على الملاحة الآمنة</Bullet>
                </ul>
              </Section>

              <Section id="routes" title="9. المسارات والمارينا والتوقيت">
                <ul className="mt-4 space-y-3">
                  <Bullet>المارينا (نقطة الانطلاق/العودة) قد تتغير حسب التوفر والتصاريح.</Bullet>
                  <Bullet>المسارات تقريبية وقد تتغير بسبب اللوائح أو الطقس أو حركة الملاحة.</Bullet>
                  <Bullet>التوقفات للصور/المعالم حسب الوقت والسلامة.</Bullet>
                </ul>
              </Section>

              <Section id="services" title="10. الإضافات والخدمات الخارجية">
                <p>
                  قد نوفر أو ننسّق إضافات مثل الضيافة، الديكور، DJ، الترفيه، أو مزودين خارجيين.
                  تنطبق رسوم وشروط وتوفر خاص بكل خدمة.
                </p>
                <p className="mt-3">
                  عند استخدام مزوّد خارجي، قد تنطبق شروطه كذلك، ولا نتحمل مسؤولية مشكلة سببها حصريًا الطرف الخارجي.
                </p>
              </Section>

              <Section id="prohibited" title="11. الممنوعات">
                <p>
                  المواد غير القانونية، الأسلحة، والممارسات غير المشروعة ممنوعة تمامًا. أي مخالفة قد تؤدي
                  لإنهاء الرحلة فورًا وإبلاغ الجهات المختصة عند الحاجة.
                </p>
              </Section>

              <Section id="media" title="12. التصوير والمحتوى">
                <p>
                  يُسمح بالتصوير الشخصي ما لم يمنعه الطاقم لأسباب سلامة/خصوصية. قد نلتقط صورًا/فيديوهات
                  غير مُعرّفة للهوية لأغراض تسويقية، ويمكنك طلب عدم الاستخدام كتابيًا قبل الانطلاق.
                </p>
              </Section>

              <Section id="privacy" title="13. الخصوصية">
                <p>
                  نحترم خصوصيتك. تُستخدم بيانات الحجز والتواصل لتقديم الخدمة، تأكيد التوفر، والتواصل معك.
                  لا نقوم ببيع بياناتك.
                </p>
              </Section>

              <Section id="ip" title="14. الملكية الفكرية">
                <p>
                  جميع محتويات {SITE} (النصوص، الصور، العلامة، الشعار، التصميم) هي ملكية
                  <TM>Elite Yachts</TM> أو مرخّصة لنا. يمنع النسخ أو إعادة الاستخدام دون إذن كتابي.
                </p>
              </Section>

              <Section id="changes" title="15. تعديل الشروط">
                <p>
                  قد نقوم بتحديث هذه الشروط في أي وقت. استمرار استخدام الموقع أو الخدمة بعد التحديث يعني
                  قبولك للشروط المحدّثة.
                </p>
              </Section>

              {/* CONTACT */}
              <section
                id="contact"
                className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-6 sm:p-7 shadow-[0_18px_55px_rgba(15,23,42,0.10)]"
              >
                <h2 className="text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.18em] text-slate-900 font-semibold">
                  16. التواصل
                </h2>

                <div className="mt-4 space-y-4 text-slate-700 text-[14px] sm:text-[15px] leading-relaxed">
                  <p>
                    للاستفسارات حول الشروط والأحكام أو الحجز، تواصل معنا:
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                      <p className="text-slate-600 text-[12px] tracking-[0.25em] uppercase">
                        الشركة
                      </p>
                      <p className="mt-1 text-slate-900">
                        <TM>{BRAND_EN}</TM> • <TM>{BRAND_FULL_EN}</TM> • <TM>{BRAND_AR}</TM>
                      </p>
                      <p className="mt-1 text-slate-600">{ADDRESS}</p>
                      <p className="mt-2 text-slate-600 text-[12px]">
                        كلمات بحث: <TM>Elite Yacht Rental Dubai</TM>، <TM>Elite Yachts Dubai</TM>،
                        تأجير يخت دبي، تأجير يخت دبي مارينا، yacht rental Dubai marina.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                      <p className="text-slate-600 text-[12px] tracking-[0.25em] uppercase">
                        الدعم
                      </p>
                      <p className="mt-1 text-slate-900">{EMAIL}</p>
                      <a href={PHONE_TEL} className="mt-1 block text-slate-900 hover:underline">
                        {PHONE_DISPLAY}
                      </a>

                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-2 rounded-full border border-black bg-black px-4 py-2 text-sm text-white hover:bg-black/90 transition"
                      >
                        <i className="fa-brands fa-whatsapp" />
                        واتساب
                      </a>
                    </div>
                  </div>

                  <p className="pt-2 text-slate-500 text-[13px]">
                    باستخدامك {SITE} وإتمام الحجز معنا، فأنت تؤكد أنك قرأت وفهمت ووافقت على هذه الشروط والأحكام.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
