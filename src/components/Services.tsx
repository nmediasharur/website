"use client";

import { motion } from "framer-motion";
import { 
  Megaphone, 
  Camera, 
  Target, 
  Palette, 
  Search, 
  Video 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Social Media Management",
    description: "End-to-end social media handling. We build communities, not just follower counts.",
    icon: <Megaphone className="h-10 w-10 text-red-500" />,
  },
  {
    title: "Instagram Reels Strategy",
    description: "Viral-engineered short-form content that captures attention and drives conversions.",
    icon: <Camera className="h-10 w-10 text-red-500" />,
  },
  {
    title: "Paid Ads",
    description: "Data-driven Meta and Google ad campaigns designed for maximum ROI and scale.",
    icon: <Target className="h-10 w-10 text-red-500" />,
  },
  {
    title: "Branding",
    description: "Crafting premium brand identities that command authority in your niche.",
    icon: <Palette className="h-10 w-10 text-red-500" />,
  },
  {
    title: "Eye catching poster",
    description: "Dominate search rankings and capture high-intent organic traffic sustainably.",
    icon: <Search className="h-10 w-10 text-red-500" />,
  },
  {
    title: "Content Production",
    description: "High-end cinematic video and photo production that elevates your brand perception.",
    icon: <Video className="h-10 w-10 text-red-500" />,
  },
];

export function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our <span className="text-red-500">Services</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">We don't do cookie-cutter. Every service is a weapon designed to dominate your market.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="glass-card h-full border-white/5 hover:border-red-500/50 transition-colors duration-300 group">
                <CardHeader>
                  <div className="mb-4 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/60 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
