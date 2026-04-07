"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    title: "Strategic Management",
    desc: "We treat your land as a business, not just a farm."
  },
  {
    title: "Advanced Infrastructure",
    desc: "Professional-grade irrigation and soil preparation."
  },
  {
    title: "Market-Driven Selection",
    desc: "We cultivate crops with high market value and demand."
  },
  {
    title: "Scalable Solutions",
    desc: "From individual fields to large-scale operations."
  }
];

export default function WhyUs() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side text logic */}
            <div>
               <span className="font-[family-name:var(--font-dm-sans)] text-[#2d5a27] font-bold tracking-widest text-sm uppercase mb-3 block">
                 WHY PARTNER WITH WAYAMBA?
               </span>
               <h2 className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-gray-900 mb-10">
                 The Edge in <span style={{ color: "var(--accent-primary)" }} className="block mt-2">Agri-Business</span>
               </h2>

               <div className="space-y-6">
                 {reasons.map((reason, i) => (
                    <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.15 }}
                       className="flex items-start gap-4 p-4 rounded-2xl hover:bg-[#8cb369]/5 transition-colors border border-transparent hover:border-[#8cb369]/20"
                    >
                       <div className="w-10 h-10 rounded-full bg-[#8cb369]/10 text-[#2d5a27] flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                       </div>
                       <div>
                          <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-gray-900 text-lg mb-1">{reason.title}</h4>
                          <p className="font-[family-name:var(--font-dm-sans)] text-gray-600">{reason.desc}</p>
                       </div>
                    </motion.div>
                 ))}
               </div>
            </div>

            {/* Right side Images */}
            <div className="relative h-[600px] w-full hidden md:block">
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="absolute top-0 right-10 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl z-10"
               >
                 <Image src="/Irrigation(2).jpg" alt="Wayamba irrigation infrastructure" fill className="object-cover" />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: -40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-2xl z-20 border-8 border-white"
               >
                 <Image src="/Cultivated land(5).jpg" alt="Modern agricultural operations" fill className="object-cover" />
               </motion.div>
            </div>

         </div>
      </div>
    </section>
  );
}
