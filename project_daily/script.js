const btnMoreInfo = document.querySelector(".container-header-price__button");
const mainDetail = document.querySelector(".container__body");
let clickedOnce = false;

btnMoreInfo.addEventListener("click", () => {
    if (clickedOnce) {
        mainDetail.classList.add('showDetail');
        clickedOnce = false;
    } else {
        mainDetail.classList.remove('showDetail');
        clickedOnce = true;
    }
});