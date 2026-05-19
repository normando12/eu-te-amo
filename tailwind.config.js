/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wine: {
          950: "#0a0206",
          900: "#1a0510",
          800: "#2d0a1a",
        },
        neon: {
          pink: "#ff4d9d",
          rose: "#ff2d6f",
          glow: "#ff6eb4",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        script: ['"Dancing Script"', "cursive"],
        sans: ['"Outfit"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px rgba(255, 77, 157, 0.5), 0 0 40px rgba(255, 45, 111, 0.25)",
        "neon-lg": "0 0 30px rgba(255, 77, 157, 0.6), 0 0 60px rgba(255, 45, 111, 0.35)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
