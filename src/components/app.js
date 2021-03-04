import Header from "./header";
import ADsection from "./ad";
import ProductSection from "./products";
import CartSection from "./cart";

export default class App {
    constructor(app) {
        const onClickCart = () => {
            this.setIsShow();
        };

        this.initData();

        const header = new Header(app, onClickCart);
        this.header = header;

        const adSection = new ADsection(app);
        this.adSection = adSection;

        const productSection = new ProductSection(app, this.ids, onClickCart);
        this.productSection = productSection;

        const cartSection = new CartSection(app, onClickCart);
        this.cartSection = cartSection;
    }

    setIsShow() {
        this.isShow = !this.isShow;
        this.cartSection.show(this.isShow);
    }

    initData() {
        const idsJson = localStorage.getItem("cartIds");

        const ids = JSON.parse(idsJson);

        if (ids) {
            this.ids = ids;
        } else {
            this.ids = [];
            localStorage.setItem("cartIds", "[]");
        }
    }
}
