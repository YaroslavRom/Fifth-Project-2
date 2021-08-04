$(document).ready(function () {
    $('.slider-slides').slick({
        arrows: false,
        dots: true,
        infinite: false,
        autoplay:false,
        speed:2000,
        waitForAnimate: false,
        slidesToShow: 2,
        draggable:true,
        slidesToScroll:1,
        easing:'ease',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    draggable:true,

                }
            },
        ]
    })

});
