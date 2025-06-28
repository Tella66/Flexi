module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        background: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          light1: "var(--bg-light-1)",
          light2: "var(--bg-light-2)",
          white: "var(--bg-white)",
          overlay: "var(--bg-overlay)"
        },
        text: {
          black: "var(--text-black)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          accent: "var(--text-accent)",
          gray1: "var(--text-gray-1)",
          gray2: "var(--text-gray-2)",
          light: "var(--text-light)",
          white: "var(--text-white)"
        },
        button: {
          primary: "var(--button-primary)",
          secondary: "var(--button-secondary)"
        },
        border: {
          light: "var(--border-light)"
        }
      }
    }
  },
  plugins: []
};