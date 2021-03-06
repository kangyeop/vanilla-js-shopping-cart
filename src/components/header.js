import Logo from "../images/logo.svg";

export default class Header {
    constructor(app, onClickCart) {
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
        cartIconContainer.addEventListener("click", onClickCart);

        const cartCount = document.createElement("div");

        const ids = JSON.parse(localStorage.getItem("cartIds"));

        cartCount.textContent = ids?.length;
        cartCount.className = "cart-count-box";

        if (!ids?.length) {
            cartCount.classList.add("hidden");
        }

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
