/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pf-black': '#000000',
        'pf-dark': '#0A0A0A',
        'pf-light': '#FFFFFF',
        'pf-light-secondary': '#F5F5F5',
        'pf-purple': '#7A2CF6',
        'pf-pink': '#E24BFF',
        'pf-blue': '#3D6DFF',
        'pf-cyan': '#4CF0FF',
        'pf-accent-pink': '#F077FF',
        'pf-accent-purple': '#A05DFF',
        'pf-accent-cyan': '#6DB8FF',
        'pf-text': '#FFFFFF',
        'pf-text-secondary': '#CFCFCF',
        'pf-text-dark': '#1A1A1A',
        'pf-text-dark-secondary': '#4A4A4A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #7A2CF6 0%, #E24BFF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #3D6DFF 0%, #4CF0FF 100%)',
        'gradient-hero': 'linear-gradient(135deg, #7A2CF6 0%, #E24BFF 50%, #4CF0FF 100%)',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(226, 75, 255, 0.25)',
        'neon-cyan': '0 0 20px rgba(77, 240, 255, 0.25)',
        'neon-purple-lg': '0 0 40px rgba(226, 75, 255, 0.3)',
        'neon-cyan-lg': '0 0 40px rgba(77, 240, 255, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(226, 75, 255, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(77, 240, 255, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};
