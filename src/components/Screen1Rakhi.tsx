import React, { useState } from 'react';
import { motion } from 'motion/react';
import { KeepsakeConfig } from '../data/config';
import { Sparkles, Heart } from 'lucide-react';

interface Screen1Props {
  config: KeepsakeConfig;
  onOpenRakhi: () => void;
}

export const Screen1Rakhi: React.FC<Screen1Props> = ({ config, onOpenRakhi }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleTap = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpenRakhi();
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[85vh] flex flex-col items-center justify-between px-4 py-8 text-center max-w-md mx-auto"
    >
      {/* Top Handwritten Notes */}
      <div className="space-y-3 pt-4">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-handwriting text-3xl sm:text-4xl text-[#7c3a21] leading-tight"
        >
          {config.screen1TopNote}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="font-serif-display text-sm sm:text-base text-[#6b4731] tracking-wide italic"
        >
          {config.screen1Subtitle}
        </motion.p>
      </div>

      {/* Main Realistic Rakhi Display */}
      <motion.div
        className="relative my-8 cursor-pointer group"
        onClick={handleTap}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* Vintage Frame / Paper Backdrop */}
        <div className="relative p-6 sm:p-8 rounded-full bg-[#fbf6ed] border-2 border-[#d8c3a5] double-border shadow-xl vintage-card-shadow transition-all duration-500 group-hover:border-[#b85c38]">
          {/* Subtle thread extension graphic behind */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-transparent via-[#b85c38]/40 to-[#b85c38]" />
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-t from-transparent via-[#b85c38]/40 to-[#b85c38]" />

          {/* The Rakhi Image */}
          <motion.div
            animate={
              isOpening
                ? { rotate: 360, scale: 1.15, opacity: 0.9 }
                : { y: [0, -4, 0] }
            }
            transition={
              isOpening
                ? { duration: 0.85, ease: 'easeInOut' }
                : { repeat: Infinity, duration: 4, ease: 'easeInOut' }
            }
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-[#c5a880]/60 shadow-inner bg-[#f5eee2]"
          >
            <img
              src={config.rakhiImageUrl}
              alt="Raksha Bandhan Rakhi"
              className="w-full h-full object-cover rounded-full filter sepia-[0.1] contrast-[1.05]"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Vintage Corner Postage Stamp */}
          <div className="absolute -bottom-2 -right-2 px-2 py-1 bg-[#eddcc6] border border-[#b85c38] rounded-xs text-[10px] font-serif-display uppercase tracking-widest text-[#7c3a21] shadow-xs rotate-6 flex items-center gap-1">
            <Heart className="w-2.5 h-2.5 fill-[#b85c38] text-[#b85c38]" />
            <span>2026</span>
          </div>
        </div>

        {/* Floating pulse ring hint */}
        {!isOpening && (
          <div className="absolute inset-0 rounded-full border border-[#b85c38]/30 animate-ping pointer-events-none" />
        )}
      </motion.div>

      {/* Bottom Prompt & Tap affordance */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="space-y-3 pb-4"
      >
        <button
          onClick={handleTap}
          type="button"
          disabled={isOpening}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3d261a] hover:bg-[#582a18] text-[#fdf9ee] font-serif-display text-sm tracking-wider uppercase shadow-md transition-all duration-300 cursor-pointer active:scale-95"
        >
          <Sparkles className="w-4 h-4 text-[#c59b27] animate-spin" style={{ animationDuration: '6s' }} />
          <span>{isOpening ? 'Opening Keepsake Box…' : config.screen1TapPrompt}</span>
        </button>
      </motion.div>
    </motion.div>
  );
};
