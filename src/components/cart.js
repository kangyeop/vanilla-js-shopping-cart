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

        const closeLetter = document.createElement("i");
        closeLetter.className = "fas fa-window-close";

        const cartContent = document.createElement("div");
        cartContent.className = "cart-content";

        closeButton.appendChild(closeLetter);

        cartSection.appendChild(closeButton);
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