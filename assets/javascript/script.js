var key = '8426e25c492b7e1c228e5403fd1be062';
var keyMF = "cdeeab3b93b63acfe6a1d14f6ac420d2";
var submitBtn = document.getElementById('submit-btn');
var requestUrl = 'https://api.themoviedb.org/3/movie/550?api_key=8426e25c492b7e1c228e5403fd1be062'

// Slider: Runtime
var slider = document.getElementById('runTime-slider');
var runTimeSliderValueElement = document.getElementById('runTime-slider-value');
noUiSlider.create(slider, {
    start: [60, 120],
    connect: true,
    range: {
        'min': 0,
        'max': 300,
    },
    format: wNumb({
        decimals: 0,
    }),
});
slider.noUiSlider.on('update', function(values){
    runTimeSliderValueElement.innerHTML = (values.join(' - ') + " minutes");
})

//Slider 2: Rating
var slider2 = document.getElementById('year-slider2');
var yearSlider2ValueElement = document.getElementById('year-slider2-value');
noUiSlider.create(slider2, {
    start: [2000, 2021],
    connect: true,
    range: {
        'min': 1950,
        'max': 2021,
    },
    format: wNumb({
        decimals: 0,
    }),
});
slider2.noUiSlider.on('update', function (values){
    yearSlider2ValueElement.innerHTML = values.join(' - ');
});
//Slider 3: Rating
var slider3 = document.getElementById('rating-slider3');
var ratingSlider3ValueElement = document.getElementById('rating-slider3-value');
noUiSlider.create(slider3, {
    start: [6, 10],
    connect: true,
    range: {
        'min': 0,
        'max': 10,
    },
    format: wNumb({
        decimals: 0,
    }),
});
slider3.noUiSlider.on('update', function (values){
ratingSlider3ValueElement.innerHTML = (values.join(' - ') + ' Stars');
});


function getGenres(){
    genreList = [];
    for (i = 0; i < $("#checkBoxForm").children().length - 1; i++)
    if ($(".checkboxinput").eq(i).is(":checked")) {
        genreList.push($(".checkboxinput").eq(i).attr("id"));
    }
    return genreList.toString();
};

// var genres = getGenres();

var releaseLte = 2020;
var releaseGte = 1900;
// var voteGte = 5;


// var  getlink = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=${adult}&with_genres=${genres}&with_runtime.lte=${runtimeLte}release_date.gte=${releaseGte}&primary_release_date.lte=${releaseLte}&vote_average.gte=${voteGte}&page=10`;
// var  getlink = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=${adult}&with_genres=${genres}&vote_average.gte=${voteGte}&page=10`;


function getMovie() {
    var runtimeSlider = slider.noUiSlider.get();
    var yearSlider = slider2.noUiSlider.get();
    var ratingSlider = slider3.noUiSlider.get();
    console.log(runtimeSlider);
    var adult = $(".checkboxinput").eq(19).is(":checked");
    var genres = getGenres();
    var runtimeGte = runtimeSlider[0];
    var runtimeLte = runtimeSlider[1];
    var yearGte = yearSlider[0] + "-01-01";
    var yearLte = yearSlider[1] + "-01-01";
    var ratingGte = ratingSlider[0];
    var ratingLte = ratingSlider[1];
    var  getlink = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&with_runtime.gte=${runtimeGte}&with_runtime.lte=${runtimeLte}&include_adult=${adult}&with_genres=${genres}&vote_average.gte=${ratingGte}&vote_average.lte=${ratingLte}&primary_release_date.gte=${yearGte}&primary_release_date.lte=${yearLte}&page=10`;
    fetch(getlink) 
    .then(function (yourpick){
        return yourpick.json();
    })
    .then (function (data) {
        console.log(data);
        var pickTitle = (data)['results'][0]['title']
        var releaseYear = (data)['results'][0]['release_date'].substring(0,4);
        var plotSynopsis = (data)['results'][0]['overview'];
        var avgUserScore = (data)['results'][0]['vote_average'];
        var moviePoster = 'https://image.tmdb.org/t/p/w500' + (data)['results'][0]['poster_path'];  
        var movie_id = (data)['results'][0]['id'];
        var movie = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&language=en-US` // this could be used if we really wanted to add runtime
        fetch (movie)
        .then (function(runminutes) {
            return runminutes.json();
        })
        .then (function(moviedata) {
            console.log(moviedata);
            var minutes = (moviedata)['runtime'];
            console.log(minutes);
        
        

    suggestMovie();

    function suggestMovie() { 
    var right = document.getElementById('right-panel')
    var recBox = document.createElement('div');
    recBox.setAttribute("id", "recbox");
    var titleBox = document.createElement('div'); 
    var movieBox = document.createElement('div');
    var basedOn = document.createElement('h3');
    var title = document.createElement('h3'); ['results'][0]['title'] 
    var genre = document.createElement('p');
    var synopsis = document.createElement('p');
    synopsis.classList.add("synopsisP");
    var runTime = document.createElement('p'); 
    var rating = document.createElement('p'); // 
    basedOn.textContent = 'Based on your preferences, we suggest:'; 
    title.textContent = pickTitle + " (" + releaseYear + ")";
    runTime.textContent = minutes + " minutes"; 
    synopsis.textContent = plotSynopsis;
    rating.textContent = 'Average User Score: ' + avgUserScore ; 
    right.appendChild(recBox);
    recBox.appendChild(basedOn);
    recBox.appendChild(titleBox);
    recBox.appendChild(movieBox);
    titleBox.appendChild(title);
    movieBox.appendChild(title);
    if ((data)['results'][0]['poster_path'] !== null){
        var posterBox = document.createElement('div');
        var poster = document.createElement('img');
        poster.setAttribute('src', moviePoster);
        recBox.appendChild(posterBox);
        posterBox.appendChild(poster);
        poster.classList.add('poster-size');
    }
    movieBox.appendChild(genre);
    movieBox.appendChild(synopsis);
    movieBox.appendChild(runTime);
    movieBox.appendChild(rating);


} });
});
};
     

$(".btn").on("click", function () {
    $("#right-panel").empty();
    var list = getGenres();
    console.log(list);
    getMovie();
    
    
}
);