const openMenu = document.querySelector("#open_menu");
const closeMenu = document.querySelector("#close_menu");
const menuWrapper = document.querySelector("#menu");
const menuList = document.querySelector("#nav__list");

openMenu.addEventListener("click", () => {
    openMenu.classList.remove("active");
    closeMenu.classList.add("active");
    
    menuWrapper.style.padding = "24px";
    menuWrapper.style.height = "fit-content";

    setTimeout(() => {
        menuList.style.opacity = "1";
    }, 300)
})


closeMenu.addEventListener("click", () => {
    closeMenu.classList.remove("active");
    openMenu.classList.add("active");

    menuList.style.opacity = "0";

    setTimeout(() => {
        menuWrapper.style.padding = "0px";
        menuWrapper.style.height = "0%";
    }, 300)
})