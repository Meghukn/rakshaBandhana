import React from 'react';
import { motion } from 'motion/react';
import { KeepsakeConfig } from '../data/config';
import { ArrowRight, Feather } from 'lucide-react';

interface Screen2Props {
  config: KeepsakeConfig;
  onNext: () => void;
}

export const Screen2Letter: React.FC<Screen2Props> = ({ config, onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-lg mx-auto my-6 px-4"
    >
      {/* Vintage Envelope / Letter Sheet Container */}
      <div className="relative p-6 sm:p-10 rounded-sm bg-[#fdf9f0] border border-[#d3c2a8] vintage-paper-edge vintage-card-shadow text-[#3d261a]">
        
        {/* Top Decorative Tape & Date */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-8 py-1 tape-strip text-xs font-serif-display tracking-widest text-[#6b4731] uppercase">
          {config.eventDate}
        </div>

        {/* Ink Stamp Detail */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-30 pointer-events-none">
          <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#b85c38] flex items-center justify-center p-1 text-[9px] font-serif-display uppercase text-center text-[#b85c38] rotate-12">
            Air Mail • Home
          </div>
        </div>

        {/* Salutation */}
        <div className="pt-4 pb-2">
          <h2 className="font-handwriting text-4xl sm:text-5xl text-[#581818] tracking-wide">
            {config.letterSalutation}
          </h2>
        </div>

        {/* Letter Body Paragraphs */}
        <div className="space-y-5 my-6 text-lg sm:text-xl font-handwriting text-[#3d261a] leading-relaxed">
          <p className="indent-4">
            {config.letterParagraph1}
          </p>
          <p className="indent-4">
            {config.letterParagraph2}
          </p>
        </div>

        {/* Feather Icon / Divider */}
        <div className="flex items-center justify-center my-6 gap-3 text-[#c59b27]/60">
          <div className="h-px bg-[#d8c8b0] flex-1" />
          <Feather className="w-4 h-4 text-[#b85c38]" />
          <div className="h-px bg-[#d8c8b0] flex-1" />
        </div>

        {/* Next Step Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onNext}
            type="button"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#b85c38] hover:bg-[#a04828] text-[#fdf9ee] font-serif-display text-sm tracking-wide transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
          >
            <span>Turn the page</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </motion.div>
  );
};
