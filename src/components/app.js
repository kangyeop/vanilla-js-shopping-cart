import Header from "./header";
import ADsection from "./ad";
import ProductSection from "./products";
import CartSection from "./cart";

export default class App {
    constructor(app) {
        const onClickCart = () => {
            this.setIsShow();
        };

        const header = new Header(app, onClickCart);
        this.header = header;

        const adSection = new ADsection(app);
        this.adSection = adSection;

        const productSection = new ProductSection(app);
        this.productSection = productSection;

        const cartSection = new CartSection(app, onClickCart);
        this.cartSection = cartSection;
    }

    setIsShow() {
        this.isShow = !this.isShow;
        this.cartSection.show(this.isShow);
    }
}
