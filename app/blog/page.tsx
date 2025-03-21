import Blogs from "@/components/sections/Blogs";
import { getPages } from "@/config/notion";

// ✅ Explicitly define the type of articlesData
export default async function BlogPage() {
  let articlesData: Awaited<ReturnType<typeof getPages>> = [];

  try {
    articlesData = await getPages();
  } catch (error) {
    console.error("Error fetching blog pages:", error);
  }

  const articles = articlesData.map((article) => ({
    title: article?.properties?.Title?.title?.[0]?.plain_text || "Untitled",
    date: article?.properties?.Date?.date?.start || "N/A",
    description: article?.properties?.Description?.rich_text?.[0]?.text?.content || "",
    slug: article?.properties?.Slug?.rich_text?.[0]?.text?.content || "",
  }));

  return (
    <div>
      <Blogs articles={articles} />
    </div>
  );
}
