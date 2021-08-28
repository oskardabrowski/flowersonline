<?php
require '../db.php';
require '../models/User.php';
require '../helpers/session-helper.php';

$user = new User();

$email = $_POST['email'];
$password = $_POST['password'];

$thisUser = $user->findUserByEmail($email);
$userPassword = $thisUser->user_password;

if(password_verify($password, $userPassword)) {
    $login = $user->findThisUser($thisUser->user_id);
    if($login) {
        $loggedUser = CreateUserSession($login);
        echo json_encode(['login' => 'true']);
    } else {
        echo json_encode(['login' => 'false', 'error' => 'Problem ze stworzeniem sesji']);
    }
} else {
    // echo json_encode(array($loginPassword => false));
    echo json_encode(['login' => 'false', 'error' => 'Niepoprwne hasło']);
}

function CreateUserSession($login) {
    $_SESSION['user_id'] = $login->user_id;
    $_SESSION['email'] = $login->user_email;
}

?>