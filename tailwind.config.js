/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'bg-blue': 'rgb(34,109,231,0.175)',
        'bg-green': 'rgb(34,197,94,0.175)',
        'bg-pink': 'rgb(236,72,153,0.175)',
        'bg-purple': 'rgb(139,92,246,0.175)',
        'bg-red': 'rgba(236,72,72,0.17)',
        'background': 'rgb(2,9,23)',
        'dark-0': 'rgb(25, 27, 30)',
        'dark-1': 'rgb(37, 40, 45)',
        'dark-2': 'rgb(62,70,80)',
        'light-border': 'rgb(50,56,64,0.3)',
      },
      screens: {
        'sm-max': { 'max': '640px' },
      },
      boxShadow: {
        'glow': '0px 3px 8px -2px theme("colors.dark-2")',
      },
    },
  },
  safelist: [ // Always include the following classes in the build process:
    "sm:col-span-1",
    "sm:col-span-2",
    "sm:aspect-[1/1]",
    "sm:aspect-[2/1]",
    "sm-max:aspect-[1/1]",
    "sm-max:aspect-[1/2]",

    "grid-image",
    "grid-hover-card",
    "sm:flex-[1_0_0]",
    "object-bottom",
  ],
  plugins: [],
}

