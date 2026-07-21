import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, FileCode2, Image, FileUp, ListOrdered, Type } from "lucide-react";

export const metadata = {
  title: "Tools - CareerCraft",
  description: "Free and powerful tools to help you format, convert, and manage your documents.",
};

const tools = [
  {
    title: "HTML To PDF",
    description: "Render HTML content into a clean, printable PDF file.",
    icon: FileCode2,
    href: "/tools/html-to-pdf",
  },
  {
    title: "Markdown To HTML",
    description: "Transform Markdown content into clean, formatted HTML.",
    icon: FileText,
    href: "/tools/markdown-to-html",
  },
  {
    title: "Images To PDF",
    description: "Convert one or multiple images into a single compiled PDF.",
    icon: Image,
    href: "/tools/images-to-pdf",
  },
  {
    title: "Reorder Rotate PDF",
    description: "Rearrange or rotate PDF pages to customize document order and orientation.",
    icon: ListOrdered,
    href: "/tools/reorder-rotate-pdf",
  },
  {
    title: "Text To HTML",
    description: "Convert plain text into structured and web-ready HTML.",
    icon: Type,
    href: "/tools/text-to-html",
  },
  {
    title: "PDF To Text",
    description: "Extract readable text from PDF files for easy editing or reuse.",
    icon: FileUp,
    href: "/tools/pdf-to-text",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <div className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Our Developer Tools
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A collection of free, fast, and secure tools to help you manage your files, conversions, and document structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Link 
                key={index}
                href={tool.href}
                className="group bg-white rounded-[2rem] p-8 border border-slate-200/80 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 mb-6 relative z-10 shadow-sm">
                  <tool.icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors duration-500 relative z-10">
                  {tool.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
