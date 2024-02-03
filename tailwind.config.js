/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      /*foo: { "[linear-gradient(theme(colors.blue.500),theme(colors.blue.400),theme(colors.blue.300),theme(colors.yellow.100),theme(colors.blue.800),theme(colors.blue.700),theme(colors.blue.600),theme(colors.blue.500))] bg-fixed",
      },*/
    },
  },
  plugins: [require("tailwindcss-animate")],
};
