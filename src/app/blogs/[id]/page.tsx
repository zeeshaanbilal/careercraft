import ReactMarkdown from 'react-markdown';
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, Link as LinkIcon, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPostById } from "@/actions/blogActions";

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: any) {
  const resolvedParams = await params;
  const result = await getBlogPostById(resolvedParams?.id || params?.id);
  const post = result.success && result.data ? result.data : null;

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <article className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <Link 
              href="/blogs" 
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{post.author}</p>
                  <p className="text-xs">Author</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden mb-12 shadow-md">
            <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20 mix-blend-multiply z-10`} />
            <img 
              src={post.image} 
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            
            <div className="hidden md:block w-12 shrink-0">
              <div className="sticky top-32 flex flex-col gap-4">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 text-center">Share</span>
                <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-sm">
                  <LinkIcon size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-sky-500 hover:border-sky-500 transition-colors shadow-sm">
                  <Mail size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-colors shadow-sm mt-4">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <div className="flex-1 prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl">
              <ReactMarkdown>{post.content || "Content coming soon..."}</ReactMarkdown>
            </div>

          </div>
          
        </div>
      </article>

      <Footer />
    </main>
  );
}
