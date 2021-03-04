import CartItem from "./cartItem";
import { numberWithCommas } from "../utils";

export default class CartSection {
    constructor(app, onClickOverlay) {
        const cartClear = () => {
            localStorage.setItem("cartIds", "[]");
            while (this.cartContent.firstChild) {
                const id = this.cartContent.lastChild.id.split("-")[1];
                const btn = document.querySelector(`#cart-button-${id}`);
                btn.textContent = "Add In Cart";
                btn.disabled = false;
                this.cartContent.removeChild(this.cartContent.lastChild);
            }
            this.render();
        };

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

        const cartFooter = document.createElement("div");
        cartFooter.className = "cart-footer";

        const totalPriceH3 = document.createElement("h3");
        totalPriceH3.textContent = "Your Total : ₩";

        const totalPrice = document.createElement("span");
        totalPrice.id = "total-price";
        totalPrice.textContent = "0";
        this.totalPrice = totalPrice;

        const clearButton = document.createElement("button");
        clearButton.className = "banner-btn";
        clearButton.textContent = "CLEAR CART";

        clearButton.addEventListener("click", cartClear);

        totalPriceH3.appendChild(totalPrice);
        cartFooter.appendChild(totalPriceH3);
        cartFooter.appendChild(clearButton);

        closeButton.appendChild(closeLetter);

        cartSection.appendChild(closeButton);
        cartSection.appendChild(cartTitle);
        cartSection.appendChild(cartContent);
        cartSection.appendChild(cartFooter);

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
            let count = 0;
            ids.forEach((id) => {
                const cartElement = document.querySelector(`#id-${id}`);

                const res = data.find((item) => item.id === id);
                count += res.id;

                if (cartElement !== null) {
                    return;
                }

                new CartItem(
                    this.cartContent,
                    res.src.portrait,
                    res.photographer,
                    id
                );
            });

            this.totalPrice.textContent = numberWithCommas(count);
        }
    }
}
