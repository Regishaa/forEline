module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  heme: {
    extend: {
      animation: {
        "float-0": "float 4s ease-in-out infinite",
        "float-1": "float 5s ease-in-out infinite",
        "float-2": "float 6s ease-in-out infinite",
        swing: "swing 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-in forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "pulse-smooth": "pulseSmooth 3s ease-in-out infinite",
        pulseSize: "pulseSize 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        swing: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        pulseSmooth: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        pulseSize: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};
