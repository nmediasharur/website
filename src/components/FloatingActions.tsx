"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingActions() {
  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
    >
      <a 
        href="https://wa.me/919042410169" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-300 relative group"
      >
        <MessageCircle size={28} />
        
        {/* Tooltip */}
        <span className="absolute right-16 bg-black/80 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </motion.div>
  );
}
