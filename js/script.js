

let navDiv = document.querySelectorAll('.our-calc_div');
let indoor = document.querySelectorAll('.indoor');
let roofing = document.querySelectorAll('.roofing');
let outdoor = document.querySelectorAll('.outdoor');
let calcWrap = document.querySelectorAll('.our-calc_post-wrap');
function removeClass(arr, className) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove(className);
    }
}
function displayNone (arr) {
    for (let i = 0; i < arr.length; i++) {
       arr[i].style.display = 'none';
    }
}
function displayFlex (arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = 'flex';
    }
}


    for (let item of navDiv) {
        item.onclick = function () {
            removeClass(navDiv, 'active');
            item.classList.toggle('active');
            if (item.classList.contains('indoor-click')) {
                removeClass (calcWrap, 'active');
                displayActive (calcWrap, 'indoor');
            } else if (item.classList.contains('roofing-click')) {
                removeClass (calcWrap, 'active');
                displayActive (calcWrap, 'roofing');
            } else if (item.classList.contains('outdoor-click')) {
                removeClass (calcWrap, 'active');
                displayActive (calcWrap, 'outdoor');
            } else {
                displayActive (calcWrap, 'our-calc_post-wrap');
            }
        };
}

let active= [];
function displayActive (arr, className) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].classList.contains(className)){
            arr[i].classList.add('active');
            console.log(arr[i]);
        }
    }
}


// if (item.classList.contains('indoor-click')) {
//     displayFlex(indoor);
//     displayNone(roofing);
//     displayNone(outdoor);
// } else if (item.classList.contains('roofing-click')) {
//     displayFlex(roofing);
//     displayNone(outdoor);
//     displayNone(indoor);
// } else if (item.classList.contains('outdoor-click')) {
//     displayFlex(outdoor);
//     displayNone(roofing);
//     displayNone(indoor);
// } else {
//     displayFlex(outdoor);
//     displayFlex(roofing);
//     displayFlex(indoor);
// }
// };
$('.our-blog_news').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    infinite: true,
    speed: 300,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

$('.leftArrow').on('click', function(){
    $('.our-blog_news').slick("slickPrev");
});
$('.rightArrow').on('click', function(){
    $('.our-blog_news').slick("slickNext");
});
let ourCart = document.querySelector('.why-our_cart')

var el = $('.why-our_cart');

$(window).scroll(function(){
    if ( $(this).scrollTop() > el.offset().top - 200 ) {
        el.addClass('animation_cart');
    }

});