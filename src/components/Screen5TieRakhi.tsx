import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KeepsakeConfig } from '../data/config';
import { Heart, Sparkles, ArrowRight, Check, Ribbon } from 'lucide-react';
import festiveBgImg from '../assets/images/festive_celebration_bg_1787853512121.jpg';

interface Screen5Props {
  config: KeepsakeConfig;
  onNext: () => void;
}

export const Screen5TieRakhi: React.FC<Screen5Props> = ({ config, onNext }) => {
  const [isTied, setIsTied] = useState(false);
  const [isTying, setIsTying] = useState(false);
  const [knotTightened, setKnotTightened] = useState(false);

  const handleTieRakhi = () => {
    if (isTied || isTying) return;
    setIsTying(true);

    setTimeout(() => {
      setIsTying(false);
      setIsTied(true);
    }, 1400);
  };

  const handleTightenKnot = () => {
    setKnotTightened(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-lg mx-auto my-4 px-4 text-center"
    >
      {/* Title Header */}
      <div className="space-y-2 mb-4">
        <span className="text-xs font-serif-display uppercase tracking-widest text-[#b85c38] px-3 py-1 bg-[#ede3d1] rounded-full border border-[#d8c3a5]">
          Chapter III • The Sacred Thread
        </span>
        <h2 className="font-serif-display text-2xl sm:text-3xl text-[#3d261a]">
          {config.tyingTitle}
        </h2>
        <p className="text-xs font-body italic text-[#8a684b]">
          Tie the sacred red & gold thread of lifelong love and protection
        </p>
      </div>

      {/* Celebration Atmosphere Visual Container */}
      <div className="relative my-3 p-2.5 sm:p-3 rounded-2xl bg-[#ebdcc4] border-4 border-[#c5a880] vintage-card-shadow max-w-[390px] mx-auto overflow-hidden">
        
        {/* Festive Celebration Scene */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#c2aa88] bg-[#1a0e08] shadow-inner flex items-center justify-center">
          
          {/* Background Celebration Image - Softly blurs when Rakhi is tied */}
          <motion.img
            src={festiveBgImg}
            alt="Festive celebration background"
            animate={
              isTied || isTying
                ? { filter: 'blur(14px) brightness(0.42)', scale: 1.08 }
                : { filter: 'blur(0px) brightness(0.96)', scale: 1 }
            }
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Warm Vignette Gradient */}
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none" />

          {/* Pre-Tying Prompt Indicator */}
          {!isTied && !isTying && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-10 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xs border border-white/20 text-[#fdf9ee] text-xs font-serif-display tracking-wide shadow-lg flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#ffb703] animate-pulse" />
              <span>Tap below to tie the Rakhi</span>
            </motion.div>
          )}

          {/* Tying in Progress - Thread weaving in */}
          {isTying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-20 flex flex-col items-center justify-center w-full px-6"
            >
              {/* Expanding Golden Light Silk Cord */}
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="h-1 bg-gradient-to-r from-transparent via-[#ffb703] to-transparent rounded-full shadow-[0_0_20px_#ffb703]"
              />
              <motion.div
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 0.9 }}
                className="mt-3 text-[#ffb703] flex items-center gap-1.5 text-xs font-serif-display tracking-widest uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Weaving sacred silk thread…</span>
              </motion.div>
            </motion.div>
          )}

          {/* Visual Rakhi Artwork - Elegantly floating & tied in front of blurred background */}
          <AnimatePresence>
            {isTied && (
              <motion.div
                initial={{ opacity: 0, scale: 0.65 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 w-full h-full flex flex-col items-center justify-center p-2"
              >
                {/* Floating Divine Aura Glow */}
                <motion.div
                  animate={{
                    scale: knotTightened ? [1, 1.15, 1] : [1, 1.06, 1],
                    opacity: knotTightened ? [0.6, 0.9, 0.6] : [0.4, 0.7, 0.4],
                  }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  className="absolute w-44 h-44 rounded-full bg-[radial-gradient(circle,_rgba(255,183,3,0.55)_0%,_rgba(230,57,70,0.35)_45%,_transparent_75%)] blur-md pointer-events-none"
                />

                {/* The Artistic Sacred Rakhi Structure */}
                <div className="relative w-full flex items-center justify-center">
                  
                  {/* Left Silk Thread Cord */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: knotTightened ? '40%' : '44%' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="h-1 sm:h-1.5 bg-gradient-to-l from-[#d90429] via-[#ffb703] to-transparent rounded-full shadow-[0_0_8px_#d90429] relative flex items-center justify-start"
                  >
                    {/* Golden Bead & Silk Tassel */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffb703] border border-[#fff3b0] shadow-sm ml-2" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d90429] ml-1 shadow-xs" />
                  </motion.div>

                  {/* Center Ornate Visual Mandala Medallion (Pure Vector Artwork) */}
                  <motion.div
                    animate={
                      knotTightened
                        ? { scale: [1, 1.12, 1], rotate: [0, 5, -5, 0] }
                        : { scale: [1, 1.03, 1] }
                    }
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="relative z-10 mx-1 flex items-center justify-center"
                  >
                    {/* Outer Radiating Golden Sunburst Petals */}
                    <svg className="w-28 h-28 sm:w-32 sm:h-32 filter drop-shadow-[0_0_12px_rgba(255,183,3,0.75)]" viewBox="0 0 100 100">
                      <defs>
                        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fff275" />
                          <stop offset="50%" stopColor="#ffb703" />
                          <stop offset="100%" stopColor="#d48b00" />
                        </linearGradient>
                        <linearGradient id="crimsonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ff4d6d" />
                          <stop offset="50%" stopColor="#c9184a" />
                          <stop offset="100%" stopColor="#800f2f" />
                        </linearGradient>
                        <radialGradient id="rubyGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#ff758f" />
                          <stop offset="60%" stopColor="#c9184a" />
                          <stop offset="100%" stopColor="#590d22" />
                        </radialGradient>
                      </defs>

                      {/* 12 Outer Golden Petals */}
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                        <g key={deg} transform={`rotate(${deg} 50 50)`}>
                          <path
                            d="M50 8 C53 20, 55 25, 50 34 C45 25, 47 20, 50 8 Z"
                            fill="url(#goldGrad)"
                            stroke="#8f5b00"
                            strokeWidth="0.5"
                          />
                          <circle cx="50" cy="12" r="1.5" fill="#fff" opacity="0.9" />
                        </g>
                      ))}

                      {/* Middle Crimson Floral Ring */}
                      <circle cx="50" cy="50" r="23" fill="url(#crimsonGrad)" stroke="#ffb703" strokeWidth="1.5" />

                      {/* Inner Golden Filigree Ring */}
                      <circle cx="50" cy="50" r="16" fill="none" stroke="url(#goldGrad)" strokeWidth="1.8" strokeDasharray="3, 2" />

                      {/* Center Ruby Gemstone */}
                      <circle cx="50" cy="50" r="12" fill="url(#rubyGlow)" stroke="#fff" strokeWidth="1" />
                      
                      {/* Sacred Center Star / Sparkle Highlight */}
                      <path
                        d="M50 42 L52 48 L58 50 L52 52 L50 58 L48 52 L42 50 L48 48 Z"
                        fill="#ffffff"
                        opacity="0.95"
                      />
                    </svg>
                  </motion.div>

                  {/* Right Silk Thread Cord */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: knotTightened ? '40%' : '44%' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="h-1 sm:h-1.5 bg-gradient-to-r from-[#d90429] via-[#ffb703] to-transparent rounded-full shadow-[0_0_8px_#d90429] relative flex items-center justify-end"
                  >
                    {/* Golden Bead & Silk Tassel */}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#d90429] mr-1 shadow-xs" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffb703] border border-[#fff3b0] shadow-sm mr-2" />
                  </motion.div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Status Message & Action Controls */}
        <div className="p-3 bg-[#fdf9f0] rounded-xl border border-[#d8c3a5] mt-2.5 space-y-2">
          {!isTied ? (
            <p className="text-xs font-serif-display text-[#582a18]">
              Ready for sacred ritual • Tap below to tie the Rakhi
            </p>
          ) : (
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-[#b85c38] font-serif-display text-sm font-bold">
                <Sparkles className="w-4 h-4 text-[#ffb703]" />
                <span>{config.tyingSuccessTitle}</span>
                <Heart className="w-4 h-4 fill-[#b85c38] text-[#b85c38]" />
              </div>
              <p className="font-handwriting text-xl sm:text-2xl text-[#581818]">
                "{config.tyingSuccessSubtitle}"
              </p>
            </div>
          )}

          {/* Tighten Silk Knot Interactive Button */}
          {isTied && (
            <div className="pt-1">
              {!knotTightened ? (
                <button
                  onClick={handleTightenKnot}
                  type="button"
                  className="px-4 py-2 rounded-full bg-[#ebdcc4] hover:bg-[#e2d0b3] text-[#582a18] border border-[#c5a880] text-xs font-serif-display uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-95 shadow-xs inline-flex items-center gap-1.5"
                >
                  <Ribbon className="w-4 h-4 text-[#b85c38]" />
                  <span>Pull & Tighten Knot</span>
                </button>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ede3d1] rounded-full text-[#b85c38] font-serif-display text-xs font-bold border border-[#c2aa88]">
                  <Check className="w-3.5 h-3.5 text-[#b85c38]" />
                  <span>Knot Tightened & Blessed ❤️</span>
                </div>
              )}
            </div>
          )}
        </div>

      </div>

      {/* Main Bottom Step Buttons */}
      <div className="pt-2">
        {!isTied ? (
          <button
            onClick={handleTieRakhi}
            type="button"
            disabled={isTying}
            className="w-full py-3.5 px-6 rounded-full bg-[#b85c38] hover:bg-[#a04828] text-[#fdf9ee] font-serif-display text-sm tracking-wider uppercase shadow-md transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2"
          >
            {isTying ? (
              <>
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Tying sacred Rakhi…</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#ffb703]" />
                <span>Tie Sacred Rakhi 🧵</span>
              </>
            )}
          </button>
        ) : (
          <button
            onClick={onNext}
            type="button"
            className="w-full py-3.5 px-6 rounded-full bg-[#3d261a] hover:bg-[#582a18] text-[#fdf9ee] font-serif-display text-sm tracking-wider uppercase shadow-md transition-all duration-300 cursor-pointer active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Read Final Message</span>
            <ArrowRight className="w-4 h-4 text-[#ffb703]" />
          </button>
        )}
      </div>
    </motion.div>
  );
};
