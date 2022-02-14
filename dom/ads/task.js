const rotatorsEls = document.querySelectorAll(".rotator__case");

rotatorsEls.forEach((rotator) => {
  rotator.style.color = rotator.dataset.color;
});

let activeRotatorIdx = 0;
const maxRotatorIdx = rotatorsEls.length - 1;
let currentTimeout = Number(rotatorsEls[activeRotatorIdx].dataset.speed);

rotate()

function rotate() {
  setTimeout(() => {
    rotatorsEls[activeRotatorIdx].classList.remove("rotator__case_active");

    activeRotatorIdx += 1;

    if (activeRotatorIdx > maxRotatorIdx) {
      activeRotatorIdx = 0;
    }

    rotatorsEls[activeRotatorIdx].classList.add("rotator__case_active");
    currentTimeout = Number(rotatorsEls[activeRotatorIdx].dataset.speed);

    rotate();
  }, currentTimeout);
}