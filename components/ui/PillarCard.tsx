"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PillarCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function PillarCard({
  number,
  title,
  description,
  icon: Icon,
  delay = 0,
}: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative glass-card rounded-lg p-8 cursor-pointer transition-all duration-500"
      style={{
        borderColor: "var(--border)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(143, 175, 107, 0.4)";
        el.style.boxShadow = "0 8px 40px rgba(143, 175, 107, 0.08)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Number */}
      <span
        className="block font-[family-name:var(--font-playfair)] italic text-5xl mb-6"
        style={{ color: "var(--accent-gold)" }}
      >
        {number}
      </span>

      {/* Icon */}
      <div
        className="mb-5 w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: "rgba(143, 175, 107, 0.1)" }}
      >
        <Icon size={22} style={{ color: "var(--accent-primary)" }} />
      </div>

      {/* Title */}
      <h3
        className="font-[family-name:var(--font-dm-sans)] text-lg font-semibold mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>

      {/* Bottom animated line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full"
        style={{ background: "var(--accent-primary)" }}
      />
    </motion.div>
  );
}
