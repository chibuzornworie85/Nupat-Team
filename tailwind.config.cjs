/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'react': "url('src/assets/cover1.png')",
        'img': "url('src/assets/cover2.png)",
        'image': "url('src/assets/about/bg2.png)",
        'pic': "url('src/assets/it/bg.png)",
        'pics': "url('src/assets/rec/bg.png')",
        'ims': "url('src/assets/business/bg.png')",
        'ims': "url('src/assets/business/bg1.png')",
        'ims2': "url('src/assets/admi/stage.png')",
        'ims4': "url('src/assets/it/bg1.png')",
      }
    }
  },
  plugins: [],
}