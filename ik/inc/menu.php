

<div class="home-website-header-nav">
                <div class="menu-div">
                    <div class="home-website-header-nav-div1"></div>
                    <div class="home-website-header-nav-div2"></div>
                    <div class="home-website-header-nav-div3"></div>
                </div>
                <div class="home-website-header-cart">
                    <div class="home-website-header-cart-num">
                        0
                    </div>
                    <svg>
                        <use xlink:href="img/icons/shopping_cart_black_24dp.svg#cart"></use>
                    </svg>
                </div>
                <a href="login.php" class="home-website-header-account">
                    <svg>
                        <use xlink:href="img/icons/person_outline_black_24dp.svg#person"></use>
                    </svg>
                </a>
                <div class="home-website-header-nav-logo">Kwiaty Online</div>
                <div class="home-website-header-nav-menu">
                    <div class="home-website-header-nav-menu-flower">
                        <img class="home-flower flower" src="img/pictures/clipped/flower-menu1.png">
                        <img class="offer-flower flower" src="img/pictures/clipped/flower-menu2.png">
                        <img class="about-flower flower" src="img/pictures/clipped/flower-menu3.png">
                        <img class="contact-flower flower" src="img/pictures/clipped/flower-menu4.png">
                    </div>
                    <div class="home-website-header-nav-menu-btns">
                        <div><a class="menu-link homeFlower" href="index.php">Strona Główna</a></div>
                        <div><a class="menu-link productsFlower" href="products.php">Produkty</a></div>
                        <div><a class="menu-link aboutFlower" href="about.php">O nas</a></div>
                        <div><a class="menu-link contactFlower" href="contact.php">Kontakt</a></div>
                    </div>
                </div>
                <div class="home-website-header-nav-menuMobile">
                    <div class="home-website-header-nav-menuMobile-background">
                        <div class="home-website-header-nav-menuMobile-background-1"></div>
                        <div class="home-website-header-nav-menuMobile-background-2"></div>
                        <div class="home-website-header-nav-menuMobile-background-3"></div>
                    </div>
                    <div class="home-website-header-nav-menuMobile-btns">
                        <div><a class="menu-link homeFlower" href="index.php">Strona Główna</a></div>
                        <div><a class="menu-link productsFlower" href="products.php">Produkty</a></div>
                        <div><a class="menu-link aboutFlower" href="about.php">O nas</a></div>
                        <div><a class="menu-link contactFlower" href="contact.php">Kontakt</a></div>
                        <div><a class="menu-link accountFlower" href="contact.php">Konto</a></div>
                    </div>
                </div>
            </div>
            <div class="cart">
                <div class="cart-container">
                    <div class="cart-container-exit"></div>
                    <div class="cart-container-summary">
                        <div>
                            <?php
                            if(isset($_SESSION['user_id'])) {
                                echo 'Kupujesz jako użytkownik';
                            } else {
                                echo 'Kupujesz jsko gość';
                            }
                            ?>
                        </div>
                        <div>Całkowita cena: <span class="totalPrice">0 zł</span></div>
                    </div>
                    <div class="cart-container-products">
                        <div class="cart-container-products-empty">
                            <svg>
                                <use xlink:href="img/icons/shopping_cart_black_24dp.svg#cart"></use>
                            </svg>
                            <h3>Twój koszyk jest pusty</h3>
                        </div>
                        <!-- <div class="cart-container-products-item">
                            <img src='img/pictures/products/1.png'>
                            <div class="cart-container-products-item-desc">
                                <span>95zł</span>
                            </div>
                            <div class="cart-container-products-item-desc">
                                <h1 class="standard-header">Kwiat Lorem</h1>
                                <p>Brief Description - Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dicta!</p>
                            </div>
                            <button class="cart-container-products-item-delete">
                                <svg>
                                    <use xlink:href="img/icons/delete_black_24dp.svg#del"></use>
                                </svg>
                            </button>
                        </div> -->
                    </div>
                    <div class="cart-container-next next-prod"><button class="standard-btn nextBtn">Następny krok</button></div>
                    <div class="cart-container-delivery">
                        <form class="cart-container-delivery-form">
                            <h1>Wybierz rodzaj dostawy</h1>
                            <input type="radio" name="dlivery" value="15" checked>Kurier - 15zł<br>
                            <input type="radio" name="dlivery" value="5">Poczta - 5zł<br>
                            <input type="radio" name="dlivery" value="12">Paczkomat - 12zł<br>
                        </form>
                        <button class="back backToCart">
                            <svg>
                                <use xlink:href="img/icons/keyboard_arrow_left_black_24dp.svg#left">
                            </svg>
                            Poprzedni krok
                        </button>
                    </div>
                    <div class="cart-container-next next-delivery"><button class="standard-btn nextDelivery">Następny krok</button></div>
                    <div class="cart-container-checkout">
                        <div class="cart-container-checkout-form">
                            <div class="cart-container-checkout-form-card">
                                <div class="cart-container-checkout-form-card-top">
                                    <div class="cart-container-checkout-form-card-top-data">
                                        <form>
                                            <input type="text" name="name" class="nameStripe" placeholder="Wpisz swoje imię" required>
                                            <input type="text" name="surname" class="surnameStripe" placeholder="Wpisz swoje nazwisko" required>
                                            <input type="text" name="city" class="cityStripe" placeholder="Podaj miasto" required>
                                            <input type="text" name="streetAndHouse" class="streetAndHouseStripe" placeholder="Podaj adres" required>
                                            <input type="text" name="total" class="totalPriceInputStripe dnone" value="0" readonly>
                                        </form>
                                    </div>
                                    <div class="cart-container-checkout-form-card-top-chip">
                                        <svg>
                                            <use xlink:href="img/icons/credit-card.svg#chip"></use>
                                        </svg>
                                    </div>
                                </div>
                                <div class="cart-container-checkout-form-card-bottom">
                                    <form id="payment-form" class="stripe">
                                        <div id="card-element"><!--Stripe.js injects the Card Element--></div>
                                        <button id="submit" class="stripe">
                                          <div class="spinner hidden" id="spinner"></div>
                                          <span id="button-text">Zamawiam i płacę</span>
                                        </button>
                                      </form>
                                </div>
                            </div>
                            <div class="cart-container-checkout-form-deliveryAddress"></div>
                        </div>
                        <div class="attributtion">Chip icon made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        <button class="back backToDelivery">
                            <svg>
                                <use xlink:href="img/icons/keyboard_arrow_left_black_24dp.svg#left">
                            </svg>
                            Poprzedni krok
                        </button>
                    </div>
                    <div class="cart-container-paymentSuccess" style="z-index:1000000; position: absolute; top: 0; left: 0;">
                        <svg>
                            <use xlink:href="img/icons/task_alt_black_24dp.svg#check"></use>
                        </svg>
                        <h1>Twoje zamówienie zostało przyjęte do realizacji</h1>
                        <h3>Twoje id płatności: <span>id</span></h3>
                    </div>
                    <div class="cart-container-paymentDanger">
                        <svg>
                            <use xlink:href="img/icons/highlight_off_black_24dp.svg#danger"></use>
                        </svg>
                        <h1>Coś poszło nie tak! Spróbuj ponownie później</h1>
                        <h3>Błąd: <span>error</span></h3>
                    </div>
                </div>
            </div>