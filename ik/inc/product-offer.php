<?php
include 'models/Products.php';
$product = new Product();
$products = $product->getAllProducts();

$user = new User();
$data = $user->findThisUser($_SESSION['user_id']);
$like = $data->user_liked;
$liked = explode(',', $like);
?>

<div class="offer">
    <div class='container-offer'>
    <?php foreach($products as $p):?>
            <div class="card">
            <div class="card__picture">
                <div class="card__picture-price">
                    <p><?php echo $p->product_price; ?></p>
                </div>
                <a href="" class="card__picture-addToCart addToCart">
                    <input class="prod-id" name="id" type="text" value="<?php echo $p->product_id;?>" readonly style="display: none;"/>
                    <input class="price" name="price" type="number" value="<?php echo $p->product_num_price;?>" readonly style="display: none;"/>
                    <input class="price-text" name="price-text" type="text" value="<?php echo $p->product_price;?>" readonly style="display: none;"/>
                    <input class="name" name="product-name" type="text" value="<?php echo $p->product_name;?>" readonly style="display: none;"/>
                    <input class="desc" name="product-desc" type="text" value="<?php echo $p->product_brief;?>" readonly style="display: none;"/>
                    <input class="prod-img" name="product-img" type="text" value="<?php echo $p->product_generalImage;?>" readonly style="display: none;"/>
                    <svg>
                        <use xlink:href="img/icons/add_circle_outline_black_24dp.svg#add"></use>
                    </svg>
                </a>
                <a href="product-page.php?pid=<?php echo $p->product_id;?>" class="card__picture-info">
                    <svg>
                        <use xlink:href="img/icons/info_black_24dp.svg#info"></use>
                    </svg>
                </a>
                <button class="card__picture-observe AddToLikedByUser" id="<?php echo $p->product_id; ?>">
                <?php
                    if(isset($_SESSION['user_id'])) {
                        $pid = strval($p->product_id);
                        if(in_array($pid, $liked)) {
                            echo '<svg>
                            <use xlink:href="img/icons/favorite_all_black_24dp.svg#favall"></use>
                            </svg>';
                        } else {
                            echo '<svg>
                            <use xlink:href="img/icons/favorite_border_black_24dp.svg#fav"></use>
                            </svg>';
                        }
                    } else {
                        echo '<svg>
                        <use xlink:href="img/icons/favorite_border_black_24dp.svg#fav"></use>
                        </svg>';
                    }
                ?>
                </button>
                <div class="card__picture-text"><?php echo $p->product_name; ?></div>
                <img class="card__picture-img" src="img/pictures/products/<?php echo $p->product_generalImage; ?>">
            </div>
        </div>
        <?php endforeach;?>
    </div>
</div>