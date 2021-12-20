$(document).ready(function () {
    $('#lightSlider').lightSlider({
        auto: true,
        item: 3,
        loop: true,
        slideMove: 1,
        speed: 400,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    item: 2,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
});