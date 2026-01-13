import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faBitcoin,
  faCcVisa,
  faCcMastercard,
  faTiktok
} from "@fortawesome/free-brands-svg-icons";

import { faPhone } from "@fortawesome/free-solid-svg-icons";

import KeywordCloud from "./KeywordCloud";
import logo from "../assets/logo.png";

const INTERNAL_LINKS = {
  elite: [
    { to: "/من-نحن", label: "من نحن" },
    { to: "/اتصل-بنا-إيليت-يخت-دبي", label: "تواصل معنا" },
    { to: "/عروض-اليخوت", label: "باقات إيليت" },
    { to: "/خدمات-تأجير-اليخوت-في-دبي", label: "خدمات إيليت" },
  ],
  quick: [
    { to: "/الشروط-والأحكام", label: "الشروط والأحكام" },
    { to: "/سياسة-الاسترجاع-والاسترداد", label: "سياسة الاسترجاع والاسترداد" },
    { to: "/سياسة-الخصوصية", label: "سياسة الخصوصية" },
    { to: "/التعليمات", label: "الأسئلة الشائعة" },
    { to: "/مدونة", label: "المدونة" },
    { to: "/sitemap", label: "خريطة الموقع" },
  ],
};

const SOCIALS = [
  {
    href: "https://www.facebook.com/eliteyachtdubaiofficial",
    icon: faFacebookF,
    label: "فيسبوك",
  },
  {
    href: "https://www.youtube.com/@eliteyachtdubaiofficial",
    icon: faYoutube,
    label: "يوتيوب",
  },
  {
    href: "https://www.instagram.com/eliteyachtdubai_official/",
    icon: faInstagram,
    label: "انستغرام",
  },
  {
    href: "https://www.linkedin.com/company/elite-yacht-dubai/",
    icon: faLinkedinIn,
    label: "لينكدإن",
  },
  {
    href: "https://www.tiktok.com/@eliteyachtdubai?_r=1&_t=ZS-930QYCj5WvI",
    icon: faTiktok,
    label: "tiktok",
  },
];

function FooterNavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-black/65 hover:text-black transition"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer
      dir="rtl"
      lang="ar"
      className="relative w-full bg-white text-black border-t border-black/10"
    >
      {/* subtle background (mono) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.02),transparent_35%,rgba(15,23,42,0.02))]" />
      </div>

      {/* MAIN FOOTER */}
      <div className="relative max-w-[1700px] mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid gap-12 xl:gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* COLUMN 1 — LOGO + SEO TEXT */}
          <div>
            <Link to="/" className="inline-block" aria-label="العودة للرئيسية">
              <img src={logo} alt="إيليت يخوت" className="h-14 mb-4 w-auto" />
            </Link>

            <p className="text-lg md:text-xl mb-4 text-black/85">
              إيليت يخوت رينتال ذ.م.م
            </p>

            <p className="text-sm text-black/65 leading-relaxed mb-6">
              تقدم <span className="text-black/85">إيليت يخوت دبي</span> خدمات{" "}
              <span className="text-black/85">تأجير يخوت فاخرة في دبي مارينا</span>،
              ورحلات <span className="text-black/85">يخت خاص في دبي</span>، وفعاليات
              الشركات، ورحلات الغروب، وتجارب VIP على امتداد أفق دبي الشهير عالميًا.
              احجز أفضل <span className="text-black/85">يخت في دبي</span> لأعياد الميلاد،
              طلبات الزواج، الحفلات والمناسبات الخاصة.
            </p>

            <p className="text-sm italic text-black/75">حيث تلتقي الرحلة بالفخامة.</p>
          </div>

          {/* COLUMN 2 — SOCIAL MEDIA */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg mb-3 text-black/85">تابعنا</h3>
              <div className="flex items-center gap-4 text-black/70 text-lg">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={s.label}
                    className="
                      h-10 w-10 rounded-full
                      border border-black/10
                      bg-white
                      grid place-items-center
                      shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                      hover:border-black/25
                      hover:text-black
                      hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]
                      transition
                    "
                  >
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* trust badge (mono) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-[11px] tracking-[0.22em] uppercase text-black/60 shadow-[0_10px_24px_rgba(15,23,42,0.06)]">
              <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
              حجز مباشر • خدمة VIP
            </div>
          </div>

          {/* COLUMN 3 — LINKS */}
          <div className="grid grid-cols-2 gap-10">
            {/* ELITE LINKS */}
            <div>
              <h3 className="text-lg mb-3 text-black/85">روابط إيليت</h3>
              <ul className="space-y-2 ">
                {INTERNAL_LINKS.elite.map((l) => (
                  <li key={l.to}>
                    <FooterNavLink to={l.to}>{l.label}</FooterNavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-lg mb-3 text-black/85">روابط سريعة</h3>
              <ul className="space-y-2 text-sm">
                {INTERNAL_LINKS.quick.map((l) => (
                  <li key={l.to}>
                    <FooterNavLink to={l.to}>{l.label}</FooterNavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COLUMN 4 — CONTACT DETAILS */}
          <div>
            <h3 className="text-lg mb-4 text-black/85">تواصل معنا</h3>

            <div className="space-y-4 text-sm text-black/65">
              <div>
                <p className="font-semibold text-black/85">المكتب الرئيسي</p>
                <p>مكتب 506، برج سعيد 1، دبي، الإمارات</p>
              </div>

              <div>
                <p className="font-semibold text-black/85">موقع القارب</p>
                <p>ممشى دبي مارينا — شارع السوائب — إيست مارينا — دبي</p>
              </div>
              <div className="flex items-start gap-2">
                <FontAwesomeIcon icon={faWhatsapp} className="mt-1 text-black/70" />
                <div className="text-right" dir="ltr">
                  <a
                    href="https://wa.me/971569006603"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-black/70 hover:text-black transition"
                  >
                    +971569006603
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2" dir="">
                <FontAwesomeIcon icon={faPhone} className="mt-1 text-black/70" />
                <div className="text-right" dir="ltr">
                  <a href="tel:971569006603" className="text-black/70 hover:text-black transition">
                    +971569006603
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2" dir="">
                <FontAwesomeIcon icon={faPhone} className="mt-1 text-black/70" />
                <div className="text-right" dir="ltr">
                  <a href="tel:971569006603" className="text-black/70 hover:text-black transition">
                    Land Line: (04)3889666
                  </a>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* KEYWORD CLOUD */}
        <div className="mt-10 border-t border-black/10 pt-6">
          <KeywordCloud />
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-black/10 pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-xs text-black/55">
          <p>إيليت يخوت © 2025 جميع الحقوق محفوظة.</p>

          <div className="flex items-center gap-4">
            <span>طرق الدفع المقبولة:</span>
            <FontAwesomeIcon icon={faBitcoin} className="text-xl text-black/70" />
            <FontAwesomeIcon icon={faCcMastercard} className="text-xl text-black/70" />
            <FontAwesomeIcon icon={faCcVisa} className="text-xl text-black/70" />
            <span className="border border-black/10 bg-white px-2 py-1 rounded-sm text-black/70 text-[10px]">
              نقداً
            </span>
          </div>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON (mono) */}
      <a
        href="https://wa.me/971569006603"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="تواصل مع إيليت يخوت عبر واتساب"
        className="
          fixed bottom-6 right-6
          w-14 h-14 rounded-full
          flex items-center justify-center
          border border-black/10
          bg-white/85 backdrop-blur
          text-black
          shadow-[0_18px_40px_rgba(15,23,42,0.18)]
          hover:border-black/25
          hover:text-black
          hover:shadow-[0_18px_48px_rgba(0,0,0,0.18)]
          hover:scale-105 transition
        "
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      </a>
    </footer>
  );
}
