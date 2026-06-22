"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// These would normally come from the admin dashboard (Supabase or local JSON)
const defaultReels = [
  "https://www.instagram.com/p/C-0z928P1Lh", // Example reel IDs
  "https://www.instagram.com/p/C-0z928P1Lh",
  "https://www.instagram.com/p/C-0z928P1Lh",
  "https://www.instagram.com/p/C-0z928P1Lh",
];

export function ReelShowcase() {
  const [reels] = useState(defaultReels);

  return (
    <section id="work" className="py-24 bg-[#050505]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Content that <span className="text-red-500">Converts</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">We create scroll-stopping visual assets engineered for engagement and conversion.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((url, i) => {
            // Extract the post ID to create the embed URL
            const embedUrl = url.endsWith('/') ? `${url}embed` : `${url}/embed`;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full aspect-[9/16] bg-black/50 rounded-2xl overflow-hidden border border-white/5 relative group"
              >
                {/* Fallback overlay before iframe loads */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity z-10 bg-black/20">
                  <div className="w-16 h-16 rounded-full bg-red-600/80 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                
                <iframe
                  src={embedUrl}
                  className="w-full h-[105%] -mt-[2.5%] scale-105 border-0"
                  scrolling="no"
                  allowTransparency
                  allow="encrypted-media"
                  loading="lazy"
                ></iframe>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
