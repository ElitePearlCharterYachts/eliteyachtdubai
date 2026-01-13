// src/pages/RefundPolicy.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";

const UPDATED_DATE = "25 ديسمبر 2025";
const EMAIL = "info@eliteyachtdubai.com";
const PHONE_DISPLAY = "+971569006603";
const CONTACT_PAGE = "/اتصل-بنا-إيليت-يخت-دبي"; // عدّلها إذا كان المسار مختلف

function Divider() {
    return (
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    );
}

function Card({ title, children }) {
    return (
        <div className="rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
            <div className="p-6 sm:p-7">
                <p className="text-[12px] tracking-[0.35em] uppercase text-black/55">
                    {title}
                </p>
                <div className="mt-4 space-y-3 text-black/70 text-[14px] sm:text-[15px] leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
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

export default function RefundPolicy() {
    useEffect(() => {
        document.title = "سياسة الاسترجاع والاسترداد | Elite Yacht Rental LLC";
    }, []);

    return (
        <main dir="rtl" lang="ar" className="relative w-full bg-white text-black">
            {/* Soft background glows (light theme) */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
                <div className="absolute -bottom-44 right-0 h-[520px] w-[520px] rounded-full bg-[#e0b951]/15 blur-3xl" />
            </div>

            {/* HERO */}
            <header className="relative">
                <div className="mx-auto max-w-[1200px] px-6 pt-28 pb-10 sm:pt-32 sm:pb-14">
                    <div className="flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-black/55">
                        <Link to="/" className="hover:text-black transition">
                            الرئيسية
                        </Link>
                        <span className="opacity-40">/</span>
                        <span className="text-black/85">سياسة الاسترجاع والاسترداد</span>
                    </div>

                    <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.12em]">
                        سياسة الاسترجاع والاسترداد
                    </h1>

                    <p className="mt-4 max-w-[860px] text-black/70 text-[14px] sm:text-[15px] leading-relaxed">
                        شكرًا لاختيارك Elite Yacht Rental. نحرص على تقديم تجربة فاخرة وسلسة.
                        في حال تغيّرت خططك، يُرجى مراجعة السياسة أدناه.
                    </p>

                    <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/5 px-5 py-2 text-[12px] text-black/70">
                        <span className="tracking-[0.22em] uppercase text-black/55">
                            آخر تحديث
                        </span>
                        <span className="h-4 w-px bg-black/10" />
                        <span className="text-black/90">{UPDATED_DATE}</span>
                    </div>
                </div>
            </header>

            {/* CONTENT */}
            <section className="relative pb-20">
                <div className="mx-auto max-w-[1200px] px-6">
                    <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
                        {/* Sticky TOC */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-28 rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.06)] p-6">
                                <p className="text-[12px] tracking-[0.35em] uppercase text-black/55">
                                    في هذه الصفحة
                                </p>

                                <nav className="mt-5 space-y-2 text-[13px] text-black/70">
                                    {[
                                        ["note", "ملاحظة مهمة"],
                                        ["cancellations", "الإلغاءات"],
                                        ["how", "طريقة الإلغاء"],
                                        ["refunds", "الاسترداد"],
                                        ["please", "يرجى الانتباه"],
                                        ["contact", "تواصل معنا"],
                                    ].map(([id, label]) => (
                                        <a
                                            key={id}
                                            href={`#${id}`}
                                            className="block rounded-lg px-3 py-2 hover:bg-black/5 hover:text-black transition"
                                        >
                                            {label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main body */}
                        <div className="space-y-10">
                            <Card title="ملاحظة مهمة">
                                <div id="note" className="scroll-mt-28" />
                                <p>
                                    تنطبق هذه السياسة على{" "}
                                    <span className="text-black/90">تأجير اليخوت فقط</span>.
                                    قد تخضع الخدمات الإضافية المحجوزة بشكل منفصل لشروط إلغاء مختلفة.
                                </p>
                            </Card>

                            <Card title="الإلغاءات">
                                <div id="cancellations" className="scroll-mt-28" />
                                <ul className="space-y-3">
                                    <Bullet>
                                        يمكنك إلغاء حجز تأجير اليخت خلال{" "}
                                        <span className="text-black/90">7 أيام من تاريخ الحجز</span>{" "}
                                        دون أي رسوم.
                                    </Bullet>
                                </ul>
                            </Card>

                            <Card title="طريقة الإلغاء">
                                <div id="how" className="scroll-mt-28" />
                                <ul className="space-y-3">
                                    <Bullet>
                                        البريد الإلكتروني:{" "}
                                        <span className="text-black/90">{EMAIL}</span>
                                    </Bullet>
                                    <Bullet>
                                        عبر الموقع:{" "}
                                        <Link
                                            to={CONTACT_PAGE}
                                            className="text-black/90 underline underline-offset-4 hover:text-black"
                                        >
                                            اتصل بنا
                                        </Link>
                                    </Bullet>
                                    <Bullet>
                                        الهاتف: <span className="text-black/90">{PHONE_DISPLAY}</span>
                                    </Bullet>
                                </ul>
                            </Card>

                            <Card title="الاسترداد">
                                <div id="refunds" className="scroll-mt-28" />
                                <ul className="space-y-3">
                                    <Bullet>
                                        يتم تطبيق{" "}
                                        <span className="text-black/90">استرداد كامل</span> للإلغاءات
                                        التي تتم ضمن فترة{" "}
                                        <span className="text-black/90">7 أيام</span>.
                                    </Bullet>
                                    <Bullet>
                                        تتم معالجة الاسترداد خلال{" "}
                                        <span className="text-black/90">14 يومًا</span> من تاريخ استلام
                                        طلب الإلغاء.
                                    </Bullet>
                                    <Bullet>
                                        يتم الاسترداد عبر{" "}
                                        <span className="text-black/90">نفس وسيلة الدفع</span> المستخدمة
                                        في الحجز الأصلي.
                                    </Bullet>
                                </ul>
                            </Card>

                            <Card title="يرجى الانتباه">
                                <div id="please" className="scroll-mt-28" />
                                <ul className="space-y-3">
                                    <Bullet>
                                        في حال منع الطقس القاسي الإبحار، سنعمل معك على{" "}
                                        <span className="text-black/90">إعادة جدولة</span> الرحلة أو تقديم{" "}
                                        <span className="text-black/90">استرداد كامل</span>.
                                    </Bullet>
                                    <Bullet>
                                        لا تنطبق سياسة الإرجاع بعد بدء مدة التأجير.
                                    </Bullet>
                                </ul>
                            </Card>

                            <div id="contact" className="scroll-mt-28" />
                            <div className="rounded-2xl border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.06)] p-6 sm:p-7">
                                <p className="text-[12px] tracking-[0.35em] uppercase text-black/55">
                                    تواصل معنا
                                </p>

                                <div className="mt-4 space-y-3 text-black/70 text-[14px] sm:text-[15px] leading-relaxed">
                                    <p>
                                        إذا كان لديك أي استفسار بخصوص سياسة الاسترجاع والاسترداد، تواصل معنا عبر:
                                    </p>

                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-xl border border-black/10 bg-black/5 p-4">
                                            <p className="text-black/55 text-[12px] tracking-[0.25em] uppercase">
                                                البريد الإلكتروني
                                            </p>
                                            <p className="mt-1 text-black/90">{EMAIL}</p>
                                        </div>

                                        <div className="rounded-xl border border-black/10 bg-black/5 p-4">
                                            <p className="text-black/55 text-[12px] tracking-[0.25em] uppercase">
                                                الهاتف
                                            </p>
                                            <p className="mt-1 text-black/90">{PHONE_DISPLAY}</p>
                                        </div>
                                    </div>

                                    <Divider />

                                    <p className="text-black/55 text-[13px]">
                                        نشكرك لتفهمك، ونتطلع لاستضافتك على متن اليخت.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /Main body */}
                    </div>
                </div>
            </section>
        </main>
    );
}
