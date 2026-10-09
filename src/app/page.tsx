'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { schedule, eventCoordinators, staffCoordinators, leadership } from '@/data/events';
import EventCard from '@/components/EventCard';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen text-white bg-[#060D1F] overflow-x-hidden selection:bg-[#FFB703] selection:text-black">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#D90429] z-50 origin-left shadow-[0_0_12px_#FFB703]"
            style={{ scaleX }}
          />

          {/* Ambient Lighting & Poster Background Feel */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-gradient-to-b from-[#1E3A8A]/30 via-[#B45309]/15 to-transparent blur-3xl" />
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center grayscale mix-blend-overlay"
              style={{ backgroundImage: "url('/college.jpg')" }}
            />
          </div>

          <div className="relative z-10">
            {/* Poster Header Section */}
            <header className="pt-20 pb-10 px-4 text-center max-w-4xl mx-auto space-y-4">
              {/* Trust & College Subtitle */}
              <div className="space-y-1">
                <p className="text-[#FDE047] text-xs md:text-sm uppercase tracking-[0.35em] font-black drop-shadow">
                  ✦ S.J.P.N. Trust's ✦
                </p>
                <h2 className="text-sm md:text-xl text-white font-extrabold uppercase tracking-widest drop-shadow-md">
                  HIRASUGAR INSTITUTE OF TECHNOLOGY, NIDASOSHI
                </h2>
              </div>

              {/* Decorative Poster Ribbon */}
              <div className="py-2">
                <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                  <span className="text-white block drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">HSIT</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD000] via-[#FF9E00] to-[#FF5400] drop-shadow-[0_0_35px_rgba(255,183,3,0.6)]">
                    SAMBHRAMA
                  </span>
                </h1>

                {/* Vismaya Fun Week 2K26 Banner */}
                <div className="mt-3 inline-block relative">
                  <div className="bg-white text-black px-6 py-1.5 md:py-2 rounded-xl shadow-2xl transform -rotate-1 border-2 border-black">
                    <span className="text-2xl md:text-4xl font-black italic tracking-tight uppercase">
                      VISMAYA <span className="text-[#DC2626]">FUN WEEK</span> 2K26
                    </span>
                  </div>
                </div>
              </div>

              {/* Date Badge */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-[11px] md:text-xs font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full shadow-lg border border-red-400">
                  📅 12th October – 16th October 2K26
                </span>
              </div>

              {/* Taglines */}
              <div className="space-y-1 pt-1">
                <p className="text-[#FDE047] text-xs md:text-sm font-black tracking-wider uppercase">
                  ALL STAFF AND STUDENTS ARE WELCOME
                </p>
                <p className="text-amber-100/90 text-sm md:text-base italic font-serif">
                  "Games • Food • Culture • Fun • Friends • Memories"
                </p>
                <p className="text-amber-300 font-extrabold text-xs md:text-sm tracking-widest uppercase italic">
                  — Let's Celebrate Together —
                </p>
              </div>
            </header>

            {/* Event Parchment Placards */}
            <main className="max-w-xl mx-auto px-4 pb-20">
              <div className="text-center mb-8">
                <h3 className="text-xs font-black text-[#FFB703] uppercase tracking-[0.4em] inline-block border-b-2 border-[#FFB703] pb-1">
                  Schedule of Events
                </h3>
              </div>
              {schedule.map((day) => (
                <EventCard key={day.day} item={day} />
              ))}
            </main>

            {/* Coordinators Section */}
            <section className="max-w-2xl mx-auto px-4 pb-20 space-y-12">
              {/* Faculty Coordinators */}
              <div className="bg-[#0b1329]/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                <h2 className="text-[#DC2626] text-sm md:text-base font-black uppercase tracking-[0.3em] mb-6 text-center border-b border-white/10 pb-3">
                  Faculty Coordinators
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {staffCoordinators.map((name, i) => (
                    <div
                      key={i}
                      className="bg-white/[0.04] p-3 rounded-xl border border-white/5 text-xs text-slate-200 font-bold text-center italic"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Student Coordinators by Event */}
              <div className="bg-[#0b1329]/80 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                <h2 className="text-[#FFB703] text-sm md:text-base font-black uppercase tracking-[0.3em] mb-6 text-center border-b border-white/10 pb-3">
                  Student Coordinators by Event
                </h2>
                <div className="space-y-5">
                  {eventCoordinators.map((group, idx) => (
                    <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                      <h3 className="text-[#FFB703] text-xs font-black uppercase tracking-wider mb-3">
                        {group.event}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {group.contacts.map((contact, cIdx) => (
                          <div
                            key={cIdx}
                            className="flex items-center justify-between bg-black/40 px-3 py-2 rounded-xl border border-white/5 text-[11px]"
                          >
                            <span className="text-slate-200 font-medium">{contact.name}</span>
                            {contact.phone && (
                              <a
                                href={`tel:${contact.phone}`}
                                className="text-[#FB8500] font-mono hover:underline font-bold"
                              >
                                📞 {contact.phone}
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Poster Signatories (Exact Layout from Poster Bottom) */}
              <div className="bg-[#050A18] rounded-3xl p-6 md:p-8 border-2 border-[#FFB703]/30 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center items-start">
                  {/* Conveners */}
                  <div className="space-y-1">
                    <div className="w-8 h-[2px] bg-[#DC2626] mx-auto mb-2" />
                    <p className="text-sm font-black text-white italic">{leadership.conveners}</p>
                    <p className="text-[10px] text-amber-200/80 font-bold uppercase tracking-wider">
                      {leadership.convenersTitle}
                    </p>
                  </div>

                  {/* Chief Convener */}
                  <div className="space-y-1 border-t md:border-t-0 md:border-x border-white/10 pt-4 md:pt-0 md:px-4">
                    <div className="w-8 h-[2px] bg-[#FFB703] mx-auto mb-2" />
                    <p className="text-sm font-black text-white italic">{leadership.chiefConvener}</p>
                    <p className="text-[10px] text-amber-200/80 font-bold uppercase tracking-wider">
                      {leadership.chiefConvenerTitle}
                    </p>
                  </div>

                  {/* Principal */}
                  <div className="space-y-1 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                    <div className="w-8 h-[2px] bg-[#DC2626] mx-auto mb-2" />
                    <p className="text-sm font-black text-white italic">{leadership.principal}</p>
                    <p className="text-[10px] text-amber-200/80 font-bold uppercase tracking-wider">
                      {leadership.principalTitle}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="pb-20 text-center border-t border-white/10 pt-8">
              <p className="text-slate-400 text-[10px] uppercase tracking-[0.5em] font-black">
                HSIT SAMBHRAMA VISMAYA • 2K26
              </p>
            </footer>
          </div>
        </motion.div>
      )}
    </div>
  );
}
