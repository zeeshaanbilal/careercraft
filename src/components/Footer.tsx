"use client";

import { ArrowUpRight, BriefcaseBusiness, Globe, Link as LinkIcon, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 inline-flex items-center gap-3 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent-purple to-accent-cyan text-white shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                <BriefcaseBusiness size={20} />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-slate-950">CareerCraft</span>
                <p className="text-xs font-medium text-slate-500">Premium AI career platform</p>
              </div>
            </Link>
            <p className="mb-6 leading-7 text-slate-600">
              An elegant workspace for resumes, interviews, salary planning, and the small details that unlock bigger opportunities.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary" aria-label="Website">
                <Globe size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary" aria-label="Link">
                <LinkIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.25em] text-slate-950">
              Free Tools
            </h4>
            <ul className="space-y-4">
              <li><Link href="/tools/resume-headline" className="text-slate-600 transition-colors hover:text-primary">Resume Headline Generator</Link></li>
              <li><Link href="/tools/salary-calculator" className="text-slate-600 transition-colors hover:text-primary">Salary Calculator</Link></li>
              <li><Link href="/tools/word-counter" className="text-slate-600 transition-colors hover:text-primary">Word Counter</Link></li>
              <li><Link href="/tools/qr-generator" className="text-slate-600 transition-colors hover:text-primary">QR Code Generator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.25em] text-slate-950">
              Resources
            </h4>
            <ul className="space-y-4">
              <li><Link href="/category/career-guides" className="text-slate-600 transition-colors hover:text-primary">Career Guides</Link></li>
              <li><Link href="/category/resume-templates" className="text-slate-600 transition-colors hover:text-primary">Resume Templates</Link></li>
              <li><Link href="/category/interview-questions" className="text-slate-600 transition-colors hover:text-primary">Interview Questions</Link></li>
              <li><Link href="/category/ai-prompts" className="text-slate-600 transition-colors hover:text-primary">AI Prompts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-display text-sm font-semibold uppercase tracking-[0.25em] text-slate-950">
              Company
            </h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-600 transition-colors hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-600 transition-colors hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-600 transition-colors hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-slate-600 transition-colors hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} CareerCraft. All rights reserved.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <span>All systems operational</span>
            <ArrowUpRight size={14} className="text-slate-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
