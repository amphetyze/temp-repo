const swiper = new Swiper('#ticker-1', {
    spaceBetween: 38,
    speed: 10000,
    autoplay: {
        delay: 0.1,
        disableOnInteraction: true,
        reverseDirection: false
    },
    loop: true,
    slidesPerView: 5,
});

const swiper2 = new Swiper('#ticker-2', {
    spaceBetween: 38,
    speed: 10000,
    autoplay: {
        delay: 0.1,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    loop: true,
    slidesPerView: 5,
});