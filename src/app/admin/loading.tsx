import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-24 flex flex-col items-center justify-center">
      <Loader2 size={48} className="animate-spin text-primary mb-4" />
      <h2 className="text-xl font-display font-semibold text-slate-700">Loading Dashboard...</h2>
      <p className="text-slate-500 mt-2">Fetching your content securely.</p>
    </div>
  );
}
