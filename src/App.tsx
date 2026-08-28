import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { VintageHeader } from './components/VintageHeader';
import { Screen1Rakhi } from './components/Screen1Rakhi';
import { Screen2Letter } from './components/Screen2Letter';
import { Screen4Ritual } from './components/Screen4Ritual';
import { Screen5TieRakhi } from './components/Screen5TieRakhi';
import { Screen6FinalNote } from './components/Screen6FinalNote';
import { KEEPSAKE_DATA } from './data/config';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const totalScreens = 5;

  const nextScreen = () => {
    setCurrentScreen((prev) => Math.min(prev + 1, totalScreens));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToScreen = (screenNum: number) => {
    setCurrentScreen(screenNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen paper-texture text-[#3d261a] font-body flex flex-col justify-between selection:bg-[#b85c38] selection:text-[#fdf9ee]">
      
      {/* Top Header with Progress & Music Toggle */}
      <VintageHeader
        currentScreen={currentScreen}
        totalScreens={totalScreens}
        onNavigateScreen={goToScreen}
        config={KEEPSAKE_DATA}
      />

      {/* Main Keepsake Content Area */}
      <main className="flex-1 flex items-center justify-center py-6 px-2 sm:px-4">
        <AnimatePresence mode="wait">
          {currentScreen === 1 && (
            <Screen1Rakhi
              key="screen1"
              config={KEEPSAKE_DATA}
              onOpenRakhi={nextScreen}
            />
          )}

          {currentScreen === 2 && (
            <Screen2Letter
              key="screen2"
              config={KEEPSAKE_DATA}
              onNext={nextScreen}
            />
          )}

          {currentScreen === 3 && (
            <Screen4Ritual
              key="screen3"
              config={KEEPSAKE_DATA}
              onNext={nextScreen}
            />
          )}

          {currentScreen === 4 && (
            <Screen5TieRakhi
              key="screen4"
              config={KEEPSAKE_DATA}
              onNext={nextScreen}
            />
          )}

          {currentScreen === 5 && (
            <Screen6FinalNote
              key="screen5"
              config={KEEPSAKE_DATA}
              onRestart={() => goToScreen(1)}
            />
          )}
        </AnimatePresence>
      </main>

      {/* Minimal Vintage Footer */}
      <footer className="py-4 text-center border-t border-[#e2d5c1] text-xs font-serif-display text-[#8a684b] tracking-widest uppercase">
        <span>Raksha Bandhan Keepsake • Made with ❤️ for Brother</span>
      </footer>
    </div>
  );
}
