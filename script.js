function init() {
    renderHeader();
    renderBasket();
    renderContent();
    renderTitle();
    renderMenuBar();
    renderPizza();
    renderSalad();
    renderPasta();
    renderPizzaDishes();
    renderSaladDishes();
    renderPastaDishes();
}

function renderHeader() {
    let header = document.getElementById("header");
    header.innerHTML = headerContent();
}

function renderBasket() {
    let basket = document.getElementById("resp_cart");
    basket.innerHTML = basketContent();
}

function renderContent() {
    let content = document.getElementById("resp_main");
    content.innerHTML = allContent();
}

function renderTitle() {
    let title = document.getElementById("titleContent");
    title.innerHTML = titleContent();
}

function renderMenuBar() {
    let menuBar = document.getElementById("menuBarContent");
    menuBar.innerHTML = menuBarContent();
}

function renderPizza() {
    let pizza = document.getElementById("pizzaContent")
    pizza.innerHTML = pizzaContent();
}

function renderPizzaDishes() {
    let pizzaDishes = document.getElementById("pizzaDishContent");
    pizzaDishes.innerHTML = "";

    for (let indexDishes = 0; indexDishes < myDishes.Pizza.length; indexDishes++) {
        pizzaDishes.innerHTML += getPizzaDishes("Pizza", indexDishes);
    }
}

function renderPasta() {
    let pasta = document.getElementById("pastaContent")
    pasta.innerHTML = pastaContent();
}

function renderPastaDishes() {
    let pastaDishes = document.getElementById("pastaDishContent");
    pastaDishes.innerHTML = "";

    for (let indexDishes = 0; indexDishes < myDishes.Pasta.length; indexDishes++) {
        pastaDishes.innerHTML += getPastaDishes("Pasta", indexDishes);
    }
}

function renderSalad() {
    let salad = document.getElementById("saladContent")
    salad.innerHTML = saladContent();
}

function renderSaladDishes() {
    let saladDishes = document.getElementById("saladDishContent");
    saladDishes.innerHTML = "";

    for (let indexDishes = 0; indexDishes < myDishes.Salad.length; indexDishes++) {
        saladDishes.innerHTML += getSaladDishes("Salad", indexDishes);
    }
}

function toggleRespMenu() {
    document.getElementById("resp_cart").classList.toggle("resp_cart_closed");
    document.getElementById("resp_main").classList.toggle("resp_cart_shift");
}

function addToCart(category, indexDishes) {
    let dish = myDishes[category][indexDishes];

    let cartDish = shoppingCart.amount;
    console.log(cartDish);
    

    if (shoppingCart.amount > 0) {

        increaseAmount();
    }
    else {
        shoppingCart.push({
            name: dish.name,
            price: dish.price,
            amount: 1
        });
    }

    refreshCart();
}

function decreaseAmount(indexDishes) {
    if (shoppingCart[indexDishes].amount >= 1)
        shoppingCart[indexDishes].amount--;
    refreshCart();
}

function increaseAmount(indexDishes) {
    shoppingCart[indexDishes].amount++
    refreshCart();
}

function deleteDish(indexDishes) {
    shoppingCart.splice(indexDishes, 1)
    refreshCart();
}

function refreshCart() {
    let orderContainerRef = document.getElementById("orderContainer");
    orderContainerRef.innerHTML = "";

    for (let i = 0; i < shoppingCart.length; i++) {
        let cart = shoppingCart[i];
        if (cart.amount > 0) {
            orderContainerRef.innerHTML += cartContent(cart.name, cart.price, cart.amount, i);
        }
    }
    // subtotalCalc();
}

// function subtotalCalc() {
//     let subtotalRef = document.getElementById("subtotal");
//     subtotalRef.innerHTML = "";
//     let subtotal = 0;

//     for (let i = 0; i < myDishes.Pizza.length; i++) {
//         let pizza = myDishes.Pizza[i];

//         if (pizza.amount > 0) {
//             subtotal += pizza.price * pizza.amount;
//         }
//     }

//     subtotalRef.innerHTML = subtotal.toFixed(2) + " €";
// }



//to-do
//Object-Pfad verallgemeinern (Pizza, Salat, Pasta in einem)
//Lieferkosten einberechnen (switch)
//-> Gesamtsumme berechnen