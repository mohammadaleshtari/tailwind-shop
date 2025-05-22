/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {  // 👈 اینجا باید `extend` باشه
      screens: {
        mobile: "340px",
        desktop: "1000px",
      },
    },
  },
  plugins: [],
};

