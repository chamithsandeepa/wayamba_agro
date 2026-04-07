"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#pillars" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="sticky top-0 z-[1000] transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "#FFFFFF",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); handleNavClick("#"); }}>
              <Image
                src="/logo.png"
                alt="Wayamba Corporation Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span
                  className="font-[family-name:var(--font-playfair)] font-bold text-xl leading-tight"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Wayamba
                </span>
                <span
                  className="font-[family-name:var(--font-dm-sans)] text-[9px] tracking-[0.2em] uppercase text-emerald-800"
                >
                  Corporation (PVT) LTD
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="font-[family-name:var(--font-dm-sans)] text-sm font-medium transition-colors duration-300 bg-transparent border-none cursor-pointer relative group"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                  />
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold px-6 py-2.5 rounded-full cursor-pointer transition-all duration-300 border-none text-white"
                style={{ backgroundColor: "var(--accent-primary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-primary-dark)";
                  e.currentTarget.style.boxShadow = "var(--shadow-green)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent-primary)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Get Quote
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center bg-transparent border-none cursor-pointer z-[1001]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] rounded-full"
                style={{ backgroundColor: "var(--text-primary)" }}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-[2px] rounded-full"
                style={{ backgroundColor: "var(--text-primary)" }}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-[2px] rounded-full"
                style={{ backgroundColor: "var(--text-primary)" }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t"
              style={{ backgroundColor: "#FFFFFF", borderColor: "var(--border)" }}
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => handleNavClick(link.href)}
                    className="font-[family-name:var(--font-dm-sans)] text-base font-medium text-left bg-transparent border-none cursor-pointer"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="font-[family-name:var(--font-dm-sans)] text-sm font-semibold px-6 py-3 rounded-full text-white border-none cursor-pointer w-fit mt-2"
                  style={{ backgroundColor: "var(--accent-primary)" }}
                >
                  Get Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
