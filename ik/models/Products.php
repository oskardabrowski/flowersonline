<?php

class Product {

    private $db;
    public function __construct() {
        $this->db = new Database();
    }

    public function getNewProducts() {
        $this->db->query('SELECT * FROM products LIMIT 3');
        return $this->db->resultSet();
    }

    public function getAllProducts() {
        $this->db->query('SELECT * FROM products');
        return $this->db->resultSet();
    }

    public function getProductById($id) {
        $this->db->query('SELECT * FROM products WHERE product_id = :id');
        $this->db->bind(':id', $id);
        return $this->db->single();
    }
}
?>

<!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur consequuntur a recusandae accusantium mollitia. -->
<!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed asperiores saepe consequuntur, placeat velit voluptatum! In quidem a sit reiciendis voluptate accusantium, voluptatibus amet quaerat perspiciatis error rem iure eligendi ab placeat non est, doloremque molestiae sapiente veritatis obcaecati excepturi voluptas? Veniam, optio? Animi vel quia porro tenetur, doloremque facere. -->
<!-- ex1.jpg,ex2.jpg,ex3.jpg,ex4.jpg,ex5.jpg,ex6.jpg -->