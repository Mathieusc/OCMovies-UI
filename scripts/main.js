const fetchBestMovie = async (movie) => {
    //bestMovieUrl = movies["details"].results[0].url;
    movie["details"] = await fetch(movie["url"])
    .then(response => response.json());
    console.log(movie["details"]);

    let bestImage = document.createElement("img");
    bestImage = document.createElement("img");
    bestImage.src = movie["details"].results[0].image_url;
    bestImage.id = movie["details"].results[0].id;
    console.log("Best movie image id ???");
    console.log(bestImage.id);
    movie["image"].appendChild(bestImage);
    bestImage.addEventListener("click", () => openModal(bestImage.id));
    closeButton.addEventListener("click", closeModal);
    movie["title"][0].innerHTML = movie["details"].results[0].title;
    //movie["description"][0].innerHTML = movie["details"].results[0].description;
    updateBestMovieDescription(bestImage.id);
    //movie["title"][0].innerText = "ZEZJAOEJAZEJAZPO";
    
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
    console.log(id)
    modalTitle.innerHTML = movieDetails.original_title;
};


const closeModal = () => {
    modal.style.display = "none";
};


const updateBestMovieDescription = async (id) => {
    let movieDetail = await fetch("http://localhost:8000/api/v1/titles/" + id)
    .then(response => response.json());
    console.log("A LAIDE");
    console.log(movieDetail);
    bestMovie["description"][0].innerHTML = movieDetail.description;
}

fetchMovies(topRatedMovies);
fetchBestMovie(bestMovie);
fetchMovies(animeMovies);
fetchMovies(horrorMovies);
fetchMovies(musicalMovies);
