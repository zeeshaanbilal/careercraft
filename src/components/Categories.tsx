"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  FileText,
  Mail,
  MessageSquare,
  PenTool,
  Sparkles,
  Table,
  Users,
} from "lucide-react";
import Link from "next/link";

const categories = [
  { id: 1, name: "Resume Builder", icon: <Briefcase size={22} />, count: "Interactive tool", tone: "from-primary/15 to-white" },
  { id: 2, name: "CV Examples", icon: <FileText size={22} />, count: "45 examples", tone: "from-accent-purple/15 to-white" },
  { id: 3, name: "Interview Prep", icon: <MessageSquare size={22} />, count: "20 banks", tone: "from-accent-cyan/15 to-white" },
  { id: 4, name: "AI for Work", icon: <Sparkles size={22} />, count: "15 prompts", tone: "from-slate-200/70 to-white" },
  { id: 5, name: "Excel Tutorials", icon: <Table size={22} />, count: "30 lessons", tone: "from-primary/15 to-white" },
  { id: 6, name: "Email Templates", icon: <Mail size={22} />, count: "50 templates", tone: "from-accent-purple/15 to-white" },
  { id: 7, name: "HR Guides", icon: <Users size={22} />, count: "18 guides", tone: "from-accent-cyan/15 to-white" },
  { id: 8, name: "Business Letters", icon: <PenTool size={22} />, count: "25 templates", tone: "from-slate-200/70 to-white" },
];

export default function Categories() {
  return (
    <section id="guides" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
          >
            Browsing feels lighter when the structure is this clear.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600"
          >
            The library is regrouped into focused lanes so users can move faster from intent to action.
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="h-full"
            >
              <Link href={category.id === 1 ? "/tools/resume-builder" : `/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`} className="block h-full">
                <div 
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                  className="mouse-spotlight premium-card group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] p-6 transition-shadow duration-500 hover:shadow-[0_40px_80px_-15px_rgba(99,102,241,0.15)]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.tone} opacity-80 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.25),transparent_60%)]" />
                  
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-primary group-hover:shadow-primary/30">
                      {category.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-primary">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 transition-colors duration-300 group-hover:text-slate-700">{category.count}</p>
                    <div className="mt-auto pt-8">
                      <div className="flex items-center justify-between border-t border-slate-200/80 pt-4 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:border-primary/30">
                        <span className="transition-colors duration-300 group-hover:text-primary">{category.id === 1 ? "Open tool" : "Open category"}</span>
                        <ArrowUpRight size={18} className="transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
