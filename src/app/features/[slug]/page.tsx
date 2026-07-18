import Link from "next/link";
import { ArrowLeft, BrainCircuit, Calculator, FileText, LayoutDashboard, MessageCircle, WandSparkles } from "lucide-react";

// Define the content data for each feature
const featuresData = {
  "resume-builder": {
    title: "Resume Builder",
    icon: <FileText size={48} className="text-primary" />,
    gradient: "from-primary/20 via-primary/5 to-transparent",
    intro: "Craft a structurally perfect, ATS-optimized resume in minutes. Eliminate formatting guesswork and ensure your professional footprint commands attention.",
    features: [
      "Intelligent Formatting: Automatically handles margins, font pairings, and line spacing for maximum readability.",
      "ATS Optimization: Clean export engine ensures your data parses flawlessly in systems like Workday and Greenhouse.",
      "Dynamic Section Management: Drag-and-drop blocks to highlight your most relevant experience.",
      "Tailor for the Role: Clone your master resume instantly and swap keywords to match specific job descriptions.",
    ]
  },
  "ai-assistant": {
    title: "AI Assistant",
    icon: <BrainCircuit size={48} className="text-accent-purple" />,
    gradient: "from-accent-purple/20 via-accent-purple/5 to-transparent",
    intro: "Your personal, 24/7 career mentor. Navigate the job market with strategic networking outreach and context-aware writing capabilities.",
    features: [
      "Context-Aware Drafting: Generate highly targeted cover letters by syncing your resume with specific job descriptions.",
      "Cold Outreach Scripts: Craft thoughtful, non-spammy LinkedIn messages to recruiters that actually get replies.",
      "Real-Time Scenario Analysis: Get actionable advice on how to handle difficult workplace situations.",
      "Salary Negotiation Frameworks: Let the AI generate respectful, data-driven scripts to confidently ask for more money.",
    ]
  },
  "interview-prep": {
    title: "Interview Prep",
    icon: <MessageCircle size={48} className="text-accent-cyan" />,
    gradient: "from-accent-cyan/20 via-accent-cyan/5 to-transparent",
    intro: "Transform from a nervous applicant into a compelling storyteller. Master behavioral questions and technical frameworks with curated practice tools.",
    features: [
      "STAR Method Templates: Log and structure your career highlights into Situation, Task, Action, and Result narratives.",
      "Role-Specific Question Banks: Access hundreds of curated questions tailored to your exact industry and seniority.",
      "Reverse Interviewing: Discover insightful questions to ask hiring managers to stand out and reveal red flags.",
      "Mock Simulator: Practice pacing, track filler words, and refine your delivery before the real thing.",
    ]
  },
  "salary-calculator": {
    title: "Salary Calculator",
    icon: <Calculator size={48} className="text-primary" />,
    gradient: "from-primary/20 via-accent-cyan/10 to-transparent",
    intro: "Bridge the gap between a theoretical offer letter and your practical bank account. Know your true net pay before making career moves.",
    features: [
      "Real-Time Net Breakdown: Instantly see your actual take-home pay broken down by year, month, and bi-weekly periods.",
      "Custom Deductions: Input precise percentages for taxes or fixed dollar amounts for benefits like health insurance.",
      "Relocation Modeling: Compare how a $100k salary feels in a state with no income tax versus one with high taxes.",
      "Negotiation Leverage: Back-calculate your required gross salary based on your actual monthly net living expenses.",
    ]
  },
  "career-guides": {
    title: "Career Guides",
    icon: <WandSparkles size={48} className="text-accent-purple" />,
    gradient: "from-accent-purple/20 via-primary/5 to-transparent",
    intro: "A continuously updated library of highly actionable intelligence written by HR experts. Stay competitive in a rapidly shifting corporate landscape.",
    features: [
      "The Job Search Funnel: Treat your search like a pipeline—source leads, increase conversion rates, and close the deal.",
      "Remote Work Mastery: Learn how to maintain visibility and manage asynchronous communication in distributed teams.",
      "Navigating Compliance: Read plain-English explainers on non-competes, severance packages, and performance plans.",
      "Action-Oriented Playbooks: Skip the generic platitudes and access exact timelines, email scripts, and benchmarks.",
    ]
  },
  "office-tools": {
    title: "Office Tools",
    icon: <LayoutDashboard size={48} className="text-accent-cyan" />,
    gradient: "from-accent-cyan/20 via-primary/5 to-transparent",
    intro: "A suite of hyper-fast, client-side micro-utilities designed to eliminate daily friction without compromising your privacy.",
    features: [
      "100% Client-Side Processing: Zero API delays and zero privacy risks. Your sensitive data never touches our servers.",
      "Word & Character Counters: Perfect for checking strict character limits on social media or SEO meta descriptions.",
      "Instant QR Code Generator: Seamlessly bridge the physical and digital with high-res SVG/PNG exports.",
      "Distraction-Free UI: No ads, no loading screens, and no complex menus. Paste, get your output, and move on.",
    ]
  },
};

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const feature = featuresData[resolvedParams.slug as keyof typeof featuresData];

  if (!feature) {
    return (
      <div className="min-h-[80vh] bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-24 w-24 bg-white rounded-[2rem] shadow-sm border border-slate-200 flex items-center justify-center -rotate-3">
              <WandSparkles size={40} className="text-slate-400" />
            </div>
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
            Coming Soon
          </h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            We are currently building out the content for this specific feature category. Please check back soon!
          </p>
          <Link 
            href="/#tools" 
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/30 px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition-all"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Premium Hero Section */}
      <div className={`relative pt-32 pb-20 overflow-hidden bg-gradient-to-b ${feature.gradient}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white shadow-xl shadow-slate-200/50 border border-slate-100">
              {feature.icon}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
            {feature.title}
          </h1>
        </div>
      </div>

      {/* Structured Layout Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-10 text-center">
            {feature.intro}
          </p>
          
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 mb-12">
            <h3 className="font-display font-bold text-lg text-slate-800 mb-6 uppercase tracking-wider">
              Core Capabilities
            </h3>
            <ul className="space-y-4">
              {feature.features.map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 mr-4">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="border-t border-slate-100 pt-8 flex justify-between items-center flex-col sm:flex-row gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-medium transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            
            <Link 
              href="/tools" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-primary/20"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
