// src/pages/YachtDetailsAr.jsx
import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

import YachtCard from "../components/YachtCard";
import GalleryLightbox from "../components/GalleryLightbox";
import FAQSection from "../components/FAQSection";

import logo from "../assets/logo.png";

const PHONE_DISPLAY = "+971 56 900 6603";
const PHONE_TEL = "tel:+971569006603";
const WHATSAPP_LINK =
  "https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85";

export default function YachtDetailsAr() {
  const { slug } = useParams();

  const [yachts, setYachts] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    fetch("/data/yachts.json")
      .then((r) => r.json())
      .then(setYachts)
      .catch(console.error);
  }, []);

  const yacht = useMemo(
    () => yachts.find((y) => normalizeSlug(y.slug) === normalizeSlug(slug)),
    [yachts, slug]
  );

  const gallery = useMemo(() => {
    if (!yacht) return [];
    return yacht.gallery?.length ? yacht.gallery : yacht.mainImage ? [yacht.mainImage] : [];
  }, [yacht]);

  const relatedYachts = useMemo(() => {
    if (!yacht || !yacht.category) return [];
    return yachts.filter(
      (y) => y.slug !== yacht.slug && y.category === yacht.category
    );
  }, [yachts, yacht]);

  const megaText = useMemo(() => {
    if (!yacht?.megaDescription) return "";
    if (Array.isArray(yacht.megaDescription)) return yacht.megaDescription.join("\n\n");
    return String(yacht.megaDescription);
  }, [yacht]);

  const priceIsText = useMemo(() => {
    const p = yacht?.price;
    return typeof p === "string" && /contact|n\/a/i.test(p);
  }, [yacht]);

  // 🔥 DYNAMIC META (React 19 SAFE)
  useEffect(() => {
    if (!yacht) return;

    const title = yacht.metaTitle || yacht.pageTitle || yacht.title || "ELITE YACHTS";
    const desc = yacht.metaDescription || yacht.description || yacht.title || "";

    document.title = title;

    setMeta("description", desc);
    setMeta("keywords", Array.isArray(yacht.keywords) ? yacht.keywords.join(", ") : "");

    setOG("og:title", title);
    setOG("og:description", desc);
    setOG("og:image", yacht.mainImage || "");
  }, [yacht]);

  if (!yacht) {
    return (
      <div
        dir="rtl"
        lang="ar"
        className="min-h-[70vh] bg-white text-slate-900 flex items-center justify-center px-6"
      >
        <div className="text-center max-w-md">
          <p className="text-slate-600">جاري التحميل… أو أن اليخت غير موجود.</p>
          <Link className="underline mt-3 inline-block text-slate-900" to="/elite-yachts-fleet">
            العودة إلى قائمة اليخوت
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" lang="ar" className="relative mt-[-10px] w-full bg-white text-slate-900">
      {/* Soft top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_60%)]" />

      <div className="relative max-w-[1500px] mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link
            to="/elite-yachts-fleet"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition"
          >
            <i className="fa-solid fa-arrow-right" />
            <span className="text-sm tracking-wider">العودة إلى اليخوت</span>
          </Link>

          <span className="text-xs tracking-[0.35em] text-slate-500 uppercase">
            ELITE YACHTS
          </span>
        </div>

        {/* Title */}
        <div className="mt-6 text-right">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.08em]">
            {yacht.title}
          </h1>

          <div className="mt-4 h-px w-full bg-black/10" />
          <div className="mt-2 h-[3px] w-44 rounded-full bg-black/10 ms-auto" />
        </div>

        {/* Main layout */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden border border-black/10 bg-white"
              style={{ boxShadow: "0 18px 50px rgba(15,23,42,0.14)" }}
            >
              <img
                src={yacht.mainImage}
                alt={yacht.title}
                className="w-full h-[280px] sm:h-[420px] md:h-[520px] object-cover"
                draggable={false}
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.12),transparent_45%)]" />

              {/* Logo */}
              <div className="pointer-events-none absolute top-1 left-1/2 -translate-x-1/2">
                <div
                  className="grid place-items-center rounded-full bg-white/90 backdrop-blur border border-black/10"
                  style={{ width: 82, height: 82 }}
                >
                  <div
                    className="grid place-items-center rounded-full bg-white border border-black/10"
                    style={{ width: 74, height: 74 }}
                  >
                    <img src={logo} alt="ELITE YACHTS" className="w-15 opacity-95" />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-black/10" />
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6 text-right">
            {/* Price */}
            <LightCard>
              <p className="text-[11px] tracking-[0.3em] text-slate-500 uppercase">يبدأ من</p>

              <div className="mt-2 flex items-end gap-3 flex-wrap justify-end">
                {yacht.oldPrice && !priceIsText && (
                  <span className="text-sm line-through text-slate-400">
                    AED {yacht.oldPrice}
                  </span>
                )}

                {priceIsText ? (
                  <div className="text-2xl font-semibold tracking-wide text-slate-900">
                    تواصل معنا للتسعير
                  </div>
                ) : (
                  <div className="text-3xl font-semibold tracking-wide text-slate-900">
                    AED {yacht.price}
                    <span className="text-sm font-normal text-slate-600"> / ساعة</span>
                  </div>
                )}
              </div>

              {yacht.description && (
                <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                  {yacht.description}
                </p>
              )}
            </LightCard>

            {/* Specs */}
            <LightCard>
              <p className="text-[11px] tracking-[0.3em] text-slate-500 uppercase">مواصفات اليخت</p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
                <Spec icon="fa-ruler" label="الطول" value={fmtValue(yacht.lengthFt, "قدم")} />
                <Spec icon="fa-bed" label="الكبائن" value={fmtValue(yacht.cabins)} />
                <Spec icon="fa-user-group" label="السعة" value={fmtValue(yacht.capacity, "ضيف")} />
                <Spec icon="fa-user-tie" label="الطاقم" value={fmtValue(yacht.crew)} />
              </div>
            </LightCard>

            {/* Contact */}
            <LightCard>
              <p className="text-[11px] tracking-[0.3em] text-slate-500 uppercase">تواصل معنا</p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Action
                  href={`mailto:info@elitepearlcharter.com?subject=${encodeURIComponent(
                    `حجز يخت: ${yacht.title}`
                  )}`}
                  icon="envelope"
                  label="إيميل"
                />
                <div dir="ltr" className="text-left">
                  <Action href={PHONE_TEL} icon="phone" label={PHONE_DISPLAY} solid />
                </div>

                <Action href={WHATSAPP_LINK} iconType="brands" icon="whatsapp" label="واتساب" />
              </div>
            </LightCard>
          </div>
        </div>

        {/* GALLERY */}
        {gallery.length > 0 && (
          <div className="mt-14 text-right">
            <h2 className="text-sm tracking-[0.3em] uppercase text-slate-800">المعرض</h2>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => {
                    setLightboxIndex(i);
                    setLightboxOpen(true);
                  }}
                  className="group relative rounded-2xl overflow-hidden border border-black/10 bg-white hover:border-black/20 transition"
                  style={{ boxShadow: "0 14px 34px rgba(15,23,42,0.10)" }}
                >
                  <img
                    src={src}
                    alt={`صورة ${i + 1}`}
                    className="w-full h-[150px] object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />

                  {/*  MOBILE ONLY: cover the black logo/watermark with our white badge */}
                  <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 md:hidden">
                    <div
                      className="grid place-items-center rounded-full bg-white/92 backdrop-blur border border-black/10"
                      style={{ width: 44, height: 44, boxShadow: "0 10px 22px rgba(15,23,42,0.14)" }}
                    >
                      <div
                        className="grid place-items-center rounded-full bg-white border border-black/10"
                        style={{ width: 38, height: 38 }}
                      >
                        <img
                          src={logo}
                          alt="ELITE YACHTS"
                          className="w-6 opacity-95"
                          draggable={false}
                        />
                      </div>
                    </div>
                  </div>

                  {/* subtle top fade like premium */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.10),transparent_55%)]" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ABOUT */}
        {megaText && (
          <div className="mt-14 text-right">
            <LightCard>
              <h2 className="text-sm tracking-[0.3em] uppercase text-slate-800">عن هذا اليخت</h2>
              <div className="mt-4 text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                {megaText}
              </div>
            </LightCard>
          </div>
        )}

        {/* KEYWORDS */}
        {Array.isArray(yacht.keywords) && yacht.keywords.length > 0 && (
          <div className="mt-10">
            <LightCard>
              <h3 className="text-sm tracking-[0.25em] uppercase text-slate-800 text-right">
                كلمات مفتاحية
              </h3>

              <div className="mt-4 flex flex-wrap gap-2 justify-end">
                {yacht.keywords.slice(0, 18).map((k, idx) => (
                  <span
                    key={k + idx}
                    className="text-[12px] rounded-full border border-black/10 bg-white px-3 py-1 text-slate-700"
                    style={{ boxShadow: "0 10px 22px rgba(15,23,42,0.06)" }}
                  >
                    {k}
                  </span>
                ))}
              </div>
            </LightCard>
          </div>
        )}

        {/* RELATED */}
        {relatedYachts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-semibold tracking-widest mb-8 text-slate-900 text-right">
              يخوت مشابهة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedYachts.slice(0, 9).map((y) => (
                <YachtCard key={y.slug} yacht={y} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="bg-white text-slate-900">
        <FAQSection />
      </div>

      {lightboxOpen && gallery.length > 0 && (
        <GalleryLightbox
          images={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => setLightboxIndex((v) => (v - 1 + gallery.length) % gallery.length)}
          onNext={() => setLightboxIndex((v) => (v + 1) % gallery.length)}
          showLogo
        />
      )}
    </div>
  );
}

/* ---------- Helpers ---------- */

function normalizeSlug(s) {
  if (!s) return "";
  return String(s)
    .replace(/^\/|\/$/g, "")
    .replace(/^yacht\//, "")
    .toLowerCase();
}

function setMeta(name, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setOG(property, content) {
  if (!content) return;
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function LightCard({ children }) {
  return (
    <div
      className="rounded-3xl border border-black/10 bg-white p-6"
      style={{ boxShadow: "0 18px 50px rgba(15,23,42,0.12)" }}
    >
      {children}
    </div>
  );
}

function Spec({ icon, label, value }) {
  return (
    <div
      className="rounded-2xl border border-black/10 bg-white p-4 text-right"
      style={{ boxShadow: "0 12px 30px rgba(15,23,42,0.10)" }}
    >
      <div className="flex items-center gap-3 justify-end text-slate-800">
        <span className="text-sm tracking-wider">{label}</span>
        <i className={`fa-solid ${icon}`} />
      </div>

      <div className="mt-2 text-2xl font-semibold text-slate-900">{value}</div>
    </div>
  );
}

function Action({ href, iconType = "solid", icon, label, solid }) {
  const iconClass = iconType === "brands" ? `fa-brands fa-${icon}` : `fa-solid fa-${icon}`;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all duration-300";

  const style = solid
    ? "border border-black/10 bg-black text-white hover:bg-black/90"
    : "border border-black/10 bg-white text-slate-900 hover:border-black/20 hover:bg-slate-50";

  return (
    <a
      href={href}
      className={`${base} ${style}`}
      style={{
        boxShadow: solid
          ? "0 14px 34px rgba(15,23,42,0.18)"
          : "0 14px 34px rgba(15,23,42,0.10)",
      }}
    >
      <i className={iconClass} />
      <span className="truncate">{label}</span>
    </a>
  );
}

function fmtValue(v, suffix) {
  if (v === null || v === undefined || v === "" || v === "N/A") return "—";
  const out = String(v);
  return suffix ? `${out} ${suffix}` : out;
}
