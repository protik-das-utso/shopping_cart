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
                            <button type="submit" class="remove-btn text-red-600 font-bold">X</button>
                        </div>
        `;

        this.cartList.appendChild(cartItem);
        item_remove();
    }
    showPrice(totalPrice) {
        document.querySelector(".total-price").textContent = `${totalPrice}`;
    }
}
