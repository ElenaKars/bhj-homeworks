const btnsEls = Array.from(document.querySelectorAll(".font-size"));
const bookEl = document.querySelector("#book");
const fontSizeClassListBase = "font-size_";
const baseClassName = "book";

btnsEls.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    btnsEls.forEach((btn) => {
      btn.classList.remove("font-size_active");
    });

    btn.classList.add("font-size_active");

    const size = btn.dataset.size;
    if (!size) {
      bookEl.className = baseClassName;
    } else {
      bookEl.className = baseClassName + " " + fontSizeClassListBase + size; 
    }
  });
});
