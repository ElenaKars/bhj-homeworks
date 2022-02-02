const mainModalEl = document.querySelector("#modal_main");
const successModalEl = document.querySelector("#modal_success");

const closeBtnsEls = document.querySelectorAll(".modal__close");
const goodBtnsEls = document.querySelectorAll(".btn");

const toDoGoodBtnEl = document.querySelector(".show-success");

mainModalEl.classList.add("modal_active");

const allBtnsArr = [...closeBtnsEls, ...goodBtnsEls];

allBtnsArr.forEach((el) => {
  el.addEventListener("click", function (evt) {
    const targetEl = evt.target;
    if (allBtnsArr.includes(targetEl)) {
      this.closest(".modal").classList.remove("modal_active");
    }
  });
});

toDoGoodBtnEl.addEventListener("click", () => {
  successModalEl.classList.add("modal_active");
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    document.querySelector(".modal_active").classList.remove("modal_active");
  }
});


