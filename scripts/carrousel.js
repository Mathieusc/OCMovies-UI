const topRatedImages = document.getElementsByClassName("carrousel_container top-rated").item(0).getElementsByTagName("img");
const animeImages = document.getElementsByClassName("carrousel_container anime").item(0).getElementsByTagName("img");
const horrorImages = document.getElementsByClassName("carrousel_container horror").item(0).getElementsByTagName("img");
const musicalImages = document.getElementsByClassName("carrousel_container musical").item(0).getElementsByTagName("img");

const mapImage = {
                topRated: topRatedImages,
                anime: animeImages,
                horror: horrorImages,
                musical: musicalImages};

// Previous and next slider, each image will be replaced either on the last or the first position of the carrousel.
const movePrevious = (imageType) => {
    const imageList = mapImage[imageType];
    imageList[imageList.length -1].parentNode.insertBefore(imageList[imageList.length -1], imageList[0]);
}

const moveNext = (imageType) => {
    const imageList = mapImage[imageType];
    imageList[0].parentNode.insertBefore(imageList[0], imageList[-1]);
}


// Top rated movies slide
document.querySelector(".button_best_left").addEventListener("click", () => movePrevious("topRated"));
document.querySelector(".button_best_right").addEventListener("click", () => moveNext("topRated"));

// Anime slide
document.querySelector(".button_anime_left").addEventListener("click", () => movePrevious("anime"));
document.querySelector(".button_anime_right").addEventListener("click", () => moveNext("anime"));

// Horror movies slide
document.querySelector(".button_horror_left").addEventListener("click", () => movePrevious("horror"));
document.querySelector(".button_horror_right").addEventListener("click", () => moveNext("horror"));

// Musical movies slide
document.querySelector(".button_musical_left").addEventListener("click", () => movePrevious("musical"));
document.querySelector(".button_musical_right").addEventListener("click", () => moveNext("musical"));
