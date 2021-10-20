module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx,css}', './components/**/*.{js,ts,jsx,tsx,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'danger' : 'rgb(173,173,173)',
      'blur'   : '#f2fafa',
      '00CCCC' : '#00CCCC',
      '9900FF' :'#9900FF',
      'AB82FF':'#AB82FF',
      '#FFF5EE':'#FFF5EE',
      'GhostWhite':'#F8F8FF',
      'TimNhat':'#CC99FF',
      'Tim9999FF':'#9999FF',
      'tim#FF66FF':'#CC66FF',
      'xanh31c2b8':'#31c2b8',
      'xanhlo':'#a6dfd7',
      'doFF3636':'#FF3636',
      'red':'#FF0000',
      'bg5F939A':'#5F939A',
      '#A0937D':'#A0937D',
      'white':'#FFFFFF',
      '#523e3f':'#523e3f',
      '#31c2b8':'#31c2b8',
      '#d5c1f7' : '#d5c1f7',
      'FDF5E6' : '#FDF5E6',
      'blueGray-50': '#f8fafc',
      'blueGray-100': '#f1f5f9'
     }),
     borderColor: theme => ({
      ...theme('colors'),

        'GhostWhite':'#F8F8FF',
        'xanh31c2b8':'#31c2b8',
        'doFF3636':'#FF3636',
        '#A0937D':'#A0937D',
     }),
     gradientColorStops: theme => ({
      ...theme('colors'),
      'primary': '#128386',
      '98D0B9' : '#98D0B9'
     }),
     fontFamily: {
      'BlinkMacSystemFont':'BlinkMacSystemFont',
      },
       extend: {
        zIndex: {
         '99': '99',
        }
      },
      textColor: {
        '00CCCC' : '#00CCCC',
        '#FFFFFF':'#FFFFFF',
        '#555555':'#555555',
        'Timpatel':'#9933FF',
        'TimNhat':'#CC99FF',
        'GhostWhite':'#F8F8FF',
        'xanh31c2b8':'#31c2b8',
        'LightSeaGreen':'#008080',
        'white':'#FFFFFF',
        'Tim9999FF':'#9999FF',
        '#FF0066':'#CC00FF',
        'blueGray-400': '#94a3b8',
        'blueGray-700': '#334155',
        'blueGray-600': '#475569'
       },
       fontFamily: {
        'display': ['Calibri'],
       }
     
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
