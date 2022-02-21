const bookEl = document.querySelector("#book");
const bookControlsWrappersEls = [
  ...document.querySelectorAll(".book__control")
];

const baseClassesStrsMap = {
  size: "font-size_",
  textColor: "book_color-",
  bgColor: "book_bg-"
};

bookControlsWrappersEls.forEach((bookControlsWrapperEl) => {
  bookControlsWrapperEl.addEventListener("click", (evt) => {
    if (evt.target.tagName === "A") {
      evt.preventDefault();

      const controlEl = evt.target;
      const dataAttrName = Object.keys(controlEl.dataset)[0]; 
      const newClassNameBaseStr = baseClassesStrsMap[dataAttrName]; 
      const dataAttrValue = controlEl.dataset[dataAttrName]; 
      const newClassName = newClassNameBaseStr + dataAttrValue; 
      const bookElClassNames = bookEl.className.split(" "); 

      if (bookElClassNames.length !== 1) {
        const newClassNames = bookElClassNames
          .filter((className) => !className.startsWith(newClassNameBaseStr)) 
          .join(" ");

        bookEl.className = newClassNames + " " + newClassName;
      } else {
        bookEl.classList.add(newClassName);
      }

      const groupControls = [...bookControlsWrapperEl.querySelectorAll("a")];
      groupControls.forEach((control) => control.classList.remove("active"));

      controlEl.classList.add("active");
    }
  });
});
