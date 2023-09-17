import { menu } from "./db.js";
import { createFoodCard, addFoodCards } from "./injectorMenu.js";
const menuContWrap = document.querySelector(".menu__content-wrapper")

menu.forEach((section) => {

    for (const key in section) {
        if (section.hasOwnProperty(key)) {
            const itemType = key;
            const { header, items } = section[key];
            createFoodCard(itemType, header, menuContWrap)
            const menuListTarget = document.querySelector(`.menuList-${itemType}`)


            for (const item of items) {
                const itemName = item.name;
                const itemIngredients = item.ingredients;

                addFoodCards(itemName, itemIngredients.join(", "), menuListTarget)
            }
        }
    }
})