import PhotoCard from "./photoCard";
import { getImages } from "../api";

export default class ProductSection {
    constructor(app) {
        this.data = [];
        this.init();
        const productSection = document.createElement("section");
        productSection.id = "products-section";

        this.productSection = productSection;
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
                    this.productSection,
                    data.src.portrait,
                    data.photographer,
                    data.id
                );
            });
        }
    }
}
