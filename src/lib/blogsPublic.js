import { supabasePublic } from "./supabasePublic";

/**
 * List published blogs (public)
 * - includes cover_image_url
 * - includes content_html (optional) for future previews / SSR
 */
export async function listPublishedBlogs({ limit = 12, from = 0 } = {}) {
  const to = from + limit - 1;

  const { data, error, count } = await supabasePublic
    .from("blogs")
    .select(
      `
        id,
        title,
        slug,
        excerpt,
        cover_image_url,
        seo_title,
        seo_description,
        keywords,
        published_at,
        updated_at,
        content_html
      `,
      { count: "exact" }
    )
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("❌ listPublishedBlogs error:", error);
    throw error;
  }

  return { data: data || [], count: count ?? 0 };
}

export async function getPublishedBlogBySlug(slug) {
  if (!slug) throw new Error("Slug is required");

  const { data, error } = await supabasePublic
    .from("blogs")
    .select(
      `
        id,
        title,
        slug,
        excerpt,
        content,
        content_html,
        cover_image_url,
        seo_title,
        seo_description,
        keywords,
        published_at,
        updated_at
      `
    )
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    console.error("❌ getPublishedBlogBySlug error:", error);
    throw error;
  }

  return data;
}
