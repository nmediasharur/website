"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const metrics = [
  { label: "Campaigns Completed", value: 150, suffix: "+" },
  { label: "Clients Served", value: 45, suffix: "+" },
  { label: "Reach Generated", value: 10, suffix: "M+" },
  { label: "Average ROI", value: 3.5, suffix: "x" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 mb-2">
      {count}{suffix}
    </div>
  );
}

export function PerformanceMetrics() {
  return (
    <section className="py-24 bg-black relative border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.05)_0,rgba(0,0,0,1)_100%)] pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="text-red-500 font-medium uppercase tracking-widest text-sm">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
