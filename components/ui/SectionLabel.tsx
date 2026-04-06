"use client";

import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-[11px] tracking-[0.25em] uppercase font-[family-name:var(--font-dm-sans)]",
        className
      )}
      style={{ color: "var(--accent-primary)" }}
    >
      {text}
    </span>
  );
}
