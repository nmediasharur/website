"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.15)_0,rgba(0,0,0,1)_50%)] z-10" />
        
        {/* Giant Background Logo */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] z-0 mix-blend-screen pointer-events-none flex items-center justify-center"
        >
          <Image
            src="/asset/8ba73fe2-1f33-4ec1-961b-218c5fd95f0f.png"
            alt="Background Logo"
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/20 rounded-full blur-[120px] animate-pulse z-10" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            <span className="text-white">Scale. </span>
            <span className="text-white">Convert. </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 glow-text">Dominate.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto font-light"
          >
            Your Elite Digital Marketing Partner. <br className="hidden md:block" /> We don't just run ads; we build empires.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="#contact" 
              className={cn(buttonVariants({ size: "lg" }), "bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-8 h-14 text-lg w-full sm:w-auto shadow-[0_0_20px_rgba(255,0,0,0.4)]")}
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="#pricing" 
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8 h-14 text-lg w-full sm:w-auto border-white/20 hover:bg-white/10 text-white glass")}
            >
              View Pricing
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-white/50 text-sm mb-2 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-red-500 to-transparent" />
      </motion.div>
    </section>
  );
}
