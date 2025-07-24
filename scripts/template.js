function headerContent() {
    return `    <div class="headerContainer">
                    <img src="./assets/img/Logo.png" alt="">
                    <img onclick="toggleRespMenu()" class="hamburger_menu" src="./assets/icons/Hamburger_icon.svg" alt="MENU"></img>
                </div>            
            `
}

function basketContent() {
    return `    <div class="basketContainer">
                    <span class="basketTitle">Warenkorb</span>
                    <div class="orderCostContainer">
                        <div class="orderContainer" id="orderContainer"></div>
                        <div class="line"></div>
                        <div class="costContainer">
                            <div class="costSubtotalContainer">
                                <div>Zwischensumme</div>
                                <div id="subtotal"></div>
                            </div>
                            <div>Lieferkosten</div>
                        </div>
                        <div class="finalCostContainer">Gesamt</div>
                    <div>
                </div>
            `
}

function cartContent(category, indexDishes) {
    return `    <div class="orderContainerStyle">
                    <p class="orderContainerName">${myDishes[category][indexDishes].name}</p>
                    <div class="orderContainerAmountPrice">
                        <div class="orderContainerAmount">
                            <p onclick="decreaseAmount('${category}', ${indexDishes})">-</p>
                            <span>${myDishes[category][indexDishes].amount} x </span>
                            <p onclick="increaseAmount('${category}', ${indexDishes})">+</p>
                        </div>
                        <p>${(myDishes[category][indexDishes].price * myDishes[category][indexDishes].amount).toFixed(2)} €</p>
                        <img onclick="deleteDish('${category}', ${indexDishes})" class="binIcon" src="./assets/icons/bin.png" alt="bin">
                    </div>
                </div>
            `
}

function allContent() {
    return `    <div class="allContainer">
                    <div id="titleContent"></div>
                    <div id="menuBarContent"></div>
                    <div id="pizzaContent"></div>
                    <div id="pizzaDishContent"></div>
                    <div id="pastaContent"></div>
                    <div id="pastaDishContent"></div>
                    <div id="saladContent"></div>
                    <div id="saladDishContent"></div>
                </div>
            `
}

function titleContent() {
    return `   <img class="main_img" src="./assets/img/main_img.jpg" alt="titleImage">
                <div class="titleContainer">
                    <h1>Cheesy Business</h1>
                    <span class="rating">Bewertung (4,2 von 5 Sternen)</span>
                    <img class="overlay_img" src="./assets/img/pizza_top.png" alt="overlayImage">
                </div>
            `
}

function menuBarContent() {
    return `   <div class="menuBarContainer">
                    <img class="menuBarImg" src="./assets/img/menuBar_img.png" alt="">
                    <a href="#pizzaContent">Pizzen</a>
                    <a href="#pastaContent">Pasta</a>
                    <a href="#saladContent">Salate</a>
                </div>
            `
}

function pizzaContent() {
    return `   <div class="pizzaSaladContainer">
                    <img class="pizzaImg" src="./assets/img/main_pizza_img.jpg" alt="">
                    <a>Pizzen</a>
                </div>
            `
}

function getPizzaDishes(category, indexDishes) {
    return `   <div class="dishContainer">
                    <div class="dishData">
                        <h2>${myDishes[category][indexDishes].name}</h2>

                        <div>${myDishes[category][indexDishes].description}</div>

                        <br>

                        <div class="dishPrice">${myDishes[category][indexDishes].price.toFixed(2)} €</div>
                    </div>
                    <a onclick="addToCart('${category}', ${indexDishes})">+</a>
                </div>
            `
}

function pastaContent() {
    return `   <div class="pizzaSaladContainer">
                    <img class="pastaImg" src="./assets/img/main_pasta_img.jpg" alt="">
                    <a>Pasta</a>
                </div>
            `
}

function getPastaDishes(category, indexDishes) {
    return `   <div class="dishContainer">
                    <div class="dishData">
                        <h2>${myDishes[category][indexDishes].name}</h2>

                        <div>${myDishes[category][indexDishes].description}</div>

                        <br>

                        <div class="dishPrice">${myDishes[category][indexDishes].price.toFixed(2)} €</div>
                    </div>
                    <a onclick="addToCart('${category}', ${indexDishes})">+</a>
                </div>
            `
}

function saladContent() {
    return `   <div class="pizzaSaladContainer">
                    <img class="saladImg" src="./assets/img/main_salad_img.jpg" alt="">
                    <a>Salate</a>
                </div>
            `
}

function getSaladDishes(category, indexDishes) {
    return `   <div class="dishContainer">
                    <div class="dishData">
                        <h2>${myDishes[category][indexDishes].name}</h2>

                        <div>${myDishes[category][indexDishes].description}</div>

                        <br>

                        <div class="dishPrice">${myDishes[category][indexDishes].price.toFixed(2)} €</div>
                    </div>
                    <a onclick="addToCart('${category}', ${indexDishes})">+</a>
                </div>
            `
}