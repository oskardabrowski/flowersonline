<?php
require '../db.php';
require '../models/User.php';
require '../helpers/session-helper.php';

$user = new User();
$data = $user->findThisUser($_SESSION['user_id']);
$id = $_POST['id'];
$name = $_POST['name'];
$desc = $_POST['desc'];

$filename = $_FILES['image']['name'];
$filetmpname = $_FILES['image']['tmp_name'];
$filesize = $_FILES['image']['size'];
$path = '../img/users/'.basename($filename);
$oldImage = $data->user_img;
print_r($oldImage);

if(!empty($filename)) {
    if(!file_exists($path)) {
        $user->updateUserImg($filename, $filetmpname, $filesize, $path);
    }
}

if(!empty($name)) {
    if(!empty($desc)) {
        if($_FILES['image']['name'] !== '') {
            if($user->updateUserDetails($id, $name, $desc, $filename)) {
                header('Location: /ik/account.php');
            }
        } else {
            if($user->updateUserDetails($id, $name, $desc, $oldImage)) {
                header('Location: /ik/account.php?here');
            }
        }
    } else {
        if($_FILES['image']['name'] !== '') {
            if($user->updateUserDetails($id, $name, $data->user_desc, $filename)) {
                header('Location: /ik/account.php');
            }
        } else {
            if($user->updateUserDetails($id, $name, $data->user_desc, $oldImage)) {
                header('Location: /ik/account.php');
            }
        }
    }
} else {
    if(!empty($desc)) {
        if($_FILES['image']['name'] !== '') {
            if($user->updateUserDetails($id, $data->user_name, $desc, $filename)) {
                header('Location: /ik/account.php');
            }
        } else {
            if($user->updateUserDetails($id, $data->user_name, $desc, $oldImage)) {
                header('Location: /ik/account.php');
            }
        }
    } else {
        if($_FILES['image']['name'] !== '') {
            if($user->updateUserDetails($id, $data->user_name, $data->user_desc, $filename)) {
                header('Location: /ik/account.php');
            }
        } else {
            if($user->updateUserDetails($id, $data->user_name, $data->user_desc, $oldImage)) {
                header('Location: /ik/account.php');
            }
        }
    }
}

?>