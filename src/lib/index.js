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
