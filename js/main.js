    // AOS.init();
    // window.addEventListener('load', AOS.refresh);
    AOS.init({
        startEvent: 'load',
    });

    $(function() {

    $('.slider__inner').slick({
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    });

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
    
});