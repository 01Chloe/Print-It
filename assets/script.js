const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
]

const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const bannerImage = document.querySelector(".banner_img")
const bannerTxt = document.querySelector(".banner_txt")
const dots = document.querySelector(".dots")
let dot
let index = 0

// Ajout des bullet points
function addDots() {
  const dots = document.querySelector(".dots")
  for (let i = 0; i < slides.length; i++) {
    dot = document.createElement("div")
    dot.classList.add("dot")
    if (i === index) {
      dot.classList.add("dot_selected")
    }
    dots.appendChild(dot)
  }
}
addDots()

arrowLeft.addEventListener("click", goLeft)
arrowRight.addEventListener("click", goRight)

// Fonction pour aller vers la gauche
function goLeft() {
  if (index > 0) {
    index--
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`
    bannerTxt.innerHTML = slides[index].tagLine
  } else if (index === 0) {
    index = slides.length - 1
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`
    bannerTxt.innerHTML = slides[index].tagLine
  }
  changeDotClass(index)
}

function goRight() {
  if (index < slides.length - 1) {
    index++
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`
    bannerTxt.innerHTML = slides[index].tagLine
  } else if (index === slides.length - 1) {
    index = 0
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`
    bannerTxt.innerHTML = slides[index].tagLine
  }
  changeDotClass(index)
}

// Changer la classe du point sélectionné
function changeDotClass(index) {
  let dotActive = document.querySelectorAll(".dot")
  for (let i = 0; i < slides.length; i++) {
    if (i === index) {
      dotActive[i].classList.add("dot_selected")
    } else {
      dotActive[i].classList.remove("dot_selected")
    }
  }
}
