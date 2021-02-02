import Logo from "../images/logo.svg";

export default class Header {
    constructor(app) {
        const header = document.createElement("header");
        header.className = "header";

        const headerContainer = document.createElement("div");
        headerContainer.className = "header-container";

        const logo = document.createElement("img");
        logo.src = Logo;

        const menuIcon = document.createElement("i");
        menuIcon.className = "fas fa-bars";

        const cartIconContainer = document.createElement("div");
        cartIconContainer.className = "cart-icon-container";

        const cartCount = document.createElement("div");
        cartCount.textContent = "1";
        cartCount.className = "cart-count-box";

        const cartIcon = document.createElement("i");
        cartIcon.className = "fas fa-cart-plus";

        headerContainer.appendChild(menuIcon);
        headerContainer.appendChild(logo);

        cartIconContainer.appendChild(cartIcon);
        cartIconContainer.appendChild(cartCount);
        headerContainer.appendChild(cartIconContainer);

        header.appendChild(headerContainer);

        app.appendChild(header);
    }
}
