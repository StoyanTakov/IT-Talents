function Car(model, isSport, color, price) {
    const DEFAULT_METAL_PRICE = 1.5;
    if (arguments.length == 4) {
        model = model.trim();
        this.owner = null;
        if ((typeof model == "string") && model.length !== 0) {
            this.model = model;
        } else {
            console.log("Not a valid model.");
        }
        if (typeof isSport == "boolean") {
            this.isSport = isSport;
        } else {
            console.log("Not valid information about the car being a sports car or not.")
        }
        color = color.trim();
        if ((typeof color == "string") && color.length !== 0 && !Number(color)) {
            this.color = color;
        } else {
            console.log("Not a valid color for the car");
        }
        if (price && (price > 0)) {
            this.price = price;
        } else {
            console.log("Not a valid price.");
        }
    } else {
        console.log("You haven't entered 4 arguments!");
    }
    this.isMoreExpensive = function (otherCar) {
        if ((otherCar !== this) && (typeof otherCar == "object") && this.price && otherCar.price) {
            return this.price > otherCar.price;
        }
        return true;
    }
    this.calculateCarPriceForScrap = function (metalPrice) {
        if (!metalPrice || !Number(metalPrice)) {
            metalPrice = DEFAULT_METAL_PRICE;
        }
        var coef = 0.2;
        if (this.color === "white" || this.color === "black") {
            coef += 0.05;
        }
        if (this.isSport) {
            coef += 0.05;
        }
        return metalPrice*coef;
    }
    this.changeOwner = function (newOwner) {
        if (newOwner !== null && newOwner.name) {
            this.owner = newOwner;
        } else {
            console.log("This car cannot change it's owner.")
        }
    }
}
var peugeot = new Car('407', true, "white", 5000);
var renault = new Car("350", false, "blue", 3350);

function Person(name, personalNumber, isMale) {
    if (arguments.length == 3) {
        name = name.trim();
        this.money = 0;
        this.car = null;
        if ((typeof name == "string") && !Number(name) && name.length !== 0) {
            this.name = name;
        } else {
            console.log("Not a valid name!");
        }
        if ((typeof personalNumber == "string") && Number(personalNumber) && personalNumber.length !== 0) {
            this.personalNumber = personalNumber;
        } else {
            console.log("Not a valid personal number!");
        }
        if (typeof isMale == "boolean") {
            this.isMale = isMale;
        } else {
            console.log("Not a valid gender!");
        }
        this.friends = new Array(3);
        var index = 0;
        this.addFriend = function (friend) {
            if ((typeof friend == "object") && this !== friend && friend !== null) {
                this.friends[index] = friend;
                index++;
                console.log(this.name + " have gained a friend: " + friend.name);
            } else {
                console.log("Not a valid friend.");
            }
        }
        this.buyCar = function (carToBeBought) {
            if ((typeof carToBeBought === "object") && carToBeBought.price && (this.money >= carToBeBought.price)) {
                this.car = carToBeBought;
                carToBeBought.changeOwner(this);
            } else {
                console.log(this.name+" can't get this car.")
            }
        }
        this.sellCarForScrap = function(){
            if (this.car!==null) {
                this.money += this.car.calculateCarPriceForScrap();
                this.car.owner = null;
                this.car = null;
            }else{
                console.log("You don't have a car.");
            }
        }
    } else {
        console.log("Not enough arguments!");
    }
}
var pesho = new Person("Pesho", "2359239525", true);
var gosho = new Person("Gosho", "4589348583", false);
pesho.addFriend(gosho);
console.log(pesho.friends[0].name)
console.log((peugeot.isMoreExpensive(renault) ? "It's more expensive." : "It's cheaper."));
peugeot.calculateCarPriceForScrap(5000);
pesho.money = 5000;
gosho.money = 3200;
pesho.buyCar(peugeot);
console.log(pesho.car);
gosho.buyCar(renault);
pesho.sellCarForScrap();
console.log(pesho.money);
pesho.sellCarForScrap();