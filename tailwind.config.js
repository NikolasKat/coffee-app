/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            "main-bg": "url('/main-bg.png')",
            "mramar-bg": "url('/mramar-bg.png')",
         },
      },
   },
   plugins: [],
};
