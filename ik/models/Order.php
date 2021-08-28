<?php

class Order {
    public function __construct() {
        $this->db = new Database();
    }

    public function addOrder($user, $status, $paymentId, $paid, $products, $delivery) {
        $this->db->query('INSERT INTO orders (order_user, order_status, order_paymentId, order_paid, order_products, order_delivery)
        VALUES (:user, :status, :paymentId, :paid, :products, :delivery)');
        $this->db->bind(':user', $user);
        $this->db->bind(':status', $status);
        $this->db->bind(':paymentId', $paymentId);
        $this->db->bind(':paid', $paid);
        $this->db->bind(':products', $products);
        $this->db->bind(':delivery', $delivery);
        if($this->db->execute()) {
            return true;
        } else {
            return false;
        }
    }

    public function getUserOrders($id) {
        $this->db->query('SELECT * FROM orders WHERE order_user = :id ORDER BY order_id DESC');
        $this->db->bind(':id', $id);
        $result = $this->db->resultSet();
        return $result;
    }

}
?>