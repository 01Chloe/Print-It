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

function goLeft() {
  console.log("Left")
}
function goRight() {
  console.log("Right")
}
