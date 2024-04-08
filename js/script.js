let add_cart = document.querySelectorAll(".add-cart-btn");

let totalPrice = 0;
let ui = new UI();

add_cart.forEach((button) => {
    button.addEventListener("click", () => {
        let pName = button
            .closest(".all-item")
            .querySelector(".product-name").textContent;
        let price = button
            .closest(".all-item")
            .querySelector(".price").textContent;

        dollorPrice = price.replace("$", "");
        mainPrice = parseInt(dollorPrice);
        totalPrice += mainPrice;

        console.log("Before", totalPrice);

        ui.showCart(pName, price);
        ui.showPrice(totalPrice);
    });
});

function item_remove() {
    let remove_btn = document.querySelectorAll(".remove-btn");

    remove_btn.forEach((remove) => {
        remove.addEventListener("click", () => {
            let cartItem = remove.closest(".delete-item");
            if (cartItem) {
                let priceText = cartItem.querySelector(".price").textContent;
                let removeMainPrice = parseInt(priceText.replace("$", ""));
                totalPrice -= removeMainPrice;

                console.log("After", totalPrice);
                console.log(cartItem);
                cartItem.remove();
                delete cartItem;
                ui.showPrice(totalPrice);
            }
        });
    });
}
