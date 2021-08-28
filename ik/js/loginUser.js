$(document).ready(function() {
    const login = $('.loginEmailAccount');
    const password = $('.passwordLoginAccount');
    const emailInfoExist = $('.emailInfoExist');
    const emailInfoNoExist = $('.emailInfoNoExist');
    const passwordMatch = $('.passwordMatch');
    const passwordWrong = $('.passwordWrong');
    const ButtonLoginAccount = $('.ButtonLoginAccount');
    login.focusout(function() {
        const mail = login.val();
        if(mail != '') {
            $.ajax({
                url: 'php/verify-email.php',
                method: 'POST',
                data: {'email' : mail},
                success: function(response) {
                    const data = JSON.parse(response);
                    if(data.isAvailable == 'false') {
                        emailInfoExist[0].classList.remove('dnone');
                        emailInfoNoExist[0].classList.add('dnone');
                        isAvailable = true;
                    } else {
                        emailInfoNoExist[0].classList.remove('dnone');
                        emailInfoExist[0].classList.add('dnone');
                    }
                }
            })
        }
    })
    ButtonLoginAccount.on('click', function(e) {
        e.preventDefault();
        if(login.val() !== '' && password.val() !== '') {
            const email = login.val();
            const pass = password.val();

            $.ajax({
                url: 'php/login-user.php',
                method: 'POST',
                data: {'email' : email, 'password' : pass},
                success: function(login) {
                    const loginData = JSON.parse(login);
                    if(loginData.login === 'true') {
                        location.href="account.php";
                    } else {
                        const markupDanger = `<div style="position: absolute; background: linear-gradient(to right, #DF0006, #FF3C41);
                    width: 100%; top: 0; left: 0; display: flex; justify-content: center; align-items: center;
                    padding: 1rem; color: white; font-weight: 600;">Coś poszło nie tak: ${loginData.error}</div>`;
                    document.querySelector('.login').insertAdjacentHTML('afterbegin',markupDanger);
                    }
                }
            })
        }
    })
})