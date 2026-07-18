import Link from "next/link";
import { ArrowLeft, Clock, ChevronRight, FileText, MessageSquare, Code, Star, DollarSign } from "lucide-react";
import { notFound } from "next/navigation";

// Category Data Dictionary
const categoryData = {
  "resume-builder": {
    title: "Resume Builder Guides",
    intro: "Learn how to craft the perfect resume. Our in-depth guides cover formatting, ATS optimization, and industry-specific examples to help you land your dream job.",
    gradient: "from-primary/10 via-white to-white",
    articles: [
      { id: 1, title: "How to format your resume for Applicant Tracking Systems (ATS)", excerpt: "Discover the hidden rules of ATS scanners and ensure your application actually reaches a human recruiter.", readTime: "5 min read", date: "July 12, 2026" },
      { id: 2, title: "The 7 biggest mistakes you're making on your resume right now", excerpt: "Are you sabotaging your own career progression? We asked 50 recruiters what makes them instantly reject a candidate.", readTime: "8 min read", date: "July 10, 2026" },
      { id: 3, title: "How to write a compelling professional summary in 2026", excerpt: "The traditional objective statement is dead. Learn how to write a value-driven headline that hooks hiring managers immediately.", readTime: "4 min read", date: "July 05, 2026" },
      { id: 4, title: "Tailoring your strategy for senior executive roles", excerpt: "Proven strategies for highlighting leadership, board experience, and large-scale impact without sounding arrogant.", readTime: "10 min read", date: "July 01, 2026" }
    ]
  },
  "cv-examples": {
    title: "CV Examples",
    intro: "Browse our collection of real-world CV samples across various industries and experience levels. See exactly what works for top recruiters.",
    gradient: "from-accent-purple/10 via-white to-white",
    articles: [
      { id: 1, title: "Software Engineer CV", excerpt: "A clean, technical format highlighting programming languages, open-source contributions, and scalable architecture impact.", readTime: "", date: "" },
      { id: 2, title: "Marketing Manager CV", excerpt: "A metrics-driven layout showcasing campaign ROI, budget management, and brand growth over time.", readTime: "", date: "" },
      { id: 3, title: "Fresh Graduate CV", excerpt: "Focuses on academic projects, relevant coursework, internships, and extracurricular leadership.", readTime: "", date: "" },
      { id: 4, title: "Graphic Designer CV", excerpt: "A highly visual, creative layout balancing whitespace, typography, and portfolio link integrations.", readTime: "", date: "" }
    ]
  },
  "interview-prep": {
    title: "Interview Questions & Prep",
    intro: "Master the art of the interview. Explore role-specific question banks, STAR method strategies, and tips for negotiating your salary.",
    gradient: "from-accent-cyan/10 via-white to-white",
    articles: [
      { id: 1, title: "Top 50 Behavioral Questions", excerpt: "Stop rambling. Learn how to structure your answers into Situation, Task, Action, and Result to score maximum points.", readTime: "8 min read", date: "July 14, 2026" },
      { id: 2, title: "Technical Interview Guide", excerpt: "When they ask 'Do you have any questions for us?', never say no. Use these questions to stand out and spot toxic red flags.", readTime: "5 min read", date: "July 02, 2026" },
      { id: 3, title: "STAR Method Framework", excerpt: "A step-by-step psychological framework for asking for more money, equity, and PTO after you receive the initial offer.", readTime: "12 min read", date: "June 25, 2026" },
      { id: 4, title: "Salary Negotiation Scripts", excerpt: "Don't say you're a perfectionist. Here is exactly how to answer this dreaded question with genuine self-awareness.", readTime: "4 min read", date: "June 15, 2026" }
    ]
  },
  "ai-for-work": {
    title: "AI for Work",
    intro: "Stay ahead of the curve. Learn how to leverage AI tools for drafting emails, generating reports, and boosting your daily office productivity.",
    gradient: "from-slate-200/50 via-white to-white",
    articles: [
      { id: 1, title: "ChatGPT for Emails", excerpt: "Stop sounding like a robot. How to train AI to adopt your specific tone of voice for external communication.", readTime: "6 min read", date: "July 16, 2026" },
      { id: 2, title: "Data Analysis Prompts", excerpt: "A complete workflow for recording, transcribing, and distributing actionable meeting summaries in under 5 minutes.", readTime: "7 min read", date: "July 09, 2026" },
      { id: 3, title: "Automating Reports", excerpt: "An in-depth comparison of the top two LLMs and which one you should be using for reports vs. coding vs. emails.", readTime: "10 min read", date: "June 30, 2026" },
      { id: 4, title: "AI in Marketing", excerpt: "A crucial guide to corporate compliance, trade secrets, and how to use AI without violating your company's NDA.", readTime: "5 min read", date: "June 22, 2026" }
    ]
  },
  "excel-tutorials": {
    title: "Excel Tutorials",
    intro: "From basic formulas to advanced pivot tables. Master Microsoft Excel with our step-by-step tutorials and free downloadable templates.",
    gradient: "from-primary/10 via-white to-white",
    articles: [
      { id: 1, title: "Mastering VLOOKUP", excerpt: "The modern, error-proof way to search across your spreadsheets without breaking your formulas when columns move.", readTime: "6 min read", date: "July 11, 2026" },
      { id: 2, title: "Pivot Tables 101", excerpt: "Stop doing manual math. Learn how to summarize tens of thousands of rows of data with just four clicks.", readTime: "9 min read", date: "July 04, 2026" },
      { id: 3, title: "Advanced Macros", excerpt: "Put the mouse down. Master these navigation, formatting, and calculation shortcuts to become an Excel power user.", readTime: "4 min read", date: "June 27, 2026" },
      { id: 4, title: "Conditional Formatting", excerpt: "How to automatically highlight variances, target misses, and trends using heatmaps and icon sets.", readTime: "7 min read", date: "June 18, 2026" }
    ]
  },
  "email-templates": {
    title: "Email Templates",
    intro: "Never stare at a blank screen again. Copy and paste our proven email templates for cold outreach, follow-ups, and networking.",
    gradient: "from-accent-purple/10 via-white to-white",
    articles: [
      { id: 1, title: "Cold Outreach", excerpt: "A high-converting, non-spammy template for messaging alumni, recruiters, or hiring managers at your dream company.", readTime: "5 min read", date: "July 13, 2026" },
      { id: 2, title: "Resignation Letters", excerpt: "Timing is everything. Here is exactly what to say 24 hours after the interview, and what to say 1 week later.", readTime: "6 min read", date: "July 06, 2026" },
      { id: 3, title: "Client Follow-ups", excerpt: "Three simple templates for resigning gracefully, whether you loved the job or couldn't wait to leave.", readTime: "4 min read", date: "June 29, 2026" },
      { id: 4, title: "Meeting Requests", excerpt: "How to structure an email requesting a performance review or revisiting a promised salary bump.", readTime: "5 min read", date: "June 21, 2026" }
    ]
  },
  "hr-guides": {
    title: "HR Guides",
    intro: "Navigate workplace policies with confidence. Read clear explainers on leave policies, onboarding checklists, and performance reviews.",
    gradient: "from-accent-cyan/10 via-white to-white",
    articles: [
      { id: 1, title: "Employee Onboarding", excerpt: "Is it a trap? Learn the psychology behind unlimited vacation policies and how to ensure you take the time you've earned.", readTime: "7 min read", date: "July 14, 2026" },
      { id: 2, title: "Conflict Resolution", excerpt: "What a PIP actually means legally, how to determine if it's a genuine effort to help you, and when to just start interviewing.", readTime: "11 min read", date: "July 07, 2026" },
      { id: 3, title: "Performance Reviews", excerpt: "What companies are legally required to pay for when you work from home, versus what is considered a perk.", readTime: "6 min read", date: "June 26, 2026" },
      { id: 4, title: "Leave Policies", excerpt: "Strategies for gathering peer feedback, writing your self-evaluation, and responding to constructive criticism.", readTime: "8 min read", date: "June 19, 2026" }
    ]
  },
  "business-letters": {
    title: "Business Letter Templates",
    intro: "Professional correspondence made easy. Download templates for recommendation letters, formal resignations, and appointment offers.",
    gradient: "from-slate-200/50 via-white to-white",
    articles: [
      { id: 1, title: "Partnership Proposals", excerpt: "A template for managers to write compelling, specific recommendations that help former employees stand out.", readTime: "6 min read", date: "July 12, 2026" },
      { id: 2, title: "Invoice Disputes", excerpt: "How to structure a letter to HR regarding harassment, unsafe conditions, or policy violations to protect yourself legally.", readTime: "9 min read", date: "July 03, 2026" },
      { id: 3, title: "Formal Apologies", excerpt: "You said yes on the phone, now put it in writing. How to confirm start dates, salary, and contingencies professionally.", readTime: "4 min read", date: "June 24, 2026" },
      { id: 4, title: "Recommendation Letters", excerpt: "The executive summary that sits on top of your deck. How to hook investors or B2B clients in three paragraphs.", readTime: "7 min read", date: "June 16, 2026" }
    ]
  }
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const category = categoryData[resolvedParams.slug as keyof typeof categoryData];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Category Header */}
      <div className={`bg-gradient-to-b ${category.gradient} pt-32 pb-16 border-b border-slate-200`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            href="/#guides" 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Categories
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-6">
            {category.title}
          </h1>
          
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
            {category.intro}
          </p>

          {resolvedParams.slug === "resume-builder" && (
            <Link 
              href="/tools/resume-builder" 
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-slate-800 transition-colors"
            >
              Open Resume Builder Tool
              <ChevronRight size={18} />
            </Link>
          )}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-800">
            {resolvedParams.slug === "cv-examples" ? "Browse CV Templates" : "Latest Articles"}
          </h2>
          <div className="text-sm font-medium text-slate-500">Showing {category.articles.length} results</div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:gap-8">
          {resolvedParams.slug === "interview-prep" ? (
            category.articles.map((article, index) => (
              <div key={article.id} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                  {index === 0 && <MessageSquare className="text-slate-400 group-hover:text-primary transition-colors" size={32} />}
                  {index === 1 && <Code className="text-slate-400 group-hover:text-primary transition-colors" size={32} />}
                  {index === 2 && <Star className="text-slate-400 group-hover:text-primary transition-colors" size={32} />}
                  {index === 3 && <DollarSign className="text-slate-400 group-hover:text-primary transition-colors" size={32} />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{article.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{article.excerpt}</p>
                <Link href={`/guide?title=${encodeURIComponent(article.title)}&category=${encodeURIComponent(category.title)}`} className="mt-auto inline-flex items-center justify-center w-full sm:w-auto py-3 px-8 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                  Read Guide
                </Link>
              </div>
            ))
          ) : resolvedParams.slug === "cv-examples" ? (
            category.articles.map((template, index) => (
              <div key={template.id} className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 group">
                {/* Custom Visual Thumbnail based on Index */}
                <div className="w-full h-48 rounded-2xl mb-8 flex items-center justify-center overflow-hidden border border-slate-100 bg-slate-50 relative group-hover:scale-[1.02] transition-transform duration-500">
                  {index === 0 && (
                    /* Tech / Minimalist Thumbnail */
                    <div className="w-[120px] h-[160px] bg-white shadow-sm border border-slate-200 p-3 flex flex-col gap-2 relative rounded-sm">
                      <div className="w-16 h-2 bg-slate-800 rounded-full mx-auto mb-2"></div>
                      <div className="w-full h-1 bg-slate-200 rounded-full"></div>
                      <div className="flex gap-2 mt-2">
                        <div className="w-1/3 space-y-1.5">
                          <div className="w-full h-1 bg-primary/40 rounded-full"></div>
                          <div className="w-3/4 h-1 bg-slate-200 rounded-full"></div>
                          <div className="w-full h-1 bg-slate-200 rounded-full"></div>
                        </div>
                        <div className="w-2/3 space-y-1.5">
                          <div className="w-1/2 h-1.5 bg-slate-800 rounded-full mb-1"></div>
                          <div className="w-full h-1 bg-slate-200 rounded-full"></div>
                          <div className="w-full h-1 bg-slate-200 rounded-full"></div>
                          <div className="w-4/5 h-1 bg-slate-200 rounded-full"></div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 rounded-bl-xl"></div>
                    </div>
                  )}
                  {index === 1 && (
                    /* Marketing / Metric Thumbnail */
                    <div className="w-[120px] h-[160px] bg-white shadow-sm border border-slate-200 flex flex-col relative rounded-sm overflow-hidden">
                      <div className="h-8 bg-accent-purple/90 w-full flex items-center px-2">
                        <div className="w-12 h-2 bg-white/80 rounded-full"></div>
                      </div>
                      <div className="p-3 space-y-3">
                        <div className="flex justify-between">
                          <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-accent-purple"></div>
                          <div className="w-12 space-y-1 mt-1">
                            <div className="w-full h-1 bg-slate-800 rounded-full"></div>
                            <div className="w-3/4 h-1 bg-slate-300 rounded-full"></div>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <div className="w-full h-1.5 bg-slate-200 rounded-full"></div>
                          <div className="w-full h-1.5 bg-slate-200 rounded-full"></div>
                          <div className="w-2/3 h-1.5 bg-slate-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    /* Fresh Graduate / Two-column Thumbnail */
                    <div className="w-[120px] h-[160px] bg-white shadow-sm border border-slate-200 flex relative rounded-sm overflow-hidden">
                      <div className="w-1/3 bg-slate-900 p-2 space-y-2">
                        <div className="w-6 h-6 rounded-full bg-slate-700 mx-auto mb-3"></div>
                        <div className="w-full h-1 bg-slate-600 rounded-full"></div>
                        <div className="w-3/4 h-1 bg-slate-600 rounded-full"></div>
                        <div className="w-full h-1 bg-slate-600 rounded-full mt-4"></div>
                      </div>
                      <div className="w-2/3 p-2 space-y-2.5">
                        <div className="w-1/2 h-1.5 bg-accent-cyan rounded-full mb-2"></div>
                        <div className="space-y-1">
                          <div className="w-full h-1 bg-slate-200 rounded-full"></div>
                          <div className="w-full h-1 bg-slate-200 rounded-full"></div>
                        </div>
                        <div className="w-1/2 h-1.5 bg-accent-cyan rounded-full mb-2 mt-3"></div>
                        <div className="space-y-1">
                          <div className="w-full h-1 bg-slate-200 rounded-full"></div>
                          <div className="w-4/5 h-1 bg-slate-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {index === 3 && (
                    /* Graphic Designer / Visual Thumbnail */
                    <div className="w-[120px] h-[160px] bg-[#1a1a1a] shadow-sm border border-slate-800 p-2 relative rounded-sm overflow-hidden">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full absolute -top-4 -right-4 opacity-50 blur-xl"></div>
                      <div className="w-12 h-2 bg-white rounded-full mb-4 mt-2"></div>
                      <div className="grid grid-cols-2 gap-1.5 mb-2">
                        <div className="h-8 bg-slate-800 rounded-sm"></div>
                        <div className="h-8 bg-slate-800 rounded-sm"></div>
                      </div>
                      <div className="space-y-1.5 mt-4">
                        <div className="w-full h-1 bg-slate-600 rounded-full"></div>
                        <div className="w-full h-1 bg-slate-600 rounded-full"></div>
                        <div className="w-3/4 h-1 bg-slate-600 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{template.title}</h3>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed flex-grow">{template.excerpt}</p>
                <Link href={`/tools/resume-builder?template=${index === 0 ? 'classic' : index === 1 ? 'creative' : index === 2 ? 'modern' : 'dark'}`} className="mt-auto inline-flex items-center justify-center w-full py-3 px-6 bg-white border-2 border-slate-200 text-slate-900 rounded-xl font-bold hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all">
                  Use this layout
                </Link>
              </div>
            ))
          ) : (
            category.articles.map((article) => (
              <Link href={`/guide?title=${encodeURIComponent(article.title)}&category=${encodeURIComponent(category.title)}`} key={article.id} className="block group">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 h-full flex flex-col">
                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} className="text-primary" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                    {resolvedParams.slug === 'email-templates' || resolvedParams.slug === 'business-letters' 
                      ? 'Download Template' 
                      : resolvedParams.slug === 'excel-tutorials' || resolvedParams.slug === 'hr-guides'
                      ? 'Download Guide'
                      : 'Read More'}
                    <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            )))}
        </div>
      </div>
    </div>
  );
}
