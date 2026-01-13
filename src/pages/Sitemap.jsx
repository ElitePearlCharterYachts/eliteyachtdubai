import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { listPublishedBlogs } from "../lib/blogsPublic";

function Container({ children }) {
  return <div className="max-w-[1500px] mx-auto px-6 lg:px-10">{children}</div>;
}

function PageTitle({ title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-[11px] tracking-[0.35em] uppercase text-black/55">
        إيليت يخوت
      </p>

      <h1 className="text-[26px] sm:text-[42px] font-extrabold uppercase tracking-[0.18em] text-black">
        {title}
      </h1>

      {subtitle ? (
        <p className="mt-3 max-w-3xl mx-auto text-sm sm:text-[15px] leading-relaxed text-black/60">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Panel({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-black/10 bg-white ${className}`}
      style={{
        boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
      }}
    >
      {children}
    </div>
  );
}

function GroupTitle({ title }) {
  return (
    <div className="mb-4">
      <div className="text-[12px] tracking-[0.32em] uppercase text-black/70">
        {title}
      </div>
      <div className="mt-2 h-px w-full bg-black/10" />
    </div>
  );
}

function SitemapItem({ to, label, external = false }) {
  const cls =
    "block py-2 text-sm text-black/70 hover:text-black transition break-words";

  if (external) {
    return (
      <a className={cls} href={to} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link className={cls} to={to}>
      {label}
    </Link>
  );
}

// تصنيف اليخوت (Luxury / VIP / Super) — يستخدم category إذا موجودة
function inferBucket(y) {
  const raw = (y?.category || y?.bucket || y?.group || y?.type || "").toLowerCase();

  if (raw.includes("super")) return "يخوت سوبر";
  if (raw.includes("vip")) return "يخوت VIP";
  if (raw.includes("lux")) return "يخوت فاخرة";

  const name = `${y?.title || ""} ${y?.name || ""}`.toLowerCase();
  const m = name.match(/(\d{2,3})\s*ft/);
  const ft = m ? Number(m[1]) : null;

  if (ft !== null) {
    if (ft >= 108) return "يخوت سوبر";
    if (ft >= 78) return "يخوت VIP";
    return "يخوت فاخرة";
  }

  return "يخوت فاخرة";
}

export default function Sitemap() {
  const [yachts, setYachts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [q, setQ] = useState("");

  // Yachts from JSON
  useEffect(() => {
    fetch("/data/yachts.json")
      .then((r) => r.json())
      .then((data) => setYachts(Array.isArray(data) ? data : []))
      .catch(() => setYachts([]));
  }, []);

  // Blogs from Supabase (published)
  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setBlogsLoading(true);
        const { data } = await listPublishedBlogs({ limit: 500, from: 0 });
        if (!alive) return;
        setBlogs(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!alive) return;
        setBlogs([]);
      } finally {
        if (!alive) return;
        setBlogsLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  const yachtLinks = useMemo(() => {
    const list = yachts
      .map((y) => {
        const slug = (y?.slug || "").trim();
        if (!slug) return null;

        return {
          slug,
          title: y?.title || y?.name || slug,
          bucket: inferBucket(y),
          path: `/${slug}`,
        };
      })
      .filter(Boolean);

    const seen = new Set();
    const unique = [];
    for (const item of list) {
      if (seen.has(item.slug)) continue;
      seen.add(item.slug);
      unique.push(item);
    }

    unique.sort((a, b) => a.title.localeCompare(b.title));
    return unique;
  }, [yachts]);

  const groupedYachts = useMemo(() => {
    const groups = new Map();
    for (const item of yachtLinks) {
      const key = item.bucket || "يخوت فاخرة";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    }

    const order = ["يخوت فاخرة", "يخوت VIP", "يخوت سوبر"];
    const out = [];
    for (const k of order) {
      if (groups.has(k)) out.push([k, groups.get(k)]);
    }
    for (const [k, v] of groups.entries()) {
      if (!order.includes(k)) out.push([k, v]);
    }
    return out;
  }, [yachtLinks]);

  const blogLinks = useMemo(() => {
    const list = (blogs || [])
      .map((b) => {
        const slug = (b?.slug || "").trim();
        if (!slug) return null;

        return {
          slug,
          title: b?.title || slug,
          path: `/blog/${slug}`, // عدّل إذا مسارك مختلف
        };
      })
      .filter(Boolean);

    const seen = new Set();
    const unique = [];
    for (const item of list) {
      if (seen.has(item.slug)) continue;
      seen.add(item.slug);
      unique.push(item);
    }

    unique.sort((a, b) => a.title.localeCompare(b.title));
    return unique;
  }, [blogs]);

  const filteredYachtGroups = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return groupedYachts;

    return groupedYachts
      .map(([name, items]) => [
        name,
        items.filter(
          (i) =>
            i.slug.toLowerCase().includes(needle) ||
            i.title.toLowerCase().includes(needle) ||
            i.path.toLowerCase().includes(needle)
        ),
      ])
      .filter(([, items]) => items.length > 0);
  }, [q, groupedYachts]);

  const filteredBlogs = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return blogLinks;

    return blogLinks.filter(
      (b) =>
        b.slug.toLowerCase().includes(needle) ||
        b.title.toLowerCase().includes(needle) ||
        b.path.toLowerCase().includes(needle)
    );
  }, [q, blogLinks]);

  // ✅ روابط عربية (عدّل المسارات لو عندك سلاجات عربية مختلفة)
  const SERVICES = [
    { to: "/services", label: "الخدمات" },
    { to: "/water-sports-in-dubai", label: "الرياضات المائية" },
    { to: "/elite-yachts-private-dj", label: "دي جي خاص على اليخت" },
    { to: "/yacht-catering-dubai", label: "تموين وكيترنغ على اليخت" },
    { to: "/corporate-yacht-events-dubai", label: "فعاليات الشركات على اليخت" },
  ];

  const PACKAGES = [
    { to: "/packages", label: "باقاتنا" },
    { to: "/new-year", label: "رأس السنة في دبي" },
    { to: "/formula1", label: "فورمولا 1 أبوظبي" },
  ];

  // ✅ صفحات Elite Yacht Dubai (حسب اللي تستخدمه عندك: /about-us + /elite-yachts-owner + /faq)
  const PAGES = [
    { to: "/", label: "الرئيسية" },
    { to: "/elite-yachts-fleet", label: "أسطول إيليت يخوت" },
    { to: "/services", label: "الخدمات" },
    { to: "/packages", label: "الباقات" },
    { to: "/about-us", label: "من نحن" },
    { to: "/elite-yachts-owner", label: "مالك الشركة" },
    { to: "/contact", label: "تواصل معنا" },
    { to: "/faq", label: "الأسئلة الشائعة" },
    { to: "/terms-and-conditions", label: "الشروط والأحكام" },
    { to: "/privacy-policy", label: "سياسة الخصوصية" },
    { to: "/refund-policy", label: "سياسة الاسترجاع والاستبدال" },
    { to: "/sitemap", label: "خريطة الموقع" },
  ];

  return (
    <div dir="rtl" lang="ar" className="w-full bg-[#fbfbfb] text-black">
      {/* HEADER */}
      <section className="border-b border-black/10 bg-white">
        <Container>
          <div className="pt-24 pb-10">
            <PageTitle
              title="خريطة الموقع"
              subtitle="روابط منظمة لأسطول إيليت يخوت، الخدمات، الباقات، الصفحات والمدونة."
            />

            {/* Search */}
            <div className="mt-7 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="ابحث عن يخت أو صفحة أو مقال…"
                  className="
                    w-full rounded-2xl border border-black/10 bg-white
                    px-4 py-3 text-sm outline-none
                    focus:border-black/20 focus:ring-4 focus:ring-black/5
                  "
                />
                {q ? (
                  <button
                    onClick={() => setQ("")}
                    className="
                      absolute left-3 top-1/2 -translate-y-1/2
                      rounded-full px-3 py-1 text-xs
                      border border-black/10 bg-white hover:bg-black hover:text-white
                      transition
                    "
                    aria-label="مسح البحث"
                  >
                    مسح
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTENT */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LEFT: Yachts */}
            <Panel className="p-6">
              <GroupTitle title="اليخوت" />

              {filteredYachtGroups.map(([groupName, items]) => (
                <div key={groupName} className="mb-8 last:mb-0">
                  <div className="text-[12px] tracking-[0.28em] uppercase text-black/60">
                    {groupName}
                  </div>

                  <div className="mt-3 space-y-1">
                    {items.map((it) => (
                      <SitemapItem key={it.slug} to={it.path} label={it.title} />
                    ))}
                  </div>
                </div>
              ))}

              {!yachtLinks.length ? (
                <div className="text-sm text-black/55">
                  جاري تحميل صفحات اليخوت… (تأكد أن{" "}
                  <span className="text-black/80">/public/data/yachts.json</span>{" "}
                  موجود)
                </div>
              ) : null}
            </Panel>

            {/* RIGHT */}
            <div className="space-y-6">
              <Panel className="p-6">
                <GroupTitle title="الخدمات" />
                <div className="space-y-1">
                  {SERVICES.map((x) => (
                    <SitemapItem key={x.to} to={x.to} label={x.label} />
                  ))}
                </div>
              </Panel>

              <Panel className="p-6">
                <GroupTitle title="الباقات" />
                <div className="space-y-1">
                  {PACKAGES.map((x) => (
                    <SitemapItem key={x.to} to={x.to} label={x.label} />
                  ))}
                </div>
              </Panel>

              <Panel className="p-6">
                <GroupTitle title="الصفحات" />
                <div className="space-y-1">
                  {PAGES.map((x) => (
                    <SitemapItem key={x.to} to={x.to} label={x.label} />
                  ))}
                </div>
              </Panel>

              {/* Blog */}
              <Panel className="p-6">
                <GroupTitle title="المدونة" />

                <div className="space-y-1">
                  <SitemapItem to="/blog" label="المدونة (كل المقالات)" />
                </div>

                <div className="mt-4 space-y-1">
                  {filteredBlogs.map((it) => (
                    <SitemapItem key={it.slug} to={it.path} label={it.title} />
                  ))}
                </div>

                {blogsLoading ? (
                  <div className="mt-4 text-sm text-black/55">
                    جاري تحميل مقالات المدونة…
                  </div>
                ) : null}

                {!blogsLoading && !blogLinks.length ? (
                  <div className="mt-4 text-sm text-black/55">
                    لا توجد مقالات منشورة حالياً (Supabase: status="published").
                  </div>
                ) : null}
              </Panel>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
