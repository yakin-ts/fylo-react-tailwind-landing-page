/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'intro': 'hsl(217, 28%, 15%)',
          'main': 'hsl(218, 28%, 13%)',
          'footer': 'hsl(216, 53%, 9%)',
          'testimoial': 'hsl(219, 30%, 18%)',
        },
        accent: {
          'cyan': 'hsl(176, 68%, 64%)',
          'blue': 'hsl(198, 60%, 50%)',
          'light-red': 'hsl(0, 100%, 63%)',
        },
        neutral: {
          'white': 'hsl(0, 0%, 100%)',
        }
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: () => ({
        'desktop': "url('../src/assets/images/bg-curvy-desktop.svg')",
        'mobile': "url('../src/assets/images/bg-curvy-mobile.svg')",
        'quote': "url('./images/pattern-quotes.svg')",
      }),
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
    },
  },
  plugins: [],
}