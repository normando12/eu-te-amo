import { motion } from "framer-motion";

export default function PhotoFrame({ side = "left" }) {
  return (
    <motion.figure
      className={`group relative shrink-0 ${side === "left" ? "justify-self-end" : "justify-self-start"}`}
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
    >
      <motion.div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon-pink via-neon-rose to-pink-400 opacity-80 blur-sm"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.div
        className="relative overflow-hidden rounded-2xl border-2 border-neon-pink/80 p-[3px] shadow-neon-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="overflow-hidden rounded-[14px]">
          <motion.img
            src="/images/meu.jpg"
            alt="Nós dois na praia"
            className="block aspect-[3/4] w-[clamp(110px,28vw,200px)] object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="absolute -right-1 -top-1 text-sm drop-shadow-[0_0_8px_#ff4d9d]">💕</span>
        <span className="absolute -bottom-1 -left-1 text-xs drop-shadow-[0_0_6px_#ff4d9d]">♥</span>
      </motion.div>
    </motion.figure>
  );
}
