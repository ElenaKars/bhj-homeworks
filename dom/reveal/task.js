const revealsEls = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  revealsEls.forEach((reveal) => {
    if (inViewport(reveal)) {
      reveal.classList.add("reveal_active");
    }
  });
});

function inViewport(element) {
  var bb = element.getBoundingClientRect();

  return !(bb.top > window.innerHeight || bb.bottom < 0);
}
