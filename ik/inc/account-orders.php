<?php require 'models/Order.php';?>
<?php
$order = new Order();
$orders = $order->getUserOrders($_SESSION['user_id']);

?>

<div class="account-body-orders">
                <?php foreach($orders as $o):?>
                    <div class="account-body-orders-order">
                    <h2>Zamównienie id: <?php echo $o->order_id; ?></h2>
                    <p>Status: <span><?php echo $o->order_status; ?></span></p>
                    <p>Id płatności: <span><?php echo $o->order_paymentId; ?></span></p>
                    <p>Zamówione produkty: <?php
                    for($i = 0; $i < count(json_decode($o->order_products)); $i++) {
                        if($i+1 < count(json_decode($o->order_products))) {
                            echo ' '.json_decode($o->order_products)[$i]->name.',';
                        } else {
                            echo ' '.json_decode($o->order_products)[$i]->name;
                        }
                    }
                    ?></p>
                    <p>Zamówione produkty: <?php echo ($o->order_paid/100).' zł'; ?></p>
                    <p>Przesyłka: <span><?php echo $o->order_delivery; ?></span></p>
                    </div>
                <?php endforeach;?>
            </div>