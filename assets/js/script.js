let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide-img");

document.querySelector(".before").addEventListener("click", () => {
  showSlide(--currentSlideIndex);
});
document.querySelector(".after").addEventListener("click", () => {
  showSlide(++currentSlideIndex);
});

function showSlide(nb) {
  slides.forEach((slides) => {
    slides.style.display = "none";
  });

  console.log(nb);

 if (nb > 2) {
    nb = 0;
    currentSlideIndex= 0;
  } else if (nb < 0) {
    nb = 2;
    currentSlideIndex= 2;
  }

  slides[nb].style.display = "block";
}

showSlide(currentSlideIndex);
