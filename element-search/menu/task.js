const menusEls = document.querySelectorAll(".menu");

[...menusEls].forEach((el) => {
  const linksListEls = el.querySelectorAll(".menu__link");
  const menusListEls = el.querySelectorAll(".menu_sub");
  // let activeSubMenu; /второй вариант решения

  for (let elem of linksListEls) {
    elem.addEventListener("click", (evt) => {
      evt.preventDefault();
      const sibling = elem.nextElementSibling;

      if (sibling && sibling.classList.contains("menu_sub")) {
        [...menusListEls].forEach((el) => {
          el.classList.remove("menu_active");
        });

        // if (activeSubMenu) {
        //   activeSubMenu.classList.remove("menu_active");
        // }

        sibling.classList.add("menu_active");
        // activeSubMenu = sibling;
      }
      // for (const el of menusListEls) {
      //   if (elem.closest("li") === el.closest("li")) {
      //     el.classList.add("menu_active");
      //   }
      // }
    });
  }
});