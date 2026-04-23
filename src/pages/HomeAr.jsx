import { useMemo } from "react";
import Seo from "../components/Seo";
import Schema from "../components/Schema";

import Hero from "../components/Hero";
import AboutContainer from "../components/AboutContainer";
import YachtsSection from "../components/YachtsSection";
import ReviewsSlider from "../components/ReviewsSlider";
import BrandsGroupSection from "../components/BrandsGroupSection";
import CTASection from "../components/CTASection";
import ContentSection from "../components/ContentSection"

function applyTM(input = "") {
    let out = String(input);
    out = out.replace(/إيليت\s+يخوت(?!\s*™)/g, "إيليت يخوت™");
    out = out.replace(/إيليت(?!\s*(يخوت|™))/g, "إيليت™");
    out = out.replace(/\bElite\s+Yachts\b(?!\s*™)/gi, (m) => `${m}™`);
    out = out.replace(/\bElite\s+Yacht\b(?!\s*™)/gi, (m) => `${m}™`);
    out = out.replace(/\bElite\b(?!\s*(Yachts|Yacht|™))/gi, (m) => `${m}™`);
    return out;
}

export default function HomeAr() {
    const canonical = "https://eliteyachtdubai.com/";
    const title = "تأجير يخوت في دبي مارينا | إيليت يخوت™ | حجز سريع واتساب";
    const description =
        "إيليت يخوت™ تقدم تأجير يخوت فاخرة في دبي مارينا للرحلات الخاصة والحفلات وفعاليات الشركات. أسطول متنوع، طاقم محترف، وخيارات VIP. حجز مباشر عبر واتساب أو الاتصال.";
    const keywords =
        "تأجير يخوت دبي, تأجير يخت دبي, تأجير يخت دبي مارينا, يخوت فاخرة دبي, يخت خاص في دبي, حجز يخت دبي واتساب, رحلات يخت VIP دبي, حفلات على اليخت دبي, فعاليات الشركات على يخت, رحلة غروب دبي";

    const schema = useMemo(
        () => [
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://eliteyachtdubai.com/#website",
                "url": "https://eliteyachtdubai.com/",
                "name": "إيليت يخوت دبي",
                "alternateName": ["Elite Yachts Dubai", "تأجير يخوت دبي", "تأجير يخت دبي مارينا"],
                "inLanguage": "ar-AE",
                "publisher": { "@id": "https://eliteyachtdubai.com/#organization" },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://eliteyachtdubai.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            },
            {
                "@type": "Organization",
                "@id": "https://eliteyachtdubai.com/#organization",
                "name": "إيليت يخوت دبي",
                "alternateName": ["إيليت يخوت", "Elite Yachts Dubai"],
                "url": "https://eliteyachtdubai.com/",
                "logo": "https://eliteyachtdubai.com/images/logo.png",
                "telephone": "+971569006603",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dubai",
                    "addressCountry": "AE"
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://eliteyachtdubai.com/#localbusiness",
                "name": "إيليت يخوت دبي",
                "url": "https://eliteyachtdubai.com/",
                "image": "https://eliteyachtdubai.com/images/hero/hero-bg-1600.webp",
                "telephone": "+971569006603",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dubai",
                    "addressCountry": "AE"
                },
                "areaServed": {
                    "@type": "AdministrativeArea",
                    "name": "Dubai"
                },
                "priceRange": "$$$$",
                "serviceType": "تأجير يخوت فاخرة في دبي مارينا"
            }
        ],
        []
    );

    const reviewSchema = useMemo(
        () => ({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "إيليت يخوت دبي – تأجير يخوت فاخرة في دبي مارينا",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "128"
            }
        }),
        []
    );

    return (
        <main dir="rtl" lang="ar" className="w-full bg-white text-black">
            <Seo
                title={applyTM(title)}
                description={applyTM(description)}
                keywords={applyTM(keywords)}
                canonical={canonical}
                ogTitle={applyTM("تأجير يخوت في دبي مارينا | إيليت يخوت™")}
                ogDescription={applyTM("حجز مباشر عبر واتساب. أسطول فاخر، طاقم محترف، وتجارب VIP في دبي مارينا.")}
                ogImage="https://eliteyachtdubai.com/images/og/home.webp"
                ogUrl={canonical}
            />

            <Schema data={schema} />
            <Schema data={reviewSchema} />

            <Hero />

            <YachtsSection />
            <AboutContainer />
            <BrandsGroupSection />
            <div dir="ltr">
            <ReviewsSlider />
            </div>
            <CTASection variant="fleet" />
            <ContentSection />

        </main>
    );
}
