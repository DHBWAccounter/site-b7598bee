"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackToHomeCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 py-16 sm:py-24">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="animate-on-scroll opacity-0 font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6">
          Ready to explore?
        </h2>

        <Link
          href="/"
          className="animate-on-scroll opacity-0 animate-delay-100 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-white font-medium hover:bg-foreground/90 transition-all duration-200 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to homepage
        </Link>

        {/* Subtle hint */}
        <p className="animate-on-scroll opacity-0 animate-delay-200 text-sm text-muted/50 mt-6">
          Share with a friend who might be interested
        </p>
      </div>
    </section>
  );
}
