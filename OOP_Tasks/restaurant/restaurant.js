function extend(constructor1, constructor2) {
    constructor1.prototype = Object.create(constructor2.prototype);
    constructor1.prototype.constructor = constructor1;
}

function Restaurant(name) {
    this.name = name;
    this.waiters = [];
    this.masterChef = null;
    this.cooks = [];
    this.saladMakers = [];
    this.meatFoods = [];
    this.vegiFoods = [];
    this.showRestaurant = function(){
        document.write(`<h1>Welcome to ${this.name}</h1>`)
    }
    this.showRestaurant();
}
Restaurant.prototype.addWaiter = function (waiter) {
    if (waiter instanceof Waiter && waiter.staj >=10) {
        this.waiters.push(waiter);
        document.write(`<p>${this.name} has added to it's staff ${waiter.name} as a waiter</p>`);
    }else{
        throw new Error("Not a waiter!")
    }
}
Restaurant.prototype.addMasterChef = function (masterChef) {
    if (masterChef instanceof MasterChef && this.masterChef==null) {
        this.masterChef = masterChef;
        document.write(`<p>${this.name} has added to it's staff ${masterChef.name} as a master chef</p>`);
    }else{
        throw new Error("Not a proper master chef!")
    }
}
Restaurant.prototype.addCook = function (cook) {
    if (cook instanceof Cook) {
        this.cooks.push(cook);
        document.write(`<p>${this.name} has added to it's staff ${cook.name} as a cook</p>`)
    }else{
        throw new Error("Not a cook!")
    }
}
Restaurant.prototype.addSaladMaker = function (saladMaker) {
    if (saladMaker instanceof SaladMaker && this.saladMakers.length < 5) {
        this.saladMakers.push(saladMaker);
        document.write(`<p>${this.name} has added to it's staff ${saladMaker.name} as a salad maker</p>`)
    }else{
        throw new Error("Not a salad maker!")
    }
}
Restaurant.prototype.addMeatFood = function(meatFood){
    if (meatFood instanceof MeatFood) {
        this.meatFoods.push(meatFood);
        document.write(`<p>Added ${meatFood.name} to the menu</p>`);
    }else{
        throw new Error("Not a valid meat food.");
    }
}
Restaurant.prototype.addVegiFood = function(vegiFood){
    if (vegiFood instanceof VegiFood) {
        this.vegiFoods.push(vegiFood);
        document.write(`<p>Added ${vegiFood.name} to the menu</p>`);
    }else{
        throw new Error("Not a valid vegi food.");
    }
}
Restaurant.prototype.order = function(isMeat){
    if (isMeat) {
        var randomFood = this.meatFoods[Math.floor(Math.random()*this.meatFoods.length)];
        var randomCook = this.cooks[Math.floor(Math.random()*this.cooks.length)];
        var randomWaiter = this.waiters[Math.floor(Math.random()*this.waiters.length)];
        this.masterChef.giveOrder(randomCook);
        randomCook.cook(randomFood);
        randomWaiter.nosi(randomFood);
    }else{
        var randomFood = this.vegiFoods[Math.floor(Math.random()*this.vegiFoods.length)];
        var randomSaladMaker = this.saladMakers[Math.floor(Math.random()*this.saladMakers.length)];
        var randomWaiter = this.waiters[Math.floor(Math.random()*this.waiters.length)];
        this.masterChef.giveOrder(randomSaladMaker);
        randomSaladMaker.cook(randomFood);
        randomSaladMaker.peel();
        randomSaladMaker.cut();
        randomWaiter.nosi(randomFood);
    }
}

function Person(name) {
    this.name = name;
}

function Waiter(name, staj) {
    Person.call(this, name);
    this.staj = staj;
}
extend(Waiter, Person);
Waiter.prototype.nosi = function (food) {
    if (food instanceof Food) {
        document.write(`<p>${this.name} zanese na bednqka</p>
                        <h2>${food.name}</h2>
                        <img src="${food.photo}" alt="${food.name}">
                        <p>${food.description}.</p>`);
    }else{
        throw new Error("Abe kvo mi dava6 be.");
    }
}

function Cook(name){
    Person.call(this,name);
}
extend(Cook,Person);
Cook.prototype.cook = function(meatFood){
    if (meatFood instanceof MeatFood) {
        document.write(`<p>${this.name} is cooking ${meatFood.name}</p>`)
    }else{
        throw new Error("Not a valid meat food.");
    }
}
function MasterChef(name){
    Cook.call(this,name);
}
extend(MasterChef,Cook);
MasterChef.prototype.giveOrder = function(worker){
    document.write(`Bate ${this.name} naredi na ${worker.name} da prai kvot prai.`)
}
function SaladMaker(name){
    Cook.call(this,name);
}
extend(SaladMaker,Cook);
SaladMaker.prototype.cook = function(vegiFood){
    if (vegiFood instanceof VegiFood) {
        document.write(`<p>${this.name} is cooking ${vegiFood.name}</p>`)
    }else{
        throw new Error("Not a valid vegi food.");
    }
}
SaladMaker.prototype.cut = function(){
    document.write(`<p>${this.name} just cut off some veggies.</p>`);
}
SaladMaker.prototype.peel = function(){
    document.write(`<p>${this.name} just peeled off some onions.</p>`);
}
function Food(name,photo,description){
    this.name = name;
    this.photo = photo;
    this.description = description;
}
function MeatFood(name,photo,description){
   Food.call(this,name,photo,description);
}
extend(MeatFood,Food);
function VegiFood(name,photo,description){
    Food.call(this,name,photo,description);
}
extend(VegiFood,Food);

var beSo = new Restaurant("Be So");
var waiter1 = new Waiter("Ivan",11);
var waiter2 = new Waiter("Ivan 2",10);
var waiter3 = new Waiter("Ivan 3",13);
var cook1 = new Cook("Kircho");
var cook2 = new Cook("Orhan");
var cook3 = new Cook("Grozdan");
var masterChefcho = new MasterChef("Stoyan");
var saladMan1 = new SaladMaker("Tosho");
var saladMan2 = new SaladMaker("Trevata");
var saladMan3 = new SaladMaker("Iceberga");
beSo.addCook(cook1);
beSo.addCook(cook2);
beSo.addCook(cook3);
beSo.addMasterChef(masterChefcho);
beSo.addWaiter(waiter1);
beSo.addWaiter(waiter2);
beSo.addWaiter(waiter3);
beSo.addSaladMaker(saladMan1);
beSo.addSaladMaker(saladMan2);
beSo.addSaladMaker(saladMan3);
var shrimps = new MeatFood("Shrimps","https://www.prominent.com/media/References/food-industry-shrimps-1_Header_1.jpg","Emi otvarq se i se qde.");
var purjenaRibka = new MeatFood("Ribka s kartofki","https://cdn.bgmenu.com/upload/meal/212927/menuAliaska.jpg","Maznichko");
var kiuftetaPoKitaiski = new MeatFood("Kiufteta Po Kitaiski","http://www.petnetshop.com/offerpic/thumb_244x210_picture%20(7)_1144.jpg","Ne pitai otkyde sa.");
var sandwitch = new VegiFood("Sandvich","http://www.veganlifestylemagazine.com/wp-content/uploads/2016/11/vegan4.jpg","Nqma meso.");
var burgerDelight = new VegiFood("Burger Delight","https://www.rd.com/wp-content/uploads/sites/2/2013/08/15-sweet-potato-burger-going-vegan-fsl.jpg","Mi burger kvo drugo ochakvash");
var salata = new VegiFood("IceBerg","http://www.recipetineats.com/wp-content/uploads/2016/12/JPs-Iceberg-Lettuce-Dill-Salad-3.jpg","Saladka.");
beSo.addMeatFood(shrimps);
beSo.addMeatFood(purjenaRibka);
beSo.addMeatFood(kiuftetaPoKitaiski);
beSo.addVegiFood(sandwitch);
beSo.addVegiFood(salata);
beSo.addVegiFood(burgerDelight);
beSo.order(false);
