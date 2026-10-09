'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden opacity-25 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-[#D90429] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#FFB703] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-tight drop-shadow-[0_0_35px_rgba(255,183,3,0.3)]">
            HSIT <span className="text-[#FFB703]">SAMBHRAMA</span> 2K26
          </h1>
          <h2 className="text-xl md:text-3xl font-black italic tracking-wider text-[#FB8500] uppercase mt-1">
            VISMAYA FUN WEEK
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#D90429] to-transparent mt-4" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="space-y-1"
        >
          <p className="text-slate-400 text-[9px] uppercase tracking-[0.5em] font-bold">Architected By</p>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase italic">
            Anoop <span className="text-[#FFB703]">Hampannavar</span>
          </h2>
          <p className="text-[7px] text-[#D90429] font-bold tracking-[1em] uppercase opacity-80">SECRET_CIPHER • CSE</p>
        </motion.div>
      </div>

      <div className="absolute bottom-12 w-36 h-[2px] bg-white/10 overflow-hidden">
        <motion.div 
          initial={{ left: "-100%" }}
          animate={{ left: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute top-0 w-1/2 h-full bg-[#FFB703] shadow-[0_0_15px_#FFB703]"
        />
      </div>
    </motion.div>
  );
}