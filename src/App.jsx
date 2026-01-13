import "./index.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState, memo } from "react";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Schema from "./components/Schema";

import Sitemap from "./pages/Sitemap";

const Footer = lazy(() => import("./components/Footer"));

const HomeAr = lazy(() => import("./pages/HomeAr"));

const Services = lazy(() => import("./pages/Services"));
const Corporate = lazy(() => import("./pages/Corporate"));
const WaterSports = lazy(() => import("./pages/WaterSports"));
const Packages = lazy(() => import("./pages/Packages"));
const Yachts = lazy(() => import("./pages/Yachts"));
const About = lazy(() => import("./pages/about"));
const BestYachtCharterDubaiAr = lazy(() => import("./pages/BestYachtCharterDubaiAr"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const BlogDetailsPage = lazy(() => import("./pages/BlogDetailsPage"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Owner = lazy(() => import("./pages/Owner"));
const Contact = lazy(() => import("./pages/contact"));
const YachtDetails = lazy(() => import("./pages/YachtDetails"));
const Terms = lazy(() => import("./pages/Terms"));
const Team = lazy(() => import("./pages/Team"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const BASE_URL = "https://eliteyachtdubai.com";
const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const LOCAL_ID = `${BASE_URL}/#localbusiness`;

const GlobalSchema = memo(function GlobalSchema() {
  const graph = [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      "name": "إيليت يخوت دبي",
      "alternateName": ["إيليت يخوت", "Elite Yachts Dubai"],
      "url": BASE_URL,
      "logo": `${BASE_URL}/images/logo.png`,
      "telephone": "+971569006603",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "sameAs": ["https://www.instagram.com/eliteyachtdubai/"]
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      "url": BASE_URL,
      "name": "إيليت يخوت دبي",
      "inLanguage": "ar-AE",
      "publisher": { "@id": ORG_ID },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": LOCAL_ID,
      "name": "إيليت يخوت دبي",
      "url": BASE_URL,
      "image": `${BASE_URL}/images/hero/hero-bg-1600.webp`,
      "telephone": "+971569006603",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "areaServed": { "@type": "AdministrativeArea", "name": "Dubai" },
      "priceRange": "$$$$",
      "serviceType": "تأجير يخوت فاخرة في دبي مارينا"
    }
  ];

  return <Schema data={graph} />;
});

function NotFound() {
  return (
    <main dir="rtl" lang="ar" className="w-full bg-white text-black">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-20 text-center">
        <p className="text-[12px] tracking-[0.35em] text-black/55 uppercase">404</p>
        <h1 className="mt-3 text-[22px] sm:text-[30px] font-semibold text-black">
          الصفحة غير موجودة
        </h1>
        <p className="mt-4 text-black/65 leading-relaxed">
          الرابط الذي فتحته غير صحيح أو تم نقله. استخدم القائمة للعودة إلى الصفحات الرئيسية.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3 border border-black bg-black text-white"
        >
          العودة إلى الرئيسية
        </a>
      </div>
    </main>
  );
}

export default function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowFooter(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        const el = document.activeElement;
        if (el && typeof el.blur === "function") el.blur();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const RouteShell = () => (
    <div className="w-full">
      <div className="mx-auto max-w-[1400px] px-6 pt-6">
        <div className="h-6 w-48 rounded bg-black/5" />
        <div className="mt-4 h-10 w-[70%] rounded bg-black/5" />
        <div className="mt-6 h-[260px] w-full rounded-2xl bg-black/5 ring-1 ring-black/10" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen overflow-hidden bg-white text-black flex flex-col">
      <GlobalSchema />

      <Navbar />
      <ScrollToTop />

      <main className="pt-15 flex-1">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomeAr />} />

            <Route path="/خدمات-تأجير-اليخوت-في-دبي" element={<Services />} />
            <Route path="/الرياضات-المائية-في-دبي" element={<WaterSports />} />
            <Route path="/فعاليات-الشركات-على-اليخت-في-دبي" element={<Corporate />} />

            <Route path="/عروض-اليخوت" element={<Packages />} />
            <Route path="/فريقنا" element={<Team />} />

            <Route path="/يخوتنا-يخت-النخبة-دبي" element={<Yachts />} />
            <Route path="/مدونة" element={<BlogsPage />} />
            <Route path="/مدونة/:slug" element={<BlogDetailsPage />} />

            <Route path="/من-نحن" element={<About />} />
            <Route path="/افضل-شركة-تأجير-يخوت-في-دبي" element={<BestYachtCharterDubaiAr />} />
            <Route path="/مالك-إيليت-يخوت" element={<Owner />} />
            <Route path="/التعليمات" element={<FAQ />} />
            <Route path="/اتصل-بنا-إيليت-يخت-دبي" element={<Contact />} />

            <Route path="/الشروط-والأحكام" element={<Terms />} />
            <Route path="/سياسة-الاسترجاع-والاسترداد" element={<RefundPolicy />} />
            <Route path="/سياسة-الخصوصية" element={<PrivacyPolicy />} />

            <Route path="/sitemap" element={<Sitemap />} />

            <Route path="/:slug" element={<YachtDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Suspense fallback={<RouteShell />}>
        {showFooter ? <Footer /> : null}
      </Suspense>
    </div>
  );
}
