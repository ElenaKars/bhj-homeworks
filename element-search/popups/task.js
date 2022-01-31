// v1
const mainModalEl = document.querySelector("#modal_main");
const successModalEl = document.querySelector("#modal_success");

mainModalEl.classList.add("modal_active");

const mainModalCloseBtnEl = mainModalEl.querySelector(".modal__close");
mainModalCloseBtnEl.addEventListener("click", () => {
  mainModalEl.classList.remove("modal_active");
});

const mainModalDoGoodBtnEl = mainModalEl.querySelector(".btn");
mainModalDoGoodBtnEl.addEventListener("click", () => {
  mainModalEl.classList.remove("modal_active");
  successModalEl.classList.add("modal_active");
});

const successModalCloseBtnEl = successModalEl.querySelector(".modal__close");
successModalCloseBtnEl.addEventListener("click", () => {
  successModalEl.classList.remove("modal_active");
});

const successModalGoodBtnEl = successModalEl.querySelector(".btn");
successModalGoodBtnEl.addEventListener("click", () => {
  successModalEl.classList.remove("modal_active");
});


//закрытие по клику за пределами модального окна && при нажатии Esc

// const modalsEls = document.querySelectorAll(".modal");
// const mainModalEl = document.querySelector("#modal_main");
// const successModalEl = document.querySelector("#modal_success");

// const closeBtnsEls = document.querySelectorAll(".modal__close");
// const goodBtnsEls = document.querySelectorAll(".btn");
// const successBtnEl = document.querySelector(".show-success");

// mainModalEl.classList.add("modal_active");

// const coloseElsArr = [...closeBtnsEls, ...goodBtnsEls, ...modalsEls];

// coloseElsArr.forEach((el) => {
//   el.addEventListener("click", (evt) => {
//     const targetEl = evt.target;
//     if (coloseElsArr.includes(targetEl)) {
//       el.closest(".modal").classList.remove("modal_active");
//     }
//   });
// });

// successBtnEl.addEventListener("click", () => {
//   successModalEl.classList.add("modal_active");
// });

// document.addEventListener("keydown", (evt) => {
//   if (evt.key === "Escape") {
//     document.querySelector(".modal_active").classList.remove("modal_active");
//   }
// });

