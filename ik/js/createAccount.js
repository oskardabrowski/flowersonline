$(document).ready(function() {
    const regBtn = $('.register-button');
    const regMail = $('.regMail');
    const regPass1 = $('.regPass1');
    const regPass2 = $('.regPass2');
    const emailInfoDone = $('.emailInfoDone');
    const emailInfoWarning = $('.emailInfoWarning');
    const Password1Checker = $('.Password1Checker');
    const Password2Checker = $('.Password2Checker');
    const Password1CheckerWarning = $('.Password1CheckerWarning');
    const Password2CheckerWarning = $('.Password2CheckerWarning');
    let test = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$\^&\*])(?=.{6,})");
    let isAvailable, isStrong, match;
    isAvailable = false;
    isStrong = false;
    match = false;
    regBtn.disabled = true;
    regMail.focusout(function() {
        const mail = regMail.val();
        if(mail != '') {
            $.ajax({
                url: 'php/verify-email.php',
                method: 'POST',
                data: {'email' : mail},
                success: function(response) {
                    const data = JSON.parse(response);
                    if(data.isAvailable !== 'false') {
                        emailInfoDone[0].classList.remove('dnone');
                        emailInfoWarning[0].classList.add('dnone');
                        isAvailable = true;
                    } else {
                        emailInfoWarning[0].classList.remove('dnone');
                        emailInfoDone[0].classList.add('dnone');
                        isAvailable = false;
                    }
                }
            })
        }
    })
    regPass1.focusout(function() {
        const password = regPass1.val();
        if(test.test(password)) {
            Password1Checker[0].classList.remove('dnone');
            Password1CheckerWarning[0].classList.add('dnone');
            isStrong = true;
        } else {
            Password1CheckerWarning[0].classList.remove('dnone');
            Password1Checker[0].classList.add('dnone');
            isStrong = false;
        }
    });

    regPass2.change(function() {
        if(regPass1.val() === regPass2.val()) {
            Password2Checker[0].classList.remove('dnone');
            Password2CheckerWarning[0].classList.add('dnone');
            match = true;
        } else {
            Password2CheckerWarning[0].classList.remove('dnone');
            Password2Checker[0].classList.add('dnone');
            match = false;
        }
    });

    regBtn.click(function(e) {
        e.preventDefault();
        if(isAvailable === true && isStrong === true && match === true) {
            $.ajax({
                url: 'php/create-user.php',
                method: 'POST',
                data: {"email" : regMail.val(), "password" : regPass1.val()},
                success: function(data) {
                    const markup = `<div style="position: absolute; background: linear-gradient(to right, #30B800, #6FFF3C);
                    width: 100%; top: 0; left: 0; display: flex; justify-content: center; align-items: center;
                    padding: 1rem; color: white; font-weight: 600;">Sukces, teraz możesz się zalogować!</div>`;
                    const markupDanger = `<div style="position: absolute; background: linear-gradient(to right, #DF0006, #FF3C41);
                    width: 100%; top: 0; left: 0; display: flex; justify-content: center; align-items: center;
                    padding: 1rem; color: white; font-weight: 600;">Coś poszło nie tak, sprubój ponownie później</div>`;

                    if(data == true) {
                        regMail.val('');
                        regPass1.val('');
                        regPass2.val('');
                        document.querySelector('.login').insertAdjacentHTML('afterbegin',markup);
                    } else {
                        document.querySelector('.login').insertAdjacentHTML('afterbegin',markupDanger);
                    }
                }
            })
        } else {
            alert('Proszę wypełnić wszystkie pola');
        }
    })
})