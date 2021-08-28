// A reference to Stripe.js initialized with your real test publishable API key.
var stripe = Stripe("pk_test_51IfrSnFRZt7FtZ9TkBwHYG7WiX2nnzMKxEQ9TwQI7qlwjtzofZozvqXRWv4JGYo6KRbMayqiQM1DIIsfWOe5ZBze00aZqB0dnv");



// The items the customer wants to buy
// var purchase = {
//   items: total
// };

var elements = stripe.elements();

var style = {
  base: {
    color: "#32325d",
    fontFamily: 'Arial, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#32325d"
    }
  },
  invalid: {
    fontFamily: 'Arial, sans-serif',
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

var card = elements.create("card", { style: style });
// Stripe injects an iframe into the DOM
card.mount("#card-element");

card.on("change", function (event) {
  // Disable the Pay button if there are no card details in the Element
  document.querySelector("button").disabled = event.empty;
  $("#card-error").text(event.error ? event.error.message : "");
});

var form = document.getElementById("payment-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // Complete payment when the submit button is clicked

  let name, surname, city, address, paid, products, deliveryCost;
  const delivery = $('.cart-container-delivery-form');
  deliveryCost = delivery.find('input:checked').val();
  name = $('.nameStripe').val();
  surname = $('.surnameStripe').val();
  city = $('.cityStripe').val();
  address = $('.streetAndHouseStripe').val();
  paid = $('.totalPriceInputStripe').val();
  products = localStorage.getItem('products');

  if(name != '' && surname != '' && city != '' && address != '' && paid != 0) {
    $.ajax({
      type: 'POST',
      url: ('./purchase.php'),
      data: {'name' : name, 'surname' : surname, 'city' : city, 'address' : address, 'paid' : paid, 'products' : products, 'delivery' : deliveryCost},
      success: function(data) {
        const resp = JSON.parse(data);
        if(resp.clientSecret) {
          payWithCard(stripe, card, resp.clientSecret);
        }
      }
    })
  }
});


// Disable the button until we have Stripe set up on the page
//document.querySelector("button").disabled = true;
// fetch("/ik/purchase.php", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(purchase)
// })
//   .then(function(result) {
//     return result.json();
//   })
//   .then(function(data) {

//   });

// Calls stripe.confirmCardPayment
// If the card requires authentication Stripe shows a pop-up modal to
// prompt the user to enter authentication details without leaving your page.
var payWithCard = function(stripe, card, clientSecret) {
  loading(true);
  stripe
    .confirmCardPayment(clientSecret, {
      payment_method: {
        card: card
      }
    })
    .then(function(result) {
      let name, surname, city, address, paid, btnExit, paymentSuccess, paymentFailed;
      paymentSuccess = $('.cart-container-paymentSuccess');
      paymentFailed = $('.cart-container-paymentDanger');
      if (result.error) {
        // Show error to your customer
        loading(false);
        paymentFailed.find('h3').find('span').text(result.error.message);
        paymentFailed.show();
      } else {
        // The payment succeeded!
        loading(false);

        paymentSuccess.find('h3').find('span').text(result.paymentIntent.id);
        paymentSuccess.show();

        localStorage.clear();

        name = $('.nameStripe');
        surname = $('.surnameStripe');
        city = $('.cityStripe');
        address = $('.streetAndHouseStripe');
        paid = $('.totalPriceInputStripe');

        name.val('');
        surname.val('');
        city.val('');
        address.val('');
        paid.val('');
      }
    });
};

/* ------- UI helpers ------- */

// Shows a success message when the payment is complete
// var orderComplete = function(paymentIntentId) {
//   loading(false);
//   document
//     .querySelector(".result-message a")
//     .setAttribute(
//       "href",
//       "https://dashboard.stripe.com/test/payments/" + paymentIntentId
//     );
//   document.querySelector(".result-message").classList.remove("hidden");
//   document.querySelector("button").disabled = true;
// };

// // Show the customer the error from Stripe if their card fails to charge
// var showError = function(errorMsgText) {
//   loading(false);
//   var errorMsg = document.querySelector("#card-error");
//   errorMsg.textContent = errorMsgText;
//   setTimeout(function() {
//     errorMsg.textContent = "";
//   }, 4000);
// };

// Show a spinner on payment submission
var loading = function(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("button").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};
