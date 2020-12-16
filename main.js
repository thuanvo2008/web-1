
// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
//có [0]vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
//Nếu có 2 cái component cùng class thì khi [0] nó sẽ hiển thị component 1 còn [1] thì nó sẽ hiển thị component 2.
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";    //click icon giỏ hàng hiện ra
}
close.onclick = function () {       //click x giỏ hàng biến mất
  modal.style.display = "none";
}
close_footer.onclick = function () {    //click button close biến mất
  modal.style.display = "none";
}
order.onclick = function () {
  location.assign("payment.html")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
  var button = remove_cart[i]
  button.addEventListener("click", function () {    //nếu button bắt sự kiện click thì function sẽ được thực thi
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove();
    updatecart();
  })
}


// update cart 
function updatecart() {
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
      var cart_row = cart_rows[i];
      var price_item = cart_row.getElementsByClassName("cart-price ")[0];
      var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0];
      var price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
      var quantity = quantity_item.value // lấy giá trị trong thẻ input
      total = total + (price * quantity);
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + '$';
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên sử dụng [0].
  }



// thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
  var input = quantity_input[i];
  input.addEventListener("change", function (event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}


//Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
  var add = add_cart[i];
  add.addEventListener("click", function (event) {

    var button = event.target;
    var product = button.parentElement.parentElement;
    var img = product.parentElement.getElementsByClassName("img-prd")[0].src;
    var title = product.getElementsByClassName("content-product-h3")[0].innerText;
    var price = product.getElementsByClassName("price")[0].innerText;
    addItemToCart(title, price, img);
    alert("Added product to cart");
    // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
    // modal.style.display = "block";
    
    updatecart()
  })
}

function addItemToCart(title, price, img) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cart_title = cartItems.getElementsByClassName('cart-item-title')
  //Nếu title của sản phẩm bằng với title đã thêm vào giỏ hàng thì sẽ thông báo cho user.
  for (var i = 0; i < cart_title.length; i++) {
    if (cart_title[i].innerText == title) {
      alert("Products already in the cart")
      return;
   }
  }

  var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Delete</button>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
    var button_remove = event.target
    button_remove.parentElement.parentElement.remove()
    updatecart()
  })
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updatecart()
  })
}



// for(var i=1;i<20;i++){
// // Modal1
// var modal1 = modal1[i];
// modal1.document.getElementById("detail-product1");
// var btn1 = btn1[i];
// btn1.document.getElementById("quick-view1");
// var close1 = close1[i];
// close1.document.getElementsByClassName("close1")[0];
// btn1.onclick = function () {
//   modal1.style.display = "block";
// }
// close1.onclick = function () {
//   modal1.style.display = "none";
// }
// window.onclick = function (event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// }
// }

// Modal1
var modal1 = document.getElementById("detail-product1");
var btn1 = document.getElementById("quick-view1");
var close1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function () {
  modal1.style.display = "block";
}
close1.onclick = function () {
  modal1.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


// Modal2
var modal2 = document.getElementById("detail-product2");
var btn2 = document.getElementById("quick-view2");
var close2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function () {
  modal2.style.display = "block";
}
close2.onclick = function () {
  modal2.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


// Modal3
var modal3 = document.getElementById("detail-product3");
var btn3 = document.getElementById("quick-view3");
var close3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function () {
  modal3.style.display = "block";
}
close3.onclick = function () {
  modal3.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}


// Modal4
var modal4 = document.getElementById("detail-product4");
var btn4 = document.getElementById("quick-view4");
var close4 = document.getElementsByClassName("close4")[0];
btn4.onclick = function () {
  modal4.style.display = "block";
}
close4.onclick = function () {
  modal4.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}


// Modal5
var modal5 = document.getElementById("detail-product5");
var btn5 = document.getElementById("quick-view5");
var close5 = document.getElementsByClassName("close5")[0];
btn5.onclick = function () {
  modal5.style.display = "block";
}
close5.onclick = function () {
  modal5.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}


// Modal6
var modal6 = document.getElementById("detail-product6");
var btn6 = document.getElementById("quick-view6");
var close6 = document.getElementsByClassName("close6")[0];
btn6.onclick = function () {
  modal6.style.display = "block";
}
close6.onclick = function () {
  modal6.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}


// Modal7
var modal7 = document.getElementById("detail-product7");
var btn7 = document.getElementById("quick-view7");
var close7 = document.getElementsByClassName("close7")[0];
btn7.onclick = function () {
  modal7.style.display = "block";
}
close7.onclick = function () {
  modal7.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
}

// Modal8
var modal8 = document.getElementById("detail-product8");
var btn8 = document.getElementById("quick-view8");
var close8 = document.getElementsByClassName("close8")[0];
btn8.onclick = function () {
  modal8.style.display = "block";
}
close8.onclick = function () {
  modal8.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
}
