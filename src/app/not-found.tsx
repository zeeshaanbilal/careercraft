import Link from "next/link";
import { ArrowLeft, MapPinOff } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="h-24 w-24 bg-white rounded-[2rem] shadow-sm border border-slate-200 flex items-center justify-center rotate-3">
            <MapPinOff size={40} className="text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps you followed a broken link.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary via-accent-purple to-accent-cyan text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-all"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
