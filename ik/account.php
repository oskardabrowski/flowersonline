<?php require 'inc/head.php'; ?>
<?php

if(!isset($_SESSION['user_id'])) {
    header('Location: /ik/login.php');
}

if(isset($_GET['pid'])) {
    $pid = $_GET['pid'];
} else {
    $pid = '';
}

$user = new User();

$data = $user->findThisUser($_SESSION['user_id']);
?>


<body>
    <div class="account">
        <div class="account-menu">
            <div class="account-menu-user">
                <div class="account-menu-user-img">
                    <img src="img/users/<?php
                    if(isset($data->user_img)) {echo $data->user_img; } else {echo 'defaultImg.jpg';};
                    ?>">
                </div>
                <div class="flexColumn">
                    <div class="account-menu-user-name"><?php
                    if(isset($data->user_name)) {echo $data->user_name; } else {echo '';};
                    ?></div>
                    <div class="account-menu-user-email"><?php if(isset($data->user_email)) {echo $data->user_email; } else {echo '';}; ?></div>
                </div>
                <div class="account-menu-user-mobile">
                    <div class="account-menu-user-mobile-1"></div>
                    <div class="account-menu-user-mobile-2"></div>
                    <div class="account-menu-user-mobile-3"></div>
                </div>
            </div>
            <div class="account-menu-buttons">
                <ul class="account-menu-buttons-list">
                    <li>
                        <a href='?pid=account' style="text-decoration: none;">
                            <svg>
                                <use xlink:href="img/icons/person_outline_black_24dp.svg#person"></use>
                            </svg>
                            <p>Moje Konto</p></li>
                        </a>
                    <li>
                        <a href='?pid=orders' style="text-decoration: none;">
                            <svg>
                                <use xlink:href="img/icons/shopping_bag_black_24dp.svg#bag"></use>
                            </svg>
                            <p>Moje Zamównienia</p></li>
                        </a>
                    <li>
                        <a href='?pid=liked' style="text-decoration: none;">
                            <svg>
                                <use xlink:href="img/icons/favorite_border_black_24dp.svg#fav"></use>
                            </svg>
                            <p>Ulubione</p></li>
                        </a>
                    <li>
                        <a href='?pid=password' style="text-decoration: none;">
                            <svg>
                                <use xlink:href="img/icons/lock_open_black_24dp.svg#lockOpen"></use>
                            </svg>
                            <p>Zmiana hasła</p></li>
                        </a>
                    <li>
                        <a href="php/logout-user.php" style="text-decoration: none;">
                            <svg>
                                <use xlink:href="img/icons/logout_black_24dp.svg#logout"></use>
                            </svg>
                            <p>Wyloguj</p></li>
                        </a>
                    <li>
                        <a href='<?php echo BASE_URL; ?>/index.php' style="text-decoration: none;">
                            <svg>
                                <use xlink:href="img/icons/shopping_cart_black_24dp.svg#cart"></use>
                            </svg>
                            <p>Sklep</p></li>
                        </a>
                </ul>
            </div>
        </div>
        <div class="account-body">
            <?php
            switch($pid) {
                case 'account':
                    include 'inc/account-details.php';
                break;
                case 'orders':
                    include 'inc/account-orders.php';
                break;
                case 'liked':
                    include 'inc/account-liked.php';
                break;
                case 'password':
                    include 'inc/account-password.php';
                break;
                default:
                    include 'inc/account-details.php';
                break;
            }
            ?>
        </div>
    </div>
<?php include 'inc/scripts.php'; ?>
</body>
</html>