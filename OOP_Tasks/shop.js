function ConveninceStore(name, address, money, products) {
    var name = name;
    var address = address;
    var money = money;
    var products = new Array(products);
    var productsIndex = 0;
    this.addProductsInStock = function(product){
        products[productsIndex] = product;
        productsIndex++;
    }
}

function Product(name, price, stock) {
    var name = name;
    var price = price;
    var stock = stock;
    this.getPrice = function(){
        return price;
    }
    this.getStock = function(){
        return stock;
    }
    this.getName = function(){
        return name;
    }
}
function Customer(shop, money, maxProducts) {
    var shop = shop;
    var money = money;
    var maxProducts = maxProducts;
    var cart = [];
    //Логва се колко се добавя или маха
    this.addPerUnit = function (product, units) {
        cart.push(product)
    }
    this.addPerKilo = function (product, kilo) {

    }
    this.removePerUnit = function (product,units){

    }
    this.removePerKilo = function(product,kilo){

    }
    this.checkOut = function(){

    }
}
var fantastiko = new ConveninceStore("Fantastiko","Monte Video 98",50000,5);
var meat = new Product("Meso",5.50,"50 kg");
var cheese = new Product("Sirene",13.00,"150 kg");
var fish = new Product("Fish",11.00,"15 kg");
var beer = new Product("Beer",2.50,50);
var books = new Product("Book",12.50,13);
var chairs = new Product("Chair",25.00,10);
fantastiko.addProductsInStock(meat);
fantastiko.addProductsInStock(cheese);
fantastiko.addProductsInStock(fish);
fantastiko.addProductsInStock(beer);
fantastiko.addProductsInStock(books);
fantastiko.addProductsInStock(chairs);
var vasil = new Customer(fantastiko,200,5);


