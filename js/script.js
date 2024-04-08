let add_cart = document.querySelectorAll(".add-cart-btn");

let totalPrice = 0;
let ui = new UI();

// Add to Cart
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

        // Show letest Price
        ui.showCart(pName, price);
        ui.showPrice(totalPrice);
    });
});
