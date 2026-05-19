import { motion } from "framer-motion";

const icons = [
  { symbol: "♥", label: "Amor" },
  { symbol: "✦", label: "Brilho" },
  { symbol: "∞", label: "Eterno" },
];

export default function MessageCard() {
  return (
    <motion.section
      className="relative mx-auto mt-8 max-w-xl px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.6 }}
    >
      <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 text-lg text-neon-pink drop-shadow-[0_0_10px_#ff4d9d]">
        💕
      </span>

      <div className="relative overflow-hidden rounded-2xl border border-neon-pink/40 bg-white/5 p-6 shadow-glass backdrop-blur-xl border-glow md:p-8">
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-neon-pink/10 via-transparent to-wine-800/20"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative flex gap-5 md:gap-6">
          <div className="flex flex-col gap-4 pt-1">
            {icons.map((icon, i) => (
              <motion.span
                key={icon.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-neon-pink/50 bg-neon-pink/10 text-lg text-neon-pink shadow-[0_0_15px_rgba(255,77,157,0.3)]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(255, 77, 157, 0.6)" }}
              >
                {icon.symbol}
              </motion.span>
            ))}
          </div>

          <div className="flex-1 space-y-4 text-left font-sans text-sm leading-relaxed text-white/85 md:text-base md:leading-loose">
            <p>
              Cada onda que bate na areia me lembra o quanto a vida é mais bonita ao seu
              lado. Você é meu porto seguro, minha alegria e o motivo do meu sorriso.
            </p>
            <p>
              Obrigado por existir, por caminhar comigo e por transformar dias comuns em
              memórias inesquecíveis. Hoje e sempre:{" "}
              <strong className="font-medium text-neon-pink text-glow-pink">
                eu te amo, meu amor.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <motion.p
        className="mt-6 text-center font-script text-2xl text-neon-pink/90 text-glow-pink md:text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Com todo o meu coração ♥
      </motion.p>
    </motion.section>
  );
}
