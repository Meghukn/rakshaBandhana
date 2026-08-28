/**
 * RAKSHA BANDHAN KEEPSAKE CONFIGURATION
 * 
 * Edit any values below to customize the website for your brother!
 * All names, messages, and dates can be customized here.
 */

import vintageRakhiImg from '../assets/images/vintage_rakhi_realistic_1786550663131.jpg';

export interface KeepsakeConfig {
  // BROTHER & SISTER NAMES
  brotherNickname: string; // "Brother"
  sisterName: string;      // "Your sister"
  
  // DATES & STAMPS
  eventDate: string;       // "28 • 08 • 2026"
  locationTag: string;     // "From Home ❤️"
  
  // RAKHI IMAGE
  rakhiImageUrl: string;
  
  // SCREEN 1 TEXTS
  screen1TopNote: string;
  screen1Subtitle: string;
  screen1TapPrompt: string;

  // SCREEN 2 LETTER
  letterSalutation: string;
  letterParagraph1: string;
  letterParagraph2: string;

  // SCREEN 4 RAKHI TYING MOMENT
  tyingTitle: string;
  tyingButtonLabel: string;
  tyingSuccessTitle: string;
  tyingSuccessSubtitle: string;

  // SCREEN 5 FINAL NOTE
  finalTitle: string;
  finalHeartfeltMessage: string;
  finalLoveMessage: string;
  finalSignature: string;

  // AUDIO MUSIC SETTINGS
  backgroundAudioUrl?: string; 
}

export const KEEPSAKE_DATA: KeepsakeConfig = {
  brotherNickname: "Brother",
  sisterName: "— Your sister",

  eventDate: "28 • 08 • 2026",
  locationTag: "From Home ❤️",

  rakhiImageUrl: vintageRakhiImg,

  screen1TopNote: "For my brother…",
  screen1Subtitle: "A little Raksha Bandhan surprise from home.",
  screen1TapPrompt: "Tap the Rakhi to open",

  letterSalutation: "Dear Brother,",
  letterParagraph1: "Even though you're far away this Raksha Bandhan, I wanted to send you a little piece of home.",
  letterParagraph2: "Here is a tiny digital Raksha Bandhan from me to you.",

  tyingTitle: "Now for the important part…",
  tyingButtonLabel: "Tie the Rakhi 🧵",
  tyingSuccessTitle: "Rakhi tied. ❤️",
  tyingSuccessSubtitle: "Until I can tie it for real.",

  finalTitle: "Happy Raksha Bandhan, Brother ❤️",
  finalHeartfeltMessage: "No matter how many miles separate us, the bond and memories we share will always stay close to my heart. Wishing you endless happiness, good health, and success in everything you do.",
  finalLoveMessage: "Love you always. Happy Raksha Bandhan!",
  finalSignature: "— Your sister",

  backgroundAudioUrl: "", 
};
