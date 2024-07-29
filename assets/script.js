const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//définition des variables pour l'index et éléments du DOM utiles pour le slider
let i = 0;
let currentImage = document.querySelector(".banner-img");
let currentTagLineP = document.querySelector(".tag-line");
let dots = document.querySelectorAll(".dot");
let arrowLeft = document.querySelector(".arrow_left");
let arrowRight = document.querySelector(".arrow_right");

// définition du contenu du slide de départ
currentImage.src = slides[0].image;
currentTagLineP.innerHTML = slides[0].tagLine;
dots[0].classList.add("dot_selected");

// modifier le contenu des slides au clic sur la flèche de gauche
arrowLeft.addEventListener("click", function() {
	i--;
	if (i < 0) {
		i = slides.length - 1;
	}
	currentImage.src = slides[i].image;
	currentTagLineP.innerHTML = slides[i].tagLine;
	updateDots();
});

// modifier le contenu des slides au clic sur la flèche de droite
arrowRight.addEventListener("click", function() {
	i++;
	if (i > slides.length - 1) {
		i = 0;
	}
	currentImage.src = slides[i].image;
	currentTagLineP.innerHTML = slides[i].tagLine
	updateDots();
});

function updateDots() {
	dots.forEach(function(dot) {
		dot.classList.remove("dot_selected");
	  });
	
	  dots[i].classList.add("dot_selected");
}




