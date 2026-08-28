import React, { useState } from 'react';
import { motion } from 'motion/react';
import { KeepsakeConfig } from '../data/config';
import { Heart, RotateCcw, Share2, Check } from 'lucide-react';

interface Screen6Props {
  config: KeepsakeConfig;
  onRestart: () => void;
}

export const Screen6FinalNote: React.FC<Screen6Props> = ({ config, onRestart }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Happy Raksha Bandhan ${config.brotherNickname}! ❤️ I made a small vintage digital keepsake surprise for you from home:\n${window.location.href}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-lg mx-auto my-6 px-4"
    >
      {/* Darker Vintage Paper Sheet Container */}
      <div className="relative p-6 sm:p-10 rounded-sm bg-[#e8dac5] border-2 border-[#b89f7a] vintage-paper-edge vintage-card-shadow text-[#3d261a]">
        
        {/* Top Vintage Stamp Detail */}
        <div className="flex justify-between items-center pb-4 border-b border-[#c2aa88]">
          <div className="px-3 py-1 rounded bg-[#d8c3a5] border border-[#a88d6c] text-xs font-serif-display uppercase tracking-widest text-[#581818]">
            {config.locationTag}
          </div>
          <div className="text-xs font-serif-display tracking-wider text-[#6b4731] italic">
            {config.eventDate}
          </div>
        </div>

        {/* Central Small Rakhi Badge */}
        <div className="my-6 flex justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#c59b27] overflow-hidden shadow-md bg-[#fdf9f0]">
            <img
              src={config.rakhiImageUrl}
              alt="Rakhi Keepsake Emblem"
              className="w-full h-full object-cover filter sepia-[0.1]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center font-serif-display text-2xl sm:text-3xl text-[#581818] mb-6">
          {config.finalTitle}
        </h2>

        {/* Playful & Heartfelt Body */}
        <div className="space-y-4 text-lg sm:text-xl font-handwriting text-[#3d261a] text-center leading-relaxed">
          <p>
            "{config.finalHeartfeltMessage}"
          </p>
          <p className="text-xl sm:text-2xl text-[#7c3a21] font-bold">
            {config.finalLoveMessage}
          </p>
        </div>

        {/* Sister Signature */}
        <div className="mt-8 pt-4 border-t border-[#c2aa88] flex justify-end items-end">
          <p className="font-handwriting text-3xl text-[#581818]">
            {config.finalSignature}
          </p>
        </div>

      </div>

      {/* Action Buttons for Replay & Sharing */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={handleWhatsAppShare}
          type="button"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-serif-display text-sm tracking-wide transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
        >
          <Share2 className="w-4 h-4" />
          <span>Send Surprise</span>
        </button>

        <button
          onClick={handleCopyLink}
          type="button"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#fdf9ee] hover:bg-[#f5eee2] text-[#3d261a] border border-[#c5a880] font-serif-display text-sm tracking-wide transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
        >
          {copied ? <Check className="w-4 h-4 text-[#b85c38]" /> : <Heart className="w-4 h-4 text-[#b85c38]" />}
          <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
        </button>

        <button
          onClick={onRestart}
          type="button"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#ebdcc4] hover:bg-[#e2d0b3] text-[#582a18] border border-[#c5a880] font-serif-display text-sm tracking-wide transition-all duration-300 cursor-pointer active:scale-95"
          title="Replay from beginning"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay</span>
        </button>
      </div>
    </motion.div>
  );
};
