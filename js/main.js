    AOS.init();

    $(function() {

    $('.slider__inner').slick({
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    });


// $('select').styler();
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
    
});

// const animItems = document.querySelectorAll('_anim-items');
//     if (animItems > 0) {
//         window.addEventListener('scroll', animOnScroll);
//         function animOnScroll() {
//             for (let i = 0; i < animItems.length; i++) {
//                 const animItem = animItems[i];
//                 const animItemHeight = animItem.offsetHeight;
//                 const animItemOffset = offset(animItem).top;
//                 const animStart = 4;

//                 let animItemPoint = window.innerHeight - animItemHeight / animStart;
//                 if (animItemHeight > window.innerHeight) {
//                     animItemPoint = window.innerHeight - window.innerHeight / animStart;
//                 }

//                 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//                     animItem.classList.add('_active');
//                 } else {
//                     animItem.classList.remove('_active');
//                 }
//             }
//         }

//         function offset(el) {
//             const rect = el.getBoundingClientRect(),
//                 scrollLeft = window.pageXOffset || document.scrollingElement.scrollLeft,
//                 scrollTop = window.pageYOffset || document.scrollingElement.scrollTop;
//             return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//         }
//         setTimeout(() => {
//             animOnScroll();
//         }, 300);
//     }


