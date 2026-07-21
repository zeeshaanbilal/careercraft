"use client";

import { useEffect } from "react";

export default function MouseTracker() {
  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
          document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}
