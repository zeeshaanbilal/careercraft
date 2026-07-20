import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPostById } from "@/actions/blogActions";
import EditBlogForm from "./EditBlogForm";

export const dynamic = 'force-dynamic';

export default async function EditBlogPage({ params }: any) {
  const resolvedParams = await params;
  const result = await getBlogPostById(resolvedParams?.id || params?.id);
  const post = result.success && result.data ? result.data : null;

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link 
              href="/admin" 
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-4"
            >
              <ArrowLeft size={16} />
              Back to Admin Panel
            </Link>
            <h1 className="text-3xl font-display font-bold text-slate-900">Edit Blog Post</h1>
            <p className="text-slate-600 mt-2">Update your existing article.</p>
          </div>
        </div>

        <EditBlogForm post={post} />
      </div>
    </div>
  );
}
