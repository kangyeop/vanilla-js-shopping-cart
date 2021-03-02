import CartItem from "./cartItem";

export default class CartSection {
    constructor(app, onClickOverlay) {
        const overlay = document.createElement("div");
        overlay.className = "cart-overlay hidden";
        this.overlay = overlay;

        const cartSection = document.createElement("section");
        cartSection.className = "cart-section";
        this.cartSection = cartSection;

        const closeButton = document.createElement("span");
        closeButton.className = "close-cart";
        closeButton.addEventListener("click", onClickOverlay);

        const cartTitle = document.createElement("h2");
        cartTitle.textContent = "your cart";

        const closeLetter = document.createElement("i");
        closeLetter.className = "fas fa-window-close";

        const cartContent = document.createElement("div");
        cartContent.className = "cart-content";

        closeButton.appendChild(closeLetter);

        const itemsJson = localStorage.getItem("cartItmes");

        const items = JSON.parse(itemsJson);

        if (items) {
            items.forEach(({ image, title, price }) => {
                new CartItem(cartContent, image, title, price);
            });
        }

        cartSection.appendChild(closeButton);
        cartSection.appendChild(cartTitle);
        cartSection.appendChild(cartContent);

        overlay.appendChild(cartSection);
        app.appendChild(overlay);
    }

    show(isShow) {
        if (isShow) {
            this.overlay.classList.remove("hidden");
            this.cartSection.classList.add("show-cart");
        } else {
            this.overlay.classList.add("hidden");
            this.cartSection.classList.remove("show-cart");
        }
    }
}
