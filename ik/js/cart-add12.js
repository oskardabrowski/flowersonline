$(document).ready(function() {
    let arr, data, dataLength, products, totalPrice, totalContainer, nextBtn, nextDelivery, containerProducts, containerDelivery, containerCheckout, delivery, deliveryCost;
    let backToCart, backToDelivery, totalPriceInput, paymentSuccess, paymentFailed;

    nextBtn = $('.nextBtn');
    nextDelivery = $('.nextDelivery');
    containerProducts = $('.cart-container-products');
    containerDelivery = $('.cart-container-delivery');
    containerCheckout = $('.cart-container-checkout');
    delivery = $('.cart-container-delivery-form');
    backToCart = $('.backToCart');
    backToDelivery = $('.backToDelivery');
    totalPriceInput = $('.totalPriceInputStripe');
    paymentSuccess = $('.cart-container-paymentSuccess');
    paymentFailed = $('.cart-container-paymentDanger');

    function load_js()
    {
       var scripter= $('.scripter');
       scripter.html('<script src="js/delete3.js"></script>')
    }
    function clear_js()
    {
       var scripter= $('.scripter');
       scripter.html('')
    }

    totalContainer = $('.totalPrice');
    const cart = $('.home-website-header-cart');
    const cartBody = $('.cart');
    const cartExit = $('.cart-container-exit');
    cart.on('click', function() {
        cartBody.show();
    });
    cartExit.on('click', function() {
        if(!localStorage.getItem('products')) {
            $('.totalPrice').text('0' + ' zł');
            $('.totalPriceInputStripe').val(0);
            $('.cart-container-products').html(`<div class="cart-container-products-empty">
            <svg>
                <use xlink:href="img/icons/shopping_cart_black_24dp.svg#cart"></use>
            </svg>
            <h3>Twój koszyk jest pusty</h3>
            </div>`);
            containerCheckout.hide();
            containerProducts.show();
            totalContainer.text('0 zł');
            $('.home-website-header-cart-num').text('0');
            totalPriceInput.val(0);
            cartBody.hide();
            paymentSuccess.hide();
            paymentFailed.hide();
        } else {
            cartBody.hide();
        }
    });

    nextDelivery.hide();
    nextBtn.on('click', function() {
        if(totalPrice != 0) {
            nextBtn.hide();
            containerProducts.fadeOut(1500);
            nextDelivery.show();
            containerDelivery.fadeIn(1500);
        }
    })
    backToCart.on('click', function() {
        nextBtn.show();
        containerProducts.fadeIn(1500);
        nextDelivery.hide();
        containerDelivery.fadeOut(1500);
    })

    deliveryCost = delivery.find('input:checked').val();
    delivery.on('change', function() {
        deliveryCost = delivery.find('input:checked').val();
    })

    nextDelivery.on('click', function() {
        nextDelivery.hide();
        containerDelivery.fadeOut(1500);
        containerCheckout.fadeIn(1500);

        totalPrice = parseFloat(totalPriceInput.val());
        totalPrice += parseFloat(deliveryCost);
        totalContainer.text(totalPrice + ' zł');
        totalPriceInput.val(totalPrice);
    })
    backToDelivery.on('click', function() {
        nextDelivery.show();
        containerDelivery.fadeIn(1500);
        containerCheckout.fadeOut(1500);

        totalPrice = parseFloat(totalPriceInput.val());
        totalPrice -= parseFloat(deliveryCost);
        totalContainer.text(totalPrice + ' zł');
        totalPriceInput.val(totalPrice);
    })

    if(localStorage.getItem('products')) {
        arr = localStorage.getItem('products');
        data = JSON.parse(arr);
        dataLength = data.length;
        $('.home-website-header-cart-num').text(dataLength);
        products = '';
        totalPrice = parseFloat(totalPriceInput.val());
        data.forEach(el => {
            totalPrice += parseFloat(el.price);
            products += `<div class="cart-container-products-item">
            <img src="img/pictures/products/${el.img}">
            <div class="cart-container-products-item-desc">
                <span>${el.pricetxt}</span>
            </div>
            <div class="cart-container-products-item-desc">
                <h1 class="standard-header">${el.name}</h1>
                <p>${el.desc}</p>
            </div>
            <button class="cart-container-products-item-delete">
            <input type="text" class="dnone" value="${el.id}" readonly>
                <svg>
                    <use xlink:href="img/icons/delete_black_24dp.svg#del"></use>
                </svg>
            </button>
            </div>`
        });
        $('.cart-container-products').html(products);
        totalContainer.text(totalPrice + ' zł');
        totalPriceInput.val(totalPrice);
        load_js();
    }

    const addBtn = $('.addToCart');
    addBtn.on('click', function(e) {
        e.preventDefault();
        clear_js();
        let id, price, priceText, name, desc, img;

        id = $(this).find('.prod-id').val();
        price = $(this).find('.price').val();
        priceText = $(this).find('.price-text').val();
        name = $(this).find('.name').val();
        desc = $(this).find('.desc').val();
        img = $(this).find('.prod-img').val();
        $.ajax({
            type: 'POST',
            url: 'php/session-cart.php',
            data: {'product-id': id, 'price': price, 'price-text': priceText, 'name': name, 'desc': desc, 'img': img},
            success: function(response) {

                let products, totalPrice, cart, length, prodNum, newProduct, arr, json, items;

                prodNum = $('.home-website-header-cart-num');
                cart = $('.cart-container-products');


                if(response != 'guest') {
                    let newItem = function(id, price, pricetxt, name, desc, img) {
                        this.id = id;
                        this.price = price;
                        this.pricetxt = pricetxt;
                        this.name = name;
                        this.desc = desc;
                        this.img = img;
                    }

                    if(!localStorage.getItem('products')) {
                        newProduct = new newItem(id, price, priceText, name, desc, img);
                        arr = [];
                        arr.push(newProduct);
                        json = JSON.stringify(arr);
                        localStorage.setItem('products', json);
                        prodNum.text('1');
                        products = '';
                        totalPrice = 0;
                        arr.forEach(el => {
                            totalPrice += parseFloat(el.price);
                            products += `<div class="cart-container-products-item">
                            <img src="img/pictures/products/${el.img}">
                            <div class="cart-container-products-item-desc">
                                <span>${el.pricetxt}</span>
                            </div>
                            <div class="cart-container-products-item-desc">
                                <h1 class="standard-header">${el.name}</h1>
                                <p>${el.desc}</p>
                            </div>
                            <button class="cart-container-products-item-delete">
                            <input type="text" class="dnone" value="${el.id}" readonly>
                                <svg>
                                    <use xlink:href="img/icons/delete_black_24dp.svg#del"></use>
                                </svg>
                            </button>
                            </div>`
                        });
                        cart.html(products);
                        totalContainer.text(totalPrice + ' zł');
                        totalPriceInput.val(totalPrice);
                        load_js();
                    } else {
                        totalPrice = parseFloat(totalPriceInput.val());
                        items = localStorage.getItem('products');
                        data = JSON.parse(items);
                        newProduct = new newItem(id, price, priceText, name, desc, img);
                        totalPrice += parseFloat(newProduct.price);
                        data.push(newProduct);
                        arrLength = data.length;
                        json = JSON.stringify(data);
                        localStorage.setItem('products', json);
                        products = '';
                        data.forEach(el => {
                            products += `<div class="cart-container-products-item">
                            <img src="img/pictures/products/${el.img}">
                            <div class="cart-container-products-item-desc">
                                <span>${el.pricetxt}</span>
                            </div>
                            <div class="cart-container-products-item-desc">
                                <h1 class="standard-header">${el.name}</h1>
                                <p>${el.desc}</p>
                            </div>
                            <button class="cart-container-products-item-delete">
                            <input type="text" class="dnone" value="${el.id}" readonly>
                                <svg>
                                    <use xlink:href="img/icons/delete_black_24dp.svg#del"></use>
                                </svg>
                            </button>
                            </div>`
                        });
                        prodNum.text(arrLength);
                        cart.html(products);
                        totalContainer.text(totalPrice + ' zł');
                        totalPriceInput.val(totalPrice);
                        load_js();
                    }
                } else {
                    let newItem = function(id, price, pricetxt, name, desc, img) {
                        this.id = id;
                        this.price = price;
                        this.pricetxt = pricetxt;
                        this.name = name;
                        this.desc = desc;
                        this.img = img;
                    }

                    if(!localStorage.getItem('products')) {
                        newProduct = new newItem(id, price, priceText, name, desc, img);
                        arr = [];
                        arr.push(newProduct);
                        json = JSON.stringify(arr);
                        localStorage.setItem('products', json);
                        prodNum.text('1');
                        products = '';
                        totalPrice = 0;
                        arr.forEach(el => {
                            totalPrice += parseFloat(el.price);
                            products += `<div class="cart-container-products-item">
                            <img src="img/pictures/products/${el.img}">
                            <div class="cart-container-products-item-desc">
                                <span>${el.pricetxt}</span>
                            </div>
                            <div class="cart-container-products-item-desc">
                                <h1 class="standard-header">${el.name}</h1>
                                <p>${el.desc}</p>
                            </div>
                            <button class="cart-container-products-item-delete">
                            <input type="text" class="dnone" value="${el.id}" readonly>
                                <svg>
                                    <use xlink:href="img/icons/delete_black_24dp.svg#del"></use>
                                </svg>
                            </button>
                            </div>`
                        });
                        cart.html(products);
                        totalContainer.text(totalPrice + ' zł');
                        totalPriceInput.val(totalPrice);
                        load_js();
                    } else {
                        totalPrice = parseFloat(totalPriceInput.val());
                        items = localStorage.getItem('products');
                        data = JSON.parse(items);
                        newProduct = new newItem(id, price, priceText, name, desc, img);
                        totalPrice += parseFloat(newProduct.price);
                        data.push(newProduct);
                        arrLength = data.length;
                        json = JSON.stringify(data);
                        localStorage.setItem('products', json);
                        products = '';
                        data.forEach(el => {
                            products += `<div class="cart-container-products-item">
                            <img src="img/pictures/products/${el.img}">
                            <div class="cart-container-products-item-desc">
                                <span>${el.pricetxt}</span>
                            </div>
                            <div class="cart-container-products-item-desc">
                                <h1 class="standard-header">${el.name}</h1>
                                <p>${el.desc}</p>
                            </div>
                            <button class="cart-container-products-item-delete">
                            <input type="text" class="dnone" value="${el.id}" readonly>
                                <svg>
                                    <use xlink:href="img/icons/delete_black_24dp.svg#del"></use>
                                </svg>
                            </button>
                            </div>`
                        });
                        prodNum.text(arrLength);
                        cart.html(products);
                        totalContainer.text(totalPrice + ' zł');
                        totalPriceInput.val(totalPrice);
                        load_js();
                    }
                }
            }
        })
    })


})

//localStorage.clear();