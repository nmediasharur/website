import Image from "next/image";

export default function UnavailablePage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black overflow-hidden selection:bg-red-500/20 selection:text-white">
      {/* Subtle ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full bg-red-600/[0.07] blur-[120px]" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-[450px] h-[250px] rounded-full bg-zinc-700/[0.05] blur-[100px]" 
        aria-hidden="true" 
      />

      {/* Subtle background tech grid */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        aria-hidden="true" 
      />

      {/* Glassmorphic Notice Card */}
      <div className="relative z-10 w-full max-w-xl mx-auto">
        <div className="rounded-2xl backdrop-blur-2xl bg-zinc-950/85 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.85)] p-8 sm:p-11 text-center relative overflow-hidden">
          
          {/* Subtle top edge specular highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {/* Official N MEDIA Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/asset/logo-official.png"
              alt="N MEDIA"
              width={280}
              height={98}
              priority
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Page Heading */}
          <h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug mb-5">
            Website Temporarily Unavailable
          </h1>

          {/* Body Content */}
          <div className="space-y-3.5 text-zinc-300/85 text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-normal">
            <p>
              This website is temporarily unavailable while we review and update the current development and service requirements.
            </p>
            <p>
              The website will remain offline until the required development arrangements and technical requirements have been reviewed and fulfilled.
            </p>
            <p className="text-zinc-400">
              We appreciate your patience and understanding.
            </p>
          </div>

          {/* Professional Notice Callout */}
          <div className="my-7 rounded-xl border border-white/10 bg-white/[0.025] p-4 sm:p-5 text-left border-l-4 border-l-red-600/90 shadow-sm">
            <p className="text-sm sm:text-base font-semibold text-zinc-100 leading-relaxed">
              This website may be permanently taken offline if the required requirements are not met.
            </p>
          </div>

          {/* Closing Message */}
          <p className="text-sm text-zinc-400 font-normal">
            Thank you for your understanding.
          </p>

          {/* Subtle footer */}
          <div className="mt-9 pt-5 border-t border-white/[0.07] text-xs text-zinc-500 tracking-wider uppercase">
            © 2026 N MEDIA. All rights reserved.
          </div>
        </div>
      </div>
    </main>
  );
}
