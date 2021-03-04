import { numberWithCommas } from "../utils";
import { setHeaderCount, setTotalPrice } from "../lib";

export default class cartItem {
    constructor(app, imageSrc, name, price) {
        const removeItem = (id) => {
            const ids = JSON.parse(localStorage.getItem("cartIds"));
            const index = ids.indexOf(id);
            ids.splice(index, 1);

            localStorage.setItem("cartIds", JSON.stringify(ids));

            this.cartContainer.parentElement.removeChild(this.cartContainer);

            const btn = document.querySelector(`#cart-button-${id}`);
            btn.textContent = "add to cart";
            btn.disabled = false;

            setHeaderCount();
            setTotalPrice();
        };

        const cartContainer = document.createElement("article");
        cartContainer.className = "cart-item";
        cartContainer.id = `id-${price}`;
        this.cartContainer = cartContainer;

        const image = document.createElement("img");
        image.src = imageSrc;

        const cartContentContainer = document.createElement("div");

        const titleH5 = document.createElement("h4");
        titleH5.className = "cart-item-title";
        titleH5.textContent = name;

        const priceH4 = document.createElement("h5");
        priceH4.className = "cart-item-price";
        priceH4.textContent = `$${numberWithCommas(price)}`;

        const removeButton = document.createElement("span");
        removeButton.className = "cart-item-remove";
        removeButton.textContent = "remove";

        removeButton.addEventListener("click", () => removeItem(price));

        cartContentContainer.appendChild(titleH5);
        cartContentContainer.appendChild(priceH4);
        cartContentContainer.appendChild(removeButton);

        cartContainer.appendChild(image);
        cartContainer.appendChild(cartContentContainer);

        app.appendChild(cartContainer);
    }
}
