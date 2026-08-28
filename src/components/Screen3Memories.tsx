import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KeepsakeConfig } from '../data/config';
import { ArrowRight, X, ZoomIn } from 'lucide-react';

interface Screen3Props {
  config: KeepsakeConfig;
  onNext: () => void;
}

export const Screen3Memories: React.FC<Screen3Props> = ({ config, onNext }) => {
  const [activePhoto, setActivePhoto] = useState<typeof config.memories[0] | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-xl mx-auto my-6 px-4"
    >
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8">
        <span className="text-xs font-serif-display uppercase tracking-widest text-[#b85c38] px-3 py-1 bg-[#ede3d1] rounded-full border border-[#d8c3a5]">
          Chapter II • Memories
        </span>
        <h2 className="font-serif-display text-2xl sm:text-3xl text-[#3d261a] pt-1">
          {config.memoriesTitle}
        </h2>
      </div>

      {/* Grid of Polaroid/Vintage Photo Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {config.memories.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            style={{ rotate: `${photo.rotationDeg}deg` }}
            className="group relative bg-[#fdf9ee] p-3.5 pb-5 rounded-xs border border-[#d8c8b0] vintage-card-shadow cursor-pointer transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:z-10"
            onClick={() => setActivePhoto(photo)}
          >
            {/* Vintage Yellow Tape Strip on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 tape-strip z-10 opacity-80" />

            {/* Photo Container */}
            <div className="relative aspect-4/3 overflow-hidden rounded-2xs bg-[#ede3d1] border border-[#d2c2a8]">
              <img
                src={photo.imageUrl}
                alt={photo.caption}
                className="w-full h-full object-cover filter sepia-[0.15] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#3d261a]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#fdf9ee]/90 text-[#3d261a] p-2 rounded-full shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>
            </div>

            {/* Handwritten Caption */}
            <p className="mt-3 text-center font-handwriting text-xl sm:text-2xl text-[#581818] leading-tight px-1">
              "{photo.caption}"
            </p>
          </motion.div>
        ))}
      </div>

      {/* Zoom Modal for Photos */}
      <AnimatePresence>
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2b1910]/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-lg w-full bg-[#fdf9ee] p-5 sm:p-7 rounded-sm border-2 border-[#c5a880] shadow-2xl vintage-card-shadow"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-[#ede3d1] hover:bg-[#e0d2bb] text-[#3d261a] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-4/3 w-full rounded-2xs overflow-hidden border border-[#d2c2a8] mb-4 bg-[#f5eee2]">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.caption}
                  className="w-full h-full object-cover filter sepia-[0.1]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-center font-handwriting text-2xl sm:text-3xl text-[#581818]">
                "{activePhoto.caption}"
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Next Step Button */}
      <div className="flex justify-center pt-4">
        <button
          onClick={onNext}
          type="button"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3d261a] hover:bg-[#582a18] text-[#fdf9ee] font-serif-display text-sm tracking-wider uppercase shadow-md transition-all duration-300 cursor-pointer active:scale-95"
        >
          <span>A few things I don't say often</span>
          <ArrowRight className="w-4 h-4 text-[#c59b27]" />
        </button>
      </div>
    </motion.div>
  );
};
