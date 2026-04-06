"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    num: "1",
    title: "Yield Estimation",
    desc: "We conduct a professional assessment of the expected harvest."
  },
  {
    num: "2",
    title: "Operational Management",
    desc: "We handle all land preparation, irrigation installation, and cultivation."
  },
  {
    num: "3",
    title: "Settlement",
    desc: "The landowner receives the harvest yield, while the company retains the Production Cost + Service Charge."
  },
  {
    num: "4",
    title: "Performance Incentive",
    desc: "To ensure our interests are aligned with yours, any yield produced above the initial estimation is retained by the company as a bonus for exceptional management."
  }
];

export default function Model() {
  return (
    <section className="relative py-24 bg-[#0F1A0A]">
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80')] bg-cover bg-center mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <span className="font-[family-name:var(--font-dm-sans)] text-emerald-400 font-bold tracking-widest text-sm uppercase mb-3 block">
             PROCESS
           </span>
           <h2 className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-white mb-6">
              The Managed <span className="text-emerald-400">Leasing Model</span>
           </h2>
           <p className="font-[family-name:var(--font-dm-sans)] text-emerald-50/70 text-lg">
             Our primary partnership model is built on transparency and performance, providing a seamless experience for landowners.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {steps.map((step, i) => (
              <ScrollReveal 
                 key={i}
                 direction="up"
                 delay={i * 0.15}
                 className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col"
              >
                 <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xl flex items-center justify-center mb-6">
                    {step.num}
                 </div>
                 <h4 className="font-[family-name:var(--font-playfair)] font-bold text-2xl text-white mb-4">
                    {step.title}
                 </h4>
                 <p className="font-[family-name:var(--font-dm-sans)] text-emerald-50/60 leading-relaxed text-sm mt-auto">
                    {step.desc}
                 </p>
              </ScrollReveal>
           ))}
        </div>

      </div>
    </section>
  );
}
