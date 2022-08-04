new Swiper(".mainSlider", {
    spaceBetween: 30,
    centeredSlides: true,
});
new Swiper(".actorsSlider", {
    slidesPerView: 4,
    spaceBetween: 15,

});
new Swiper(".reviewsSlider", {
    slidesPerView: 1,
    spaceBetween: 15,

});
new Swiper(".optionsSlider", {
    slidesPerView: 4,
    spaceBetween: 15,

});
new Swiper(".similarSlider", {
    slidesPerView: 4,
    spaceBetween: 15,

});
//popover-button//
let popoverBtn = document.querySelector('.results-footer-btn');
let popoverDropdown = document.querySelector('.results-dropdown');
if (popoverBtn != null) {
    popoverBtn.addEventListener('click', function () {
            popoverDropdown.classList.toggle('results-dropdown--active');
            setTimeout(function () {
                popoverDropdown.classList.remove('results-dropdown--active');
            }, 3000);
        }
    );
};
//search-icons//
let searchContainer = document.querySelector('.search-content');
    if (searchContainer != null) {
     searchContainer.addEventListener('click', container);
    function container(event) {
        if (event.target.closest('.fav-btn')) {
            event.target.classList.toggle('fav-btn--active');
        };
    };
};

let foundContainer = document.querySelector('.bottom-container');
let foundBtn = document.querySelector('.film-except__btn');
let foundText = document.querySelector('.film-except__text');
if (foundContainer != null) {
    foundContainer.addEventListener('click', bottomContainer);

    function bottomContainer(event) {
        if (event.target.closest('.film-except__btn')) {
            foundBtn.classList.toggle('film-except__btn--active');
            foundText.classList.toggle('film-except__text--active')
        };
    };
};
let sliderContainer = document.querySelector('.slider-box');
let sliderDropdown = document.querySelector('.slider-dropdown');
let mouseDownTime = 0 ;
const clickTime = 1000;
sliderContainer.addEventListener('mousedown', () =>{
    mouseDownTime = Date.now();
})
sliderContainer.addEventListener('click', (event) => {
    if(Date.now() - mouseDownTime < clickTime) {
        sliderDropdown.classList.toggle('slider-dropdown--active')
    }
});
