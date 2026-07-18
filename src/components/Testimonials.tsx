"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Marketing Manager",
    content:
      "The resume builder completely transformed my job hunt. I landed interviews at top tech companies within weeks of using CareerCraft's templates.",
    rating: 5,
    initials: "SJ",
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    content:
      "I use the salary calculator every time I get a new offer. It's incredibly accurate and helps me negotiate better compensation packages.",
    rating: 5,
    initials: "MC",
    color: "bg-accent-purple/10 text-accent-purple",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Recent Graduate",
    content:
      "The AI interview prep was a game-changer. It asked me questions I hadn't even thought of and gave me the confidence to ace my final rounds.",
    rating: 5,
    initials: "ER",
    color: "bg-accent-cyan/10 text-accent-cyan",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Data Analyst",
    content:
      "CareerCraft's templates and tools are simply the best. The word counter and QR generator save me so much time when formatting my portfolio.",
    rating: 5,
    initials: "DK",
    color: "bg-primary/10 text-primary",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "HR Director",
    content:
      "As an HR professional, I constantly recommend CareerCraft to candidates. Their guides on interviews and resume building are spot-on.",
    rating: 5,
    initials: "PP",
    color: "bg-accent-purple/10 text-accent-purple",
  },
];

export default function Testimonials() {
  const displayTestimonials = Array(8).fill(testimonials).flat();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= displayTestimonials.length - 3 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  };

  return (
    <section id="testimonials" className="relative overflow-hidden bg-section py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl"
            >
              Real professionals, polished into better momentum.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-lg leading-8 text-slate-600"
            >
              The new experience is designed to feel calm, credible, and easy to trust at every touchpoint.
            </motion.p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-primary/30 hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-primary/30 hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative -mx-4 overflow-hidden px-4">
          <motion.div
            className="flex gap-6 pb-8"
            animate={{ x: `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 1.5}rem)` }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "fit-content" }}
          >
            {displayTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-[85vw] max-w-sm flex-shrink-0 md:w-[calc(100vw/2-2rem)] lg:w-[calc(100vw/3-2.5rem)]"
              >
                <div 
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
                  }}
                  className="mouse-spotlight premium-card group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_-15px_rgba(99,102,241,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_60%)]" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="flex gap-1 text-accent-purple transition-transform duration-500 group-hover:scale-105">
                        {[...Array(testimonial.rating)].map((_, index) => (
                          <Star key={index} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <Quote size={22} className="text-slate-300 transition-colors duration-500 group-hover:text-primary/40" />
                    </div>

                    <p className="flex-grow text-lg leading-8 text-slate-600 transition-colors duration-300 group-hover:text-slate-800">
                      {testimonial.content}
                    </p>

                    <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6 transition-colors duration-300 group-hover:border-primary/20">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full font-semibold transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg ${testimonial.color}`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-slate-950 transition-colors duration-300 group-hover:text-primary">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
