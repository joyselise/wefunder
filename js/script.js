//Raising slider
const hero = new Swiper(".hero-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: ".hero-next",
        prevEl: ".hero-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 27,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 27,
        },
    },
});

//Raising slider
const swiper = new Swiper(".raising-now-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".raising-next",
        prevEl: ".raising-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 27,
        },
        // when window width is >= 640px
        769: {
            slidesPerView: 3,
            spaceBetween: 27,
        },
    },
});

//blog1 slider
const blog1 = new Swiper(".blog-slider-1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".blog1-next",
        prevEl: ".blog1-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 27,
        },
        // when window width is >= 640px
        769: {
            slidesPerView: 3,
            spaceBetween: 27,
        },
    },
});

//blog1 slider
const blog2 = new Swiper(".blog-slider-2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".blog2-next",
        prevEl: ".blog2-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 27,
        },
        // when window width is >= 640px
        769: {
            slidesPerView: 3,
            spaceBetween: 27,
        },
    },
});
