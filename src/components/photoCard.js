import { numberWithCommas } from "../utils";

export default class PhotoCard {
    constructor(app, url, title, price) {
        const card = document.createElement("article");
        card.className = "product-card";

        const imageDiv = document.createElement("div");
        imageDiv.className = "img-container";

        const image = document.createElement("img");
        image.src = url;
        image.className = "product-img";

        const btn = document.createElement("button");
        btn.className = "img-btn";
        btn.textContent = "Add In Cart";

        imageDiv.appendChild(image);
        imageDiv.appendChild(btn);

        const content = document.createElement("div");
        content.className = "product-content";

        const titleSpan = document.createElement("h3");
        titleSpan.textContent = title;

        const priceSpan = document.createElement("h4");
        priceSpan.textContent = `₩${numberWithCommas(price)}`;

        content.appendChild(titleSpan);
        content.appendChild(priceSpan);

        card.appendChild(imageDiv);
        card.appendChild(content);

        app.appendChild(card);
    }
}
