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

// index à 0 au départ
let i = 0;

//définition des éléments du DOM utiles pour le slider
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
	// on décrémente l'index
	i--;
	// si l'index actuel est inférieur à 0, afficher la dernière image du tableau
	if (i < 0) {
		i = slides.length - 1;
	}
	// faire apparaitre le contenu de l'index du tableau souhaité
	currentImage.src = slides[i].image;
	currentTagLineP.innerHTML = slides[i].tagLine;
	// met à jour les points
	updateDots();
});

// modifier le contenu des slides au clic sur la flèche de gauche
arrowRight.addEventListener("click", function() {
	// on incrémente l'index
	i++;
	// si l'index actuel est supérieur à la dernière image du tableau, le remettre à 0
	if (i > slides.length - 1) {
		i = 0;
	}
	// faire apparaitre le contenu de l'index du tableau souhaité
	currentImage.src = slides[i].image;
	currentTagLineP.innerHTML = slides[i].tagLine
	// met à jour les points
	updateDots();
});

// modifier le contenu des slides au clic sur la flèche de gauche
function updateDots() {
	// parcours les éléments du "tableau" de dots créé avec le querySelectorAll.
	// fonction exéctuée pour chq élément
	// param : dot = élément du tableau
	dots.forEach(function(dot) {
		// supprime la classe dot_selected sur l'élément dot actuel
		dot.classList.remove("dot_selected");
	  });
	
	  // Ajoute la classe "dot_selected" au point correspondant au nouvel index
	  dots[i].classList.add("dot_selected");
}




