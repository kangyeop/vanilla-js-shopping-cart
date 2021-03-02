export default class cartItem {
    constructor(app, imageSrc, name, price) {
        const cartContainer = document.createElement("article");
        cartContainer.className = "cart-item";

        const image = document.createElement("img");
        image.src = imageSrc;

        const cartContentContainer = document.createElement("div");

        const titleH5 = document.createElement("h4");
        titleH5.className = "cart-item-title";
        titleH5.textContent = name;

        const priceH4 = document.createElement("h5");
        priceH4.className = "cart-item-price";
        priceH4.textContent = price;

        const removeButton = document.createElement("span");
        removeButton.className = "cart-item-remove";
        removeButton.textContent = "remove";

        cartContentContainer.appendChild(titleH5);
        cartContentContainer.appendChild(priceH4);
        cartContentContainer.appendChild(removeButton);

        cartContainer.appendChild(image);
        cartContainer.appendChild(cartContentContainer);

        app.appendChild(cartContainer);
    }
}
