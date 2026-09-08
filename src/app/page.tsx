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
      <div className="relative z-10 w-full max-w-xl mx-auto">
        <div className="rounded-3xl backdrop-blur-2xl bg-black/65 border border-white/10 shadow-[0_0_60px_rgba(255,0,0,0.14)] p-8 sm:p-11 text-center transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.04] before:to-transparent before:pointer-events-none">
          
          {/* Subtle Top Red Accent Edge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-70" />

          {/* Official N MEDIA Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/asset/logo-official.png"
              alt="N MEDIA"
              width={280}
              height={98}
              priority
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Page Heading */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug mb-5">
            Website Temporarily Unavailable
          </h1>

          {/* Body Paragraphs */}
          <div className="space-y-3.5 text-white/80 text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-normal">
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

          {/* Professional Notice Callout */}
          <div className="my-7 rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 text-left border-l-4 border-l-red-500 shadow-sm">
            <p className="text-sm sm:text-base font-semibold text-white/95 leading-relaxed">
              This website may be permanently taken offline if the required requirements are not met.
            </p>
          </div>

          {/* Closing Message */}
          <p className="text-sm text-white/60 font-normal">
            Thank you for your understanding.
          </p>

          {/* Subtle footer */}
          <div className="mt-9 pt-5 border-t border-white/[0.07] text-xs text-white/40 tracking-wider uppercase">
            © 2026 N MEDIA. All rights reserved.
          </div>
        </div>
      </div>
    </main>
  );
}
