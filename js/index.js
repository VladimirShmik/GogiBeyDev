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
 let clickButton = document.querySelector('.slider-block');
 let clickList = document.querySelector('.dropdown-block');
 ['mousedown', 'mouseup'].forEach(type => {
    if (type === 'mousedown') {
        clickButton.addEventListener(type, () => );
    }
    else if (type === 'mouseup') {
        clickButton.addEventListener(type, () => console.log('Mouse is up'));
    }
});