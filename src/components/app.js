import Header from "./header";
import ADsection from "./ad";
import ProductSection from "./products";

export default class App {
    constructor(app) {
        const header = new Header(app);
        this.header = header;

        const adSection = new ADsection(app);
        this.adSection = adSection;

        const productSection = new ProductSection(app);
        this.productSection = productSection;
    }
}
