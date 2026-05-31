import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1B2D4F',
          'navy-light': '#243d6b',
          'navy-dark': '#111e33',
          gold: '#C8841E',
          'gold-light': '#E8A020',
          'gold-dark': '#a06010',
          cream: '#FDF8F0',
          'gray-light': '#F5F5F5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1B2D4F 0%, #243d6b 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C8841E 0%, #E8A020 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(27,45,79,0.7) 0%, rgba(27,45,79,0.4) 50%, rgba(27,45,79,0.8) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideDown: { '0%': { opacity: '0', transform: 'translateY(-10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(27,45,79,0.10)',
        'card-hover': '0 12px 40px rgba(27,45,79,0.18)',
        'gold': '0 4px 20px rgba(200,132,30,0.35)',
      },
    },
  },
  plugins: [],
}

export default config
