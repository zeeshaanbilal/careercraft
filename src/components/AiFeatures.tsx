"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, CircleDashed, ShieldCheck, Sparkles, Zap } from "lucide-react";

export default function AiFeatures() {
  return (
    <section id="ai" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(99,102,241,0.09),transparent_35%),radial-gradient(circle_at_right,rgba(34,211,238,0.08),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[3.7rem]"
            >
              Your personal career assistant, tuned for real workflows.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
            >
              Use AI to draft sharper messages, tailor resumes faster, and prepare for interviews with calm, useful guidance.
            </motion.p>

            <div className="mt-10 space-y-5">
              {[
                { icon: <Sparkles size={18} className="text-accent-purple" />, title: "Smart resume tailoring", desc: "Adapt your application to a job description in seconds." },
                { icon: <Zap size={18} className="text-primary" />, title: "Instant email drafting", desc: "Generate polished outreach and follow-up messages." },
                { icon: <ShieldCheck size={18} className="text-accent-cyan" />, title: "Privacy-first AI", desc: "Keep sensitive career data protected and respectful." },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group flex gap-4 rounded-[1.6rem] border border-slate-200/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-950 transition-colors group-hover:text-primary">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.1)] backdrop-blur-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.8),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.6),rgba(255,255,255,0.15))]" />

              <div className="relative z-10">
                <div className="flex items-center justify-between border-b border-slate-200/70 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-300" />
                    <div className="h-3 w-3 rounded-full bg-amber-300" />
                    <div className="h-3 w-3 rounded-full bg-emerald-300" />
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    Writing mode
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-[1.6rem] bg-slate-950 p-5 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Prompt</p>
                        <p className="mt-2 font-display text-xl font-bold">
                          Write a follow-up email after my interview.
                        </p>
                      </div>
                      <CircleDashed size={20} className="text-cyan-300" />
                    </div>
                    <div className="mt-5 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-primary via-accent-purple to-accent-cyan" />
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-slate-200/80 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                          Output
                        </p>
                        <h3 className="mt-2 font-display text-xl font-bold text-slate-950">
                          Subject: Following up
                        </h3>
                      </div>
                      <ArrowRight size={18} className="text-primary" />
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                      Hi [Name], thank you for taking the time to speak with me about the role. I appreciated learning how your team approaches...
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.6rem] border border-slate-200/80 bg-gradient-to-br from-primary/10 to-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                        Confidence
                      </p>
                      <p className="mt-3 font-display text-3xl font-bold text-slate-950">91%</p>
                      <p className="mt-2 text-sm text-slate-600">
                        Tone, clarity, and structure all improved.
                      </p>
                    </div>
                    <div className="rounded-[1.6rem] border border-slate-200/80 bg-gradient-to-br from-accent-cyan/10 to-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                        Next action
                      </p>
                      <p className="mt-3 font-display text-3xl font-bold text-slate-950">Send</p>
                      <p className="mt-2 text-sm text-slate-600">
                        Ready to use with a single click.
                      </p>
                    </div>
                  </div>


                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
