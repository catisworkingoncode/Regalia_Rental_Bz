/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0f2442",
          blue: "#17345d",
          gold: "#d4a63a",
          cream: "#f8f5ee",
          mist: "#e8eef6"
        }
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 36, 66, 0.08)",
        card: "0 12px 30px rgba(15, 36, 66, 0.12)"
      },
      backgroundImage: {
        hero:
          "radial-gradient(circle at top right, rgba(212, 166, 58, 0.18), transparent 30%), linear-gradient(180deg, #fbfcfe 0%, #f1f5f9 100%)"
      }
    }
  },
  plugins: []
};
