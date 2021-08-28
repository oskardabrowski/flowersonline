<?php
require './db.php';
require './helpers/session-helper.php';
require './models/Order.php';

require 'vendor/autoload.php';

$order = new Order();

// This is your real test secret API key.
\Stripe\Stripe::setApiKey('sk_test_51IfrSnFRZt7FtZ9TlFgFuHQ7paiQ3nHOakoDVGguBokhid4UOPAJhWRNxhFcUWbc7vVWYucdvRc6tqScKPcXsAKy00A0lbef98');

$name = $_POST['name'];
$surname = $_POST['surname'];
$city = $_POST['city'];
$address = $_POST['address'];
$paid = $_POST['paid'];
$products = $_POST['products'];
$delivery = $_POST['delivery'];

switch($delivery) {
  case '15': $deliveryMethod = 'Kurier'; break;
  case '5': $deliveryMethod = 'Poczta'; break;
  case '12': $deliveryMethod = 'Paczkomat'; break;
  default: $deliveryMethod = 'unknown'; break;
}

$amount = $paid * 100;

try {
  $paymentIntent = \Stripe\PaymentIntent::create([
    'amount' => $amount,
    'currency' => 'pln',
  ]);

  if(isset($_SESSION['user_id'])) {
    $order->addOrder($_SESSION['user_id'], 'Opłacone', $paymentIntent->id, $amount, $products, $deliveryMethod);
  }

  echo json_encode(['clientSecret' => $paymentIntent->client_secret]);
} catch (Error $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}