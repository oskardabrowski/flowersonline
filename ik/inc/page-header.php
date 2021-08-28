<?php
include 'models/Products.php';
$product = new Product();

if(isset($_GET['pid'])) {
    $id = $_GET['pid'];
} else {
    $id = '1';
}
$p = $product->getProductById($id);
$gallery = explode(',', $p->product_images);
?>

<header class="home-website-header">
            <div class="home-website-header-nav">
                <div class="menu-div">
                    <div class="home-website-header-nav-div1"></div>
                    <div class="home-website-header-nav-div2"></div>
                    <div class="home-website-header-nav-div3"></div>
                </div>
                <div class="home-website-header-cart">
                    <div class="home-website-header-cart-num">0</div>
                    <svg>
                        <use xlink:href="img/icons/shopping_cart_black_24dp.svg#cart"></use>
                    </svg>
                </div>
                <div class="home-website-header-account">
                    <svg>
                        <use xlink:href="img/icons/person_outline_black_24dp.svg#person"></use>
                    </svg>
                </div>
                <div class="home-website-header-nav-logo">Kwiaty Online</div>
                <?php require 'inc/menu.php'; ?>
            </div>
            <div class="productDiv">
                <div class="productDiv-container">
                    <img class="productDiv-container-img" src="img/pictures/products/<?php echo $p->product_generalImage; ?>">
                    <div class="productDiv-container-header"><div><h1><?php echo $p->product_name; ?></h1><p><?php echo $p->product_brief; ?></p></div>
                    <a class="standard-btn addToCart">Dodaj do koszyka
                    <input class="prod-id" name="id" type="text" value="<?php echo $p->product_id;?>" readonly style="display: none;"/>
                    <input class="price" name="price" type="number" value="<?php echo $p->product_num_price;?>" readonly style="display: none;"/>
                    <input class="price-text" name="price-text" type="text" value="<?php echo $p->product_price;?>" readonly style="display: none;"/>
                    <input class="name" name="product-name" type="text" value="<?php echo $p->product_name;?>" readonly style="display: none;"/>
                    <input class="desc" name="product-desc" type="text" value="<?php echo $p->product_brief;?>" readonly style="display: none;"/>
                    <input class="prod-img" name="product-img" type="text" value="<?php echo $p->product_generalImage;?>" readonly style="display: none;"/>
                </a></div>
                </div>
            </div>
            <div class="modal">
                <div class="modal-window">
                    <div class="modal-window-close">
                        <div class="modal-window-close-1"></div>
                        <div class="modal-window-close-2"></div>
                    </div>
                    <div class="modal-window-img"></div>
                </div>
            </div>
        </header>