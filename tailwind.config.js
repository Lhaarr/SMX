// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths as necessary
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e63946',         // Define your primary color
        'primary-dark': '#d62828',  // Darker variant for hover states
        'primary-light': '#f1a1a8', // Lighter variant for focus states
        foreground: '#333333',      // Text foreground color
        'muted-foreground': '#6b7280', // Muted text color
        background: '#f8fafc',      // Light background color
      },
      animation: {
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};