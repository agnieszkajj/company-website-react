/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        forest: "url('/images/homepage-img.jpg')",
        employee1: "url('/images/employee1.jpg')",
        employee2: "url('/images/employee2.jpg')",
      },
    },
  },
  plugins: [],
};
