/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px', // Default border width
        0: '0', // No border
        2: '2px', // 2px border width
        4: '4px', // 4px border width
        8: '8px', // 8px border width
      },
      borderColor: (theme) => ({
        ...theme('colors'), // Use the default color palette
        gray: '#ccc', // Custom gray border color
      }),
    },
  },
  plugins: [],
  corePlugins: {
    borderWidth: true,
  },
};
