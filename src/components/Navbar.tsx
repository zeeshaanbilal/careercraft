"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type HTMLMotionProps, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronRight,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import Link from "next/link";

type MagneticButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
};

function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) {
      return;
    }

    const { clientX, clientY } = event;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const offsetX = clientX - (left + width / 2);
    const offsetY = clientY - (top + height / 2);

    setPosition({ x: offsetX * 0.18, y: offsetY * 0.18 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 180, damping: 16, mass: 0.12 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass =
    "text-sm font-medium text-slate-600 transition-colors hover:text-primary";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className={`mx-auto transition-[width,padding] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "w-[95%] md:w-[75%]" : "w-full px-4 sm:px-6 lg:px-8"}`}>
        <div
          className={`flex items-center justify-between rounded-full px-4 py-3 transition-all duration-500 ${
            scrolled
              ? "glass-panel shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              : "border border-white/60 bg-white/50 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl"
          }`}
        >
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent-purple to-accent-cyan text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <BriefcaseBusiness size={20} />
            </div>
            <div className="leading-tight">
              <span className="font-display text-lg font-bold tracking-tight text-slate-950">
                CareerCraft
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="#tools" className={navLinkClass}>
              Tools
            </Link>
            <Link href="#guides" className={navLinkClass}>
              Guides
            </Link>
            <Link href="#ai" className={navLinkClass}>
              AI Studio
            </Link>
            <Link href="#testimonials" className={navLinkClass}>
              Stories
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <button className="rounded-full bg-slate-100/80 px-5 py-2.5 text-sm font-semibold text-slate-700 backdrop-blur-md transition-all hover:bg-slate-200 hover:shadow-sm">
              Log in
            </button>
            <MagneticButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-accent-purple to-accent-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/40">
              <Sparkles size={15} />
              Get started
              <ChevronRight size={14} />
            </MagneticButton>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 overflow-hidden rounded-[2rem] glass-panel md:hidden"
            >
              <div className="space-y-2 p-4">
                <Link href="#tools" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-white">
                  Tools
                </Link>
                <Link href="#guides" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-white">
                  Guides
                </Link>
                <Link href="#ai" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-white">
                  AI Studio
                </Link>
                <button className="w-full rounded-2xl bg-slate-100/80 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200">
                  Log in
                </button>
                <button className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary via-accent-purple to-accent-cyan px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20">
                  Get started
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-primary via-accent-purple to-accent-cyan"
        style={{ scaleX }}
      />
    </motion.nav>
  );
}
