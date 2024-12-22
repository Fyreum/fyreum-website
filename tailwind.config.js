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
        'background': 'rgb(0,0,0)',
        'dark-0': 'rgb(25, 27, 30)',
        'dark-1': 'rgb(37, 40, 45)',
        'dark-2': 'rgb(62,70,80)',
        'light-border': 'rgb(50,56,64,0.3)',
        'glow': {
          100: '#802dfd',
          200: '#2855ff',
          300: '#4ad0ff',
        }
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

    "bg-blue-600",
    "border-blue-600",
    "bg-gray-600",
    "border-gray-600",
    "bg-green-600",
    "border-green-600",
    "bg-orange-600",
    "border-orange-600",
    "bg-purple-600",
    "border-purple-600",
    "bg-red-600",
    "border-red-600",
    "bg-yellow-600",
    "border-yellow-600",
  ],
  plugins: [],
}

