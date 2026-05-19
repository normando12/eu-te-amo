import { motion } from "framer-motion";

export default function NeonHeart({ children }) {
  return (
    <div className="relative flex flex-col items-center justify-center px-2">
      <motion.div
        className="absolute h-[min(280px,55vw)] w-[min(300px,70vw)]"
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.6, 0.95, 0.6],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="h-full w-full opacity-90"
          style={{
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 90'%3E%3Cpath d='M50 88 C20 62 2 42 2 26 C2 12 14 2 28 2 C38 2 46 8 50 16 C54 8 62 2 72 2 C86 2 98 12 98 26 C98 42 80 62 50 88Z' fill='none' stroke='%23ff4d9d' stroke-width='2'/%3E%3C/svg%3E") center/contain no-repeat`,
            filter:
              "drop-shadow(0 0 25px rgba(255, 77, 157, 0.9)) drop-shadow(0 0 50px rgba(255, 45, 111, 0.5))",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute h-[min(260px,50vw)] w-[min(280px,65vw)] rounded-full bg-neon-rose/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
