"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, CheckCircle2 } from "lucide-react";
import { updateBlogPost } from "@/actions/blogActions";

export default function EditBlogForm({ post }: { post: any }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const result = await updateBlogPost(post.id, formData);

    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    } else {
      setError(result.error || "Something went wrong.");
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 text-green-700 p-6 rounded-2xl flex items-center gap-4 mb-8 border border-green-200">
        <CheckCircle2 size={32} className="text-green-500" />
        <div>
          <h3 className="font-semibold text-lg">Blog post updated successfully!</h3>
          <p>Redirecting you back...</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 space-y-6">
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Title</label>
          <input 
            type="text" 
            name="title" 
            required
            defaultValue={post.title}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Category</label>
          <select 
            name="category" 
            required
            defaultValue={post.category}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-white"
          >
            <option value="Resume Tips">Resume Tips</option>
            <option value="Interview Prep">Interview Prep</option>
            <option value="Career Growth">Career Growth</option>
            <option value="Networking">Networking</option>
            <option value="Industry Trends">Industry Trends</option>
            <option value="Career Change">Career Change</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Author Name</label>
          <input 
            type="text" 
            name="author" 
            required
            defaultValue={post.author}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Read Time</label>
          <input 
            type="text" 
            name="readTime" 
            required
            defaultValue={post.readTime}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Cover Image URL</label>
        <input 
          type="url" 
          name="image" 
          required
          defaultValue={post.image}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">Excerpt (Short Summary)</label>
        <textarea 
          name="excerpt" 
          required
          rows={2}
          defaultValue={post.excerpt}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
        ></textarea>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700 flex justify-between">
          <span>Full Content (Markdown Supported)</span>
        </label>
        <textarea 
          name="content" 
          required
          rows={12}
          defaultValue={post.content}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-mono text-sm"
        ></textarea>
      </div>

      <div className="pt-4 border-t border-slate-100 flex justify-end">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-slate-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save size={18} />
              Save Changes
            </>
          )}
        </button>
      </div>
    </form>
  );
}
