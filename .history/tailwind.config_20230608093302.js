/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        'light': {
           'primary' : '#304566',
           'primary-focus' : '#6EC1E4',
           'primary-content' : '#ffffff',

           'secondary' : '#FFA1AC',
           'secondary-focus' : '#FFD3BD',
           'secondary-content' : '#ffffff',

           'accent' : '#37cdbe',
           'accent-focus' : '#2ba69a',
           'accent-content' : '#ffffff',

           'neutral' : '#3b424e',
           'neutral-focus' : '#2a2e37',
           'neutral-content' : '#ffffff',

           'base-100' : '#ffffff',
           'base-200' : '#f9fafb',
           'base-300' : '#ced3d9',
           'base-content' : '#1e2734',

           'info' : '#1c92f2',
           'success' : '#009485',
           'warning' : '#ff9900',
           'error' : '#ff5724',

          '--rounded-box': '1rem',          
          '--rounded-btn': '.5rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

