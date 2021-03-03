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
        this.cartContent = cartContent;

        closeButton.appendChild(closeLetter);

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
            this.render();
        } else {
            this.overlay.classList.add("hidden");
            this.cartSection.classList.remove("show-cart");
        }
    }

    render() {
        const idsJson = localStorage.getItem("cartIds");
        const dataJson = localStorage.getItem("data");

        const ids = JSON.parse(idsJson);
        const data = JSON.parse(dataJson);

        if (ids) {
            ids.forEach((id) => {
                const cartElement = document.querySelector(`#id-${id}`);

                if (cartElement !== null) {
                    return;
                }

                const res = data.find((item) => item.id === id);

                new CartItem(
                    this.cartContent,
                    res.src.portrait,
                    res.photographer,
                    id
                );
            });
        }
    }
}
