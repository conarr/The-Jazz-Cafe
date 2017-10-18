
var itemCount = 0;
var priceTotal = 0;



// Add Item to Cart
$('.addButton').click(function (){
  itemCount ++;

  $('#itemCount').html(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<image class="removeItem" src="images/shopping-cart/shopping-cart-remove-off.png"/>');

  // Calculate Total Price
  var price = parseInt($(this).siblings().find('.price').html()); 
  priceTotal += price;
  $('#cartTotal').html("Total: €" + priceTotal);
}); 



// Hide and Show Cart Items
$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});


// Empty Cart
$('#emptyCartButton').click(function() {
  itemCount = 0;
  priceTotal = 0;

  $('#itemCount').html('').css('display', 'none');
  $('#cartItems').html('');
  $('#cartTotal').html("Total: €" + priceTotal);
}); 



// Remove Item from Cart
$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();  
  itemCount --;
  $('#itemCount').html(itemCount);

  // Remove Cost of Deleted Item from Total Price
  var price = parseInt($(this).siblings().find('.price').html());
  priceTotal -= price;
  $('#cartTotal').html("Total: €" + priceTotal);

  if (itemCount === 0) {
    $('#itemCount').html('').css('display', 'none');
  }
});