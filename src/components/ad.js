export default class ADsection {
    constructor(app) {
        const adSection = document.createElement("section");
        adSection.id = "ad-section";

        const bannerDiv = document.createElement("div");
        bannerDiv.className = "banner-div";

        const bannerText = document.createElement("h1");
        bannerText.textContent = "FURNITURE COLLECTION";
        bannerText.className = "banner-text";

        bannerDiv.appendChild(bannerText);

        adSection.appendChild(bannerDiv);

        app.appendChild(adSection);
    }
}
