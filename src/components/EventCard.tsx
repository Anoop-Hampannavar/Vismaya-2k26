'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { EventItem } from '@/lib/types';

export default function EventCard({ item }: { item: EventItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", background: '#0a0f1e' }}
      className={`relative overflow-hidden rounded-[2.5rem] mb-6 cursor-pointer border transition-all duration-500 shadow-2xl ${
        isOpen ? 'border-[#FFB703]/70 shadow-[0_0_40px_rgba(255,183,3,0.3)]' : 'border-white/10 hover:border-[#FFB703]/30'
      }`}
    >
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.45 }} exit={{ opacity: 0 }} className="absolute inset-0 z-0">
            <motion.img 
              initial={{ scale: 1 }} animate={{ scale: 1.2 }} 
              transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
              src={item.img} alt={item.title} className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/80 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 p-7 md:p-8" style={{ transform: "translateZ(50px)" }}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 md:gap-6">
            <div className="relative">
              {!isOpen && (
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-[#FFB703] rounded-3xl blur-md"
                />
              )}
              <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-[#FFB703] via-[#FB8500] to-[#D90429] rounded-3xl p-3 min-w-[75px] md:min-w-[85px] shadow-2xl">
                <span className="text-[9px] text-black font-black uppercase">Day</span>
                <span className="text-3xl md:text-4xl font-black text-black leading-none">{item.day}</span>
              </div>
            </div>

            <div>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">{item.date}</p>
              <h3 className="font-bold text-xl md:text-2xl text-white tracking-tighter leading-none italic">{item.title}</h3>
              
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-[10px] md:text-xs text-[#FFB703] uppercase tracking-widest font-bold">{item.theme}</p>
                {item.venue && (
                  <p className="text-[8px] md:text-[9px] text-[#D90429] uppercase tracking-[0.2em] font-black italic">
                    📍 {item.venue}
                  </p>
                )}
              </div>
            </div>
          </div>

          <motion.div 
            animate={{ rotate: isOpen ? 180 : 0, y: isOpen ? 0 : [0, 5, 0] }}
            transition={{ y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } }}
            className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border ${
              isOpen ? 'bg-[#FFB703] border-[#FFB703]' : 'border-white/20 bg-white/5'
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "black" : "white"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm md:text-lg text-slate-100 leading-relaxed font-medium mb-8">
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
                  className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#D90429] text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-2xl shadow-[0_10px_30px_rgba(217,4,41,0.35)] transition-all"
                >
                  Register to Participate ➔
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}