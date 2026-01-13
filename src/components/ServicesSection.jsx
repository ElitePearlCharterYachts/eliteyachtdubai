// src/components/ServicesSectionAr.jsx
import React from "react";

const GOLD = "#D4AF69";

const services = [
    {
        title: "حفلات على يخت",
        desc: "حوّل مناسبتك إلى تجربة أسطورية على متن يخت فاخر، مع أجواء راقية، موسيقى مميزة، خدمة خمس نجوم وتفاصيل مصممة خصيصاً لتناسب أرقى الاحتفالات.",
        image: "/services/party.webp",
    },
    {
        title: "رحلات اليخوت دبي",
        desc: "استمتع برحلات بحرية فاخرة في دبي تجمع بين المناظر الخلابة، الهدوء المطلق والخدمة الراقية لتعيش لحظات استثنائية لا تُنسى.",
        image: "/services/cruise.webp",
    },
    {
        title: "يخت للايجار دبي",
        desc: "اكتشف متعة استئجار يخت فاخر في دبي مع طاقم محترف، خصوصية تامة وتجربة مصممة على أعلى معايير الرفاهية.",
        image: "/services/rental.webp",
    },
    {
        title: "يخوت دبي",
        desc: "مجموعة مختارة من أفخم اليخوت في دبي تمنحك تجربة بحرية راقية، مثالية للنزهات الخاصة، الاجتماعات أو المناسبات الحصرية.",
        image: "/services/dubaiyachts.webp",
    },
];

export default function ServicesSectionAr() {
    return (
        <section
            dir="rtl"
            lang="ar"
            className="relative w-full overflow-hidden bg-black py-24"
            aria-label="خدمات تأجير اليخوت في دبي"
        >
            {/* ===== BACKGROUND LAYERS ===== */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,105,0.18),transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85),rgba(0,0,0,1))]" />

            {/* subtle moving gold grain */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"200\" height=\"200\" filter=\"url(%23n)\" opacity=\"0.4\"/></svg>')",
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* ===== HEADER ===== */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-[0.15em] text-white">
                        خدماتنا
                    </h2>

                    <div className="mx-auto mt-6 flex items-center justify-center gap-4">
                        <span className="h-px w-24 bg-white/20" />
                        <span
                            className="h-[3px] w-14 rounded-full"
                            style={{
                                background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                            }}
                        />
                        <span className="h-px w-24 bg-white/20" />
                    </div>
                </div>

                {/* ===== GRID ===== */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((s, idx) => (
                        <article
                            key={idx}
                            className="
                group relative overflow-hidden rounded-3xl
                bg-white/[0.04]
                ring-1 ring-white/10
                backdrop-blur-xl
                transition-all duration-700
                hover:-translate-y-2 hover:ring-white/20
              "
                            style={{
                                boxShadow:
                                    "0 30px 80px rgba(0,0,0,0.85), inset 0 0 0 1px rgba(255,255,255,0.05)",
                            }}
                        >
                            {/* ===== IMAGE ===== */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.08]"
                                    loading="lazy"
                                />

                                {/* cinematic overlays */}
                                <div className="absolute inset-0 bg-black/35" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                                {/* gold light sweep */}
                                <div
                                    className="
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    transition duration-1000
                  "
                                    style={{
                                        background:
                                            "linear-gradient(120deg, transparent 40%, rgba(212,175,105,0.25) 50%, transparent 60%)",
                                    }}
                                />
                            </div>

                            {/* ===== CONTENT ===== */}
                            <div className="relative px-6 pb-10 pt-8 text-center">
                                <h3
                                    className="
                    text-[22px] font-semibold text-white
                    tracking-wide
                  "
                                >
                                    {s.title}
                                </h3>

                                {/* divider */}
                                <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                                    <span className="h-px w-10 bg-white/20" />
                                    <span
                                        className="h-[2px] w-6 rounded-full"
                                        style={{
                                            background: `linear-gradient(90deg, ${GOLD}, #fff, ${GOLD})`,
                                        }}
                                    />
                                    <span className="h-px w-10 bg-white/20" />
                                </div>

                                <p className="mt-6 text-[14.5px] leading-8 text-white/80">
                                    {s.desc}
                                </p>
                            </div>

                            {/* ===== GOLD GLOW ORB ===== */}
                            <div
                                className="
                  pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full
                  opacity-0 blur-3xl transition duration-1000
                  group-hover:opacity-60
                "
                                style={{
                                    background:
                                        "radial-gradient(circle, rgba(212,175,105,0.35), transparent 70%)",
                                }}
                            />

                            {/* ===== BOTTOM GOLD LINE ===== */}
                            <div
                                className="
                  absolute bottom-0 left-0 right-0 h-[2px]
                  scale-x-0 origin-center
                  transition-transform duration-700
                  group-hover:scale-x-100
                "
                                style={{
                                    background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
                                }}
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
