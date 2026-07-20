"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2, CheckCircle2 } from "lucide-react";
import { createBlogPost } from "@/actions/blogActions";

export default function NewBlogPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    
    // Auto-generate some gradient based on category or random
    const gradients = [
      "from-primary/20 to-accent-purple/20",
      "from-accent-purple/20 to-accent-cyan/20",
      "from-accent-cyan/20 to-primary/20",
      "from-primary/20 to-accent-cyan/20"
    ];
    formData.append("gradient", gradients[Math.floor(Math.random() * gradients.length)]);

    const result = await createBlogPost(formData);

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
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-display font-bold text-slate-900">Create New Blog Post</h1>
            <p className="text-slate-600 mt-2">Publish a new article directly to the website.</p>
          </div>
        </div>

        {success ? (
          <div className="bg-green-50 text-green-700 p-6 rounded-2xl flex items-center gap-4 mb-8 border border-green-200">
            <CheckCircle2 size={32} className="text-green-500" />
            <div>
              <h3 className="font-semibold text-lg">Blog post published successfully!</h3>
              <p>Redirecting you to the blogs page...</p>
            </div>
          </div>
        ) : (
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
                  placeholder="e.g. 10 AI Prompts to Supercharge Your Resume" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Category</label>
                <select 
                  name="category" 
                  required
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
                  placeholder="e.g. Sarah Jenkins" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Read Time</label>
                <input 
                  type="text" 
                  name="readTime" 
                  required
                  placeholder="e.g. 5 min read" 
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
                placeholder="https://images.unsplash.com/photo-..." 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Excerpt (Short Summary)</label>
              <textarea 
                name="excerpt" 
                required
                rows={2}
                placeholder="Brief summary that appears on the blog card..." 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex justify-between">
                <span>Full Content (HTML Supported)</span>
                <span className="text-slate-400 font-normal">Use &lt;h3&gt;, &lt;p&gt;, &lt;img&gt;, etc.</span>
              </label>
              <textarea 
                name="content" 
                required
                rows={12}
                placeholder="<p>Write your full article content here...</p>" 
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
                    Publishing...
                  </>
                ) : (
                  <>
                    <Save size={18} />
                    Publish Blog Post
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
