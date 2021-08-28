<?php
require './models/Products.php';

$product = new Product();

$user = new User();
$data = $user->findThisUser($_SESSION['user_id']);
$like = $data->user_liked;
$liked = explode(',', $like);

?>

<div class="account-body-liked">
                <?php foreach ($liked as $l): ?>
                    <?php if($l != ''):?>
                        <?php $data = $product->getProductById($l); ?>
                        <div class="card">
                            <a href="product-page.php?pid=<?php echo $data->product_id; ?>"  class="card__picture">
                                <div class="card__picture-text"><?php echo $data->product_name; ?></div>
                                <img class="card__picture-img" src="img/pictures/products/<?php echo $data->product_generalImage; ?>">
                            </a>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>