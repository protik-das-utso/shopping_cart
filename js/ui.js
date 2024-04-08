class UI {
    constructor() {
        this.cartList = document.querySelector(".cart-list");
    }

    showCart(pName, price) {
        let cartItem = document.createElement("li");
        cartItem.classList.add(
            "delete-item",
            "flex",
            "justify-between",
            "p-2",
            "py-3",
            "items-center"
        );
        cartItem.innerHTML = `
            <p class="product-name pl-3">${pName}</p>
            <div class="flex space-x-4 items-center">
                <p class="price font-bold">${price}</p>
                <button type="button" class="remove-btn text-red-600 font-bold">X</button>
            </div>
        `;

        this.cartList.appendChild(cartItem);

        //newly added remove button funtionality add for each.
        let remove_btn = cartItem.querySelector(".remove-btn");
        remove_btn.addEventListener("click", (e) => {
            e.preventDefault();
            let priceText = cartItem.querySelector(".price").textContent;
            let removeMainPrice = parseInt(priceText.replace("$", ""));
            totalPrice -= removeMainPrice;
            ui.showPrice(totalPrice);
            cartItem.remove();
        });
    }

    showPrice(totalPrice) {
        if (totalPrice == 0) {
            document.querySelector(".price-section").classList.remove("active");
            document.querySelector(".price-section").classList.add("hidden");
            document
                .querySelector(".no-list-section")
                .classList.remove("hidden");
            document.querySelector(".no-list-section").classList.add("active");
        } else {
            document.querySelector(".price-section").classList.add("active");
            document.querySelector(".price-section").classList.remove("hidden");
            document
                .querySelector(".no-list-section")
                .classList.remove("active");
            document.querySelector(".no-list-section").classList.add("hidden");
        }
        document.querySelector(".total-price").textContent = `$${totalPrice}`;
    }
}
