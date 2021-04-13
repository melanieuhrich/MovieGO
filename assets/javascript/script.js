var key = '8426e25c492b7e1c228e5403fd1be062';
var requestUrl = 'https://api.themoviedb.org/3/movie/550?api_key=8426e25c492b7e1c228e5403fd1be062'

// Runtime Slider
var slider = document.getElementById('runTime-slider');
  noUiSlider.create(slider, {
   start: [1960, 2021],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 1960,
     'max': 2021
   },
   format: wNumb({
     decimals: 0
   })
  });
       