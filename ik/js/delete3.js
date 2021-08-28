$(document).ready(function() {
    let items = JSON.parse(localStorage.getItem('products'));
    let cart = $('.cart-container-products');
    let totalPriceInput = $('.totalPriceInputStripe');
    let prodNum = $('.home-website-header-cart-num');
    var deleted = 0;
    console.log(items);

    class Obj {
        constructor(id, price, pricetxt, name, desc, img) {
            this.id = id;
            this.price = price;
            this.pricetxt = pricetxt;
            this.name = name;
            this.desc = desc;
            this.img = img;
        }
    }

    $('.cart-container-products-item-delete').on('click', function() {
        items = JSON.parse(localStorage.getItem('products')), console.log(items);
        let elId = $(this).find('input').val();
        $(this).parent().remove();
        let newJson = [];
        items.forEach(el =>{
            if(el.id !== elId && deleted == 0) {
                let item = new Obj(el.id, el.price, el.pricetxt, el.name, el.desc, el.img);
                newJson.push(item);
            } else if (deleted == 1) {
                let item = new Obj(el.id, el.price, el.pricetxt, el.name, el.desc, el.img);
                newJson.push(item);
            } else {
                deleted = 1;
            }
        });
        console.log(newJson);
        deleted = 0;
        let string = JSON.stringify(newJson);
        localStorage.setItem('products', string);
        let length = newJson.length;
        prodNum.text(length);
        let totalPrice = 0;
        newJson.forEach(el => {
            totalPrice += parseFloat(el.price);
        })
        let totalContainer = $('.totalPrice'), totalPriceInput = $('.totalPriceInputStripe');
        totalContainer.text(totalPrice + ' zł');
        totalPriceInput.val(totalPrice);
    });
});
