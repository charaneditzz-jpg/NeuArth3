"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative w-full h-screen min-h-[640px] max-h-screen overflow-hidden flex flex-col justify-between select-none">
      {/* 1. Full-Bleed Video Background (Hydra Style) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/vertical-garden.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      </div>

      {/* Top Spacer for the Floating Header */}
      <div className="w-full pt-24" />

      {/* 2. Hero Centerpiece (Hydra Typography & Content) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto space-y-6">
        {/* Subtle Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium uppercase tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Building Simulations • Green Architecture</span>
        </motion.div>

        {/* Main Headline (Hydra's exact format) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.08]"
        >
          Sustainable Solutions <br />
          <span className="font-light italic text-emerald-200">for a Better Future</span>
        </motion.h1>

        {/* NeuArth Value Proposition Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-base sm:text-lg md:text-xl text-neutral-200/90 leading-relaxed max-w-2xl mx-auto font-light"
        >
          We leverage advanced building simulations to optimize environmental performance. Our technical approach ensures every project meets rigorous sustainability standards through data-driven design.
        </motion.p>

        {/* Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-medium text-sm transition-all shadow-2xl"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/25 backdrop-blur-md transition-all shadow-lg"
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
        className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 pb-6 pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70 font-mono"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>HYDERABAD HQ • IGBC AP • LEED GA</span>
        </div>

        <Link
          href="/about"
          className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors group"
        >
          <span className="text-[11px] tracking-wider uppercase">Discover Company & Mission</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </Link>

        <div className="hidden md:flex items-center gap-2">
          <span>NIT GOLD MEDALIST LEADERSHIP</span>
        </div>
      </motion.div>
    </div>
  );
}
