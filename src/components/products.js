import PhotoCard from "./photoCard";
import { getImages } from "../api";

export default class ProductSection {
    constructor(app) {
        this.data = [];
        this.init();
        const productSection = document.createElement("section");
        productSection.id = "products-section";

        const productTitle = document.createElement("div");
        productTitle.className = "product-title";

        const titleH2 = document.createElement("h2");
        titleH2.textContent = "Our Product";

        productTitle.appendChild(titleH2);

        productSection.appendChild(productTitle);

        const productContent = document.createElement("div");
        productContent.className = "product-card-list";
        this.productContent = productContent;

        productSection.appendChild(productContent);

        app.appendChild(productSection);
    }

    async init() {
        const {
            data: { photos },
        } = await getImages("FURNITURE");
        console.log(photos);
        this.setState(photos);
    }

    setState(data) {
        this.data = data;
        this.render();
    }

    render() {
        const images = this.data;

        if (images) {
            images.forEach((data) => {
                new PhotoCard(
                    this.productContent,
                    data.src.portrait,
                    data.photographer,
                    data.id
                );
            });
        }
    }
}
