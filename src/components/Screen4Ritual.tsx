import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KeepsakeConfig } from '../data/config';
import { Flame, ArrowRight, RefreshCw, CheckCircle2 } from 'lucide-react';
import realisticThaliImg from '../assets/images/realistic_aarti_thali_1786551875806.jpg';

interface Screen4Props {
  config: KeepsakeConfig;
  onNext: () => void;
}

export const Screen4Ritual: React.FC<Screen4Props> = ({ onNext }) => {
  const [diyaLit, setDiyaLit] = useState(false);
  const [petalsShowered, setPetalsShowered] = useState(false);
  const [rotationDegrees, setRotationDegrees] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const handleLightDiya = () => {
    setDiyaLit(true);
  };

  const handleShowerPetals = () => {
    setPetalsShowered(true);
  };

  // Graceful, calm 360-degree rotation (3.2 seconds duration)
  const handleRotateThali = () => {
    if (isRotating) return;
    setIsRotating(true);
    setRotationDegrees((prev) => prev + 360);
    setTimeout(() => setIsRotating(false), 3200);
  };

  const isAllDone = diyaLit && petalsShowered;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-lg mx-auto my-4 px-4 text-center"
    >
      {/* Chapter Header */}
      <div className="space-y-2 mb-6">
        <span className="text-xs font-serif-display uppercase tracking-widest text-[#b85c38] px-3 py-1 bg-[#ede3d1] rounded-full border border-[#d8c3a5]">
          Chapter II • The Blessing Ritual
        </span>
        <h2 className="font-serif-display text-2xl sm:text-3xl text-[#3d261a]">
          The Sacred Aarti Thali
        </h2>
        <p className="text-xs font-body italic text-[#8a684b]">
          Illuminate the brass Diya, shower marigold flowers, and perform the Aarti
        </p>
      </div>

      {/* Realistic Photo Aarti Thali Display Container */}
      <div className="relative my-3 p-2 sm:p-3 rounded-full bg-[#ebdcc4] border-4 border-[#c5a880] vintage-card-shadow max-w-[340px] sm:max-w-[380px] mx-auto aspect-square flex items-center justify-center overflow-hidden">
        
        {/* Soft Ambient Warm Illumination Glow when Diya is lit */}
        {diyaLit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 0.85, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ffa200]/45 via-[#ff6f00]/20 to-transparent pointer-events-none z-10"
          />
        )}

        {/* Scattered Marigold Petals Overlay */}
        <AnimatePresence>
          {petalsShowered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 pointer-events-none z-20"
            >
              {/* Petal 1 - Top Left */}
              <div className="absolute top-12 left-12 w-5 h-6 text-[#ff8c00] opacity-90 drop-shadow-xs rotate-12">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9 7 4 9 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-5-7-8-12z"/></svg>
              </div>
              {/* Petal 2 - Top Right */}
              <div className="absolute top-16 right-14 w-4 h-5 text-[#e65100] opacity-85 drop-shadow-xs -rotate-45">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9 7 4 9 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-5-7-8-12z"/></svg>
              </div>
              {/* Petal 3 - Bottom Left */}
              <div className="absolute bottom-14 left-16 w-5 h-6 text-[#ffab00] opacity-90 drop-shadow-xs rotate-45">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9 7 4 9 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-5-7-8-12z"/></svg>
              </div>
              {/* Petal 4 - Bottom Right */}
              <div className="absolute bottom-16 right-16 w-4 h-5 text-[#d84315] opacity-85 drop-shadow-xs -rotate-12">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9 7 4 9 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-5-7-8-12z"/></svg>
              </div>
              {/* Petal 5 - Center Left */}
              <div className="absolute top-1/2 left-8 w-4 h-5 text-[#ff8c00] opacity-85 drop-shadow-xs rotate-90">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9 7 4 9 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-5-7-8-12z"/></svg>
              </div>
              {/* Petal 6 - Center Right */}
              <div className="absolute top-1/2 right-8 w-5 h-6 text-[#ffab00] opacity-90 drop-shadow-xs -rotate-30">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C9 7 4 9 4 14c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-5-7-8-12z"/></svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Rotating Realistic Photographic Plate (Slow, graceful 3.2s rotation) */}
        <motion.div
          animate={{ rotate: rotationDegrees }}
          transition={{ duration: 3.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full h-full rounded-full overflow-hidden shadow-inner flex items-center justify-center group"
        >
          {/* High-Resolution Antique Brass Aarti Thali Photo */}
          <img
            src={realisticThaliImg}
            alt="Antique Brass Aarti Thali"
            className="w-full h-full object-cover rounded-full filter contrast-[1.05] brightness-[0.98]"
          />

          {/* Warm Lamp Illumination Light Glow directly over Diya Area */}
          {diyaLit && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 0.9, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.0, ease: 'easeInOut' }}
              className="absolute top-[26%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-18 h-18 rounded-full bg-[radial-gradient(circle,_rgba(255,183,3,0.85)_0%,_rgba(255,111,0,0.4)_50%,_transparent_100%)] blur-xs pointer-events-none z-15"
            />
          )}
        </motion.div>
      </div>

      {/* Interactive Action Controls Grid (Only Diya & Shower Flowers) */}
      <div className="grid grid-cols-2 gap-3 my-5 max-w-[340px] mx-auto">
        {/* Action 1: Light Diya */}
        <button
          onClick={handleLightDiya}
          type="button"
          className={`p-3.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer active:scale-95 ${
            diyaLit
              ? 'bg-[#fdf9ee] border-[#ffb703] shadow-md text-[#b85c38]'
              : 'bg-[#ebdcc4] border-[#c5a880] text-[#582a18] hover:bg-[#e2d0b3]'
          }`}
        >
          <Flame className={`w-5 h-5 ${diyaLit ? 'text-[#ffb703] fill-[#ffb703]' : 'text-[#8a684b]'}`} />
          <span className="text-xs font-serif-display font-medium">
            {diyaLit ? 'Diya Lit 🔥' : 'Light Diya'}
          </span>
        </button>

        {/* Action 2: Shower Flowers */}
        <button
          onClick={handleShowerPetals}
          type="button"
          className={`p-3.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer active:scale-95 ${
            petalsShowered
              ? 'bg-[#fdf9ee] border-[#ffb703] shadow-md text-[#b85c38]'
              : 'bg-[#ebdcc4] border-[#c5a880] text-[#582a18] hover:bg-[#e2d0b3]'
          }`}
        >
          <span className="text-xl leading-none">🌸</span>
          <span className="text-xs font-serif-display font-medium">
            {petalsShowered ? 'Petals Showered' : 'Shower Flowers'}
          </span>
        </button>
      </div>

      {/* Rotate Aarti Thali Button - Slow 3.2s rotation */}
      <div className="flex justify-center items-center gap-3 mb-5">
        <button
          onClick={handleRotateThali}
          disabled={isRotating}
          type="button"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#ebdcc4] hover:bg-[#e2d0b3] text-[#582a18] border border-[#c5a880] text-xs font-serif-display uppercase tracking-wider transition-all duration-300 cursor-pointer active:scale-95 shadow-xs"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-[#b85c38] ${isRotating ? 'animate-spin' : ''}`} />
          <span>Rotate Aarti Thali 🪔</span>
        </button>
      </div>

      {/* Completion Status & Next Step */}
      <div className="pt-1">
        {isAllDone && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#ede3d1] rounded-full border border-[#c2aa88] text-[#b85c38] font-serif-display text-sm font-semibold"
          >
            <CheckCircle2 className="w-4 h-4 text-[#b85c38]" />
            <span>Aarti Blessing Complete ❤️</span>
          </motion.div>
        )}

        <div>
          <button
            onClick={onNext}
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#b85c38] hover:bg-[#a04828] text-[#fdf9ee] font-serif-display text-sm tracking-wider uppercase shadow-md transition-all duration-300 cursor-pointer active:scale-95 inline-flex items-center justify-center gap-2"
          >
            <span>Continue to Tie Rakhi 🧵</span>
            <ArrowRight className="w-4 h-4 text-[#fdf9ee]" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
