"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 60]);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 20}%`,
    duration: `${8 + Math.random() * 12}s`,
    delay: `${Math.random() * 8}s`,
    size: `${1.5 + Math.random() * 1.5}px`,
  }));

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Parallax background image */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="Lush green agricultural fields at sunrise"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={85}
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(15,26,10,0.85) 0%, rgba(15,26,10,0.65) 50%, rgba(15,26,10,0.80) 100%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="badge badge-green font-[family-name:var(--font-dm-sans)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                WAYAMBA CORPORATION (PVT) LTD
              </span>
            </motion.div>

            {/* Headline */}
            <div className="mt-8 mb-8">
              <h1 className="font-[family-name:var(--font-playfair)] font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white">
                <AnimatedText text="Professionalizing" delay={0.4} />
                <br />
                <span style={{ color: "var(--accent-primary)" }}>
                  <AnimatedText text="Agriculture." delay={0.8} />
                </span>
                <br />
                <span className="text-white/90">
                   <AnimatedText text="Maximizing Potential." delay={1.2} />
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              className="font-[family-name:var(--font-dm-sans)] text-base md:text-lg leading-relaxed max-w-[620px] mb-10"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              At Wayamba Corporation, we bridge the gap between land ownership and commercial success. We transform underutilized land into high-performing agricultural assets through precision management, modern infrastructure, and a commitment to agri-entrepreneurship.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.9 }}
              className="flex flex-wrap gap-4"
            >
              <button
                className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold px-8 py-3.5 rounded-full cursor-pointer transition-all duration-300 border-none text-white flex items-center gap-2"
                style={{ backgroundColor: "var(--accent-primary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-primary-dark)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-primary)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={() => {
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Discover Our Model
                <span>→</span>
              </button>
            </motion.div>
            
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs font-[family-name:var(--font-dm-sans)] font-bold tracking-widest uppercase text-white/50">Scroll</span>
        <ChevronDown size={24} className="scroll-indicator text-white/50" />
      </motion.div>
    </section>
  );
}
