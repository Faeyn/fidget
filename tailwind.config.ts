import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {keyframes:{
      'keyframes-circle-animation' :
      {
        '0%': { transform: 'scale(1)', backgroundColor: '#0022FF' },
        '70%': { transform: 'scale(0.25)', backgroundColor: '#00aaff'},
        '72.5%': { transform: 'scale(0.25)', backgroundColor: '#FF0000'},
        '75%': { transform: 'scale(0.25)', backgroundColor: '#550000'},
        '77.5%': { transform: 'scale(0.25)', backgroundColor: '#FF0000'},
        '80%': { transform: 'scale(0.25)', backgroundColor: '#550000'},
        '85%': { transform: 'scale(0.25)', backgroundColor: '#FF0000'},
        '87.5%': { transform: 'scale(0.25)', backgroundColor: '#550000'},
        '90%': { transform: 'scale(0.25)', backgroundColor: '#FF0000'},
        '92.5%': { transform: 'scale(0.25)', backgroundColor: '#550000'},
        '95%': { transform: 'scale(0.25)', backgroundColor: '#FF0000'},
        '97.5%': { transform: 'scale(0.25)', backgroundColor: '#550000'},
        '100%': { transform: 'scale(0.25)', backgroundColor: '#FF0000' },
      },
    },
    animation: {
      'circle-animation' : 'keyframes-circle-animation 5s linear forwards',
    },
  },
  },
  plugins: [],
} satisfies Config;


