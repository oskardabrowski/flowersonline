$(document).ready(function() {
    const OldPasswordInput = $('.OldPasswordInput');
    const NewPasswordInput1 = $('.NewPasswordInput1');
    const NewPasswordInput2 = $('.NewPasswordInput2');
    const PasswordChangeInput = $('.PasswordChangeInput');
    const OldPasswordChecker = $('.OldPasswordChecker');
    const NewPasswordChecker = $('.NewPasswordChecker');
    const MatchPasswordChecker = $('.MatchPasswordChecker');

    let verified, strong, match;
    verified = false;
    strong = false;
    match = false;
    OldPasswordInput.focusout(function() {
        const oldPassword = OldPasswordInput.val();

        $.ajax({
            url: 'php/check-oldpassword.php',
            method: 'POST',
            data: {'password' : oldPassword},
            success: function(response) {
                if(response == 1) {
                    const markup = `<div class="PasswordVerified" style="color: black; fill: black;">
                    <svg style="width: .75rem; height: .75rem;">
                        <use xlink:href="img/icons/done_black_24dp.svg#done">
                    </svg>Hasło Prawidłowe</div>`;
                    OldPasswordChecker.html(markup);
                    verified = true;
                } else {
                    const markup = `
                    <div class="PasswordNotVerified" style="color: black; fill: black;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/dangerous_black_24dp.svg#danger">
                        </svg>Hasło nieprawidłowe</div>`;
                    OldPasswordChecker.html(markup);
                    verified = false;
                }
            }
        });
    });

    const test = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$\^&\*])(?=.{6,})');

    NewPasswordInput1.focusout(function() {
        const newPassword = NewPasswordInput1.val();
        if(test.test(newPassword)) {
            const markup = `<div class="PasswordVerified" style="color: black; fill: black;">
            <svg style="width: .75rem; height: .75rem;">
                <use xlink:href="img/icons/done_black_24dp.svg#done">
            </svg>Twoje hasło jest silne</div>`;
            NewPasswordChecker.html(markup);
            strong = true;
        } else {
            const markup = `<div class="PasswordVerified" style="color: black; fill: black;">
            <svg style="width: .75rem; height: .75rem;">
                <use xlink:href="img/icons/dangerous_black_24dp.svg#danger">
            </svg>Hasło powinno zawierać jedną dużą literę, jedną małą literę,<br> jedną liczbę i znak specjalny np. !@#$^&* oraz mieć conajmniej 6 znaków</div>`;
            NewPasswordChecker.html(markup);
            strong = false;
        }
    });

    NewPasswordInput2.focusout(function() {
        const newPassword1 = NewPasswordInput1.val();
        const newPassword2 = NewPasswordInput2.val();

        if(newPassword1 === newPassword2) {
            const markup = `<div class="PasswordVerified" style="color: black; fill: black;">
                    <svg style="width: .75rem; height: .75rem;">
                        <use xlink:href="img/icons/done_black_24dp.svg#done">
                    </svg>Hasło są takie same</div>`;
            MatchPasswordChecker.html(markup);
            match = true;
        } else {
            const markup = `
                    <div class="PasswordNotVerified" style="color: black; fill: black;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/dangerous_black_24dp.svg#danger">
                        </svg>Hasło nie są takie same</div>`;
            MatchPasswordChecker.html(markup);
            match = false;
        }
    });


    PasswordChangeInput.click(function(e) {
        e.preventDefault();
        if(match === true && strong === true && verified === true) {
            $.ajax({
                url: 'php/password-change.php',
                method: 'POST',
                data: {'password' : NewPasswordInput1.val()},
                success: function(data) {
                    const account = $('.account');
                    let newData = JSON.parse(data);
                    if(newData.success === true) {
                        const markup = `<div class="markupInfoPassword" style="position: absolute; background: linear-gradient(to right, #30B800, #6FFF3C);
                        width: 100%; top: 0; left: 0; display: flex; justify-content: center; align-items: center;
                        padding: 1rem; color: white; font-weight: 600;">Sukces, twoje hasło zostało zmienione!</div>`;
                        account.append(markup);
                        async function fadeOut() {
                            await $('.markupInfoPassword').delay(500).animate({opacity: '0'}, 1500,
                             function() {
                                $('.markupInfoPassword').remove();
                             });
                        }
                        fadeOut();
                    } else {
                        const markupDanger = `<div class="markupInfoPassword" style="position: absolute; background: linear-gradient(to right, #DF0006, #FF3C41);
                        width: 100%; top: 0; left: 0; display: flex; justify-content: center; align-items: center;
                        padding: 1rem; color: white; font-weight: 600;">Coś poszło nie tak, sprubój ponownie później</div>`;
                        account.append(markupDanger);
                        async function fadeOut() {
                            await $('.markupInfoPassword').delay(500).animate({opacity: '0'}, 1500,
                             function() {
                                $('.markupInfoPassword').remove();
                             });
                        }
                        fadeOut();
                    }
                }
            })
        } else {
            alert('Proszę wypełnić wszystko poprawnie!');
        }
    })
})

