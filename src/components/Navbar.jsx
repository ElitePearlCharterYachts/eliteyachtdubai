import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "الرئيسية", to: "/" },
  { label: "إيليت يخوت", to: "/يخوتنا-يخت-النخبة-دبي" },
  { label: "الخدمات", to: "/خدمات-تأجير-اليخوت-في-دبي",
    hasDropdown: true,
    children: [
      { label: "الرياضات المائية", to: "/الرياضات-المائية-في-دبي" },
      { label: "فعاليات الشركات على اليخت", to: "/فعاليات-الشركات-على-اليخت-في-دبي" },

    ],
   },

  { label: "العروض والباقات", to: "/عروض-اليخوت" },

  {
    label: "من نحن",
    to: "/من-نحن",
    hasDropdown: true,
    children: [
      { label: "فريقنا", to: "/فريقنا" },
      { label: "التعليمات", to: "/التعليمات" },
      { label: "مالك الشركة", to: "/مالك-إيليت-يخوت" },
    ],
  },

  { label: "أفضل شركة يخوت ", to: "/افضل-شركة-تأجير-يخوت-في-دبي" },
  { label: "تواصل معنا", to: "/اتصل-بنا-إيليت-يخت-دبي" },
];

const WHATSAPP =
  "https://wa.me/+971569006603?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85";
const PHONE_TEL = "tel:+971569006603";
const PHONE_DISPLAY = "+971 56 900 6603";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop open dropdown label
  const [openDropdown, setOpenDropdown] = useState(null);

  // Mobile open dropdown label
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const headerRef = useRef(null);
  const [headerH, setHeaderH] = useState(72); // fallback

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track header height (so mobile panel/backdrop starts exactly under it)
  useEffect(() => {
    if (!headerRef.current) return;

    const el = headerRef.current;

    const update = () => {
      const h = Math.round(el.getBoundingClientRect().height || 72);
      setHeaderH(h);
    };

    update();

    let ro;
    if ("ResizeObserver" in window) {
      ro = new ResizeObserver(update);
      ro.observe(el);
    } else {
      window.addEventListener("resize", update);
    }

    return () => {
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", update);
    };
  }, []);

  // Close desktop dropdown when clicking outside header
  useEffect(() => {
    const onClickOutside = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    if (!mobileOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileDropdown(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mobileOpen]);

  // Lock scroll when mobile menu open (better UX)
  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const toggleMobileDropdown = (label) =>
    setMobileDropdown((prev) => (prev === label ? null : label));

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  const headerBase = "fixed top-0 left-0 w-full z-50 transition-all duration-300";
  const headerStyle = scrolled
    ? "bg-white/92 backdrop-blur-xl border-b border-black/10 shadow-[0_10px_30px_rgba(15,23,42,0.10)]"
    : "bg-white border-b border-black/10";

  return (
    <header
      ref={headerRef}
      dir="rtl"
      lang="ar"
      className={`${headerBase} ${headerStyle}`}
    >
      <nav className="w-full">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 xl:px-10 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* RIGHT: LOGO */}
            <div className="flex justify-end shrink-0">
              <Link
                to="/"
                className="flex items-center gap-3"
                onClick={closeAll}
                aria-label="إيليت يخوت"
              >
                <img src={logo} alt="إيليت يخوت" className="h-12 w-auto object-contain" />
              </Link>
            </div>

            {/* CENTER: DESKTOP MENU */}
            <div className="hidden lg:flex justify-center flex-1">
              <ul className="flex items-center gap-8 tracking-[0.22em] font-bold text-[13px] xl:text-[14px] uppercase">
                {navItems.map((item) => {
                  const isOpen = openDropdown === item.label;

                  return (
                    <li key={item.label} className="relative">
                      <div className="flex items-center gap-2">
                        <Link
                          to={item.to}
                          onClick={() => setOpenDropdown(null)}
                          className="text-black/80 hover:text-black transition-colors"
                        >
                          {item.label}
                        </Link>

                        {item.hasDropdown && (
                          <button
                            type="button"
                            className={`h-8 w-8 grid place-items-center rounded-full border transition ${isOpen
                                ? "border-black/25 text-black bg-black/[0.04]"
                                : "border-black/10 text-black/60 hover:text-black hover:border-black/25 hover:bg-black/[0.04]"
                              }`}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              setOpenDropdown((prev) => (prev === item.label ? null : item.label));
                            }}
                            aria-label={`فتح قائمة ${item.label}`}
                            aria-expanded={isOpen}
                          >
                            <i
                              className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"
                                } text-[12px]`}
                            />
                          </button>
                        )}
                      </div>

                      {/* DESKTOP DROPDOWN */}
                      {item.hasDropdown && isOpen && (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4">
                          <div className="rounded-2xl bg-white/96 backdrop-blur-xl border border-black/10 shadow-[0_20px_60px_rgba(15,23,42,0.14)] py-3 min-w-[260px] overflow-hidden">
                            <div className="px-4 pb-2">
                              <div className="text-[10px] tracking-[0.32em] uppercase text-black/45">
                                {item.label}
                              </div>
                            </div>
                            <div className="h-px w-full bg-black/5" />

                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.to}
                                onClick={() => setOpenDropdown(null)}
                                className="group block px-4 py-3 text-[12px] tracking-[0.14em] uppercase text-black/70 hover:text-black transition hover:bg-black/[0.03]"
                              >
                                <span className="flex items-center justify-between gap-3">
                                  <span className="leading-snug">{child.label}</span>
                                  <i className="fa-solid fa-arrow-left text-[11px] text-black/30 group-hover:text-black transition" />
                                </span>
                                <span className="mt-2 block h-[1px] w-0 bg-black/25 group-hover:w-full transition-all duration-300" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* LEFT: CONTACT BUTTONS (DESKTOP) */}
            <div className="hidden md:flex items-center justify-end gap-3 shrink-0">
              <a
                href={WHATSAPP}
                dir="ltr"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 bg-white text-black/80 hover:text-black hover:border-black/25 hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition"
                aria-label="واتساب"
              >
                <i className="fa-brands fa-whatsapp text-[16px]" />
                <span className="tracking-widest text-[12px] font-bold">{PHONE_DISPLAY}</span>
              </a>

              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white border border-black hover:bg-black/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition"
              >
                <i className="fa-solid fa-phone text-[14px]" />
                <span className="text-[12px] tracking-[0.18em] font-bold uppercase">اتصل الآن</span>
              </a>
            </div>

            {/* MOBILE TOGGLER */}
            <div className="lg:hidden flex justify-start">
              <button
                onClick={() => {
                  setMobileOpen((prev) => !prev);
                  setMobileDropdown(null);
                }}
                className="h-11 w-11 grid place-items-center rounded-full border border-black/10 bg-white text-black hover:border-black/25 hover:bg-black/[0.04] transition"
                aria-label="فتح القائمة"
              >
                <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"} text-[18px]`} />
              </button>
            </div>
          </div>
        </div>

        {/*   MOBILE MENU PANEL (FIXED + 100dvh FOR iOS) */}
        {mobileOpen && (
          <div
            className="lg:hidden fixed left-0 right-0 z-50"
            style={{ top: headerH }}
          >
            <div
              className="border-t border-black/10 bg-white/96 backdrop-blur-xl"
              style={{ height: `calc(100dvh - ${headerH}px)` }}
            >
              <div className="h-full overflow-y-auto">
                <div className="max-w-[1700px] mx-auto px-4 sm:px-6 py-4">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => {
                      const isMobileOpen = mobileDropdown === item.label;

                      return (
                        <div
                          key={item.label}
                          className="rounded-2xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden"
                        >
                          <div className="flex items-center justify-between px-4 py-3">
                            <Link
                              to={item.to}
                              className="text-black/85 tracking-[0.14em] uppercase text-[13px] font-bold"
                              onClick={closeAll}
                            >
                              {item.label}
                            </Link>

                            {item.hasDropdown && (
                              <button
                                type="button"
                                onClick={() => toggleMobileDropdown(item.label)}
                                className={`h-10 w-10 grid place-items-center rounded-full border transition ${isMobileOpen
                                    ? "border-black/25 text-black bg-black/[0.04]"
                                    : "border-black/10 text-black/70 hover:text-black hover:border-black/25 hover:bg-black/[0.04]"
                                  }`}
                                aria-label="فتح القائمة الفرعية"
                                aria-expanded={isMobileOpen}
                              >
                                <i
                                  className={`fa-solid ${isMobileOpen ? "fa-chevron-up" : "fa-chevron-down"
                                    } text-[12px]`}
                                />
                              </button>
                            )}
                          </div>

                          {item.hasDropdown && (
                            <div className={`${isMobileOpen ? "block" : "hidden"}`}>
                              <div className="h-px w-full bg-black/5" />
                              <div className="px-4 py-3 flex flex-col gap-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    to={child.to}
                                    onClick={closeAll}
                                    className="rounded-xl px-3 py-2.5 text-[12px] tracking-[0.12em] uppercase text-black/70 hover:text-black hover:bg-black/[0.04] transition"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* MOBILE CONTACT */}
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href={WHATSAPP}
                        dir="ltr"
                        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 border border-black/10 bg-white text-black/85 hover:text-black hover:border-black/25 hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition"
                      >
                        <i className="fa-brands fa-whatsapp text-[16px]" />
                        <span className="tracking-widest text-[12px] font-bold">{PHONE_DISPLAY}</span>
                      </a>

                      <a
                        href={PHONE_TEL}
                        dir="ltr"
                        className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-black text-white border border-black hover:bg-black/90 hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition"
                      >
                        <i className="fa-solid fa-phone text-[14px]" />
                        <span className="tracking-widest text-[12px] font-bold">{PHONE_DISPLAY}</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={closeAll}
                      className="mt-3 rounded-full px-5 py-3 border border-black/10 bg-white text-black/70 hover:text-black hover:border-black/25 hover:bg-black/[0.04] transition"
                    >
                      إغلاق القائمة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*   Backdrop (fixed, aligned under header, behind panel) */}
        {mobileOpen && (
          <div
            onClick={closeAll}
            className="fixed inset-0 lg:hidden z-40 bg-black/30"
            style={{ top: headerH }}
            aria-label="إغلاق"
          />
        )}
      </nav>
    </header>
  );
}
