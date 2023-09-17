export function createFoodCard(title, header, wrapper) {
    let code =
        `
        <section class="titleSection foodSection-${title}">
            <div class="menuTitle">${header}<div class="toggler"><span class="line" id="line1"></span> <span class="line line2" id="line2"></span></div></div>
            <div class="menuItemsList menuList-${title}"></div>
        </section>
        `

    wrapper.innerHTML += code
}

export function addFoodCards(item, ingredient, wrapper) {
    let code =
        `
        <div class="menuItems">
            <div class="itemName">${item}</div>
            <div class="itemIngredients">${ingredient}</div>
        </div>
        `

    wrapper.innerHTML += code
}