
// let movies = fetch("http://localhost:8000/api/v1/titles/")
// .then(response => response.json())
// .then(response =>
//     console.log(JSON.stringify(response)))
// .then(response => JSON.stringify(response))
// .catch(error => console.log("Erreur: " + error));

// console.log(movies);

const topRatedMoviesApi = "http://localhost:8000/api/v1/titles/?year=&min_year=&max_year=&imdb_score=&imdb_score_min=9.3&imdb_score_max=&title=&title_contains=&genre=&genre_contains=&sort_by=-imdb_score&director=&director_contains=&writer=&writer_contains=&actor=&actor_contains=&country=&country_contains=&lang=&lang_contains=&company=&company_contains=&rating=&rating_contains=";

let topRatedMoviesCarrousel = document.getElementsByClassName("carrousel_container top-rated").item(0).getElementsByTagName("img");

let bestMovie;
let bestMovieImage = document.getElementsByClassName("best_movie_image").item(0);
console.log("Best movie image:");
console.log(bestMovieImage);

let topRatedmoviesPageOne;
// API request, get all image urls from the top rated movies inside a new Array:
const fetchTopRatedMovies = async() => {
    topRatedmoviesPageOne = await fetch(topRatedMoviesApi)
    .then(response => response.json())
    // To get the results: moviesPageOne.results
    
    // Get the results from page 2 since we need 7 image in total (only 5 movies per page).
    let topRatedmoviesPageTwo = topRatedmoviesPageOne.next;
    topRatedmoviesPageTwo = await fetch(topRatedmoviesPageOne.next)
    .then(response => response.json())
    //testMoviesImages[0].src = movies.results[0].image_url;
    
    // Get the best movie apart from the other.
    bestMovie = topRatedmoviesPageOne.results[0];
    
    // Get all image urls from the 1st page inside a new Object:
    let topRatedMoviesImageUrl_1 = topRatedmoviesPageOne.results.map(imageUrl => {
        return imageUrl.image_url;
    });
    // Get all image urls from the 2nd page inside another Object:
    let topRatedMoviesImageUrl_2 = topRatedmoviesPageTwo.results.map(imageUrl => {
        return imageUrl.image_url;
    })
    
    console.log("Page 1 urls: ");
    console.log(topRatedMoviesImageUrl_1);
    console.log("Page 2 urls: ");
    console.log(topRatedMoviesImageUrl_2);
    
    // Remove the first movie since it is the best one. The best movie is displayed on it's own.
    topRatedMoviesImageUrl_1.shift();
    
    // Slice the second page urls since we only need 7 movies in total.
    topRatedMoviesImageUrl_2 = topRatedMoviesImageUrl_2.slice(0, 3);
    
    // Merge the urls from both pages into a single Array, created before the fetch call.
    topRatedMoviesUrl = [...topRatedMoviesImageUrl_1, ...topRatedMoviesImageUrl_2];
    console.log("Top rated movies Url : ");
    console.log(topRatedMoviesUrl);
    
    // Insert pictures into the carrousel for the corresponding category.
    console.log("Top rated carrousel");
    console.log(topRatedMoviesCarrousel);
    for (let i = 0; i < topRatedMoviesCarrousel.length; i++) {
        topRatedMoviesCarrousel[i].src = topRatedMoviesUrl[i];
    }
    
    console.log("Best movie info:");
    console.log(bestMovie);
};

let topRatedMoviesUrl = [];
fetchTopRatedMovies();
