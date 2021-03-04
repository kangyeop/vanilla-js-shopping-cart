import { numberWithCommas } from "../utils";

export const setHeaderCount = () => {
    const ids = JSON.parse(localStorage.getItem("cartIds"));
    const count = ids.length;

    const countBox = document.querySelector(`.cart-count-box`);
    if (count > 0) {
        countBox.classList.remove("hidden");
        countBox.textContent = count;
    } else {
        countBox.classList.add("hidden");
    }
};

export const setTotalPrice = () => {
    const idsJson = localStorage.getItem("cartIds");
    const dataJson = localStorage.getItem("data");

    const ids = JSON.parse(idsJson);
    const data = JSON.parse(dataJson);

    if (ids) {
        let count = 0;
        ids.forEach((id) => {
            const res = data.find((item) => item.id === id);
            count += res.id;
        });

        const totalPrice = document.querySelector("#total-price");

        totalPrice.textContent = numberWithCommas(count);
    }
};
