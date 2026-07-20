"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Calculator,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WandSparkles,
} from "lucide-react";

const words = [
  "Search resume ideas...",
  "Search interview prep...",
  "Search salary insights...",
  "Search AI prompts...",
  "Search career guides...",
];

export default function Hero() {
  const [placeholderText, setPlaceholderText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (placeholderText.length < words[wordIndex].length) {
      timeout = setTimeout(() => {
        if (isTyping) {
          setPlaceholderText(words[wordIndex].slice(0, placeholderText.length + 1));
        } else {
          setPlaceholderText(placeholderText.slice(0, -1));
        }
      }, isTyping ? 58 : 28);
    } else if (isTyping) {
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 1800);
    } else {
      timeout = setTimeout(() => {
        setWordIndex((value) => (value + 1) % words.length);
        setIsTyping(true);
        setPlaceholderText("");
      }, 28);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [placeholderText, isTyping, wordIndex]);

  const featuredTools = [
    {
      icon: <FileText size={18} className="text-primary" />,
      title: "Resume Builder",
      desc: "Craft winning resumes",
      accent: "from-primary/15 to-primary/5",
    },
    {
      icon: <BrainCircuit size={18} className="text-accent-purple" />,
      title: "AI Assistant",
      desc: "Your 24/7 mentor",
      accent: "from-accent-purple/15 to-accent-purple/5",
    },
    {
      icon: <MessageCircle size={18} className="text-accent-cyan" />,
      title: "Interview Prep",
      desc: "Ace your interviews",
      accent: "from-accent-cyan/15 to-accent-cyan/5",
    },
    {
      icon: <Calculator size={18} className="text-primary" />,
      title: "Salary Calculator",
      desc: "Know your worth",
      accent: "from-primary/15 to-accent-cyan/10",
    },
    {
      icon: <WandSparkles size={18} className="text-accent-purple" />,
      title: "Career Guides",
      desc: "Expert strategies",
      accent: "from-accent-purple/15 to-primary/5",
    },
    {
      icon: <LayoutDashboard size={18} className="text-accent-cyan" />,
      title: "Office Tools",
      desc: "Boost productivity",
      accent: "from-accent-cyan/15 to-primary/5",
    },
  ];

  return (
    <>
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_42%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_34%),radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_22%)]" />
        <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/15 via-accent-purple/10 to-accent-cyan/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:36px_36px] opacity-70 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.6),transparent)]" />
      </div>

      <div className="w-full px-6 lg:px-12 xl:px-20 2xl:px-32">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-8">
          <div className="max-w-[48rem] text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] lg:leading-[1.05]"
            >
              <span className="whitespace-nowrap">Design your next career</span> <br className="hidden lg:block" />
              move with an AI command center.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              CareerCraft blends resume intelligence, interview prep, and productivity tools into one elegant workspace for modern professionals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href="/tools" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-accent-purple to-accent-cyan px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-0.5">
                Start building free
                <ArrowRight size={16} />
              </Link>
              <Link href="/tools" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-primary/30 hover:text-slate-950">
                <WandSparkles size={16} className="text-primary" />
                Explore demo
              </Link>
            </motion.div>
          </div>

          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="group relative rounded-[2rem] p-[1px] transition-transform duration-300 hover:-translate-y-0.5">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-primary/20 via-accent-purple/15 to-accent-cyan/20 opacity-70 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative glass-panel rounded-[2rem] p-3 text-left">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <div className="flex flex-1 items-center gap-3 rounded-[1.4rem] border border-slate-200/80 bg-white/90 px-5 py-4 shadow-sm">
                      <Search size={20} className="text-primary" />
                      <input
                        type="text"
                        className="w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
                        placeholder={placeholderText}
                      />
                    </div>
                    <Link href="/tools" className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-primary/20">
                      Search the platform
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3 px-2 pb-1 text-xs font-medium text-slate-500">
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-white">Resume</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Interview</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">Salary</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1">AI prompts</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <hr className="border-slate-200/60" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-display text-2xl font-bold text-slate-950">Your AI-Powered Insights at-a-Glance</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Resume score", value: "94%", icon: <TrendingUp size={16} /> },
                  { label: "Interview readiness", value: "AI tuned", icon: <Sparkles size={16} /> },
                  { label: "Data privacy", value: "Protected", icon: <ShieldCheck size={16} /> },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className="premium-card flex flex-col items-start rounded-[1.5rem] p-5 shadow-sm"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
                      {stat.icon}
                    </div>
                    <p className="text-xs font-semibold text-slate-500">{stat.label}</p>
                    <p className="mt-1 font-display text-xl font-bold text-slate-950">{stat.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative border-y border-slate-200/60 bg-slate-50 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          A complete ecosystem for your career
        </p>
      </div>
      
      <div className="mx-auto w-full">
        <motion.div
          className="flex w-max gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...featuredTools, ...featuredTools, ...featuredTools, ...featuredTools].map((tool, index) => (
            <Link
              href={`/features/${tool.title.toLowerCase().replace(/\s+/g, "-")}`}
              key={`${tool.title}-${index}`}
              className="flex shrink-0 items-center gap-4 rounded-full border border-slate-200/80 bg-white px-6 py-3.5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white">
                {tool.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{tool.title}</p>
                <p className="text-xs text-slate-500">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  );
}
