import Header from "./header";

export default class App {
    constructor(app) {
        const header = new Header(app);
        this.header = header;
    }
}
