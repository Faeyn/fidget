import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {keyframes:{
      'keyframes-circle-animation' : {
        '0%': { transform: 'scale(1)', backgroundColor: '#0000FF' },
        '100%': { transform: 'scale(0)', backgroundColor: '#FF0000' },
      },
    },
    animation: {
      'circle-animation' : 'keyframes-circle-animation 5s linear forwards',
    },
  },
  },
  plugins: [],
} satisfies Config;


