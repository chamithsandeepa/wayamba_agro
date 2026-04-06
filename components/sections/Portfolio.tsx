"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const crops = [
  { category: "Spices", name: "Premium Ginger", img: "https://images.unsplash.com/photo-1615486171448-4fd325409957?w=600&q=80" },
  { category: "Spices", name: "Scotch Bonnet", img: "https://images.unsplash.com/photo-1588047915570-388f61536b58?w=600&q=80" },
  { category: "Fruits", name: "Sri Lankan Red Banana", img: "https://images.unsplash.com/photo-1571141380069-422f28b40bb2?w=600&q=80" },
  { category: "Fruits", name: "Passion Fruit", img: "https://images.unsplash.com/photo-1601366533036-74fc2e1e3e7f?w=600&q=80" },
  { category: "Fruits", name: "Apple Guava", img: "https://images.unsplash.com/photo-1533005849890-449e782626e2?w=600&q=80" },
  { category: "Fruits", name: "Watermelon", img: "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=600&q=80" }
];

const livestock = [
  { name: "Poultry", icon: "🐓" },
  { name: "Dairy (Cows)", icon: "🐄" },
  { name: "Goats", icon: "🐐" }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div className="max-w-xl">
              <span className="badge badge-green font-[family-name:var(--font-dm-sans)] mb-4">
                CROP & LIVESTOCK PORTFOLIO
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                Cultivating Demand. <span className="text-emerald-500 block">Ensuring Quality.</span>
              </h2>
              <p className="font-[family-name:var(--font-dm-sans)] text-gray-600 text-lg">
                We focus on high-demand, high-yield commodities, utilizing advanced land preparation and professional irrigation systems to ensure commercial-grade results.
              </p>
           </div>
        </div>

        {/* Crops Section (Masonry-ish grid) */}
        <div className="mb-20">
           <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-2xl text-gray-900 border-b-2 border-emerald-500 inline-block pb-2 mb-8">
             Specialty Crops
           </h3>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {crops.map((crop, i) => (
               <ScrollReveal
                 key={crop.name}
                 direction="up"
                 delay={i * 0.1}
                 className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${i === 0 || i === 5 ? 'lg:col-span-2 aspect-video lg:aspect-auto' : 'aspect-square'}`}
               >
                 <Image 
                    src={crop.img}
                    alt={crop.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                 <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest block mb-1">
                      {crop.category}
                    </span>
                    <h4 className="font-[family-name:var(--font-playfair)] font-bold text-xl text-white">
                      {crop.name}
                    </h4>
                 </div>
               </ScrollReveal>
             ))}
           </div>
        </div>

        {/* Livestock Section */}
        <div>
           <div className="bg-emerald-50 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
              
              <div className="max-w-2xl mb-10 relative z-10">
                 <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-2xl text-emerald-900 mb-4">
                   Integrated Livestock
                 </h3>
                 <p className="text-emerald-800/80 font-[family-name:var(--font-dm-sans)]">
                   Our operations extend beyond the field to include managed livestock systems that provide diversified revenue and sustainable farm cycles:
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                 {livestock.map((item, i) => (
                    <motion.div
                       key={item.name}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.15 }}
                       className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform"
                    >
                       <span className="text-5xl mb-4 p-4 bg-emerald-50 rounded-full">{item.icon}</span>
                       <h4 className="font-[family-name:var(--font-dm-sans)] font-bold text-gray-900 text-lg">
                          {item.name}
                       </h4>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
