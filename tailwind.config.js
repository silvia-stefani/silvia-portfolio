module.exports = {
  content: [
    "./index.html","./src/**/*.{js,jsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold':'#ffbac6',
        'blackie':'#111111',
        'graylie': '#D3D6D7'
      }
    },
  },
  variants: {
    extend: {
      textColor: ['group-hover']
    }
  },
  plugins: [],
}