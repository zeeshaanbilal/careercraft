import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import MouseTracker from "@/components/MouseTracker";

export const metadata: Metadata = {
  title: "CareerCraft | Premium AI Career Platform",
  description: "A premium AI SaaS experience for career growth, interviews, and productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="flex flex-col min-h-screen bg-background font-inter text-foreground">
        <MouseTracker />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
