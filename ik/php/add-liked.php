<?php
require '../db.php';
require '../models/User.php';
require '../helpers/session-helper.php';

$user = new User();
$data = $user->findThisUser($_SESSION['user_id']);
$id = $_POST['id'];
$like = $data->user_liked;
$liked = explode(',', $like);


if(in_array($id, $liked)) {
    $array = '';
    foreach($liked as $l) {
        if($l !== '') {
            if($l !== $id) {
                $array .= $l.',';
            }
        }
    }
    $user->addToLiked($_SESSION['user_id'], $array);
    echo false;
} else {
    $array = '';
    foreach($liked as $l) {
        if($l !== '') {
            $array .= $l.',';
        }
    }
    $array .= $id.',';
    $user->addToLiked($_SESSION['user_id'], $array);
    echo true;
}


?>
