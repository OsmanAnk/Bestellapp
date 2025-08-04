function init() {
    renderContent()
    renderPizza();
    renderSalad();
    renderPasta();
    renderRespBasket();
}

function renderContent() {
    let header = document.getElementById("header");
    header.innerHTML = headerContent();

    let content = document.getElementById("mainContent");
    content.innerHTML = allContent();

    let basket = document.getElementById("basket");
    basket.innerHTML = basketContent();

    let title = document.getElementById("titleContent");
    title.innerHTML = titleContent();

    let menuBar = document.getElementById("menuBarContent");
    menuBar.innerHTML = menuBarContent();
}

function renderPizza() {
    let pizza = document.getElementById("pizzaContent")
    pizza.innerHTML = pizzaContent();

    let pizzaDishes = document.getElementById("pizzaDishContent");
    pizzaDishes.innerHTML = "";

    for (let indexDishes = 0; indexDishes < myDishes.Pizza.length; indexDishes++) {
        pizzaDishes.innerHTML += getPizzaDishes("Pizza", indexDishes);
    }
}

function renderPasta() {
    let pasta = document.getElementById("pastaContent")
    pasta.innerHTML = pastaContent();

    let pastaDishes = document.getElementById("pastaDishContent");
    pastaDishes.innerHTML = "";

    for (let indexDishes = 0; indexDishes < myDishes.Pasta.length; indexDishes++) {
        pastaDishes.innerHTML += getPastaDishes("Pasta", indexDishes);
    }
}

function renderSalad() {
    let salad = document.getElementById("saladContent")
    salad.innerHTML = saladContent();

    let saladDishes = document.getElementById("saladDishContent");
    saladDishes.innerHTML = "";

    for (let indexDishes = 0; indexDishes < myDishes.Salad.length; indexDishes++) {
        saladDishes.innerHTML += getSaladDishes("Salad", indexDishes);
    }
}

function addToBasket(category, indexDishes) {
    let dish = myDishes[category][indexDishes];

    let basketIndex = basket.findIndex(element => element.name == dish.name)

    if (basketIndex !== -1) {
        basket[basketIndex].amount++;
    }

    else {
        basket.push({
            name: dish.name,
            price: dish.price,
            amount: 1
        });
    }

    refreshBasket();
}

function decreaseAmount(indexDishes) {
    if (basket[indexDishes].amount >= 1)
        basket[indexDishes].amount--;
    refreshBasket();
}

function increaseAmount(indexDishes) {
    basket[indexDishes].amount++
    refreshBasket();
}

function deleteDish(indexDishes) {
    basket.splice(indexDishes, 1)
    refreshBasket();
}

function refreshBasket() {
    let orderContainerRef = document.getElementById("orderContainer");
    let orderContainerDialogRef = document.getElementById("orderContainerDialog");

    orderContainerRef.innerHTML = "";
    orderContainerDialogRef.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        let item = basket[i];
        if (item.amount > 0) {
            orderContainerRef.innerHTML += basketData(item.name, item.price, item.amount, i);
            orderContainerDialogRef.innerHTML += basketData(item.name, item.price, item.amount, i);
        }
    }
    subtotalCalc();
    totalCostCalc();
}

function subtotalCalc() {
    let subtotalRef = document.getElementById("subtotalCost");
    let subtotal = 0;

    for (let i = 0; i < basket.length; i++) {
        subtotal += basket[i].amount * basket[i].price;
    }

    subtotalRef.innerHTML = subtotal.toFixed(2).replace(".", ",") + " €";
}

function deliveryCalc() {
    let deliveryRef = document.getElementById("deliveryCost");
    let switchBoxRef = document.getElementById("switchBox");

    if (switchBoxRef.checked) {
        deliveryRef.innerHTML = "+4,99 €";
    }
    else {
        deliveryRef.innerHTML = "0,00 €";
    }
}

function totalCostCalc() {
    let totalCostRef = document.getElementById("totalCost");
    let deliveryRef = document.getElementById("deliveryCost");
    let subtotalRef = document.getElementById("subtotalCost");

    let delivery = Number(deliveryRef.innerText.replace(/[^\d,\.]/g, '').replace(",", "."));
    let subtotal = Number(subtotalRef.innerText.replace(/[^\d,\.]/g, '').replace(",", "."));

    let total = delivery + subtotal;

    totalCostRef.innerHTML = total.toFixed(2).replace(".", ",") + " €"
}

function orderAndEmptyBasket() {
    let orderMessage = document.getElementById("orderMessage");
    orderMessage.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        basket[i].amount = "";
    }

    switchBoxCheck();

    orderMessage.innerHTML = "Deine Testbestellung ist eingegangen!"

    refreshBasket();
}

function switchBoxCheck() {
    let switchBox = document.getElementById("switchBox")

    if (switchBox.checked) {
        switchBox.checked = false
        deliveryCalc();
    }
}

function renderRespBasket() {
    let respBasket = document.getElementById("resp_basket");
    respBasket.innerHTML = respBasketContent();

    let overlayRef = document.getElementById("overlay");
    overlayRef.innerHTML = getDialog();
}

function toggleOverlay() {
    let overlayRef = document.getElementById("overlay")
    overlayRef.classList.toggle("d_none")
}

function eventBubbling(event) {
    event.stopPropagation();
}