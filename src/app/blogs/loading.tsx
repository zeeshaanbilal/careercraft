import { Loader2 } from "lucide-react";

export default function BlogsLoading() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Skeleton Hero Section */}
      <div className="max-w-3xl mx-auto w-full text-center mb-16 mt-8">
        <div className="h-16 bg-slate-200/60 rounded-2xl w-3/4 mx-auto mb-6 animate-pulse"></div>
        <div className="h-6 bg-slate-200/60 rounded-xl w-full mx-auto mb-2 animate-pulse"></div>
        <div className="h-6 bg-slate-200/60 rounded-xl w-5/6 mx-auto mb-8 animate-pulse"></div>
        <div className="flex flex-wrap justify-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-24 bg-slate-200/60 rounded-full animate-pulse"></div>
          ))}
        </div>
      </div>

      {/* Skeleton Featured Post */}
      <div className="max-w-7xl mx-auto w-full mb-12">
        <div className="h-80 md:h-[400px] w-full bg-slate-200/60 rounded-[2rem] animate-pulse"></div>
      </div>

      {/* Skeleton Grid */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-[400px] w-full bg-slate-200/60 rounded-3xl animate-pulse flex flex-col overflow-hidden border border-slate-200/50">
              <div className="h-56 bg-slate-300/40 w-full"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="h-4 bg-slate-200 w-1/4 rounded mb-4"></div>
                <div className="h-6 bg-slate-200 w-3/4 rounded mb-4"></div>
                <div className="h-16 bg-slate-200 w-full rounded mb-auto"></div>
                <div className="h-4 bg-slate-200 w-full mt-4 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
