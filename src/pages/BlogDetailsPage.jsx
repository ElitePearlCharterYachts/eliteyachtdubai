import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPublishedBlogBySlug } from "../lib/blogsPublic";
import { supabasePublic } from "../lib/supabasePublic";
import Seo from "../components/Seo";

const BUCKET = "blog-covers";

function urlToStorageKey(urlOrPath) {
  const v = (urlOrPath || "").trim();
  if (!v) return "";
  if (!v.startsWith("http://") && !v.startsWith("https://")) return v;

  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const idx = v.indexOf(marker);
  if (idx === -1) return "";
  return v.slice(idx + marker.length);
}

function stripHtml(html = "") {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/?[^>]+(>|$)/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function BlogDetailsPage() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [coverBlob, setCoverBlob] = useState("");

  const htmlContent = blog?.content_html || "";
  const textFallback = blog?.content || "";
  const contentLooksLikeHtml = /<[a-z][\s\S]*>/i.test(textFallback);
  const renderHtml = htmlContent.trim() || (contentLooksLikeHtml ? textFallback : "");
  const hasHtml = Boolean(renderHtml);

  const title = blog?.seo_title || blog?.title || "Blog";
  const desc = blog?.seo_description || blog?.excerpt || "";
  const canonical = useMemo(() => `${window.location.origin}/blog/${slug || ""}`, [slug]);

  const dateStr = useMemo(() => {
    if (!blog?.published_at) return "";
    return new Date(blog.published_at).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }, [blog?.published_at]);

  const readingTime = useMemo(() => {
    const textFromHtml = hasHtml ? stripHtml(renderHtml) : "";
    const text = `${blog?.title || ""} ${blog?.excerpt || ""} ${textFromHtml || textFallback || ""}`.trim();
    if (!text) return "";
    const words = text.split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.round(words / 220));
    return `${mins} min read`;
  }, [blog?.title, blog?.excerpt, renderHtml, textFallback, hasHtml]);

  const ogImage = coverBlob || blog?.cover_image_url || "";

  useEffect(() => {
    let alive = true;

    (async () => {
      setLoading(true);
      setBlog(null);
      setCoverBlob("");

      try {
        const data = await getPublishedBlogBySlug(slug);
        if (!alive) return;
        setBlog(data);

        if (data?.cover_image_url) {
          const key = urlToStorageKey(data.cover_image_url);
          if (key) {
            const { data: file, error } = await supabasePublic.storage
              .from(BUCKET)
              .download(key);

            if (!alive) return;

            if (!error && file) {
              const blobUrl = URL.createObjectURL(file);
              setCoverBlob(blobUrl);
            } else {
              console.error("❌ cover download failed:", error);
            }
          }
        }
      } catch (e) {
        console.error("❌ blog load failed:", e);
        if (!alive) return;
        setBlog(null);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [slug]);

  useEffect(() => {
    return () => {
      if (coverBlob) {
        try {
          URL.revokeObjectURL(coverBlob);
        } catch { }
      }
    };
  }, [coverBlob]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-black">
        <div className="rounded-3xl bg-white ring-1 ring-black/10 p-6 shadow-sm">
          <div className="h-4 w-32 bg-black/10 rounded animate-pulse" />
          <div className="mt-4 h-8 w-3/4 bg-black/10 rounded animate-pulse" />
          <div className="mt-6 h-64 w-full bg-black/5 rounded-2xl animate-pulse" />
          <div className="mt-6 space-y-3">
            <div className="h-3 w-full bg-black/10 rounded animate-pulse" />
            <div className="h-3 w-11/12 bg-black/10 rounded animate-pulse" />
            <div className="h-3 w-10/12 bg-black/10 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-black">
        <div className="rounded-3xl bg-white ring-1 ring-black/10 p-7 shadow-sm">
          <p className="text-black/80 font-semibold">Blog not found.</p>
          <p className="mt-2 text-sm text-black/55">
            This post may be unpublished, deleted, or the URL is incorrect.
          </p>
          <Link
            to="/blog"
            className="inline-flex mt-5 text-sm text-black/60 underline hover:text-black"
          >
            ← Back to blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-black">
      <Seo
        title={title}
        description={desc}
        keywords={blog.keywords || ""}
        canonical={canonical}
        ogTitle={title}
        ogDescription={desc}
        ogUrl={canonical}
        ogImage={ogImage}
      />

      <div className="flex items-center justify-between gap-3">
        <Link to="/blog" className="text-xs text-black/50 hover:text-black underline">
          ← Back to Blogs
        </Link>

        <div className="text-xs text-black/40">
          {dateStr ? <span>{dateStr}</span> : null}
          {dateStr && readingTime ? <span className="mx-2">•</span> : null}
          {readingTime ? <span>{readingTime}</span> : null}
        </div>
      </div>

      <div className="mt-5 rounded-3xl overflow-hidden bg-white ring-1 ring-black/10 shadow-sm">
        {coverBlob ? (
          <div className="relative">
            <img
              src={coverBlob}
              alt={blog.title}
              className="h-[260px] sm:h-[360px] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />

            <div className="absolute top-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-[11px] tracking-[0.35em] text-white/70">ELITE JOURNAL</p>
              <h1 className="mt-2 text-2xl sm:text-4xl font-semibold leading-tight text-white">
                {blog.title}
              </h1>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <p className="text-[11px] tracking-[0.35em] text-black/40">ELITE JOURNAL</p>
            <h1 className="mt-3 text-2xl sm:text-4xl font-semibold leading-tight text-black">
              {blog.title}
            </h1>
            {blog.excerpt ? (
              <p className="mt-4 text-sm sm:text-base text-black/60 leading-relaxed max-w-3xl">
                {blog.excerpt}
              </p>
            ) : null}
          </div>
        )}
      </div>

      <div className="mt-8 rounded-3xl bg-white ring-1 ring-black/10 p-6 sm:p-8 shadow-sm">
        {hasHtml ? (
          <article className="prose prose-lg max-w-none prose-headings:scroll-mt-28 prose-headings:font-semibold prose-a:text-blue-600 prose-img:rounded-xl">
            <div
              className="text-black/85 text-right text-[17px]"
              dir="rtl"
              dangerouslySetInnerHTML={{ __html: renderHtml }}
            />
          </article>
        ) : textFallback ? (
          <article className="prose max-w-none">
            <div className="text-black/80 leading-relaxed whitespace-pre-wrap">{textFallback}</div>
          </article>
        ) : (
          <p className="text-black/50">No content available.</p>
        )}

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-gray-50 ring-1 ring-black/10 p-5">
          <div className="flex gap-2">
            <Link
              to="/يخوتنا-يخت-النخبة-دبي"
              className="rounded-full px-5 py-2 text-xs ring-1 ring-black/15 bg-white hover:bg-gray-50 transition text-black"
            >
             استعرض اليخوت
            </Link>
            <Link
              to="/اتصل-بنا-إيليت-يخت-دبي"
              className="rounded-full px-5 py-2 text-xs ring-1 ring-black/15 bg-black text-white hover:bg-black/90 transition"
            >
             احجز الآن
          </Link>
          </div>

          <div>
            <p className="text-sm font-semibold text-black">هل ترغب بتجربة يخت خاص وفاخر في دبي؟</p>
            <p className="mt-1 text-xs text-black/50">
              استكشف أسطولنا واحجز فوراً مع إيليت.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
