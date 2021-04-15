
// api keys -- var key is JJ
var key = '8426e25c492b7e1c228e5403fd1be062';
var keyMF = "cdeeab3b93b63acfe6a1d14f6ac420d2";
var submitBtn = document.getElementById('submit-btn');

var requestUrl = 'https://api.themoviedb.org/3/movie/550?api_key=8426e25c492b7e1c228e5403fd1be062'
var movie = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&language=en-US" // this could be used if we really wanted to add runtime


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
var slider = document.getElementById('year-slider2');
var yearSlider2ValueElement = document.getElementById('year-slider2-value');
noUiSlider.create(slider, {
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
slider.noUiSlider.on('update', function (values){
    yearSlider2ValueElement.innerHTML = values.join(' - ');
});
//Slider 3: Rating
var slider = document.getElementById('rating-slider3');
var ratingSlider3ValueElement = document.getElementById('rating-slider3-value');
noUiSlider.create(slider, {
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
slider.noUiSlider.on('update', function (values){
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
var runtimeLte = 200;
var releaseLte = 2020;
var releaseGte = 1900;
var voteGte = 5;


// var  getlink = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=${adult}&with_genres=${genres}&with_runtime.lte=${runtimeLte}release_date.gte=${releaseGte}&primary_release_date.lte=${releaseLte}&vote_average.gte=${voteGte}&page=10`;
// var  getlink = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=${adult}&with_genres=${genres}&vote_average.gte=${voteGte}&page=10`;


function getMovie() {
    var adult = $(".checkboxinput").eq(19).is(":checked");
    console.log(adult);
    var genres = getGenres();
    var  getlink = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=${adult}&with_genres=${genres}&vote_average.gte=${voteGte}&page=10`;
    console.log(getlink);
    console.log(genres);
    fetch(getlink) 
    .then(function (yourpick){
        return yourpick.json();
    })
    .then (function (data) {
        console.log(data);
        var pickTitle = (data)['results'][0]['title']
        var releaseYear = (data)['results'][0]['release_date'].substring(0,4);
        console.log(releaseYear);
        console.log(pickTitle);
    suggestMovie();
    function suggestMovie() { 
    console.log('working');
    var right = document.getElementById('right-panel')
    var recBox = document.createElement('div');
    var titleBox = document.createElement('div'); // 
    var movieBox = document.createElement('div');
    // var trailerBox = document.createElement('div'); // a poster is probably way easer. ['results'][0]['poster_path'] (set image size)
    var basedOn = document.createElement('h5');
    var title = document.createElement('p'); ['results'][0]['title'] // ['results'][0]['release_date'].substring(0, 4); < just first 4 digits 
    var genre = document.createElement('p');
    var year = document.createElement('p');
    var runTime = document.createElement('p'); // we are currently using the discover API, we would need to use the movie API to get this info
    var familyFriendly = document.createElement('p'); // ['results'][0]['adult'] true == not family friendly (use if statement? ie if === true "This movie is not family-friendly")
    var rating = document.createElement('p'); // ['results'][0]['vote_average']
    var trailer = document.createElement('div');
    basedOn.textContent = 'Based on your preferences, we suggest:'; 
    title.textContent = pickTitle + " (" + releaseYear + ")";
    genre.textContent = 'Genre: '; // come back
    year.textContent = 'Year: '; // come back
    runTime.textContent = 'Run time: '; // come back
    familyFriendly.textContent = 'Family-friendly: '; // come back
    rating.textContent = 'Rating';  // come back
    console.log('movie');
    right.appendChild(recBox);
    recBox.appendChild(basedOn);
    recBox.appendChild(titleBox);
    // recBox.appendChild(trailerBox);
    recBox.appendChild(movieBox);
    titleBox.appendChild(title);
    // trailerBox.appendChild(trailer);
    movieBox.appendChild(title);
    movieBox.appendChild(genre);
    movieBox.appendChild(year);
    movieBox.appendChild(runTime);
    movieBox.appendChild(familyFriendly);
    movieBox.appendChild(rating);

}  
});

}

// submitBtn.addEventListener('click', suggestMovie);

    

// checkbox boolean + genre id    
// ($(".checkboxinput").eq(0).attr("id"));
// ($(".checkboxinput").eq(0).is(":checked"));


//test button

$(".btn").on("click", function () {
    $("#right-panel").empty();
    var list = getGenres();
    console.log(list);
    getMovie();
    // suggestMovie();
}
);

// function getGenres(){
//     genreList = [];
//     for (i = 0; i < $("#checkBoxForm").children().length - 1; i++)
//     if ($(".checkboxinput").eq(i).is(":checked")) {
//         genreList.push($(".checkboxinput").eq(i).attr("id"));
//     // console.log(genreList);
//     // console.log(genreList.toString());
//     }
//     return genreList.toString();
// }

