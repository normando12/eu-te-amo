import { motion } from "framer-motion";
import { useMemo } from "react";

const CHARS = ["♥", "♡", "❤", "💕", "💗", "💖", "💘"];

export default function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        char: CHARS[i % CHARS.length],
        left: `${Math.random() * 100}%`,
        size: 0.45 + Math.random() * 1.8,
        duration: 6 + Math.random() * 10,
        delay: Math.random() * 14,
        opacity: 0.15 + Math.random() * 0.6,
        drift: -30 + Math.random() * 60,
      })),
    []
  );

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute text-neon-pink will-change-transform"
          style={{
            left: h.left,
            bottom: 0,
            fontSize: `${h.size}rem`,
            opacity: h.opacity,
            textShadow: "0 0 14px rgba(255, 77, 157, 0.7)",
          }}
          initial={{ y: "105vh", x: 0, rotate: 0 }}
          animate={{
            y: "-120vh",
            x: h.drift,
            rotate: 360,
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0,
          }}
        >
          {h.char}
        </motion.span>
      ))}
    </motion.div>
  );
}
