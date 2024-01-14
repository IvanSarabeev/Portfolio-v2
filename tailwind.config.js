/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'custom':'1600px',
      },
      backgroundColor:{
        'header-bg':'rgba(10, 25, 47, 0.85)',
      },
      fontFamily:{
        'monts':'SF Mono, Fira Code, Fira Mono, Roboto Mono, monospace',
        'sants':'Calibre, Inter, San Francisco, SF Pro Text, -apple-system, system-ui, sans-serif',
      },
      colors:{
        'white':'#e6f1ff',
        'slate':'#8892b0',
        'dark-slate':'#495670',
        'light-slate':'#a8b2d1',
        'lightest-slate': '#ccd6f6',
        'navy':'#0a192f',
        'dark-navy':'#020c1b',
        'navy-shadow':'rgba(2,12,27,0.7)',
        'light-navy':'#112240',
        'lightest-navy':'#233554',
        'green-tint':'rgba(100,255,218,0.1)',
        'pink':'#f57dff',
        'blue':'#57cbff',
        'green':'#64ffda',
      },
      translate:{
        'easing':"cubic-bezier(0.645,0.045,0.355,1)"
      },
      transitionTimingFunction:{
        'slow-transition':'all 0.25s cubic-bezier(0.645,0.045,0.355,1)',
      },
      boxShadow:{
        'mobile':'-10px 0px 30px -15px',
      },
      boxShadowColor:{
        'light-navy':'rgba(2,12,27,0.7)',
      }

    },
  },
  plugins: [],
}

