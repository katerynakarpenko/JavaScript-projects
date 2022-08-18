const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".button-prev"),
      nextButton = document.querySelector(".button-next");
const dots = document.querySelectorAll(".dot");

let index = 0;

function activeSlide(n) {
  for (item of slides) {
    item.classList.remove("active");
  }
  
  slides[n].classList.add("active");

  for (dot of dots) {
    dot.classList.remove("active");
  }
  dots[n].classList.add("active");
}

function nextSlide() {
  if (index === slides.length - 1) {
    index = 0;
    activeSlide(index);
  } else {
    index++;
    activeSlide(index);
  }
}

function prevSlide() {
  if (index === 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

dots.forEach((dot, indexDot) => {
  dot.addEventListener("click", () => {
    index = indexDot;
    activeSlide(index);
  });
});

setInterval(nextSlide, 2500);