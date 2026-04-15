import { WaitlistForm } from "@/components/waitlist-form";

export default function HomePage() {
  return (
    <>
      {/* Subtle grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Main content */}
      <main className="relative min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 flex flex-col justify-center px-6 pt-20 pb-12">
          <div className="max-w-2xl mx-auto w-full">
            {/* Small badge */}
            <div className="animate-fade-up mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F1F5F9] text-[#475569] text-xs font-medium tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                Coming Soon
              </span>
            </div>
            
            {/* Main headline */}
            <h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#0F172A] leading-[1.1] mb-6">
              Something small is coming.
            </h1>
            
            {/* Description */}
            <p className="animate-fade-up delay-200 text-lg sm:text-xl text-[#475569] leading-relaxed max-w-xl mb-12">
              We're building a lightweight tool that helps you collect signups without the bloat. No dashboards you'll never use. No features you don't need. Just a simple form and a list of people who care about what you're building.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16 sm:py-20">
          <div className="max-w-2xl mx-auto w-full">
            <div className="animate-fade-up delay-300 bg-white rounded-2xl border border-[#E2E8F0] p-8 sm:p-10 shadow-[0_4px_32px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl sm:text-3xl font-medium text-[#0F172A] mb-3">
                Get early access
              </h2>
              <p className="text-[#475569] mb-6">
                Enter your email below and we'll let you know when we launch. No spam, ever — just a single email when we're ready for you.
              </p>
              
              <WaitlistForm />
              
              {/* Trust indicator */}
              <p className="mt-4 text-xs text-[#94A3B8] flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="px-6 py-12 border-t border-[#E2E8F0]">
          <div className="max-w-2xl mx-auto w-full text-center">
            <p className="animate-fade-up delay-400 text-sm text-[#475569] mb-4">
              <span className="font-medium text-[#0F172A]">Built for makers who ship.</span>
            </p>
            <p className="animate-fade-up delay-500 text-sm text-[#94A3B8] max-w-md mx-auto">
              Tiny Waitlist is designed for indie hackers, small teams, and anyone who wants to validate an idea before building. We're keeping it simple on purpose.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
