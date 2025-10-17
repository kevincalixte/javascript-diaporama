let currentSlideIndex = 1;
const slides = document.querySelectorAll(".slide-img")

document.querySelector(".before").addEventListener("click", () => {
  showSlide(--currentSlideIndex);
});
document.querySelector(".after").addEventListener("click", () => {
  showSlide(++currentSlideIndex);
});

function showSlide(nb) {
  console.clear();
  console.log(nb);
}

showSlide(currentSlideIndex);
