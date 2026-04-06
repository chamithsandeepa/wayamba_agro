"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  overlay?: boolean;
  overlayOpacity?: number;
  className?: string;
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.3,
  overlay = true,
  overlayOpacity = 0.7,
  className,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ""}`}>
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={85}
        />
      </motion.div>
      {overlay && (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(14,15,12,0.3) 0%, rgba(14,15,12,${overlayOpacity}) 100%)`,
          }}
        />
      )}
    </div>
  );
}
