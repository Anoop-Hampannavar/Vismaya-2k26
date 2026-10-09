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
    <div className="relative min-h-screen text-white bg-[#020617] overflow-x-hidden">
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          {/* Top Scroll Indicator */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#D90429] z-50 origin-left" 
            style={{ scaleX }} 
          />

          {/* College Background Watermark */}
          <div 
            className="fixed inset-0 z-0 opacity-15 pointer-events-none grayscale brightness-50" 
            style={{ backgroundImage: "url('/college.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} 
          />

          <div className="relative z-10 font-sans">
            {/* Header */}
            <div className="pt-24 pb-12 px-6 text-center space-y-3">
              <p className="text-slate-400 text-[10px] md:text-xs uppercase tracking-[0.3em] font-semibold">
                S.J.P.N. Trust's
              </p>
              <h2 className="text-xs md:text-sm text-slate-300 font-extrabold tracking-widest uppercase">
                Hirasugar Institute of Technology, Nidasoshi
              </h2>

              <div className="pt-2">
                <span className="inline-block bg-[#D90429] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1 rounded-full mb-3 shadow-md">
                  12th October – 16th October 2K26
                </span>
                <h1 className="text-4xl md:text-7xl font-black italic tracking-tighter uppercase leading-[1.05] drop-shadow-[0_0_35px_rgba(255,183,3,0.35)]">
                  HSIT <span className="text-[#FFB703]">SAMBHRAMA</span>
                </h1>
                <h3 className="text-2xl md:text-4xl font-black italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#D90429] uppercase mt-1">
                  VISMAYA FUN WEEK 2K26
                </h3>
                <p className="text-amber-200 text-[10px] md:text-xs italic tracking-wider font-bold mt-2">
                  "Games • Food • Culture • Fun • Friends • Memories"
                </p>
                <p className="text-slate-400 text-[9px] uppercase tracking-[0.25em] font-bold mt-1">
                  All Staff and Students Are Welcome
                </p>
              </div>
            </div>
            
            {/* Schedule Cards */}
            <div className="max-w-md mx-auto px-6 pb-24">
              {schedule.map((day) => <EventCard key={day.day} item={day} />)}
            </div>

            {/* Coordinators & Contacts Section */}
            <div className="max-w-md mx-auto px-6 pb-20 space-y-16">
              <div>
                <h2 className="text-[#D90429] text-sm font-black uppercase tracking-[0.4em] mb-8 text-center border-b border-white/10 pb-4">
                  Faculty Coordinators
                </h2>
                <div className="space-y-3 px-2">
                  {staffCoordinators.map((name, i) => (
                    <div key={i} className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-xs text-slate-300 font-bold text-center italic">
                      {name}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-[#FFB703] text-sm font-black uppercase tracking-[0.4em] mb-8 text-center border-b border-white/10 pb-4">
                  Student Coordinators by Event
                </h2>
                <div className="space-y-6">
                  {eventCoordinators.map((group, idx) => (
                    <div key={idx} className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                      <h3 className="text-[#FFB703] text-xs font-bold uppercase tracking-wider mb-3">
                        {group.event}
                      </h3>
                      <div className="space-y-2">
                        {group.contacts.map((contact, cIdx) => (
                          <div 
                            key={cIdx} 
                            className="flex items-center justify-between bg-white/[0.03] px-3 py-2 rounded-xl border border-white/5 text-[11px]"
                          >
                            <span className="text-slate-200 font-medium">{contact.name}</span>
                            {contact.phone ? (
                              <a 
                                href={`tel:${contact.phone}`} 
                                className="text-[#FB8500] font-mono hover:underline font-bold"
                              >
                                📞 {contact.phone}
                              </a>
                            ) : contact.role ? (
                              <span className="text-slate-400 italic text-[10px]">{contact.role}</span>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership Signatories Footer */}
              <div className="pt-12 border-t border-white/15 space-y-8">
                <div className="text-center">
                  <div className="w-12 h-[2px] bg-[#D90429] mx-auto mb-2" />
                  <p className="text-sm font-black text-white italic">{leadership.conveners}</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                    {leadership.convenersTitle}
                  </p>
                </div>

                <div className="flex justify-between items-start px-2">
                  <div className="text-center w-1/2">
                    <div className="w-10 h-[2px] bg-[#FFB703] mx-auto mb-2" />
                    <p className="text-sm font-black text-white italic">{leadership.chiefConvener}</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                      {leadership.chiefConvenerTitle}
                    </p>
                  </div>

                  <div className="text-center w-1/2">
                    <div className="w-10 h-[2px] bg-[#D90429] mx-auto mb-2" />
                    <p className="text-sm font-black text-white italic">{leadership.principal}</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                      {leadership.principalTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <footer className="pb-24 text-center border-t border-white/5 pt-12">
              <p className="text-slate-500 text-[8px] uppercase tracking-[0.8em] font-bold opacity-30">
                HSIT SAMBHRAMA VISMAYA • 2K26
              </p>
            </footer>
          </div>
        </motion.div>
      )}
    </div>
  );
}