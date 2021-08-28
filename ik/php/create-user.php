<?php
require '../models/User.php';
require '../db.php';

$user = new User();

$email = $_POST["email"];
$password = $_POST["password"];

$passwordHash = password_hash($password, PASSWORD_DEFAULT);

if($user->createUser($email, $passwordHash)) {
    echo true;
} else {
    echo false;
}

?>