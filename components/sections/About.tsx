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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Vision Block */}
          <div className="lg:col-span-5 h-full">
            <ScrollReveal direction="right" className="bg-emerald-50 rounded-[2rem] p-10 h-full flex flex-col justify-center relative overflow-hidden border border-emerald-100/50">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path></svg>
               </div>
               
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-600 text-white mb-8 shadow-lg shadow-emerald-200">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
               </div>
               
               <h3 className="font-[family-name:var(--font-playfair)] font-bold text-3xl text-gray-900 mb-6 relative z-10">
                  Our Vision
               </h3>
               <p className="font-[family-name:var(--font-dm-sans)] text-gray-700 text-lg leading-relaxed relative z-10 italic">
                  "To redefine the landscape of Sri Lankan agriculture by becoming the premier model for agri-entrepreneurship, where unutilized land is transformed into high-performing commercial ecosystems that drive national economic growth."
               </p>
            </ScrollReveal>
          </div>

          {/* Mission Block */}
          <div className="lg:col-span-7 h-full">
            <ScrollReveal direction="left" className="bg-white rounded-[2rem] p-10 h-full flex flex-col justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900 text-white mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/><path d="M2 12h20"/><path d="m5 7 3 5-3 5"/><path d="m19 7-3 5 3 5"/></svg>
               </div>

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
                     Our focus remains on optimizing the entire value chain—from managing a diverse portfolio of high-value crops and livestock to ensuring operational integrity through transparent yield estimations and performance-based incentives that align our growth with the success of our partners.
                  </p>
               </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
