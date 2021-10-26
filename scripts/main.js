
const topRatedMoviesApi = "http://localhost:8000/api/v1/titles/?imdb_score_min=9.3&page_size=100&sort_by=-imdb_score";
let topRatedMoviesCarrousel = document.getElementsByClassName("carrousel_container top-rated").item(0).getElementsByTagName("img");
let topRatedMovies;
let bestMovieImage = document.getElementsByClassName("best_movie_image").item(0);
let bestMovie;

const animeMoviesApi = "http://localhost:8000/api/v1/titles/?imdb_score_min=8.5&page_size=100&sort_by=-imdb_score&genre=Animation";
let animeMoviesCarrousel = document.getElementsByClassName("carrousel_container anime").item(0).getElementsByTagName("img");
let animeMovies;

const horrorMoviesApi = "http://localhost:8000/api/v1/titles/?imdb_score_min=8.4&page_size=100&sort_by=-imdb_score&genre=Horror";
let horrorMoviesCarrousel = document.getElementsByClassName("carrousel_container horror").item(0).getElementsByTagName("img");
let horrorMovies;

const musicalMoviesApi = "http://localhost:8000/api/v1/titles/?imdb_score_min=8.6&page_size=100&sort_by=-imdb_score&genre=Musical";
let musicalMoviesCarrousel = document.getElementsByClassName("carrousel_container musical").item(0).getElementsByTagName("img");
let musicalMovies;


// API request, get all image urls from the top rated movies inside a new Array:
const fetchTopRatedMovies = async() => {
    topRatedMovies = await fetch(topRatedMoviesApi)
    .then(response => response.json())
    
    // Get the best movie apart from the other.
    bestMovie = topRatedMovies.results[0];
    
    // Map all image urls from the results inside a new Object:
    let topRatedMoviesImagesUrl = topRatedMovies.results.map(imageUrl => {
        return imageUrl.image_url;
    });
    
    // Remove the first movie since it is the best one. The best movie is displayed on it's own.
    topRatedMoviesImagesUrl.shift();
    
    // Slice the urls since we only need 7 movies in total.
    let topRatedMoviesImages = topRatedMoviesImagesUrl.slice(0, 7);
    
    // Insert pictures into the carrousel for the corresponding category.
    for (let i = 0; i < topRatedMoviesCarrousel.length; i++) {
        topRatedMoviesCarrousel[i].src = topRatedMoviesImages[i];
    };
};


const fetchAnimeMovies = async() => {
    animeMovies = await fetch(animeMoviesApi)
    .then(response => response.json())

    let animeMoviesImageUrl = animeMovies.results.map(imageUrl => {
        return imageUrl.image_url;
    });

    let animeMoviesImages = animeMoviesImageUrl.slice(0, 7);

    for (let i = 0; i < animeMoviesCarrousel.length; i++) {
        animeMoviesCarrousel[i].src = animeMoviesImages[i];
    }
};


const fetchHorrorMovies = async() => {
    horrorMovies = await fetch(horrorMoviesApi)
    .then(response => response.json())

    let horrorMoviesImagesUrl = horrorMovies.results.map(imageUrl => {
        return imageUrl.image_url;
    });

    let horrorMoviesImages = horrorMoviesImagesUrl.slice(0, 7);

    for (let i=0; i<horrorMoviesCarrousel.length; i++) {
        horrorMoviesCarrousel[i].src = horrorMoviesImages[i];
    }
};


const fetchMusicalMovies = async() => {
    musicalMovies = await fetch(musicalMoviesApi)
    .then(response => response.json())

    let musicalMoviesImagesUrl = musicalMovies.results.map(imageUrl => {
        return imageUrl.image_url;
    });

    let musicalMoviesImages = musicalMoviesImagesUrl.slice(0, 7);

    for (let i = 0; i < musicalMoviesCarrousel.length; i ++) {
        musicalMoviesCarrousel[i].src = musicalMoviesImagesUrl[i];
    }
};


fetchTopRatedMovies();
fetchAnimeMovies();
fetchHorrorMovies();
fetchMusicalMovies();