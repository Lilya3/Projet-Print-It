// 1. Données
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// 2. Sélection DOM
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tag-line");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const dots = Array.from(document.querySelectorAll(".dots .dot"))

// 3. Variables globales
const basePath = "/assets/images/slideshow/";
let index = 0;
let timer = null;

// 4. Fonction render (affiche img + text + dots)
function render() {
	// a. Pas de rechargement si même image
	const targetSrc = basePath + slides[index].image;
	const currentSrc = bannerImg.getAttribute("src");

	if (currentSrc !== targetSrc){
		bannerImg.setAttribute("src", targetSrc);
	}
	// b. Tagline
	tagLine.innerHTML = slides[index].tagLine;

	// c. Dots : activer la bonne, désactiver les autres
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	if (dots[index]) dots[index].classList.add("dot_selected");
}

// 5. Fonctions navigation
function next(){
	index = (index + 1) % slides.length;
	render();
}

function prev() {
	index = (index - 1 + slides.length) % slides.length;
	render();
}

// 6. Autoplay
function startAutoplay(intervalMs = 3000){
	stopAutoplay();
	timer = setInterval(() => {
		index = (index + 1) % slides.length;
		render();
	}, intervalMs);
}

function stopAutoplay() {
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
}

// 7. Événements
rightArrow.addEventListener("click", next);
leftArrow.addEventListener("click", prev);

dots.forEach((dot, i) => {
	dot.addEventListener("click", () => {
		index = i;
		render();
	});
});

// Arrêt autoplay dès user interagit
[rightArrow, leftArrow, ...dots].forEach(el =>
	el.addEventListener("click", stopAutoplay));


// 8. Premier lancement 
render();
startAutoplay(3000);
