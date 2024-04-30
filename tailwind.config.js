/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#35a27d',
          secondary: '#19D3AE',
     
        }
      }
    ]
  },
  theme: {

    extend: {},
  },
  plugins: [require("daisyui")],
}

