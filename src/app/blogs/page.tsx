
import { getBlogPosts } from "@/actions/blogActions";
import BlogsClient from "./BlogsClient";

export const dynamic = 'force-dynamic';

export default async function BlogsPage() {
  const result = await getBlogPosts();
  const blogs = result.success && result.data ? result.data : [];

  return (
    <BlogsClient initialBlogs={blogs} />
  );
}
