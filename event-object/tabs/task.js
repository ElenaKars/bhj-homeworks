const tabsEls = Array.from(document.querySelectorAll(".tab"));
const tabsContentEls = Array.from(document.querySelectorAll(".tab__content"));

tabsEls.forEach((tab) => {
  tab.addEventListener("click", onTabClick); 
});

function onTabClick(ind) {
  tabsEls.forEach((tab, ind) => {
    tab.classList.remove("tab_active");
    tabsContentEls[ind].classList.remove("tab__content_active");
  });

  this.classList.add("tab_active");
  const activeTabInd = tabsEls.indexOf(this);
  tabsContentEls[activeTabInd].classList.add("tab__content_active");
