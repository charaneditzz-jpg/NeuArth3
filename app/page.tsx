"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Explicitly enforce muted autoplay for mobile WebKit and Chrome Mobile
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.setAttribute("playsinline", "true");
      videoRef.current.setAttribute("webkit-playsinline", "true");
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay notice:", err?.message || err);
        });
      }
    }
  }, []);

  return (
    <div className="relative w-full h-[100dvh] min-h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between select-none">
      {/* 1. Full-Bleed Video Background (Hydra Style) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-architectural.jpg"
          preload="auto"
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/vertical-garden.mp4" type="video/mp4" />
          <source src="/videos/clean-energy.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Top Spacer for the Floating Header */}
      <div className="w-full pt-20 sm:pt-24 shrink-0" />

      {/* 2. Hero Centerpiece (Hydra Typography & Content) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto space-y-4 sm:space-y-6">
        {/* Subtle Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-medium uppercase tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Building Simulations • Green Architecture</span>
        </motion.div>

        {/* Main Headline (Hydra's exact format) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.12] sm:leading-[1.08]"
        >
          Sustainable Solutions <br />
          <span className="font-light italic text-emerald-200">for a Better Future</span>
        </motion.h1>

        {/* NeuArth Value Proposition Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xs sm:text-base md:text-lg text-neutral-200/90 leading-relaxed max-w-2xl mx-auto font-light px-2 sm:px-0"
        >
          We leverage advanced building simulations to optimize environmental performance. Our technical approach ensures every project meets rigorous sustainability standards through data-driven design.
        </motion.p>

        {/* Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto w-full"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-medium text-xs sm:text-sm transition-all shadow-2xl active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm border border-white/25 backdrop-blur-md transition-all shadow-lg active:scale-[0.98]"
          >
            <span>Explore Solutions</span>
          </Link>
        </motion.div>
      </div>

      {/* 3. Bottom Status Bar (Hydra Style) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 pb-4 sm:pb-6 pt-2 flex items-center justify-between text-[11px] sm:text-xs text-white/70 font-mono"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="truncate">HYDERABAD HQ • IGBC AP</span>
        </div>

        <Link
          href="/about"
          className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors group shrink-0"
        >
          <span className="tracking-wider uppercase">Mission & Vision</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <span>LEED GA • NIT GOLD MEDALIST</span>
        </div>
      </motion.div>
    </div>
  );
}
