/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/products/MobileStore_Home.jpg')", // updated image to suit the Mobile Store theme
      },
    },
  },
  plugins: [],
};