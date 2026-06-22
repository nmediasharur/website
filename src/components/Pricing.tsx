"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Perfect for new brands looking to establish a digital presence.",
    features: [
      "12 Social Media Posts",
      "Basic Profile Optimization",
      "Monthly Analytics Report",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹9,999",
    description: "For aggressive brands ready to dominate their local market.",
    features: [
      "20 Social Media Posts",
      "4 High-Quality Reels",
      "Paid Ads Management (Up to ₹20k spend)",
      "Bi-weekly Strategy Calls",
      "Priority WhatsApp Support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Custom",
    description: "Full-scale marketing department built for enterprises.",
    features: [
      "Unlimited Content Production",
      "Cinematic Ad Creatives",
      "Multi-channel Ad Scaling",
      "Advanced SEO Strategies",
      "Dedicated Account Manager",
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Invest in <span className="text-red-500">Growth</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">Transparent pricing. No hidden fees. Just ROI-driven marketing systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className={`h-full relative ${plan.popular ? 'border-red-500 bg-black/80 shadow-[0_0_30px_rgba(255,0,0,0.15)]' : 'border-white/10 bg-black/40'} glass-card flex flex-col`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-white/60 h-10">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-white/50">/mo</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/80">
                        <Check className="h-5 w-5 text-red-500 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link 
                    href="#contact" 
                    className={cn(buttonVariants({}), `w-full ${plan.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`)}
                  >
                    Choose {plan.name}
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <p className="text-center text-white/40 mt-10 text-sm">
          * Disclaimer: Prices may vary depending on specific project requirements and ad spend limits.
        </p>
      </div>
    </section>
  );
}
