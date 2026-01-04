/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF1493', // Deep Pink
          light: '#FFB6C1',   // Light Pink
          dark: '#C71585',    // Medium Violet Red
        },
        secondary: {
          DEFAULT: '#FF6B9D', // Vibrant Pink
          light: '#FFC0CB',   // Pink
          dark: '#FF69B4',    // Hot Pink
        },
        accent: {
          DEFAULT: '#FF1493',
          light: '#FFD4E5',
          dark: '#D10069',
        },
        background: {
          DEFAULT: '#FFFFFF',
          light: '#FFF5F7',   // Soft Pink White
          dark: '#F8F4F5',    // Neutral Light
        },
        text: {
          DEFAULT: '#2D2D2D', // Dark Text
          light: '#6B6B6B',   // Gray Text
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(255, 20, 147, 0.1)',
        'soft-lg': '0 10px 40px rgba(255, 20, 147, 0.15)',
        'glow': '0 0 30px rgba(255, 20, 147, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 20, 147, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(255, 20, 147, 0)' },
        },
      },
    },
  },
  plugins: [],
}

