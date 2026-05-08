/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        slatewater: {
          50: 'hsl(204 44% 97%)',
          100: 'hsl(205 38% 93%)',
          200: 'hsl(205 34% 86%)',
          300: 'hsl(205 28% 74%)',
          400: 'hsl(205 22% 57%)',
          500: 'hsl(205 21% 43%)',
          600: 'hsl(205 27% 32%)',
          700: 'hsl(207 32% 24%)',
          800: 'hsl(209 37% 17%)',
          900: 'hsl(210 44% 11%)',
          950: 'hsl(213 48% 7%)',
        },
        aqua: {
          50: 'hsl(184 100% 96%)',
          100: 'hsl(185 88% 90%)',
          200: 'hsl(187 82% 79%)',
          300: 'hsl(188 78% 64%)',
          400: 'hsl(190 72% 49%)',
          500: 'hsl(193 78% 39%)',
          600: 'hsl(196 82% 31%)',
          700: 'hsl(199 77% 24%)',
          800: 'hsl(201 67% 19%)',
          900: 'hsl(204 58% 15%)',
        },
      },
      boxShadow: {
        lift: '0 28px 70px -28px hsl(210 44% 11% / 0.38), 0 2px 8px hsl(210 44% 11% / 0.16)',
        soft: '0 18px 44px -24px hsl(210 44% 11% / 0.28), 0 1px 4px hsl(210 44% 11% / 0.12)',
      },
      fontFamily: {
        display: ['Spem', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
