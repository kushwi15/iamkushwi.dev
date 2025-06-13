/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Flame/Fire colors
        flame: {
          50: '#fff5f0',
          100: '#ffede3',
          200: '#ffd4bc',
          300: '#ffb894',
          400: '#ff936d',
          500: '#ff6d45',
          600: '#ff4d1f',
          700: '#e73c10',
          800: '#c02e0a',
          900: '#9a2508',
        },
        // Charcoal/Dark colors
        charcoal: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d9e3',
          300: '#aeb8c9',
          400: '#8290aa',
          500: '#62738f',
          600: '#4c5a74',
          700: '#3e495f',
          800: '#353e50',
          900: '#202530',
        },
        // Accent colors
        accent: {
          teal: '#14B8A6',
          blue: '#3B82F6',
          purple: '#8B5CF6',
        },
        // Status colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        display: ['Cinzel Decorative', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        japanese: ['"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        'flame': '0 0 15px rgba(255, 109, 69, 0.5), 0 0 30px rgba(255, 77, 31, 0.3)',
        'flame-lg': '0 0 25px rgba(255, 109, 69, 0.6), 0 0 50px rgba(255, 77, 31, 0.4)',
      },
      animation: {
        'flame-pulse': 'flame-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slash': 'slash 0.5s ease-out',
      },
      keyframes: {
        'flame-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 109, 69, 0.5), 0 0 30px rgba(255, 77, 31, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 109, 69, 0.7), 0 0 40px rgba(255, 77, 31, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slash': {
          '0%': { transform: 'translateX(-100%) rotate(-45deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%) rotate(-45deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};