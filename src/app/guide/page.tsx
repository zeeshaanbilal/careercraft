"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Share2, Bookmark, User, CheckCircle2 } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function GuideContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const title = searchParams.get("title") || "The Ultimate Career Guide for 2026";
  const category = searchParams.get("category") || "Career Resources";

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Header */}
      <div className="bg-slate-50 pt-32 pb-16 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to {category}
          </button>
          
          <div className="flex items-center gap-3 text-sm font-semibold text-primary mb-6">
            <span className="bg-primary/10 px-3 py-1 rounded-full">{category}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500 flex items-center gap-1.5"><Clock size={14} /> 8 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-8 leading-[1.15]">
            {title}
          </h1>

          <div className="flex items-center justify-between border-t border-slate-200 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                <User size={20} />
              </div>
              <div>
                <div className="font-bold text-slate-900">CareerCraft Editorial</div>
                <div className="text-sm text-slate-500">Updated July 18, 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm">
                <Bookmark size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-16">
        <article className="prose prose-slate prose-lg max-w-none">
          <p className="lead text-xl text-slate-600 leading-relaxed mb-10">
            Navigating today's competitive job market requires more than just raw skills; it demands strategic positioning. In this comprehensive guide, we'll break down exactly how you can leverage <strong>{title.toLowerCase()}</strong> to stand out, command higher compensation, and accelerate your career trajectory.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-10">
            <h3 className="text-xl font-bold text-slate-900 mb-4 mt-0">Key Takeaways</h3>
            <ul className="space-y-3 m-0 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">Understand the hidden psychology behind what hiring managers are actually looking for.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">Learn actionable frameworks you can apply to your workflow today.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                <span className="text-slate-700">Avoid the most common traps that disqualify 80% of candidates.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1. The Strategic Foundation</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Most professionals approach this topic tactically rather than strategically. They focus on the 'what' instead of the 'why'. When dealing with <em>{title.toLowerCase()}</em>, the first step is to zoom out and understand the broader business context. Why does this matter to the company? How does it impact the bottom line or team dynamics?
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            By answering these questions, you transition from being a task-executor to a strategic partner. This mindset shift is often the primary difference between mid-level employees and senior executives.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">2. Executing with Precision</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Once the strategy is clear, execution becomes a matter of applying the right frameworks. We recommend a three-phase approach:
          </p>
          <ol className="space-y-3 text-slate-600 mb-8 list-decimal pl-5">
            <li><strong>Audit the current state:</strong> Identify bottlenecks, outdated processes, or missing data points.</li>
            <li><strong>Implement the framework:</strong> Apply the specific tactics discussed in our core methodology. Keep iterations short and feedback loops tight.</li>
            <li><strong>Measure and iterate:</strong> Use concrete metrics to prove ROI. Numbers speak louder than narratives.</li>
          </ol>

          <blockquote className="border-l-4 border-primary pl-6 py-2 my-10 bg-slate-50 rounded-r-lg pr-4">
            <p className="text-xl italic text-slate-700 m-0">
              "Success in your career isn't just about working hard; it's about making your hard work visible and undeniably valuable to the right people."
            </p>
          </blockquote>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">3. Common Pitfalls to Avoid</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Even seasoned professionals make mistakes when navigating these waters. Here are the red flags to watch out for:
          </p>
          <ul className="space-y-3 text-slate-600 mb-10 list-disc pl-5">
            <li><strong>Overcomplicating the solution:</strong> If you can't explain it simply, you don't understand it well enough.</li>
            <li><strong>Ignoring stakeholder buy-in:</strong> The best plan in the world will fail if the people executing it don't believe in it.</li>
            <li><strong>Forgetting the human element:</strong> Whether it's an interview, an email, or a performance review, remember there is a human being on the other side of the screen.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Next Steps</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Knowledge without action is just entertainment. Take one specific insight from this guide and apply it to your current workflow before the end of the week. 
          </p>
        </article>

        {/* CTA Footer */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-10 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Ready to put this into practice?</h3>
          <p className="text-slate-300 mb-8 max-w-lg mx-auto">
            Use our AI-powered tools to instantly generate customized materials tailored to your exact industry and experience level.
          </p>
          <Link href="/#tools" className="inline-flex bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold hover:bg-slate-100 transition-colors">
            Explore AI Tools
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function GuidePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
      <GuideContent />
    </Suspense>
  );
}
