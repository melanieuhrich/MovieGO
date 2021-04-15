
var key = '8426e25c492b7e1c228e5403fd1be062';
var requestUrl = 'https://api.themoviedb.org/3/movie/550?api_key=8426e25c492b7e1c228e5403fd1be062'
var movie = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=cdeeab3b93b63acfe6a1d14f6ac420d2&language=en-US"
var keyMF = "cdeeab3b93b63acfe6a1d14f6ac420d2";


// Runtime Slider
var slider = document.getElementById('runTime-slider');
var runTimeSliderValueElement = document.getElementById('runTime-slider-value');
noUiSlider.create(slider, {
    start: [45, 300],
    connect: true,
    range: {
        'min': 0,
        'max': 400,
    },
    format: wNumb({
        decimals: 0,
    }),
});
slider.noUiSlider.on('update', function(values){
    runTimeSliderValueElement.innerHTML = values.join(' - ');
})

//Year Slider 2 
var slider = document.getElementById('year-slider2');
var yearSlider2ValueElement = document.getElementById('year-slider2-value');
noUiSlider.create(slider, {
    start: [1980, 2001],
    connect: true,
    range: {
        'min': 1960,
        'max': 2021,
    },
    format: wNumb({
        decimals: 0,
    }),
});
slider.noUiSlider.on('update', function (values){
    yearSlider2ValueElement.innerHTML = values.join(' - ');
});

function getGenres(){
    genreList = [];
    for (i = 0; i < $("#checkBoxForm").children().length - 1; i++)
    if ($(".checkboxinput").eq(i).is(":checked")) {
        genreList.push($(".checkboxinput").eq(i).attr("id"));
    }
    return genreList.toString();
};

var genres = getGenres();
var runtimeLte = 200;
var releaseLte = 2020;
var releaseGte = 1900;
var voteGte = 5;
// var adult = true;

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
    });

}

// function getGenres(){
//     genreList = [];
//     for (i = 0; i < $("#checkBoxForm").children().length - 1; i++)
//     if ($(".checkboxinput").eq(i).is(":checked")) {
//         genreList.push($(".checkboxinput").eq(i).attr("id"));
//     }
//     return genreList.toString();
// }


var submitBtn = document.getElementById('submit-btn');

function suggestMovie() { 
    console.log('working');
    var right = document.getElementById('right-panel')
    var recBox = document.createElement('div');
    var titleBox = document.createElement('div');
    var movieBox = document.createElement('div');
    var trailerBox = document.createElement('div');
    var basedOn = document.createElement('h5');
    var title = document.createElement('p');
    var genre = document.createElement('p');
    var year = document.createElement('p');
    var runTime = document.createElement('p');
    var familyFriendly = document.createElement('p');
    var rating = document.createElement('p');
    var trailer = document.createElement('div');
    basedOn.textContent = 'Based on your preferences, we suggest:'; 
    title.textContent = 'Title: '; // come back
    genre.textContent = 'Genre: '; // come back
    year.textContent = 'Year: '; // come back
    runTime.textContent = 'Run time: '; // come back
    familyFriendly.textContent = 'Family-friendly: '; // come back
    rating.textContent = 'Rating';  // come back
    trailer.textContent = 'Trailer: '; // come back
    console.log('movie');
    right.appendChild(recBox);
    recBox.appendChild(basedOn);
    recBox.appendChild(titleBox);
    recBox.appendChild(trailerBox);
    recBox.appendChild(movieBox);
    titleBox.appendChild(title);
    trailerBox.appendChild(trailer);
    movieBox.appendChild(title);
    movieBox.appendChild(genre);
    movieBox.appendChild(year);
    movieBox.appendChild(runTime);
    movieBox.appendChild(familyFriendly);
    movieBox.appendChild(rating);



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
    suggestMovie();
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

