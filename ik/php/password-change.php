<?php
require '../db.php';
require '../models/User.php';
require '../helpers/session-helper.php';

$user = new User();

$data = $user->findThisUser($_SESSION['user_id']);

$newPassword = $_POST['password'];

$newHash = password_hash($newPassword, PASSWORD_DEFAULT);

if($user->updatePassword($data->user_id, $newHash)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}




?>