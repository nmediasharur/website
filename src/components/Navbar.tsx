"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-2 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/asset/logo-navbar.png"
            alt="N MEDIA Logo"
            width={240}
            height={80}
            className="h-10 md:h-16 w-auto object-contain scale-[1.5] md:scale-[2] origin-center md:origin-left"
          />
        </Link>

        {/* Desktop & Mobile Nav */}
        <nav className="flex items-center gap-4 md:gap-8 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs md:text-sm font-medium text-white/80 hover:text-white hover:text-shadow-sm hover:shadow-red-500 transition-all whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className={cn(buttonVariants({ size: "sm" }), "bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-4 md:px-6 shadow-[0_0_15px_rgba(255,0,0,0.5)] whitespace-nowrap")}
          >
            Get Started
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
