import { render, next, prev, startAutoplay, stopAutoplay, goTo} from "./carousel.js";

// 2. Sélection DOM
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = Array.from(document.querySelectorAll(".dots .dot"))


// 7. Événements
// Flèches : arrêt autoplay sur interaction
rightArrow.addEventListener("click",() => {
    console.log("Clic flèche DROITE");
    stopAutoplay();
    next();
});

leftArrow.addEventListener("click",() => {
    console.log("Clic flèche GAUCHE");
    stopAutoplay();
    prev();
});

// Dots : Event click
dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        console.log("Clic sur DOT numéro :", i);
        goTo(i);
        stopAutoplay();
    });
});

// 8. Premier lancement
console.log("===LANCEMENT DU CARROUSEL===")
render();
startAutoplay(3000);
