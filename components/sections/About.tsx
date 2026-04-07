"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <ScrollReveal direction="up">
              <span className="badge badge-green font-[family-name:var(--font-dm-sans)] mb-4">
                OUR VISION & MISSION
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                 Redefining the landscape of Sri Lankan <span className="text-emerald-600">Agriculture</span>
              </h2>
           </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Staggered Visual Collage (Left side) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative h-[600px]">
             <ScrollReveal direction="right" className="relative h-[80%] rounded-[2rem] overflow-hidden shadow-2xl mt-8">
                <Image 
                  src="/Cultivated land(2).jpg" 
                  alt="Wayamba farm expansion" 
                  fill 
                  className="object-cover"
                />
             </ScrollReveal>
             <ScrollReveal direction="right" delay={0.2} className="relative h-[80%] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/Cultivated land(3).jpg" 
                  alt="Wayamba plantation landscape" 
                  fill 
                  className="object-cover"
                />
             </ScrollReveal>
             
             {/* Circular badge */}
             <motion.div 
               initial={{ scale: 0, rotate: -20 }}
               whileInView={{ scale: 1, rotate: 0 }}
               viewport={{ once: true }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-emerald-600 text-white flex flex-col items-center justify-center text-center p-4 border-8 border-white shadow-xl z-10"
             >
                <span className="font-bold text-2xl">100%</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">Sri Lankan Owned</span>
             </motion.div>
          </div>

          {/* Text blocks (Right side) */}
          <div className="lg:col-span-6 space-y-10">
            {/* Vision Block */}
            <ScrollReveal direction="left" className="bg-emerald-50/50 rounded-[2rem] p-10 relative overflow-hidden border border-emerald-100/50">
               <h3 className="font-[family-name:var(--font-playfair)] font-bold text-3xl text-gray-900 mb-4">
                  Our Vision
               </h3>
               <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 text-lg leading-relaxed italic">
                  &quot;To redefine the landscape of Sri Lankan agriculture by becoming the premier model for agri-entrepreneurship, where unutilized land is transformed into high-performing commercial ecosystems that drive national economic growth.&quot;
               </p>
            </ScrollReveal>

            {/* Mission Block */}
            <ScrollReveal direction="left" delay={0.2} className="p-2">
               <h3 className="font-[family-name:var(--font-playfair)] font-bold text-3xl text-gray-900 mb-6">
                  Our Mission
               </h3>
               <div className="font-[family-name:var(--font-dm-sans)] text-gray-600 space-y-4 leading-relaxed">
                  <p>
                     Wayamba Corporation (PVT) LTD is dedicated to professionalizing the agricultural sector by transforming unutilized land into high-performing commercial assets through strategic agri-business practices.
                  </p>
                  <p>
                     By offering both managed cultivation services for landowners and strategic land leasing for aspiring growers, we empower our partners to treat agricultural property as a profitable enterprise.
                  </p>
                  <p>
                     Our focus remains on optimizing the entire value chain—from managing a diverse portfolio of high-value crops and livestock...
                  </p>
               </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
