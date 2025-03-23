/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@chakra-ui/react/**/*.{js,ts,jsx,tsx}", // For Chakra UI support
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
