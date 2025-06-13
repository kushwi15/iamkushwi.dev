// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// interface SoundContextType {
//   playSoundEffect: (effect: string) => void;
//   toggleBgMusic: () => void;
//   isMusicPlaying: boolean;
// }

// const SoundContext = createContext<SoundContextType | undefined>(undefined);

// export const useSoundContext = () => {
//   const context = useContext(SoundContext);
//   if (context === undefined) {
//     throw new Error('useSoundContext must be used within a SoundProvider');
//   }
//   return context;
// };

// const soundEffects = {
//   slash: 'https://assets.mixkit.co/active_storage/sfx/3163/3163-preview.mp3',
//   flame: 'https://assets.mixkit.co/active_storage/sfx/2106/2106-preview.mp3',
//   menuClick: 'https://assets.mixkit.co/active_storage/sfx/270/270-preview.mp3',
//   formSubmit: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'
// };

// const bgMusic = 'https://assets.mixkit.co/active_storage/sfx/2447/2447-preview.mp3';

// interface SoundProviderProps {
//   children: ReactNode;
// }

// const SoundProvider = ({ children }: SoundProviderProps) => {
//   const [isMusicPlaying, setIsMusicPlaying] = useState(false);
//   const [bgMusicAudio, setBgMusicAudio] = useState<HTMLAudioElement | null>(null);
//   const [soundEffectsAudio, setSoundEffectsAudio] = useState<Record<string, HTMLAudioElement>>({});

//   useEffect(() => {
//     // Initialize audio elements
//     const bgAudio = new Audio(bgMusic);
//     bgAudio.loop = true;
//     bgAudio.volume = 0.3;
//     setBgMusicAudio(bgAudio);

//     // Initialize sound effects
//     const effects: Record<string, HTMLAudioElement> = {};
    
//     Object.entries(soundEffects).forEach(([key, url]) => {
//       const audio = new Audio(url);
//       audio.volume = 0.4;
//       effects[key] = audio;
//     });
    
//     setSoundEffectsAudio(effects);

//     // Cleanup function
//     return () => {
//       bgAudio.pause();
//       bgAudio.src = '';
      
//       Object.values(effects).forEach(audio => {
//         audio.pause();
//         audio.src = '';
//       });
//     };
//   }, []);

//   const playSoundEffect = (effect: string) => {
//     if (soundEffectsAudio[effect]) {
//       // Clone the audio to allow multiple plays
//       const effectAudio = soundEffectsAudio[effect].cloneNode() as HTMLAudioElement;
//       effectAudio.volume = 0.4;
//       effectAudio.play().catch(e => console.log('Error playing sound effect:', e));
//     }
//   };

//   const toggleBgMusic = () => {
//     if (bgMusicAudio) {
//       if (isMusicPlaying) {
//         bgMusicAudio.pause();
//       } else {
//         bgMusicAudio.play().catch(e => console.log('Error playing music:', e));
//       }
//       setIsMusicPlaying(!isMusicPlaying);
//     }
//   };

//   return (
//     <SoundContext.Provider value={{ playSoundEffect, toggleBgMusic, isMusicPlaying }}>
//       {children}
//     </SoundContext.Provider>
//   );
// };

// export default SoundProvider;