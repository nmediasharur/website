import Image from "next/image";

export default function UnavailablePage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black overflow-hidden selection:bg-red-600/30 selection:text-white">
      {/* Ambient background glow effects */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-red-600/10 blur-[130px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-red-950/20 blur-[120px]" 
        aria-hidden="true" 
      />
      
      {/* Subtle background tech grid */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        aria-hidden="true" 
      />

      {/* Main Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <div className="rounded-3xl backdrop-blur-2xl bg-black/65 border border-white/10 shadow-[0_0_60px_rgba(255,0,0,0.12)] p-7 sm:p-10 md:p-12 text-center transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.04] before:to-transparent before:pointer-events-none">
          
          {/* Subtle Top Red Accent Edge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-70" />

          {/* N MEDIA Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/asset/logo-updated.png"
              alt="N MEDIA Logo"
              width={260}
              height={85}
              priority
              className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Status Indicator Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-medium tracking-wider uppercase mb-7 shadow-[0_0_15px_rgba(255,0,0,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span>System Notice • Offline</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight sm:leading-snug mb-6">
            Website Temporarily Unavailable
          </h1>

          {/* Body Paragraphs */}
          <div className="space-y-4 text-white/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto font-normal">
            <p>
              This website is temporarily unavailable while we review and update the current development and service requirements.
            </p>
            <p>
              The website will remain offline until the required development arrangements and technical requirements have been reviewed and fulfilled.
            </p>
            <p className="text-white/65">
              We appreciate your patience and understanding.
            </p>
          </div>

          {/* Alert Callout Box (Glassmorphic Warning) */}
          <div className="my-8 rounded-2xl bg-gradient-to-r from-red-950/50 via-red-900/25 to-red-950/50 border border-red-500/40 p-4 sm:p-5 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,0,0.15)] text-left flex items-start gap-3.5 sm:gap-4">
            <div className="shrink-0 mt-0.5 p-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-red-400"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-semibold text-red-200 leading-snug">
              This website may be permanently taken offline if the required requirements are not met.
            </p>
          </div>

          {/* Closing Note */}
          <p className="text-sm sm:text-base text-white/60 font-medium">
            Thank you for your understanding.
          </p>

          {/* Footer separator & Agency signature */}
          <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/40 tracking-wider uppercase">
            © 2026 N MEDIA. All rights reserved.
          </div>
        </div>
      </div>
    </main>
  );
}
