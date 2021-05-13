//console.log("hello");

//sizeselect function
/* function sizeselect(){
    var size = document.getElementById("size");
    size.style.backgroundColor='#7b2cbf';
    size.style.color="#fff";
} */

//add function
function add(){
  var txtNumber = document.getElementById("txtNumber");
  var newNumber = parseInt(txtNumber.value) + 1;
  txtNumber.value = newNumber;
}

//substract function
function subtract(){
  var txtNumber = document.getElementById("txtNumber");
  var newNumber = parseInt(txtNumber.value) - 1;
  txtNumber.value = newNumber;
}

//cart function
function cart(){
    var cart = document.getElementById("cart");
    cart.innerHTML='Product Added';
}