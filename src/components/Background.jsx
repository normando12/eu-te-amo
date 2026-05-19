import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 20, 60, 0.45) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 80% 100%, rgba(255, 45, 111, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 10% 80%, rgba(180, 30, 80, 0.2) 0%, transparent 45%),
            linear-gradient(180deg, #050208 0%, #0a0206 40%, #1a0510 100%)
          `,
        }}
        animate={{ opacity: [0.95, 1, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-neon-rose/20 blur-[100px]" />
      <motion.div
        className="absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-neon-pink/15 blur-[90px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-red-900/30 blur-3xl" />
      <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-rose-800/25 blur-3xl" />
      <div className="absolute left-[5%] top-[15%] text-4xl opacity-20 blur-[2px]">🌹</div>
      <div className="absolute right-[8%] top-[20%] text-3xl opacity-15 blur-[3px]">🌹</div>
      <div className="absolute bottom-[30%] left-[3%] text-2xl opacity-10">✿</div>
      <div className="absolute bottom-[25%] right-[5%] text-3xl opacity-15">❀</div>
    </div>
  );
}
