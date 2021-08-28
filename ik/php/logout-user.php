<?php
require '../db.php';
require '../helpers/session-helper.php';

function logout() {
    unset($_SESSION['user_id']);
    unset($_SESSION['user_email']);
    session_destroy();
    header('Location: /ik/index.php');
}

logout();
?>