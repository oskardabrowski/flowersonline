document.addEventListener('DOMContentLoaded', function() {
    const btnRegister = document.querySelector('.login-container-account-register');
    const btnLogin = document.querySelector('.login-container-noaccount-login');

    const loginForm = document.querySelector('.login-container-account');
    const registerForm = document.querySelector('.login-container-noaccount');

    btnRegister.addEventListener('click', function() {
        if(window.screen.width > 600) {
            loginForm.classList.remove('goRight');
            registerForm.classList.remove('goLeft');
            registerForm.classList.add('goRight');
            loginForm.classList.add('goLeft');
        } else {
            loginForm.classList.remove('slideRight');
            loginForm.classList.add('slideLeft');
        }
    });
    btnLogin.addEventListener('click', function() {
        if(window.screen.width > 600) {
            registerForm.classList.remove('goRight');
            loginForm.classList.remove('goLeft');
            loginForm.classList.add('goRight');
            registerForm.classList.add('goLeft');
        } else {
            loginForm.classList.remove('slideLeft');
            loginForm.classList.add('slideRight');
        }
    });
});