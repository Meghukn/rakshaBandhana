import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface AudioPlayerProps {
  customAudioUrl?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ customAudioUrl }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timerRef = useRef<number | null>(null);

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const startAudio = () => {
    setIsPlaying(true);
    if (customAudioUrl && customAudioUrl.trim() !== '') {
      if (!audioRef.current) {
        audioRef.current = new Audio(customAudioUrl);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.6;
      }
      audioRef.current.play().catch(() => {
        startGentleMusicBox();
      });
    } else {
      startGentleMusicBox();
    }
  };

  const stopAudio = () => {
    setIsPlaying(false);

    if (audioRef.current) {
      audioRef.current.pause();
    }

    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (masterGainRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      try {
        masterGainRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
      } catch {}
    }
  };

  // Pure, soothing music box & acoustic piano with SILENCE between notes (NO DRONES, NO ECHOES, NO HARSH SOUNDS)
  const startGentleMusicBox = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Master gain node - comfortable, clear, peaceful volume
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, ctx.currentTime);
      masterGain.gain.linearRampToValueAtTime(0.5, ctx.currentTime + 0.8);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Soft lowpass filter for gentle acoustic timbre
      const softFilter = ctx.createBiquadFilter();
      softFilter.type = 'lowpass';
      softFilter.frequency.setValueAtTime(1000, ctx.currentTime);
      softFilter.connect(masterGain);

      // Tranquil, relaxing lullaby melody sequence (notes in Hz: C4, E4, G4, A4, D5)
      // Each phrase plays softly then pauses for natural quiet breathing room
      const melodyPhrases = [
        { freq: 261.63, delay: 0.0,  vol: 0.12 }, // C4
        { freq: 329.63, delay: 0.5,  vol: 0.12 }, // E4
        { freq: 392.00, delay: 1.0,  vol: 0.14 }, // G4
        { freq: 523.25, delay: 1.6,  vol: 0.12 }, // C5
        { freq: 440.00, delay: 2.3,  vol: 0.10 }, // A4
        { freq: 392.00, delay: 3.0,  vol: 0.12 }, // G4
        { freq: 329.63, delay: 3.7,  vol: 0.10 }, // E4
        { freq: 293.66, delay: 4.4,  vol: 0.12 }, // D4
      ];

      let currentStep = 0;

      const playSoftPluck = (freq: number, vol: number) => {
        if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
        const c = audioCtxRef.current;

        const osc = c.createOscillator();
        const pluckGain = c.createGain();

        osc.type = 'sine'; // Pure, crystal soft bell/piano tone
        osc.frequency.setValueAtTime(freq, c.currentTime);

        // Gentle envelope: instant soft attack, peaceful natural decay to complete silence
        pluckGain.gain.setValueAtTime(0.0001, c.currentTime);
        pluckGain.gain.exponentialRampToValueAtTime(vol, c.currentTime + 0.08);
        pluckGain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 1.8);

        osc.connect(pluckGain);
        pluckGain.connect(softFilter);

        osc.start(c.currentTime);
        osc.stop(c.currentTime + 2.0);
      };

      // Play note sequence
      const playNextNote = () => {
        const item = melodyPhrases[currentStep % melodyPhrases.length];
        playSoftPluck(item.freq, item.vol);
        currentStep++;
      };

      // Initial note
      playNextNote();

      // Gentle interval every 650ms for a peaceful, unhurried melody stream with silent pauses
      timerRef.current = window.setInterval(playNextNote, 680);

    } catch (e) {
      console.warn('Web Audio music box error', e);
    }
  };

  useEffect(() => {
    // Attempt auto-play on mount
    startAudio();

    // In modern browsers, AudioContext might need a user gesture if blocked on load
    const handleFirstInteraction = () => {
      if (!isPlaying && (!audioCtxRef.current || audioCtxRef.current.state === 'suspended')) {
        startAudio();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      stopAudio();
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      type="button"
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebdcc4] hover:bg-[#e2d0b3] text-[#582a18] border border-[#c5a880] text-xs font-serif-display tracking-wider transition-all duration-300 shadow-xs cursor-pointer active:scale-95"
      title="Toggle background music"
    >
      <Music className={`w-3.5 h-3.5 ${isPlaying ? 'animate-pulse text-[#b85c38]' : 'text-[#8a684b]'}`} />
      <span className="font-medium">{isPlaying ? '♪ Stop Music' : '♪ Play Music'}</span>
      {isPlaying ? (
        <Volume2 className="w-3.5 h-3.5 text-[#b85c38]" />
      ) : (
        <VolumeX className="w-3.5 h-3.5 opacity-60" />
      )}
    </button>
  );
};
