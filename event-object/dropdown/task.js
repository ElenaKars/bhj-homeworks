const valueEl = document.querySelector(".dropdown__value");
const itemsArrEls = Array.from(document.querySelectorAll(".dropdown__item"));
const listEl = document.querySelector(".dropdown__list");
valueEl.addEventListener("click", () => {
  if (listEl.classList.contains("dropdown__list_active") === false) {
    listEl.classList.add("dropdown__list_active");
  } else {
    listEl.classList.remove("dropdown__list_active");
  }
});

itemsArrEls.forEach((item) => {
  item.addEventListener("click", clickItem);
});
function clickItem(event) {
  event.preventDefault();
  valueEl.textContent = event.target.textContent;
  listEl.classList.remove("dropdown__list_active");
}