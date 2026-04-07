"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const crops = [
  { category: "Spices", name: "Premium Ginger", img: "/Ginger(1).jpg" },
  { category: "Spices", name: "Scotch Bonnet", img: "/scotch bonnet(2).jpg" },
  { category: "Fruits", name: "Sri Lankan Red Banana", img: "/red banana(3).jpg" },
  { category: "Fruits", name: "Passion Fruit", img: "/passion fruit(2).jpg" },
  { category: "Fruits", name: "Apple Guava", img: "/guava(4).jpg" },
  { category: "Fruits", name: "Watermelon", img: "/water melon(2).jpg" }
];

const livestock = [
  { name: "Poultry", img: "/poultry(3).jpg", icon: "🐓" },
  { name: "Dairy (Cows)", img: "/Dairy(1).jpg", icon: "🐄" },
  { name: "Goats", img: "/goat(1).jpg", icon: "🐐" }
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
           </div>
        </div>

        {/* Crops Section (Masonry-ish grid) */}
        <div className="mb-24">
           <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-3xl text-gray-900 border-b-2 border-emerald-500 inline-block pb-2 mb-10">
             Specialty Crops
           </h3>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {crops.map((crop, i) => (
               <ScrollReveal
                 key={crop.name}
                 direction="up"
                 delay={i * 0.1}
                 className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500"
               >
                 <Image 
                    src={crop.img}
                    alt={crop.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                 <div className="absolute inset-x-0 bottom-0 p-8">
                    <span className="text-emerald-400 font-bold text-xs uppercase tracking-[0.2em] block mb-2">
                      {crop.category}
                    </span>
                    <h4 className="font-[family-name:var(--font-playfair)] font-bold text-3xl text-white">
                      {crop.name}
                    </h4>
                 </div>
               </ScrollReveal>
             ))}
           </div>
        </div>

        {/* Livestock Section */}
        <div>
           <div className="text-left mb-12">
              <h3 className="font-[family-name:var(--font-dm-sans)] font-bold text-3xl text-gray-900 border-b-2 border-emerald-500 inline-block pb-2">
                Integrated Livestock
              </h3>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {livestock.map((item, i) => (
                 <ScrollReveal
                    key={item.name}
                    direction="up"
                    delay={i * 0.15}
                    className="group relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-xl"
                 >
                    <Image 
                       src={item.img}
                       alt={item.name}
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                       <span className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</span>
                       <h4 className="font-[family-name:var(--font-playfair)] font-bold text-white text-3xl">
                          {item.name}
                       </h4>
                    </div>
                 </ScrollReveal>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
