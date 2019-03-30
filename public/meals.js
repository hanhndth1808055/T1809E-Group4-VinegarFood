var itemCount = 0;
var priceTotal = 0;
var itemObject;
var cart = [];
$( document ).ready(function() {
  // get in local storage
  getCart();
  // cart = [{itemId: 'item1', total: 1, price: 200}, {itemId: 'item2', total: 3, price: 200}];
  function getCart() {
    cart = JSON.parse(localStorage.getItem('cart'));
    $('#itemCount').css('display', 'none');
    if(cart && cart.length > 0) {
      cart.forEach(function(item){
        itemCount += item.total;
        priceTotal += item.price * item.total;
      });
      if (itemCount) {
        $('#itemCount').text(itemCount).css('display', 'block');
        $('#cartTotal').text("Total: $" + priceTotal);
      }
    }
  }

  // Add Item to Cart
  $('.add').click(function (e){
    itemCount ++;
    var itemId = e.target.id;
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    var price = parseInt($(this).siblings().find('.price').text());
    var name = $(this).siblings().find('.name').text();
    itemObject = {
      total: 1,
      itemId: itemId,
      price: price,
      name: name
    };
    var item = cart.find(o => o.itemId === itemId);
    if(item && item.total >= 0){
      item.total++;
    } else {
      cart.push(itemObject);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    $('#itemCount').text(itemCount).css('display', 'block');
    // binding product to cart
    calSubTotal();
  });
  $('.sub').click(function (e){
    var itemId = e.target.id;
    cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart || cart.length == 0) return;
    itemObject = cart.find(o => o.itemId === itemId);
    if(itemObject && itemObject.total >= 1){
      itemObject.total--;
      itemCount --;
      localStorage.setItem('cart', JSON.stringify(cart));
      if(itemCount){
        $('#itemCount').text(itemCount).css('display', 'block');
      } else {
        $('#itemCount').css('display', 'none');
      }
      // Calculate Total Price
      calSubTotal();
    }
  });

  // Hide and Show Cart Items
  $('.openCloseCart').click(function(){
    $('#shoppingCart').toggle();
  });


  // Empty Cart
  $('#emptyCart').click(function() {
    itemCount = 0;
    priceTotal = 0;
    $('#itemCount').css('display', 'none');
    $('#cartItems').text('');
    $('#cartTotal').text("Total: $" + priceTotal);
    localStorage.removeItem('cart');
  });



  // Remove Item From Cart
  $('#shoppingCart').on('click', '.removeItem', function(){
    $(this).parent().remove();
    itemCount --;
    $('#itemCount').text(itemCount);

    // Remove Cost of Deleted Item from Total Price
    var price = parseInt($(this).siblings().find('.price').text());
    priceTotal -= price;
    $('#cartTotal').text("Total: $" + priceTotal);

    if (itemCount == 0) {
      $('#itemCount').css('display', 'none');
    }
  });
  // cal subtotal
  function calSubTotal() {

    cart = JSON.parse(localStorage.getItem('cart'));
    priceTotal = 0;
    var htmlString = '';
    if(cart && cart.length > 0) {
      cart.forEach(function(item){
        priceTotal += item.price * item.total;
        htmlString += '<div class="">' + item.name +'</div>';
        htmlString += '<div class="">    ' + ' $' + item.price + ' x ' + item.total + 'p = $'+ item.price * item.total +'</div>';
      });
    }
    $('#cartItems').html(htmlString);
    $('#cartTotal').text("Total: $" + priceTotal);
  }
});

$(document).ready(function () {
$('btnConfirmCart').click(function(){
  document.getElementById('yourDivID').scrollIntoView();
});
});
