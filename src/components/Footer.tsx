"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/asset/logo-updated.png"
                alt="N MEDIA Logo"
                width={300}
                height={100}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 max-w-sm mb-8">
              Digital marketing systems built for brands that want growth, not vanity. Scale, convert, and dominate your niche.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.instagram.com/n_medias.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-red-600 hover:text-white transition-colors">
                <Camera size={20} />
              </a>
              <a href="mailto:hello@nmedia.agency" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-red-600 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+919042410169" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-red-600 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
            </div>
            <p className="text-white/60 mt-4 text-sm">Location: Harur</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-white/60 hover:text-red-500 transition-colors">Services</Link></li>
              <li><Link href="#work" className="text-white/60 hover:text-red-500 transition-colors">Work</Link></li>
              <li><Link href="#pricing" className="text-white/60 hover:text-red-500 transition-colors">Pricing</Link></li>
              <li><Link href="#testimonials" className="text-white/60 hover:text-red-500 transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white/60 hover:text-red-500 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/60 hover:text-red-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            Copyright © 2026 N MEDIA. All Rights Reserved.
          </p>
          <div className="text-white/40 text-sm text-center md:text-right">
            <p>Developed and Managed by N MEDIA</p>
            <p className="text-[10px] mt-1">* Disclaimer: Prices may vary depending on project requirements.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
