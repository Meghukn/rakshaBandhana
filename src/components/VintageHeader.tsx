import React from 'react';
import { AudioPlayer } from './AudioPlayer';
import { KeepsakeConfig } from '../data/config';

interface VintageHeaderProps {
  currentScreen: number;
  totalScreens: number;
  onNavigateScreen: (screenNum: number) => void;
  config: KeepsakeConfig;
}

export const VintageHeader: React.FC<VintageHeaderProps> = ({
  currentScreen,
  totalScreens,
  onNavigateScreen,
  config,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full px-4 py-3 bg-[#f5eee2]/90 backdrop-blur-md border-b border-[#e2d5c1] transition-all">
      <div className="max-w-xl mx-auto flex items-center justify-between">
        {/* Vintage Stamp / Postal Tag */}
        <div className="flex items-center gap-2">
          <div className="px-2.5 py-0.5 rounded-sm bg-[#e8dac5] border border-[#c2aa88] text-[10px] sm:text-xs font-serif-display uppercase tracking-widest text-[#6b3e23] shadow-2xs">
            {config.locationTag}
          </div>
        </div>

        {/* Subtle Step Dots / Ribbon indicator */}
        <div className="flex items-center gap-1.5" aria-label="Keepsake progress">
          {Array.from({ length: totalScreens }, (_, index) => {
            const stepNum = index + 1;
            const isActive = currentScreen === stepNum;
            const isCompleted = currentScreen > stepNum;

            return (
              <button
                key={stepNum}
                onClick={() => {
                  if (isCompleted || stepNum <= currentScreen) {
                    onNavigateScreen(stepNum);
                  }
                }}
                disabled={stepNum > currentScreen + 1}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-5 h-2 bg-[#b85c38] shadow-xs'
                    : isCompleted
                    ? 'w-2 h-2 bg-[#a37f5d] hover:bg-[#805e3f]'
                    : 'w-1.5 h-1.5 bg-[#d8c8b0]'
                }`}
                title={`Screen ${stepNum}`}
              />
            );
          })}
        </div>

        {/* Audio Music Control */}
        <AudioPlayer customAudioUrl={config.backgroundAudioUrl} />
      </div>
    </header>
  );
};
