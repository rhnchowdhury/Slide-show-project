const slideElements = document.querySelectorAll(".slideshow-element");

// setInterval(() => {
//   const currentElement = document.querySelector(".current");
//   currentElement.classList.remove("current");
//   currentElement.nextElementSibling.classList.add("current");
// }, 2000);

//!  slide running from first after last

let currentSlide = 1;

setInterval(() => {
  currentSlide++;
  const currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  if (currentSlide > slideElements.length) {
    slideElements[0].classList.add("current");
    currentSlide = 1;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);
