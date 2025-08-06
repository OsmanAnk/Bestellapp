function init() {
    renderDishes();
}

function renderDishes() {
    for (let index = 0; index < Object.entries(myDishes).length; index++) {

        let dishes = document.getElementById(Object.entries(myDishes)[index][0] + "DishContent");
        dishes.innerHTML = "";

        for (let indexDishes = 0; indexDishes < myDishes[Object.entries(myDishes)[index][0]].length; indexDishes++) {
            dishes.innerHTML += getDishes(Object.entries(myDishes)[index][0], indexDishes);
        }
    }
}

function addToBasket(category, indexDishes) {
    let dish = myDishes[category][indexDishes];
    let basketIndex = basket.findIndex(element => element.name == dish.name)

    if (basketIndex !== -1) {
        basket[basketIndex].amount++;
    } else {
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
    deliveryCalc();
    totalCostCalc();
}

function subtotalCalc() {
    let subtotalRef = document.getElementById("subtotalCost");
    let subtotalOverlayRef = document.getElementById("subtotalCostOverlay");

    let subtotal = 0;

    for (let i = 0; i < basket.length; i++) {
        subtotal += basket[i].amount * basket[i].price;
    }

    subtotalRef.innerHTML = subtotal.toFixed(2).replace(".", ",") + " €";
    subtotalOverlayRef.innerHTML = subtotal.toFixed(2).replace(".", ",") + " €";
}

function deliveryCalc() {
    let switchBoxRef = document.getElementById("switchBox");
    let switchBoxOverlayRef = document.getElementById("switchBoxOverlay");

    delivery = switchBoxRef.checked || switchBoxOverlayRef.checked;

    setDeliveryCost(delivery);
    totalCostCalc();
}

function setDeliveryCost(delivery) {
    let deliveryRef = document.getElementById("deliveryCost");
    let deliveryOverlayRef = document.getElementById("deliveryCostOverlay");

    if (delivery) {
        deliveryRef.innerHTML = "+4,99 €";
        deliveryOverlayRef.innerHTML = "+4,99 €";
    }
    else {
        deliveryRef.innerHTML = "0,00 €";
        deliveryOverlayRef.innerHTML = "0,00 €";
    }
}

function totalCostCalc() {
    let totalCostRef = document.getElementById("totalCost");
    let totalCostOverlayRef = document.getElementById("totalCostOverlay");

    let subtotalRef = document.getElementById("subtotalCost");

    let subtotal = Number(subtotalRef.innerText.replace(/[^\d,\.]/g, '').replace(",", "."));

    let total = subtotal + deliverySwitchCalc();
    let totalOverlay = subtotal + deliverySwitchOverlayCalc();

    totalCostRef.innerHTML = total.toFixed(2).replace(".", ",") + " €"
    totalCostOverlayRef.innerHTML = totalOverlay.toFixed(2).replace(".", ",") + " €";
}

function deliverySwitchCalc() {
    let switchBoxRef = document.getElementById("switchBox");

    let delivery;
    if (switchBoxRef.checked) {
        return delivery = 4.99;
    } else {
        return delivery = 0;
    }
}

function deliverySwitchOverlayCalc() {
    let switchBoxOverlayRef = document.getElementById("switchBoxOverlay");

    let delivery;
    if (switchBoxOverlayRef.checked) {
        return delivery = 4.99;
    } else {
        return delivery = 0;
    }
}

function orderAndEmptyBasket() {
    let orderMessage = document.getElementById("orderMessage");
    let orderMessageOverlay = document.getElementById("orderMessageOverlay");

    orderMessage.innerHTML = "";
    orderMessageOverlay.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        basket[i].amount = "";
    }

    switchBoxCheck();
    orderMessage.innerHTML = "Deine Testbestellung ist eingegangen!"
    orderMessageOverlay.innerHTML = "Deine Testbestellung ist eingegangen!"
    refreshBasket();
}

function switchBoxCheck() {
    let switchBox = document.getElementById("switchBox")
    let switchBoxOverlay = document.getElementById("switchBoxOverlay")

    if (switchBox.checked || switchBoxOverlay.checked) {
        switchBox.checked = false;
        switchBoxOverlay.checked = false;
        deliveryCalc();
    }
}

function toggleOverlay() {
    let overlayRef = document.getElementById("overlay")
    overlayRef.classList.toggle("d_none")
}

function eventBubbling(event) {
    event.stopPropagation();
}