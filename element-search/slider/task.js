const btnsEls = [...document.querySelectorAll(".slider__arrow")];
const slidesEls = Array.from(document.querySelectorAll(".slider__item"));
const dotsEls = [...document.querySelectorAll(".slider__dot")];

const maxSlideIdx = slidesEls.length - 1;
let activeSlideIdx = 0;

dotsEls[0].classList.add("slider__dot_active");

dotsEls.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    dotsEls[activeSlideIdx].classList.remove("slider__dot_active");
    slidesEls[activeSlideIdx].classList.remove("slider__item_active");

    activeSlideIdx = idx;

    slidesEls[activeSlideIdx].classList.add("slider__item_active");
    dotsEls[activeSlideIdx].classList.add("slider__dot_active");
  });
});

btnsEls.forEach((btn) => {
  btn.addEventListener("click", () => {
    slidesEls[activeSlideIdx].classList.remove("slider__item_active");
    dotsEls[activeSlideIdx].classList.remove("slider__dot_active");

    if (btn.classList.contains("slider__arrow_prev")) {
      activeSlideIdx -= 1;
      if (activeSlideIdx < 0) {
        activeSlideIdx = maxSlideIdx;
      }
    } else {
      activeSlideIdx += 1;
      if (activeSlideIdx > maxSlideIdx) {
        activeSlideIdx = 0;
      }
    }

    slidesEls[activeSlideIdx].classList.add("slider__item_active");
    dotsEls[activeSlideIdx].classList.add("slider__dot_active");
  });
});
