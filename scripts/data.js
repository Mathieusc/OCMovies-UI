// Modal elements:
let modal = document.getElementsByClassName("modal")[0];
let closeButton = document.getElementsByClassName("close_button")[0];
modalTitle = modal.getElementsByTagName("h2")[0];

modalDescription = modal.getElementsByClassName("modal_description")[0];
modalImage = modal.getElementsByClassName("modal_body").item(0).getElementsByTagName("img")[0];
modalDate = modal.getElementsByClassName("modal_header").item(0).getElementsByTagName("p")[0];
modalDuration = modal.getElementsByClassName("modal_header").item(0).getElementsByTagName("span")[1];
modalRated = modal.getElementsByClassName("modal_footer").item(0).getElementsByTagName("p")[0];
modalImdbScore = modal.getElementsByClassName("modal_footer").item(0).getElementsByTagName("p")[1];
modalDirectors = modal.getElementsByClassName("modal_footer").item(0).getElementsByTagName("p")[2];
modalActors = modal.getElementsByClassName("modal_footer").item(0).getElementsByTagName("p")[3];
modalCountries = modal.getElementsByClassName("modal_footer").item(0).getElementsByTagName("p")[4];
modalBoxOffice = modal.getElementsByClassName("modal_footer").item(0).getElementsByTagName("p")[5];



const moviesApi = "http://localhost:8000/api/v1/titles/?imdb_score_min=8.3&page_size=100&sort_by=-imdb_score";


let bestMovieTitle = document.getElementsByClassName("best_movie_description").item(0).getElementsByTagName("h2");
let bestMovieDescription = document.getElementsByClassName("best_movie_description").item(0).getElementsByTagName("p");
let bestMovieImage = document.getElementsByClassName("best_movie_image").item(0);
let bestMovieUrl;
let bestMovieDetails;

const bestMovie = {
    url: moviesApi.replace("imdb_score_min=8.3", "imdb_score_min=9.6"),
    image: bestMovieImage,
    details: bestMovieDetails,
    title: bestMovieTitle,
    description: bestMovieDescription
};


let topRatedMoviesCarrousel = document.getElementsByClassName("carrousel_container top-rated").item(0);
let topRatedMoviesImages;
let topRatedMoviesDetails;


const topRatedMovies = {
    url: moviesApi.replace("imdb_score_min=8.3", "imdb_score_min=9.3"),
    carrousel: topRatedMoviesCarrousel,
    images: topRatedMoviesImages,
    details: topRatedMoviesDetails
}

let animeMoviesCarrousel = document.getElementsByClassName("carrousel_container anime").item(0);
let animeMoviesImages;
let animeMoviesDetails;

const animeMovies = {
    url: moviesApi + "&genre=Animation",
    carrousel: animeMoviesCarrousel,
    images : animeMoviesImages,
    details: animeMoviesDetails
}


let horrorMoviesCarrousel = document.getElementsByClassName("carrousel_container horror").item(0);
let horrorMoviesImages;
let horrorMoviesDetails;

const horrorMovies = {
    url: moviesApi + "&genre=Horror",
    carrousel: horrorMoviesCarrousel,
    images: horrorMoviesImages,
    details: horrorMoviesDetails
}

let musicalMoviesCarrousel = document.getElementsByClassName("carrousel_container musical").item(0);
let musicalMoviesImages;
let musicalMoviesDetails;

const musicalMovies = {
    url: moviesApi + "&genre=Musical",
    carrousel: musicalMoviesCarrousel,
    images: musicalMoviesImages,
    details: musicalMoviesDetails
}

