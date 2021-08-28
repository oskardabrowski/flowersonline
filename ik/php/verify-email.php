<?php
require '../models/User.php';
require '../db.php';

$user = new User();

$email = $_POST['email'];
$exists = $user->verifyEmail($email);
if($exists) {
    echo '{"isAvailable" : "false"}';
} else {
    echo '{"isAvailable" : "true"}';
}



?>