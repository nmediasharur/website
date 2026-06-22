"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  businessName: z.string().min(2, "Business name is required."),
  phone: z.string().min(10, "Valid phone number is required."),
  email: z.string().email("Invalid email address."),
  service: z.string().min(2, "Service needed is required."),
  budget: z.string().min(1, "Budget is required."),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      phone: "",
      email: "",
      service: "",
      budget: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values);
    toast.success("Message sent successfully!", {
      description: "Our team will contact you within 24 hours.",
    });
    reset();
    setIsSubmitting(false);
  }

  return (
    <section id="contact" className="py-24 bg-[#050505] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 glow-text">Dominate?</span></h2>
              <p className="text-white/60 text-lg mb-8 max-w-md">
                Stop wasting money on marketing that doesn't convert. Let's build a system that scales your business.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Email Us</h4>
                  <p className="text-red-500">hello@nmedia.agency</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Call Us</h4>
                  <p className="text-red-500">+91 90424 10169</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Location</h4>
                  <p className="text-red-500">Harur</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl border border-white/10"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white/80">Name</Label>
                    <Input placeholder="John Doe" className="bg-black/50 border-white/10 text-white focus-visible:ring-red-500" {...register("name")} />
                    {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/80">Business Name</Label>
                    <Input placeholder="Acme Corp" className="bg-black/50 border-white/10 text-white focus-visible:ring-red-500" {...register("businessName")} />
                    {errors.businessName && <p className="text-red-400 text-sm">{errors.businessName.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-white/80">Email</Label>
                    <Input placeholder="john@example.com" type="email" className="bg-black/50 border-white/10 text-white focus-visible:ring-red-500" {...register("email")} />
                    {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/80">Phone Number</Label>
                    <Input placeholder="+91 98765 43210" className="bg-black/50 border-white/10 text-white focus-visible:ring-red-500" {...register("phone")} />
                    {errors.phone && <p className="text-red-400 text-sm">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-white/80">Service Needed</Label>
                  <Input placeholder="e.g. Paid Ads, SEO" className="bg-black/50 border-white/10 text-white focus-visible:ring-red-500" {...register("service")} />
                  {errors.service && <p className="text-red-400 text-sm">{errors.service.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label className="text-white/80">Estimated Budget</Label>
                  <Input placeholder="₹20,000 / month" className="bg-black/50 border-white/10 text-white focus-visible:ring-red-500" {...register("budget")} />
                  {errors.budget && <p className="text-red-400 text-sm">{errors.budget.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12 mt-4 transition-all hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Request..." : "Claim Your Strategy Session"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
