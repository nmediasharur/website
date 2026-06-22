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
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-pulse z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/20 rounded-full blur-[120px] animate-pulse z-10" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-20 px-4 md:px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-8 lg:pt-0">
        
        {/* Text Content - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-center lg:text-left lg:w-1/2 pt-4 lg:pt-0"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-white">Reels Starting from just </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 glow-text">₹999</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl text-white/70 mb-10 max-w-xl mx-auto lg:mx-0 font-light"
          >
            Your Elite Digital Marketing Partner. <br className="hidden md:block" /> We don't just run ads; we build empires.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
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

        {/* 3D Floating Logo Animation - Right Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Dramatic custom easing without heavy filters
          className="lg:w-1/2 w-full flex justify-center lg:justify-end relative mt-0 lg:mt-0"
        >
          {/* Animated Glow Behind Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 1],
              opacity: [0, 0.5, 0.3],
            }}
            transition={{ duration: 2, times: [0, 0.4, 1], ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[500px] lg:h-[500px] bg-red-600 rounded-full blur-[40px] lg:blur-[80px] z-0"
          />

          {/* Logo Animation */}
          <motion.div
            initial={{ rotateZ: -10 }}
            animate={{ 
              y: [0, -20, 0],
              rotateZ: [0, 2, -2, 0],
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              rotateZ: { repeat: Infinity, duration: 8, ease: "easeInOut" } 
            }}
            className="relative w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[600px] lg:h-[600px] z-10 drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]"
          >
            <Image
              src="/asset/logo-updated.png"
              alt="Hero Logo"
              fill
              className="object-contain"
              priority
            />
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
