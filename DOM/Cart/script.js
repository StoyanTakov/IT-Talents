function addToCart(element){
    var element = element+"";
    var img = document.getElementById(element);
    var newImg = document.createElement("img");
    newImg.src = img.src;
    var cart = document.getElementById("cart");
    cart.appendChild(newImg);
}
function removeFromCart()