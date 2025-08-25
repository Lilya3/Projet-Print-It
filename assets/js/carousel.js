import { slides } from "./data.js";

// 3. Variables globales
const basePath = "/assets/images/slideshow/";
let index = 0;
let timer = null;

// 2. Sélection DOM
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tag-line");
const dots = Array.from(document.querySelectorAll(".dots .dot"))

// 4. Fonction render (affiche img + text + dots)
    // a. évite un doublon
export function render() {
    console.log("===RENDER===");
    console.log("Index actuel :",index);
    console.log("image à afficher :", slides[index].image);
	const targetSrc = basePath + slides[index].image;

	if (bannerImg.getAttribute("src") !== targetSrc){
        console.log("Changement d'image");
		bannerImg.setAttribute("src", targetSrc);
	}

    else{
        console.log("Même image (aucun changement effectué)")
    }

	// b. Tagline
	console.log("Texte :", slides[index].tagLine);
    tagLine.innerHTML = slides[index].tagLine;

	// c. Dots : activer la bonne, désactiver les autres
	dots.forEach((dot, i) => {
        if (i === index){
            console.log("Dot actif :", i);
            dot.classList.add("dot_selected");
        } else{
            dot.classList.remove("dot_selected");
        }
    });
}

// 5. Fonctions navigation
export function next(){
    console.log("===NEXT===");
    console.log("Ancien index :", index);
	index = (index + 1) % slides.length;
    console.log("Nouvel index :", index);
	render();
}

export function prev() {
    console.log("===PREV===");
    console.log("Ancien index :", index);
	index = (index - 1 + slides.length) % slides.length;
    console.log("Nouvel index :", index);
	render();
}

export function goTo(i) {
    console.log("===GO TO DOT===");
    console.log("Ancien index :", index, "Nouvel index :", i)
    index = i;
    render();
}

// 6. Autoplay
export function startAutoplay(intervalMs = 3000){
    console.log("===START AUTOPLAY=== toutes les",intervalMs, "ms");
	stopAutoplay();
	timer = setInterval(() => {next(); }, intervalMs);
}

export function stopAutoplay() {
	if (timer) {
        console.log("===STOP AUTOPLAY===");
        clearInterval(timer);
        timer = null;
    }
}
