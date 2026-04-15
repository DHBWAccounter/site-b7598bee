"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

export function ThankYouHero() {
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
    <section
      ref={sectionRef}
      className="relative min-h-[75vh] flex items-center justify-center px-6 py-24"
    >
      {/* Subtle celebratory background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-b from-accent/[0.05] to-transparent blur-3xl" />
        {/* Decorative radial dots */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-accent/20"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-120px)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Success icon */}
        <div className="animate-on-scroll opacity-0 mb-8 flex justify-center">
          <div className="relative">
            {/* Outer ring with pulse animation */}
            <div className="absolute inset-0 w-24 h-24 rounded-full bg-accent/10 animate-ping-slow" />
            {/* Middle ring */}
            <div className="absolute inset-2 w-20 h-20 rounded-full bg-accent/20 animate-pulse-soft" />
            {/* Main circle */}
            <div className="relative w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
              <Check className="w-12 h-12 text-white stroke-[3]" />
            </div>
          </div>
        </div>

        {/* Main headline */}
        <h1 className="animate-on-scroll opacity-0 animate-delay-100 font-display text-5xl sm:text-6xl font-semibold tracking-tight text-foreground leading-[1.1] mb-6">
          You&apos;re on the list!
        </h1>

        {/* Description */}
        <p className="animate-on-scroll opacity-0 animate-delay-200 text-lg sm:text-xl text-muted leading-relaxed max-w-xl mx-auto">
          Thanks for signing up for early access to Tiny Waitlist. We&apos;re hard at
          work building something simple and useful, and we&apos;ll email you as soon
          as we&apos;re ready to let you in.
        </p>

        {/* Share note */}
        <p className="animate-on-scroll opacity-0 animate-delay-300 text-base text-muted/70 leading-relaxed max-w-lg mx-auto mt-6">
          In the meantime, feel free to share this page with anyone else who might
          be interested. We appreciate every signal that tells us we&apos;re building
          something people want.
        </p>

        {/* Decorative element */}
        <div className="animate-on-scroll opacity-0 animate-delay-400 mt-12 flex items-center justify-center gap-3">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-border" />
          <div className="w-2 h-2 rounded-full bg-accent/30" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  );
}
