
var key = '8426e25c492b7e1c228e5403fd1be062';
var requestUrl = 'https://api.themoviedb.org/3/movie/550?api_key=8426e25c492b7e1c228e5403fd1be062'

var tmdb = "https://api.themoviedb.org/3/movie/550?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2"
var genre = "https://api.themoviedb.org/3/genre/movie/list?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&language=en-US"
var movie = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&language=en-US"
var search = "https://api.themoviedb.org/3/search/movie?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&query=Home+Alone"
var key = "cdeeab3b93b63acfe6a1d14f6ac420d2"

// Runtime Slider
var slider = document.getElementById('runTime-slider');

=======
var runTimeSliderValueElement = document.getElementById('runTime-slider-value');


noUiSlider.create(slider, {
    start: [45, 300],
    connect: true,
    range: {
        'min': 0,
        'max': 400,
    }
});


//slider 2 - 
var slider = document.getElementById('year-slider2');
  noUiSlider.create(slider, {
   start: [1960, 2021],
   connect: true,
   range: {
     'min': 1960,
     'max': 2021
   },
  });
       

var tmdb = "https://api.themoviedb.org/3/movie/550?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2"
var genre = "https://api.themoviedb.org/3/genre/movie/list?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&language=en-US"
var movie = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&language=en-US"
var search = "https://api.themoviedb.org/3/search/movie?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&query=Home+Alone"
var key = "cdeeab3b93b63acfe6a1d14f6ac420d2"


=======
slider.noUiSlider.on('update', function (values) {
    runTimeSliderValueElement.innerHTML = values.join(' - ');
});
//Year Slider 2 
var slider = document.getElementById('year-slider2');
var yearSlider2ValueElement = document.getElementById('year-slider2-value');
noUiSlider.create(slider, {
    start: [1980, 2001],
    connect: true,
    range: {
        'min': 1960,
        'max': 2021,
    }
});
slider.noUiSlider.on('update', function (values){
    yearSlider2ValueElement.innerHTML = values.join(' - ');
})


fetch(search)
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data);
        // console.log(data);
    for (var i = 0; i < data.length; i++){
        console.log(data);
        console.log(data[i].adult);
        console.log(data[i].original_title);
    }
    })


    fetch(genre)
    .then(function (response){
        return response.json();
    })
    .then (function (data) {
        console.log(data);
    })






var genres = 28;
var runtimeLte = 100;
var releaseLte = 1991;
var releaseGte = 1980;
var voteGte = 8;
var adult = true;

var  getlink = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=${adult}&with_genres=${genres}&with_runtime.lte=${runtimeLte}release_date.gte=${releaseGte}&primary_release_date.lte=${releaseLte}&vote_average.gte=${voteGte}&page=10`;

fetch(getlink) 
    .then(function (yourpick){
        return yourpick.json();
    })
    .then (function (data) {
        console.log(data);
    })

var submitBtn = document.getElementById('submit-btn');

function suggestMovie() { 
    console.log('working');
    var right = document.getElementById('right-panel')
    var recBox = document.createElement('div');
    var movieBox = document.createElement('div');
    var trailerBox = document.createElement('div');
    var basedOn = document.createElement('h3');
    var title = document.createElement('p');
    var genre = document.createElement('p');
    var year = document.createElement('p');
    var runTime = document.createElement('p');
    var familyFriendly = document.createElement('p');
    var rating = document.createElement('p');
    basedOn.textContent = 'Based on your preferences, we suggest:';
    console.log('movie');
    right.appendChild(recBox);
    recBox.appendChild(movieBox);
    recBox.appendChild(trailerBox);
    movieBox.appendChild(basedOn);

}  

submitBtn.addEventListener('click', suggestMovie)

    
