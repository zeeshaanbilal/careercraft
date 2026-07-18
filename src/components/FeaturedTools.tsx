"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlignLeft, Calculator, FileText, QrCode } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    id: 1,
    name: "Resume Headline Generator",
    icon: <FileText size={22} />,
    desc: "Create a sharper first impression in seconds.",
    link: "/tools/resume-headline",
    accent: "from-primary/15 to-white",
  },
  {
    id: 2,
    name: "Salary Calculator",
    icon: <Calculator size={22} />,
    desc: "Estimate compensation with confidence and clarity.",
    link: "/tools/salary-calculator",
    accent: "from-accent-purple/15 to-white",
  },
  {
    id: 3,
    name: "Word Counter",
    icon: <AlignLeft size={22} />,
    desc: "Track length, density, and readability at a glance.",
    link: "/tools/word-counter",
    accent: "from-accent-cyan/15 to-white",
  },
  {
    id: 4,
    name: "QR Code Generator",
    icon: <QrCode size={22} />,
    desc: "Share portfolios and documents with a polished QR.",
    link: "/tools/qr-generator",
    accent: "from-slate-200/70 to-white",
  },
];

export default function FeaturedTools() {
  return (
    <section id="tools" className="relative overflow-hidden bg-section py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
          >
            Premium tools designed like a product suite, not a list.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Every utility is framed as a focused workflow with richer hierarchy, softer surfaces, and clearer next steps.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="h-full"
            >
              <Link href={tool.link} className="block h-full">
                <div 
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                  className="mouse-spotlight premium-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 transition-shadow duration-500 hover:shadow-[0_40px_80px_-15px_rgba(99,102,241,0.15)]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.accent} opacity-80 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.3),transparent_70%)]" />
                  
                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-primary group-hover:shadow-primary/30">
                      {tool.icon}
                    </div>
                    <h3 className="mb-3 font-display text-2xl font-bold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-primary">
                      {tool.name}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                      {tool.desc}
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-8 flex flex-1 items-end">
                    <div className="flex w-full items-center justify-between border-t border-slate-200/80 pt-5 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:border-primary/30">
                      <span className="transition-colors duration-300 group-hover:text-primary">Open tool</span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white shadow-sm transition-all duration-500 group-hover:translate-x-3 group-hover:scale-110 group-hover:bg-primary">
                        <ArrowRight size={16} />
                      </span>
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
