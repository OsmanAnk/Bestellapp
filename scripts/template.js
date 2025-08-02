function headerContent() {
    return `    <div class="headerContainer">
                    <img src="./assets/img/Logo.png" alt="">
                    <img class="hamburger_menu" src="./assets/icons/Hamburger_icon.svg" alt="MENU"></img>
                </div>            
            `
}

function basketContent() {
    return `    <div class="basketContainer">
                    <span class="basketTitle">Warenkorb</span>
                    <div class="orderCostContainer">
                        <div class="orderContainer" id="orderContainer"></div>
                        <div class="line"></div>
                        <div class="switchContainer">
                            <span>Liefern lassen</span>
                            <label class="switch">
                                <input type="checkbox" id="switchBox" onchange="deliveryCalc()">
                                <span class="pickup round"></span>
                            </label>
                        </div>
                        <div class="line"></div>
                        <div class="costContainer">
                            <div class="costSubtotalContainer">
                                <div>Zwischensumme</div>
                                <div id="subtotalCost"></div>
                            </div>
                            <div class="costSubtotalContainer">
                                <div>Belieferkosten</div>
                                <div id="deliveryCost"></div>
                            </div>
                        </div>
                        <div class="totalCostContainer">
                            <div>Gesamt</div>
                            <div id="totalCost"></div>                       
                        </div>
                        <div class="line"></div>     
                        <button class="orderButton" onclick="orderAndEmptyCart()">Jetzt bestellen</button>
                        <div class="orderMessage" id="orderMessage"></div>
                    </div>
                </div>
            `
}

function cartContent(name, price, amount, indexDishes) {
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

function allContent() {
    return `    <div class="allContainer">
                    <div class="mainContent">
                        <div id="titleContent"></div>
                        <div id="menuBarContent"></div>                 
                        <div id="pizzaContent"></div>
                        <div id="pizzaDishContent"></div>
                        <div id="pastaContent"></div>
                        <div id="pastaDishContent"></div>
                        <div id="saladContent"></div>
                        <div id="saladDishContent"></div>
                        <div id="resp_Cart" class="resp_cart_box"></div>
                    </div>
                    <div id="Cart" class="cart_box"></div>
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

                        <div class="dishPrice">${myDishes[category][indexDishes].price.toFixed(2).replace(".", ",")} €</div>
                    </div>
                    <button class="addButton" onclick="addToCart('${category}', ${indexDishes})">+</button>
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

                        <div class="dishPrice">${myDishes[category][indexDishes].price.toFixed(2).replace(".", ",")} €</div>
                    </div>
                    <button class="addButton" onclick="addToCart('${category}', ${indexDishes})">+</button>
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

                        <div class="dishPrice">${myDishes[category][indexDishes].price.toFixed(2).replace(".", ",")} €</div>
                    </div>
                    <button class="addButton" onclick="addToCart('${category}', ${indexDishes})">+</button>
                </div>
            `
}

function respBasketContent() {
    return `   <div>
                <button class="cartButton" onclick="showRespCart()">Warenkorb</button>
                </div>
            `
}

function overlayBasket() {
    return `   <div>

                </div>
            `
}


function getDialog(name, price, amount, indexDishes) {
    return `  <div class="dialogWindow" onclick="eventBubbling(event)"> 
                <button class="cartButtonDialog" onclick="showRespCart()">Warenkorb</button>
                <div class="orderContainerStyle">
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
            </div>
            `
}