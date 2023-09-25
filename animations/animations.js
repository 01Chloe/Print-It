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
  let currentIndex = index

  bannerImage.classList.remove("animate_left", "animate_right")
  bannerTxt.classList.remove("animate_left", "animate_right")
  setTimeout(function () {
    bannerImage.classList.add("animate_left")
    bannerTxt.classList.add("animate_left")
    if (currentIndex > 0) {
      currentIndex--
    } else if (currentIndex === 0) {
      currentIndex = slides.length - 1
    }
    changeSlide(currentIndex)
  }, 300)
}

// Fonction pour aller vers la droite
function goRight() {
  let currentIndex = index

  bannerImage.classList.remove("animate_left", "animate_right")
  bannerTxt.classList.remove("animate_left", "animate_right")
  setTimeout(function () {
    bannerImage.classList.add("animate_right")
    bannerTxt.classList.add("animate_right")
    if (currentIndex < slides.length - 1) {
      currentIndex++
    } else if (currentIndex === slides.length - 1) {
      currentIndex = 0
    }
    changeSlide(currentIndex)
  }, 300)
}

// Changer la classe du point sélectionné
function changeSlide(currentIndex) {
  let dotItems = document.querySelectorAll(".dot")

  dotItems[index].classList.remove("dot_selected")
  dotItems[currentIndex].classList.add("dot_selected")

  bannerImage.src = `../assets/images/slideshow/${slides[currentIndex].image}`
  bannerTxt.innerHTML = slides[currentIndex].tagLine
  index = currentIndex
}
