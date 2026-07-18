"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, label: "Free Tools", value: 50, suffix: "+" },
  { id: 2, label: "Career Guides", value: 100, suffix: "+" },
  { id: 3, label: "Monthly Users", value: 20, suffix: "K+" },
  { id: 4, label: "Templates", value: 250, suffix: "+" },
];

export default function Statistics() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.05),transparent_35%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.05),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-6 text-center shadow-sm"
              >
                <div className="font-display text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : "0"}
                  <span className="ml-1 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
