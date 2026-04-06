"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const pillars = [
  {
    num: "01",
    title: "Managed Cultivation Services",
    description: "We transform barren or uncultivated fields into productive assets. Our team manages the entire agricultural cycle for a professional service fee plus costs, turning idle land into a managed business venture.",
  },
  {
    num: "02",
    title: "Strategic Land Leasing",
    description: "We provide the foundation for agri-entrepreneurship. Aspiring growers can rent our prepared, fertile lands to launch their own cultivations, supported by our existing infrastructure and irrigation systems.",
  },
  {
    num: "03",
    title: "Collaborative Sharecropping",
    description: "We believe in shared success. Through our sharecropping model, we partner with landowners to co-manage the cultivation process, sharing both the operational responsibilities and the final harvest rewards.",
  }
];

export default function Pillars() {
  return (
    <section id="pillars" className="relative py-24 bg-[#F0F5EC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-emerald-200/50 pb-8 gap-6">
           <div className="max-w-2xl">
             <span className="font-[family-name:var(--font-dm-sans)] text-emerald-600 font-bold tracking-widest text-sm uppercase mb-3 block">
               COOPERATION
             </span>
             <h2 className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-gray-900">
                Our Three <span className="text-emerald-600">Core Pillars</span>
             </h2>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {pillars.map((pillar, i) => (
              <ScrollReveal
                 key={i}
                 direction="up"
                 delay={i * 0.15}
                 className="bg-white rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group"
              >
                 {/* Decorative background number */}
                 <span className="absolute -right-4 -bottom-8 font-[family-name:var(--font-playfair)] text-9xl font-bold text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                    {pillar.num}
                 </span>
                 
                 <div className="mb-8 relative z-10">
                    <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 font-bold rounded-full text-sm mb-6">
                       Model {pillar.num}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] font-bold text-2xl text-gray-900 mb-4 min-h-[64px]">
                       {pillar.title}
                    </h3>
                    <p className="font-[family-name:var(--font-dm-sans)] text-gray-600 leading-relaxed text-[15px]">
                       {pillar.description}
                    </p>
                 </div>
                 
                 {/* Bottom Accent line */}
                 <div className="absolute bottom-0 left-0 h-1.5 bg-emerald-500 w-0 group-hover:w-full transition-all duration-500 ease-out z-20" />
              </ScrollReveal>
           ))}
        </div>

      </div>
    </section>
  );
}
