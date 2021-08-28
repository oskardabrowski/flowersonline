<?php

class User{
    public function __construct() {
        $this->db = new Database();
    }

    public function verifyEmail($email) {
        $this->db->query('SELECT user_email FROM users WHERE user_email = :email');
        $this->db->bind(':email', $email);
        $result = $this->db->resultSet();
        return $result;
    }

    public function createUser($email, $password) {
        $this->db->query('INSERT INTO users (user_email, user_password) VALUES (:email, :password)');
        $this->db->bind(':email', $email);
        $this->db->bind(':password', $password);
        if($this->db->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function findUserByEmail($email) {
        $this->db->query('SELECT * FROM users WHERE user_email = :email');
        $this->db->bind(':email', $email);
        $result = $this->db->single();
        return $result;
    }

    public function findThisUser($id) {
        $this->db->query('SELECT * FROM users WHERE user_id = :id');
        $this->db->bind(':id', $id);
        $result = $this->db->single();
        return $result;
    }

    public function updateUserDetails($id, $name, $desc, $img) {
        $this->db->query('UPDATE users SET user_name = :name, user_desc = :desc, user_img = :img WHERE user_id = :id ');
        $this->db->bind(':id', $id);
        $this->db->bind(':name', $name);
        $this->db->bind(':desc', $desc);
        $this->db->bind(':img', $img);
        if($this->db->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function updateUserImg($filename, $tmpName, $tmpSize, $path) {
        $supported = array('jpg', 'jpeg', 'png');
        $extension = pathinfo($filename, PATHINFO_EXTENSION);
        if(in_array($extension, $supported)) {
            if($tmpSize < 5000000) {
                if(move_uploaded_file($tmpName, $path)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function updatePassword($id, $password) {
        $this->db->query('UPDATE users SET user_password = :password WHERE user_id = :id');
        $this->db->bind(':id', $id);
        $this->db->bind(':password', $password);
        if($this->db->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function addToLiked($id, $string) {
        $this->db->query('UPDATE users SET user_liked = :liked WHERE user_id = :id');
        $this->db->bind(':id', $id);
        $this->db->bind(':liked', $string);
        if($this->db->execute()) {
            return true;
        } else {
            return false;
        }
    }
}
?>