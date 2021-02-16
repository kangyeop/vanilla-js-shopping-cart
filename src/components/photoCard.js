export default class PhotoCard {
    constructor(app, url, title, price) {
        const card = document.createElement("article");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = url;
        image.className = "product-img";

        const content = document.createElement("div");

        const titleSpan = document.createElement("span");
        titleSpan.textContent = title;

        const priceSpan = document.createElement("span");
        priceSpan.textContent = price;

        content.appendChild(titleSpan);
        content.appendChild(priceSpan);

        card.appendChild(image);
        card.appendChild(content);

        app.appendChild(card);
    }
}
