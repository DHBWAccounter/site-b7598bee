"use client";

import { useEffect, useRef } from "react";
import { Mail, Shield, Heart } from "lucide-react";

export function NextStepsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
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
    <section ref={sectionRef} className="relative px-6 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="animate-on-scroll opacity-0 font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            What happens next?
          </h2>
        </div>

        {/* Card */}
        <div className="animate-on-scroll opacity-0 animate-delay-100 relative bg-card rounded-2xl border border-border p-8 sm:p-10 card-shadow">
          {/* Accent corner */}
          <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-tr-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/8 to-transparent" />
          </div>

          <div className="relative z-10 space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">One email, that&apos;s it</h3>
                <p className="text-muted text-sm leading-relaxed">
                  We&apos;ll send you a single email when we launch. No spam, no weekly
                  updates, no &quot;just checking in&quot; messages.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Your inbox is sacred</h3>
                <p className="text-muted text-sm leading-relaxed">
                  We respect your time and attention. If you change your mind, you can
                  unsubscribe instantly from that email with one click.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">We appreciate you</h3>
                <p className="text-muted text-sm leading-relaxed">
                  Every signup tells us we&apos;re building something people want. Thank you
                  for being part of this journey from the start.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
