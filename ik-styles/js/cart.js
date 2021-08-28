$(document).ready(function() {
    const cart = document.querySelector('.home-website-header-cart');
    const cartBody = $('.cart');
    const cartExit = $('.cart-container-exit');
    cart.addEventListener('click', function() {
        cartBody.show();
    });
    cartExit.on('click', function() {
        cartBody.hide();
    });
    console.log('Done');
})