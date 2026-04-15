"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const galleryImages = [
  { src: "/Cultivated land(4).jpg", alt: "Farm aerial view", span: "md:col-span-2 md:row-span-2" },
  { src: "/Irrigation(1).jpg", alt: "Modern irrigation systems", span: "md:col-span-1 md:row-span-1" },
  { src: "/Cultivated land(5).jpg", alt: "Lush plantation rows", span: "md:col-span-1 md:row-span-2" },
  { src: "/Irrigation(2).jpg", alt: "Agricultural infrastructure", span: "md:col-span-1 md:row-span-1" },
  { src: "/tractor-operations.png", alt: "Precision tractor operations", span: "md:col-span-2 md:row-span-1" },
  { src: "/Cultivated land(6).jpg", alt: "Farm expansion project", span: "md:col-span-2 md:row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#f8f9f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
           <ScrollReveal direction="up">
             <span className="badge badge-green font-[family-name:var(--font-dm-sans)] mb-4">
               FARMS IN ACTION
             </span>
             <h2 className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-5xl text-gray-900 mb-6">
                Agricultural <span className="text-emerald-600">Excellence</span>
             </h2>
             <p className="font-[family-name:var(--font-dm-sans)] text-gray-600">
               Witness the scale and precision of Wayamba Corporation&apos;s managed plantations across the province.
             </p>
           </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
           {galleryImages.map((image, i) => (
              <ScrollReveal 
                 key={i}
                 direction="up"
                 delay={i * 0.1}
                 className={`relative rounded-3xl overflow-hidden shadow-lg group ${image.span} ${i === 0 || i >= 3 ? 'sm:col-span-2' : 'sm:col-span-1'}`}
              >
                 <Image 
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <p className="text-white font-bold tracking-widest uppercase text-sm">{image.alt}</p>
                 </div>
              </ScrollReveal>
           ))}
        </div>

      </div>
    </section>
  );
}
