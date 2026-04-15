import Link from "next/link";

export default function ThankYouPage() {
  return (
    <>
      {/* Subtle grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Main content */}
      <main className="relative min-h-screen flex flex-col justify-center px-6">
        <div className="max-w-xl mx-auto w-full text-center">
          {/* Success icon */}
          <div className="animate-fade-up mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#DCFCE7]">
              <svg
                className="w-8 h-8 text-[#16A34A]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 text-3xl sm:text-4xl font-medium tracking-tight text-[#0F172A] mb-4">
            You're on the list!
          </h1>

          {/* Description */}
          <p className="animate-fade-up delay-200 text-lg text-[#475569] mb-8">
            Thanks for signing up for early access. We'll send you an email when
            we're ready to welcome you aboard.
          </p>

          {/* Back link */}
          <Link
            href="/"
            className="animate-fade-up delay-300 inline-flex items-center gap-2 text-[#475569] hover:text-[#0F172A] transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
