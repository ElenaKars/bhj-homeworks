const checkboxesEl = document.querySelectorAll(".interest__check");

checkboxesEl.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    let parent = checkbox.closest(".interest");
    if (parent) {
      const childs = Array.from(parent.querySelectorAll(".interest__check"));
      childs.forEach((child) => {
        child.checked = checkbox.checked;
      });
    }
})
})