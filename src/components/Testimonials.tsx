"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul M.",
    business: "Urban Fitness",
    review: "N MEDIA completely transformed our online presence. We saw a 300% increase in lead generation within the first two months. Their ad strategy is unmatched.",
    rating: 5,
  },
  {
    name: "Priya S.",
    business: "Luxe Interiors",
    review: "The cinematic reels they produced for our portfolio were breathtaking. Not only does our feed look premium, but the engagement has skyrocketed.",
    rating: 5,
  },
  {
    name: "Vikram D.",
    business: "TechSolutions India",
    review: "Highly professional team. They don't just post content; they build a marketing engine. The ROI on our Google Ads has been phenomenal.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#050505]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client <span className="text-red-500">Success</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Don't just take our word for it. Here is what our partners have to say.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-card border-white/5 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-[30px]" />
                <CardContent className="p-8 relative z-10">
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 text-red-500 fill-red-500" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{t.review}"</p>
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <span className="text-white/50 text-sm">{t.business}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
