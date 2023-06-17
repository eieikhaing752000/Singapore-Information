var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 1000,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        477: {
            slidesPerView: 2,
        },
        799: {
            slidesPerView: 3,
        },
        1000:{
            slidesPerView: 4,
        },
    },
    pagination: {
        e1: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    }
});
