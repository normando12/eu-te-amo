import { motion } from "framer-motion";

export default function NeonButton() {
  return (
    <motion.div
      className="mt-10 flex justify-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
    >
      <motion.button
        type="button"
        className="group relative overflow-hidden rounded-full border-2 border-neon-pink/80 bg-white/5 px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-neon backdrop-blur-md md:text-sm"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 40px rgba(255, 77, 157, 0.8), 0 0 80px rgba(255, 45, 111, 0.4)",
        }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <span className="text-neon-pink">♥</span>
          Você é minha melhor escolha
          <span className="text-neon-pink">♥</span>
        </span>
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </motion.button>
    </motion.div>
  );
}
