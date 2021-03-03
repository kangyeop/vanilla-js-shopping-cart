import { numberWithCommas } from "../utils";
import { setHeaderCount } from "../lib";
export default class PhotoCard {
    constructor(app, image, title, price, isCart, onClickCart) {
        const setCart = (price) => {
            const ids = JSON.parse(localStorage.getItem("cartIds"));
            const index = ids.indexOf(price);
            if (index !== -1) {
                return;
            }
            ids.push(price);
            localStorage.setItem("cartIds", JSON.stringify(ids));

            this.btn.textContent = "In Cart";
            this.btn.disabled = true;

            onClickCart();
            setHeaderCount();
        };

        const card = document.createElement("article");
        card.className = "product-card";

        const imageDiv = document.createElement("div");
        imageDiv.className = "img-container";

        const imageTag = document.createElement("img");
        imageTag.src = image;
        imageTag.className = "product-img";

        const btn = document.createElement("button");
        btn.className = "img-btn";
        btn.id = `cart-button-${price}`;
        btn.textContent = isCart ? "In Cart" : "Add In Cart";
        btn.disabled = isCart ? true : false;
        this.btn = btn;

        imageDiv.appendChild(imageTag);
        imageDiv.appendChild(btn);

        const content = document.createElement("div");
        content.className = "product-content";

        const titleSpan = document.createElement("h3");
        titleSpan.textContent = title;

        const priceSpan = document.createElement("h4");
        priceSpan.textContent = `₩${numberWithCommas(price)}`;

        this.btn.addEventListener("click", () => {
            setCart(price);
        });

        content.appendChild(titleSpan);
        content.appendChild(priceSpan);

        card.appendChild(imageDiv);
        card.appendChild(content);

        app.appendChild(card);
    }
}
