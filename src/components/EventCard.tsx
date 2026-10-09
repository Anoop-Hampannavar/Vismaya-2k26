'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { EventItem } from '@/lib/types';

// Theme color accents matching each poster placard
const dayThemes: Record<number, { ribbonBg: string; borderGlow: string; textAccent: string }> = {
  1: { ribbonBg: 'from-[#B91C1C] via-[#DC2626] to-[#991B1B]', borderGlow: 'rgba(220,38,38,0.4)', textAccent: '#991B1B' },
  2: { ribbonBg: 'from-[#1E40AF] via-[#2563EB] to-[#1D4ED8]', borderGlow: 'rgba(37,99,235,0.4)', textAccent: '#1D4ED8' },
  3: { ribbonBg: 'from-[#166534] via-[#15803D] to-[#14532D]', borderGlow: 'rgba(21,128,61,0.4)', textAccent: '#15803D' },
  4: { ribbonBg: 'from-[#5B21B6] via-[#7C3AED] to-[#4C1D95]', borderGlow: 'rgba(124,58,237,0.4)', textAccent: '#6D28D9' },
  5: { ribbonBg: 'from-[#B91C1C] via-[#E11D48] to-[#991B1B]', borderGlow: 'rgba(225,29,72,0.4)', textAccent: '#B91C1C' },
};

export default function EventCard({ item }: { item: EventItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = dayThemes[item.day] || dayThemes[1];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={() => setIsOpen(!isOpen)}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`relative overflow-hidden rounded-[2rem] mb-7 cursor-pointer transition-all duration-500 shadow-2xl border-2 ${
        isOpen
          ? 'border-[#FFB703] shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-[1.01]'
          : 'border-[#4a2e12]/40 hover:border-[#FFB703]/60 shadow-[0_15px_35px_rgba(0,0,0,0.6)]'
      }`}
    >
      {/* Background Parchment / Paper Feel */}
      <div 
        className="absolute inset-0 z-0 bg-[#FFFBEB]"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #FFFDF5 60%, #F5E6CA 100%)',
          boxShadow: 'inset 0 0 35px rgba(120, 53, 15, 0.25)'
        }}
      />

      {/* Expanded Background Photo with Dark Tint */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.18 }} exit={{ opacity: 0 }} className="absolute inset-0 z-0 pointer-events-none">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 p-6 md:p-8" style={{ transform: 'translateZ(40px)' }}>
        {/* Top Poster Ribbon */}
        <div className="flex justify-between items-start mb-4">
          <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${theme.ribbonBg} shadow-md`}>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-wider text-white">
              {item.date}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black uppercase text-[#854D0E] tracking-widest bg-[#FEF08A] px-2.5 py-0.5 rounded-full border border-[#CA8A04]/40">
              DAY {item.day}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              className="w-7 h-7 rounded-full bg-[#78350F]/10 flex items-center justify-center text-[#78350F] font-bold text-xs"
            >
              ▼
            </motion.div>
          </div>
        </div>

        {/* Event Title Matching Poster Typography */}
        <h3 className="text-2xl md:text-3xl font-black text-[#1C1917] tracking-tight uppercase leading-none italic drop-shadow-sm mb-2">
          {item.title}
        </h3>

        {/* Sub-Theme & Venue */}
        <p className="text-xs md:text-sm font-extrabold uppercase tracking-wide" style={{ color: theme.textAccent }}>
          {item.theme}
        </p>
        {item.venue && (
          <p className="text-[10px] md:text-xs font-black uppercase tracking-wider text-[#78350F] mt-1">
            📍 {item.venue}
          </p>
        )}

        {/* Collapsible Details */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-5 pt-5 border-t-2 border-[#78350F]/20"
            >
              <p className="text-sm md:text-base text-[#292524] leading-relaxed font-bold mb-6">
                {item.details}
              </p>

              {item.regLink && (
                <motion.a
                  href={item.regLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center w-full py-3.5 bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#D90429] text-black font-black uppercase tracking-[0.2em] text-xs rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Register Now ➔
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
