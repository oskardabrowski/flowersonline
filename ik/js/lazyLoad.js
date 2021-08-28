$(document).ready(function() {
    if($('.newproducts').length) {
        let products = $('.newproducts'), prodAnimated = false; products.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(products, prodAnimated);});
    }
    if($('.load-image').length) {
        let image = $('.load-image'), imageAnimated = false; image.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(image, imageAnimated);});
    }
    if($('.about').length) {
        let about = $('.about'), aboutAnimated = false; about.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(about, aboutAnimated);});
    }
    if($('.newsletter-bar').length) {
        let news = $('.newsletter-bar'), newsImageAnimated = false; news.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(news, newsImageAnimated);});
    }
    if($('.why-us').length) {
        let whyUsContent = $('.why-us'), whyUsContentAnimated = false; whyUsContent.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(whyUsContent, whyUsContentAnimated);});
    }
    if($('.company1').length) {
        let about1 = $('.company1'), about1Animated = false; about1.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(about1, about1Animated);});
    }
    if($('.company2').length) {
        let about2 = $('.company2'), about2Animated = false; about2.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(about2, about2Animated);});
    }
    if($('.company3').length) {
        let about3 = $('.company3'), about3Animated = false; about3.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(about3, about3Animated);});
    }
    if($('.contactForm').length) {
        let contactForm = $('.contactForm'), contactFormAnimated = false; contactForm.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(contactForm, contactFormAnimated);});
    }
    if($('.contactForm').length) {
        let contactForm = $('.contactForm'), contactFormAnimated = false; contactForm.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(contactForm, contactFormAnimated);});
    }
    if($('.thisProductDesc').length) {
        let thisProductDesc = $('.thisProductDesc'), thisProductDescAnimated = false; thisProductDesc.css({opacity: '0'});
        $(window).scroll(function() {lazyLoad(thisProductDesc, thisProductDescAnimated);});
    }

    function lazyLoad(el, animated) {
        let scrolled = $(window).scrollTop()+$(window).height()-50;
        if(scrolled > el.offset().top && animated === false) {
            el.delay(500).animate({opacity: '1'}, 1500);
            animated = true;
        }
    }
})
