const menusEls = document.querySelectorAll(".menu");

[...menusEls].forEach((el) => {
  const linksListEls = el.querySelectorAll(".menu__link");
  let activeSubMenu;

  for (let elem of linksListEls) {
    elem.addEventListener("click", (evt) => {
      const sibling = elem.nextElementSibling;

      if (sibling && sibling.classList.contains("menu_sub")) {
        evt.preventDefault();

        if (sibling.classList.contains("menu_active")) {
          sibling.classList.remove("menu_active");
          return;
        }

        if (activeSubMenu) {
          activeSubMenu.classList.remove("menu_active");
        }

        sibling.classList.add("menu_active");
        activeSubMenu = sibling;
      }
    });
  }
});