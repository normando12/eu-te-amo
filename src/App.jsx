import { motion } from "framer-motion";
import Background from "./components/Background";
import FloatingHearts from "./components/FloatingHearts";
import Sparkles from "./components/Sparkles";
import NeonHeart from "./components/NeonHeart";
import PhotoFrame from "./components/PhotoFrame";
import MessageCard from "./components/MessageCard";
import NeonButton from "./components/NeonButton";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  return (
    <>
      <Background />
      <Sparkles />
      <FloatingHearts />
      <MusicPlayer />

      <main className="relative z-10 mx-auto min-h-screen max-w-5xl px-4 pb-16 pt-8 md:pt-12">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-8 flex items-center justify-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.35em] text-neon-pink/80 md:text-xs">
            <span>♥</span>
            Para o amor da minha vida
            <span>♥</span>
          </p>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-6 lg:gap-10">
            <div className="hidden md:block">
              <PhotoFrame side="left" />
            </div>

            <div className="col-span-1 flex flex-col items-center">
              <NeonHeart>
                <h1 className="font-serif text-[clamp(1.75rem,6vw,2.75rem)] font-semibold leading-tight text-white drop-shadow-lg">
                  Eu te amo,
                </h1>
                <p className="mt-1 font-script text-[clamp(2.25rem,8vw,3.5rem)] font-bold text-neon-pink text-glow-pink">
                  meu amor
                </p>
              </NeonHeart>

              <motion.p
                className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.35em] text-white/60 md:text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Você é tudo pra mim
              </motion.p>
            </div>

            <div className="hidden md:block">
              <PhotoFrame side="right" />
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-6 md:hidden">
            <PhotoFrame side="left" />
            <PhotoFrame side="right" />
          </div>
        </motion.header>

        <MessageCard />
        <NeonButton />

        <motion.footer
          className="mt-12 text-center text-xs tracking-widest text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          ♥ Feito com amor · Para sempre
        </motion.footer>
      </main>
    </>
  );
}
