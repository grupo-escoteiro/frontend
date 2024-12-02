/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'light-social-brand': '#E2F0E1',
        'light-social-blue': '#BCD6D7',
        'social-brand': '#059A00',
        'social-white': '#FAFAFA',
        'social-red': '#FF6347',
        'social-gray': '#AFAFAF',
        'social-black': '#1A1A1A',

        'dark-social-brand': '#0A3B0A',
        'dark-social-blue': '#1A4A4B',
        'dark-social-accent': '#06C700',
        'dark-social-background': '#1A1A1A',
        'dark-social-red': '#FF8C7A',
        'dark-social-gray': '#252323',
        'dark-social-white': '#E0E0E0',
      },
      boxShadow: {
        default: '2px 4px 10px 0 rgba(26, 26, 26, 0.25)',
      },
    },
  },
  plugins: [],
};
