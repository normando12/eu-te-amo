import { motion } from "framer-motion";
import { useMemo } from "react";

const CHARS = ["♥", "♡", "❤", "💕", "💗"];

export default function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        char: CHARS[i % CHARS.length],
        left: `${Math.random() * 100}%`,
        size: 0.6 + Math.random() * 1.4,
        duration: 5 + Math.random() * 8,
        delay: Math.random() * 6,
        opacity: 0.25 + Math.random() * 0.5,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute bottom-0 text-neon-pink"
          style={{
            left: h.left,
            fontSize: `${h.size}rem`,
            opacity: h.opacity,
            textShadow: "0 0 12px rgba(255, 77, 157, 0.6)",
          }}
          initial={{ y: "110vh", rotate: 0 }}
          animate={{ y: "-10vh", rotate: 360 }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {h.char}
        </motion.span>
      ))}
    </div>
  );
}
