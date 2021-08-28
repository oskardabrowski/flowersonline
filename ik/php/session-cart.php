<?php
require '../db.php';
require '../helpers/session-helper.php';
require '../models/User.php';

if(isset($_SESSION['user_id'])) {
    echo 'user';
} else {
    echo 'guest';
}


// unset($_SESSION['cart']);
?>