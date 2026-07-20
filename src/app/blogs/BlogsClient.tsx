"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

export default function BlogsClient({ initialBlogs }: { initialBlogs: any[] }) {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  const categories = ["All", "Resume Tips", "Interview Prep", "Career Growth", "Networking", "Industry Trends", "Career Change"];

  const filteredPosts = initialBlogs.filter(post => 
    activeCategory === "All" ? true : post.category === activeCategory
  );

  const featuredPost = filteredPosts[0] || initialBlogs[0];
  const gridPosts = filteredPosts.slice(1, visiblePosts);
  const hasMore = visiblePosts < filteredPosts.length;

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent_35%)]" />
          <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 via-accent-purple/5 to-accent-cyan/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 mb-6"
            >
              Insights for Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-purple to-accent-cyan">Career Journey</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-slate-600 mb-8"
            >
              Expert advice, industry trends, and practical guides to help you navigate your career path and achieve your professional goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category) => (
                <button 
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisiblePosts(6);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category 
                    ? "bg-slate-950 text-white shadow-md" 
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 cursor-pointer"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && featuredPost && (
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group relative rounded-[2rem] overflow-hidden bg-white shadow-sm border border-slate-200/60 transition-all hover:shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full min-h-[320px] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${featuredPost.gradient} opacity-40 mix-blend-multiply z-10`} />
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-900 rounded-full shadow-sm">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-semibold text-sm mb-3">
                  {featuredPost.category}
                </span>
                <Link href={`/blogs/${featuredPost.id}`}>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-950 mb-4 hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-slate-500 mt-auto">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group flex flex-col rounded-3xl bg-white border border-slate-200/60 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20 mix-blend-multiply z-10`} />
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-900 rounded-full shadow-sm">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary font-semibold text-sm">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-sm">{post.date}</span>
                  </div>
                  <Link href={`/blogs/${post.id}`}>
                    <h3 className="font-display text-xl font-bold text-slate-950 mb-3 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 mb-6 line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                      <User size={16} className="text-slate-400" />
                      <span>{post.author}</span>
                    </div>
                    <Link 
                      href={`/blogs/${post.id}`}
                      className="text-primary hover:text-accent-purple transition-colors p-2 rounded-full hover:bg-primary/5"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="mt-16 text-center">
              <button 
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-primary/30 hover:text-slate-950 hover:shadow-md active:scale-95"
              >
                Load more articles
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
