import Header from "./header";
import ADsection from "./ad";

export default class App {
    constructor(app) {
        const header = new Header(app);
        this.header = header;

        const adSection = new ADsection(app);
        this.adSection = adSection;
    }
}
