$(document).ready(function() {
    $('.home-website-header-picture').animate({'width' : '100vw'}, 1000);
    $('.home-website-header-picture-logo').delay(1000).animate({'opacity' : '1'}, 1000);
    $('.home-website-header-picture-slogan-1-span').delay(2000).animate({'top' : '0', 'opacity' : '1'}, 2000);
    $('.home-website-header-picture-slogan-2-span').delay(2000).animate({'top' : '0', 'opacity' : '1'}, 2000);
    $('.home-website-header-picture-slogan-3-span').delay(2000).animate({'top' : '0', 'opacity' : '1'}, 3000);
    $('.home-website-header-picture-img').delay(1000).addClass('imgScaler');

    $('.home-website-header-offer-bar').animate({opacity: '1'}, 1000);
    $('.home-website-header-offer-text').delay(500).animate({opacity: '1'}, 1000);
    $('.offer-hider').animate({top: '-100%'}, 1000);
    $('.about-hider').animate({left: '100%'}, 1000);
    $('.contact-hider').animate({left: '-100%'}, 1000);

    let year = $('.currentYear');
    let cYear = new Date().getFullYear()
    year.text(cYear);

    let menuStatus = false;
    console.log($(window).width())

    $('.menu-div').on('click',function() {
        if(menuStatus != true && $(window).width() > 700) {
            $('.home-website-header-nav-menu').animate({top: '0vh'}, 1000);
            menuStatus = true;
            $('.home-website-header-nav-div2').fadeOut(500);
            $('.home-website-header-nav-div1').animate({top: '.5rem', width: '50%'}).css({transform: 'rotate(45deg)'});
            $('.home-website-header-nav-div3').animate({width: '50%', top: '.5rem'}).css({transform: 'rotate(-45deg)'});
        } else if(menuStatus != false && $(window).width() > 700) {
            $('.home-website-header-nav-menu').animate({top: '-100vh'}, 1000);
            $('.home-website-header-nav-div2').fadeIn(500);
            $('.home-website-header-nav-div1').animate({top: '0rem', width: '100%'}).css({transform: 'rotate(0deg)'});
            $('.home-website-header-nav-div3').animate({width: '65%', top: '1rem'}).css({transform: 'rotate(0deg)'});
            menuStatus = false;
        } else if(menuStatus != true && $(window).width() < 700) {
            $('.home-website-header-nav-menuMobile').animate({width: '100%', height: '100%'}, 1);
            $('.home-website-header-nav-menuMobile-background-1').delay(10).animate({width: '300vh'}, 500);
            $('.home-website-header-nav-menuMobile-background-2').delay(500).animate({width: '300vh'}, 500);
            $('.home-website-header-nav-menuMobile-background-3').delay(250).animate({width: '300vh'}, 500);
            $('.home-website-header-nav-menuMobile-btns').delay(1000).animate({opacity: '1'}, 500);
            menuStatus = true;
            $('.home-website-header-nav-div2').fadeOut(500);
            $('.home-website-header-nav-div1').animate({top: '50%', width: '50%'}).css({transform: 'rotate(45deg)'});
            $('.home-website-header-nav-div3').animate({width: '50%', top: '50%'}).css({transform: 'rotate(-45deg)'});
        } else if(menuStatus != false && $(window).width() < 700) {

            $('.home-website-header-nav-menuMobile-btns').animate({opacity: '0'}, 500);
            $('.home-website-header-nav-menuMobile-background-1').delay(500).animate({width: '0vh'}, 500);
            $('.home-website-header-nav-menuMobile-background-2').delay(1000).animate({width: '0vh'}, 500);
            $('.home-website-header-nav-menuMobile-background-3').delay(750).animate({width: '0vh'}, 500);
            $('.home-website-header-nav-menuMobile').delay(1500).animate({width: '0%', height: '0%'}, 1);
            $('.home-website-header-nav-div2').fadeIn(500);
            $('.home-website-header-nav-div1').animate({top: '0rem', width: '100%'}).css({transform: 'rotate(0deg)'});
            $('.home-website-header-nav-div3').animate({width: '65%', top: '.7rem'}).css({transform: 'rotate(0deg)'});
            menuStatus = false;
        }
    })
    $('.menu-div').hover(function() {
        if(menuStatus === false) {$('.home-website-header-nav-div3').stop(true, true).animate({width: '100%'}, 50)}}, function() {
        if(menuStatus === false) {$('.home-website-header-nav-div3').stop(true, true).animate({width: '65%'}, 50)}
    })

    let actualFlower = $('.home-flower');

    $('.homeFlower').on('mouseover', function() {changeFlower($('.home-flower'))});
    $('.productsFlower').on('mouseover', function() {changeFlower($('.offer-flower'))});
    $('.aboutFlower').on('mouseover', function() {changeFlower($('.about-flower'))});
    $('.contactFlower').on('mouseover', function() {changeFlower($('.contact-flower'))});

    function changeFlower(flower) {
        if(flower[0] != actualFlower[0]) {
            // actualFlower.css({zindex: '1'});
            // flower.show();
            // flower.css({height: '0%'});
            // flower.css({zindex: '100'});
            // flower.animate({height: '100%'}, 500);
            // actualFlower.hide(500);
            // actualFlower = flower;
            actualFlower.css({zindex: '1'});
            flower.css({zindex: '100'});
            flower.fadeIn(500);
            actualFlower.fadeOut(500);
            actualFlower = flower;
        }
    }
})