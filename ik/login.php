<?php require 'inc/head.php'; ?>

<?php
if(!empty($_SESSION['user_id'])) {
    header('Location: /ik/account.php');

}
?>
<body>
    <div class="login">

        <div class="login-container">
            <div class="login-container-account">
                <button  class="login-container-account-register">
                    Zarejestruj się
                    <svg>
                        <use xlink:href="img/icons/trending_flat_black_24dp.svg#arrow"></use>
                    </svg>
                </button>
                <div class="login-container-account-img">
                    <svg>
                        <use xlink:href="img/icons/person_outline_black_24dp.svg#person"></use>
                    </svg>
                </div>
                <div class="login-container-account-text">
                    <h2>Zaloguj się</h2>
                </div>
                <form class="login-container-account-form">
                    <input type="email" class="loginEmailAccount" placeholder="Wpisz swój adres email" required>
                    <div class="emailInfoExist dnone" style="color: white; fill: white;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/done_black_24dp.svg#done">
                        </svg>Email poprawny</div>
                    <div class="emailInfoNoExist dnone" style="color: white; fill: white;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/dangerous_black_24dp.svg#danger">
                        </svg>Email nie istnieje, możesz się zarejestrować</div>
                    <input type="Password" class="passwordLoginAccount" placeholder="Wpisz swoje hasło" required>
                    <div class="passwordMatch dnone" style="color: white; fill: white;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/done_black_24dp.svg#done">
                        </svg>Email dostępny</div>
                    <div class="passwordWrong dnone" style="color: white; fill: white;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/dangerous_black_24dp.svg#danger">
                        </svg>Email zajęty</div>
                    <button class="ButtonLoginAccount">Zaloguj</button>
                </form>
            </div>
            <div class="login-container-noaccount">
                <button  class="login-container-noaccount-login">
                    Zaloguj się
                    <svg>
                        <use xlink:href="img/icons/trending_flat_black_24dp.svg#arrow"></use>
                    </svg>
                </button>
                <div class="login-container-noaccount-img">
                    <svg>
                        <use xlink:href="img/icons/person_add_black_24dp.svg#addperson"></use>
                    </svg>
                </div>
                <div class="login-container-noaccount-text">
                    <h2>Zarejestruj się</h2>
                </div>
                <form class="login-container-noaccount-form" style="color: white;">
                    <input type="email" class="regMail" placeholder="Wpisz adres email" required>
                    <div class="emailInfoDone dnone" style="color: white; fill: white;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/done_black_24dp.svg#done">
                        </svg>Email dostępny</div>
                    <div class="emailInfoWarning dnone" style="color: white; fill: white;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/dangerous_black_24dp.svg#danger">
                        </svg>Email zajęty</div>
                    <input type="Password" class="regPass1" placeholder="Wpisz hasło" required>
                    <div class="Password1Checker dnone" style="color: white; fill: white;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/done_black_24dp.svg#done">
                        </svg>Twoje hasło jest silne</div>
                    <div class="Password1CheckerWarning dnone" style="color: white; fill: white;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/dangerous_black_24dp.svg#danger">
                        </svg>Hasło powinno zawierać jedną dużą literę, jedną małą literę,<br> jedną liczbę i znak specjalny np. !@#$^&* oraz mieć conajmniej 6 znaków</div>
                    <input type="Password" class="regPass2" placeholder="Powtórz hasło" required>
                    <div class="Password2Checker dnone" style="color: white; fill: white;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/done_black_24dp.svg#done">
                        </svg>Twoje hasło jest silne</div>
                    <div class="Password2CheckerWarning dnone" style="color: white; fill: white;">
                        <svg style="width: .75rem; height: .75rem;">
                            <use xlink:href="img/icons/dangerous_black_24dp.svg#danger">
                        </svg>Hasła nie są takie same!</div>
                    <button class="register-button">Zarejestruj</button>
                </form>
            </div>
        </div>
    </div>
    <?php include 'inc/scripts.php'; ?>
</body>
</html>