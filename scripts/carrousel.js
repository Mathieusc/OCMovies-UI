const topRatedImages = document.getElementsByClassName("carrousel_container top-rated").item(0).getElementsByTagName("img");
const animeImages = document.getElementsByClassName("carrousel_container anime").item(0).getElementsByTagName("img");
const horrorImages = document.getElementsByClassName("carrousel_container horror").item(0).getElementsByTagName("img");
const musicalImages = document.getElementsByClassName("carrousel_container musical").item(0).getElementsByTagName("img");

// Top rated movies slide
document.querySelector(".button_best_left").addEventListener("click", movePreviousSlideTopRated);
document.querySelector(".button_best_right").addEventListener("click", moveNextSlideTopRated);

function movePreviousSlideTopRated() {
    topRatedImages[topRatedImages.length -1].parentNode.insertBefore(topRatedImages[topRatedImages.length -1], topRatedImages[0]);
}

function moveNextSlideTopRated() {
    topRatedImages[0].parentNode.insertBefore(topRatedImages[0], topRatedImages[-1]);
}


// Anime slide
document.querySelector(".button_anime_left").addEventListener("click", movePreviousSlideAnime);
document.querySelector(".button_anime_right").addEventListener("click", moveNextSlideAnime);

function movePreviousSlideAnime() {
    animeImages[animeImages.length -1].parentNode.insertBefore(animeImages[animeImages.length -1], animeImages[0]);
}

function moveNextSlideAnime() {
    animeImages[0].parentNode.insertBefore(animeImages[0], animeImages[-1]);
}


// Horror movies slide
document.querySelector(".button_horror_left").addEventListener("click", movePreviousSlideHorror);
document.querySelector(".button_horror_right").addEventListener("click", moveNextSlideHorror);

function movePreviousSlideHorror() {
    horrorImages[horrorImages.length -1].parentNode.insertBefore(horrorImages[horrorImages.length -1], horrorImages[0]);
}

function moveNextSlideHorror() {
    horrorImages[0].parentNode.insertBefore(horrorImages[0], horrorImages[-1]);
}


// Musical movies slide
document.querySelector(".button_musical_left").addEventListener("click", movePreviousSlideMusical);
document.querySelector(".button_musical_right").addEventListener("click", moveNextSlideMusical);

function movePreviousSlideMusical() {
    musicalImages[musicalImages.length -1].parentNode.insertBefore(musicalImages[musicalImages.length -1], musicalImages[0]);
}

function moveNextSlideMusical() {
    musicalImages[0].parentNode.insertBefore(musicalImages[0], musicalImages[-1]);
}

