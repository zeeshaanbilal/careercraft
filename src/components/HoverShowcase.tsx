"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, MessageCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";

type ShowcaseItem = {
  title: string;
  description: string;
  image: string;
  badge: string;
  icon: React.ReactNode;
};

const items: ShowcaseItem[] = [
  {
    title: "Resume Strategy",
    description: "Shape a sharper personal story and stand out faster.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    badge: "Core",
    icon: <BriefcaseBusiness size={18} />,
  },
  {
    title: "Interview Prep",
    description: "Practice answers, reduce stress, and build confidence.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    badge: "Popular",
    icon: <MessageCircle size={18} />,
  },
  {
    title: "Career Growth",
    description: "Map next steps with a clearer sense of direction.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    badge: "Path",
    icon: <GraduationCap size={18} />,
  },
  {
    title: "Trust Signals",
    description: "Present experience with polish, clarity, and calm.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    badge: "Secure",
    icon: <ShieldCheck size={18} />,
  },
];

export default function HoverShowcase() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_26%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker text-xs font-semibold text-slate-500">Interactive preview</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Hover each line to reveal its visual story.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            The preview floats above the list so the image feels like part of the heading, not a side panel.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute right-4 top-1/2 z-20 -translate-y-1/2 hidden lg:block xl:right-12">
            <AnimatePresence>
              {activeItem ? (
                <motion.div
                  key={activeItem.title}
                  initial={{ opacity: 0, x: 20, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] overflow-hidden rounded-[2.6rem] border border-white/85 bg-white p-4 shadow-[0_35px_90px_rgba(15,23,42,0.18)]"
                >
                  <div
                    role="img"
                    aria-label={activeItem.title}
                    className="relative h-[24rem] w-full overflow-hidden rounded-[2rem] bg-cover bg-center"
                    style={{ backgroundImage: `url(${activeItem.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-600 backdrop-blur">
                      {activeItem.badge}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="space-y-0 relative z-10">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onBlur={() => setActiveIndex(null)}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex w-full items-center justify-between border-b px-1 py-6 text-left transition-colors duration-500 ${
                    isActive ? "border-slate-300 text-slate-950" : "border-slate-200 text-slate-400"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 ${
                          isActive
                            ? "border-slate-950 bg-slate-950 text-white"
                            : "border-slate-200 bg-white text-slate-500"
                        }`}
                      >
                        {item.icon}
                      </span>
                      <p className={`font-display text-3xl font-bold tracking-tight sm:text-4xl transition-colors duration-500 ${isActive ? "text-primary" : "text-slate-950"}`}>
                        {item.title}
                      </p>
                    </div>
                    <p className="mt-2 max-w-md pl-[3.9rem] text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={`transition-transform duration-500 ${
                      isActive ? "translate-x-1 -translate-y-1" : "group-hover:translate-x-1 group-hover:-translate-y-1"
                    }`}
                    size={20}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
