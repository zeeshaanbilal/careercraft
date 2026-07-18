"use client";

import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_30%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glass-panel relative overflow-hidden rounded-[2.6rem] p-8 md:p-16"
        >
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-accent-purple/10 blur-[90px]" />
          <div className="absolute -bottom-20 left-0 h-64 w-64 rounded-full bg-primary/10 blur-[90px]" />

          <div className="relative z-10 mx-auto max-w-2xl text-center">

            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Level up your career inbox.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Get polished career strategies, premium templates, and actionable insights without clutter or spam.
            </p>

            <form className="mt-10 flex max-w-xl flex-col gap-4 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-full border border-slate-200 bg-white/90 px-6 py-4 text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-primary/40"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-4 font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform hover:-translate-y-0.5"
              >
                Subscribe
                <Send size={18} />
              </button>
            </form>
            <p className="mt-6 text-sm text-slate-500">
              Join 20,000+ professionals. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
