<?php
require '../db.php';
require '../models/User.php';
require '../helpers/session-helper.php';

$user = new User();

$data = $user->findThisUser($_SESSION['user_id']);

$oldPassword = $_POST['password'];

if(password_verify($oldPassword, $data->user_password)) {
    echo true;
}


?>