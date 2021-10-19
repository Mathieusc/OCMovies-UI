const slides = document.getElementsByClassName("carrousel_container");
const images = document.getElementsByClassName("carrousel_image");
console.log("Type of images: " + typeof(images));
console.log(images);
console.log("slides object:");
console.log(slides);


// Top rated movie slide
document.querySelector(".button_best_left").addEventListener("click", movePreviousSlideMieuxNotes);
document.querySelector(".button_best_right").addEventListener("click", moveNextSlideMieuxNotes);

function movePreviousSlideMieuxNotes() {
    images[6].parentNode.insertBefore(images[6], images[0]);
}

function moveNextSlideMieuxNotes() {
    images[0].parentNode.insertBefore(images[0], images[6]);
}


// Anime movie slide
document.querySelector(".button_anime_left").addEventListener("click", movePreviousSlideAnime);
document.querySelector(".button_anime_right").addEventListener("click", moveNextSlideAnime);

function movePreviousSlideAnime() {
    images[13].parentNode.insertBefore(images[13], images[7]);
}

function moveNextSlideAnime() {
    images[7].parentNode.insertBefore(images[7], images[13]);
}


// Horror movie slide
document.querySelector(".button_horreur_left").addEventListener("click", movePreviousSlideHorreur);
document.querySelector(".button_horreur_right").addEventListener("click", moveNextSlideHorreur);

function movePreviousSlideHorreur() {
    console.log("Previous slide");
    images[20].parentNode.insertBefore(images[20], images[14]);
}

function moveNextSlideHorreur() {
    images[14].parentNode.insertBefore(images[14], images[20]);
}


// Series slide
document.querySelector(".button_series_left").addEventListener("click", movePreviousSlideSeries);
document.querySelector(".button_series_right").addEventListener("click", moveNextSlideSeries);

function movePreviousSlideSeries() {
    images[27].parentNode.insertBefore(images[27], images[21]);
}

function moveNextSlideSeries() {
    images[21].parentNode.insertBefore(images[21], images[27]);
}
