/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            "main-bg": "url('/main-bg.png')",
            "mramar-bg": "url('/mramar-bg.png')",
            "small-bg": "url('/bg-small.png')",
            "small-bg2": "url('/bg-small1.png')",
         },
      },
   },
   plugins: [],
};
