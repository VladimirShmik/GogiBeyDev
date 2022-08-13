new Swiper(".mainSlider", {
    spaceBetween: 30,
    slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
        },
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
//search-icons//
let shareWrapper = document.querySelector('.share-buttons');
if (shareWrapper != null) {
    shareWrapper.addEventListener('click', shareContainer);
    function shareContainer(event) {
        if (event.target.closest('.share-fav')) {
            event.target.classList.toggle('share-fav--active');
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

