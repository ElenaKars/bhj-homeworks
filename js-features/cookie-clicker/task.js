const imageEl = document.getElementById("cookie");
const counterEl = document.getElementById("clicker__counter");
const speedEl = document.getElementById("speed");

let lastClickTime;

imageEl.onclick = onImgHandler;

function changeSizes() {
  if (lastClickTime) {
    const currentTime = +new Date();
    const diff = currentTime - lastClickTime;
    speedEl.textContent = (1000 / diff).toFixed(2)
    lastClickTime = currentTime
  } else {
    lastClickTime = +new Date();
  }

  if (counterEl.textContent % 2 !== 0) {
    imageEl.width = 300;
  } else {
    imageEl.width = 200;
  }
}

function onImgHandler() {
  counterEl.textContent++;
  changeSizes();
}
