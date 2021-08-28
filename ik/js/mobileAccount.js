document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.account-menu-user-mobile');
    const div1 = document.querySelector('.account-menu-user-mobile-1');
    const div2 = document.querySelector('.account-menu-user-mobile-2');
    const div3 = document.querySelector('.account-menu-user-mobile-3');
    const menuBtns = document.querySelector('.account-menu-buttons');
    let clicked = false;

    menu.addEventListener('click', function() {
        if(clicked !== true) {
            div1.classList.add('mobile45');
            div2.classList.add('mobilehide');
            div3.classList.add('mobile-45');
            menuBtns.style.display= 'initial';
            clicked = true;
        } else {
            div1.classList.remove('mobile45');
            div2.classList.remove('mobilehide');
            div3.classList.remove('mobile-45');
            menuBtns.style.display= 'none';
            clicked = false;
        }
    })

})