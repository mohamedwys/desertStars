/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New cohesive palette - child-friendly but professional
        "primary": "#1E40AF", // Deep blue - trust, professionalism
        "secondary": "#F59E0B", // Amber gold - joy, achievement, warmth
        "accent": "#FF914D", // Coral - energy, creativity
        "tertiary": "#D4AF37", // Classic gold - premium feel
        "dark": "#1F2937", // Text dark
        "light": "#6B7280", // Text light
        "cream": "#FFFBEB", // Warm background
        "cream-dark": "#FEF3C7", // Darker cream
        // Legacy colors for backward compatibility (will phase out)
        "Thirdary": "#F59E0B",
        "tartiary": "#6B7280",
        "pink": "#EE9AE5"
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

