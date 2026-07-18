import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-[80vh] bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="h-24 w-24 bg-white rounded-[2rem] shadow-sm border border-slate-200 flex items-center justify-center -rotate-3">
            <Clock size={40} className="text-accent-purple" />
          </div>
        </div>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
          Coming Soon
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          We are currently working hard to build this tool. It will be available very soon!
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/30 px-6 py-3 rounded-full font-semibold shadow-sm hover:shadow-md transition-all"
        >
          <ArrowLeft size={18} />
          Explore Other Tools
        </Link>
      </div>
    </div>
  );
}
