// *burger menu 
const burgerBtn = document.querySelector(".burger-menu__btn");
const burgerIcon = document.querySelector(".burger-menu__icon");
const menu = document.querySelector(".menu")
burgerBtn.addEventListener("click", function(){
	burgerIcon.classList.toggle("burger-menu__icon-active");
	menu.classList.toggle("menu__open");
});

// * tabs
const tabButtons = document.querySelectorAll(".tabs__button");
const tabContent = document.querySelectorAll(".tabs__content-main");
tabButtons.forEach((itemBtn) => {
    itemBtn.addEventListener("click", () => {
        let currentButton = itemBtn;
        let tabId = currentButton.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        tabButtons.forEach((itemBtn) => {
            itemBtn.classList.remove("tabs__button--active");
        });
        tabContent.forEach((tabItem) => {
            tabItem.classList.remove("tabs__content-main--active");
        });
        currentButton.classList.add("tabs__button--active");
        currentTab.classList.add("tabs__content-main--active");
    })
});