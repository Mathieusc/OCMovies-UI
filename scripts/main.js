const fetchBestMovie = async (movie) => {
    movie["details"] = await fetch(movie["url"])
    .then(response => response.json());

    let bestImage = document.createElement("img");
    bestImage.src = movie["details"].results[0].image_url;
    bestImage.id = movie["details"].results[0].id;
    movie["image"].appendChild(bestImage);
    bestImage.addEventListener("click", () => openModal(bestImage.id));
    closeButton.addEventListener("click", closeModal);
    movie["title"][0].innerHTML = movie["details"].results[0].title;
    updateBestMovieDescription(bestImage.id);
    
};


const fetchMovies = async (movies) => {
    movies["details"] = await fetch(movies["url"])
    .then(response => response.json());
    console.log(movies["details"]);
    
    if (movies == topRatedMovies) {
        movies["details"].results.shift();
    };
    
    for (let i = 0; i < 7; i ++) {
        let newImage = document.createElement("img");
        newImage = document.createElement("img");
        newImage.src = movies["details"].results[i].image_url;
        newImage.id = movies["details"].results[i].id;
        movies["carrousel"].appendChild(newImage);
        newImage.addEventListener("click", () => openModal(newImage.id));
        closeButton.addEventListener("click", closeModal);
    };
};


const openModal = async (id) => {
    let movieDetails;
    movieDetails = await fetch("http://localhost:8000/api/v1/titles/" + id)
    .then(response => response.json());
    console.log(movieDetails);
    modal.style.display = "block";

    modalTitle.innerHTML = movieDetails.original_title;
    modalImage.src = movieDetails.image_url;
    modalDescription.innerHTML = movieDetails.long_description + "<br><br><strong>Actors</strong> : " + movieDetails.actors;
    modalDate.innerHTML = movieDetails.date_published;
    // let hours = Math.floor(totalSeconds / 3600);
    // let totalSeconds;
    // totalSeconds %= 3600;
    // let minutes =  Math.floor(totalSeconds / 60);
    // let seconds = totalSeconds % 60;
    modalDuration.innerHTML = displayDuration(movieDetails.duration);
    modalRated.innerHTML = movieDetails.rated;
    modalImdbScore.innerHTML = movieDetails.imdb_score + "\n&#11088";
    modalDirectors.innerHTML = "Directors : " + movieDetails.directors;
    modalActors.innerHTML = movieDetails.genres;
    modalCountries.innerHTML = movieDetails.countries;
    modalBoxOffice.innerHTML = "Gross income : " + new Intl.NumberFormat("en-us", { style: "currency", currency: "USD" }).format(movieDetails.worldwide_gross_income);
};

const displayDuration = (minutes) => {
    let hours = Math.floor(minutes / 60);
    let minute = minutes % 60;
    // let seconds = Math.floor(minute / 3600);
    return hours + "h" + minute + "m";
}

const closeModal = () => {
    modal.style.display = "none";
};


const updateBestMovieDescription = async (id) => {
    let movieDetail = await fetch("http://localhost:8000/api/v1/titles/" + id)
    .then(response => response.json());
    bestMovie["description"][0].innerHTML = movieDetail.description;
};


fetchBestMovie(bestMovie);
fetchMovies(topRatedMovies);
fetchMovies(animeMovies);
fetchMovies(horrorMovies);
fetchMovies(musicalMovies);
