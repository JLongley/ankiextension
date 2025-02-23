module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        // Max value is 2147483647
        max: '2147483647',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  variants: {},
  corePlugins: {
    preflight: true,
  },
};
