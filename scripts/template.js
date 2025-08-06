function basketData(name, price, amount, indexDishes) {
    return `    <div class="orderContainerStyle">
                    <p class="orderContainerName">${name}</p>
                    <div class="orderContainerAmountPrice">
                        <div class="orderContainerAmount">
                            <button class="amountButton" onclick="decreaseAmount(${indexDishes})">-</button>
                            <span>${amount} x </span>
                            <button class="amountButton" onclick="increaseAmount(${indexDishes})">+</button>
                        </div>
                        <p>${(price * amount).toFixed(2)} €</p>
                        <img onclick="deleteDish(${indexDishes})" class="binIcon" src="./assets/icons/bin.png" alt="bin">
                    </div>
                </div>
            `
}

function getDishes(category, indexDishes) {
    return `   <div class="dishContainer">
                    <div class="dishData">
                        <h2>${myDishes[category][indexDishes].name}</h2>

                        <div>${myDishes[category][indexDishes].description}</div>

                        <br>

                        <div class="dishPrice">${myDishes[category][indexDishes].price.toFixed(2).replace(".", ",")} €</div>
                    </div>
                    <button class="addButton" onclick="addToBasket('${category}', ${indexDishes})">+</button>
                </div>
            `
}