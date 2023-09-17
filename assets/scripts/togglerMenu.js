const menuTitles = document.querySelectorAll(".menuTitle");
const menuItemsLists = document.querySelectorAll(".menuItemsList");
const line2 = document.querySelectorAll(".line2")
let isClicked = false;

function disableList(el) {
    menuItemsLists.forEach((list) => {
        list.style.display = "none";
    });

    line2.forEach((line) => {
        line.style.display = "block";
    })
}
disableList()

menuTitles.forEach(title => {
    title.addEventListener("click", () => {
        const list = title.nextElementSibling
        const line = title.children[0].children[1]

        if (!isClicked) {
            disableList()
            list.style = "grid";
            list.style.marginBottom = "64px";
            line.style.display = "none"
            isClicked = true
            
        } else {
            disableList()
            isClicked = false
        }
    })
})
