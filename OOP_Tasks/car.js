"use strict";

function createCar(model, maxSpeed, currentSpeed, color, gear) {
    var maxGear = 5;
    var speedIncrease = 20;
    var obj = {};
    obj.model = model;
    obj.maxSpeed = maxSpeed;
    obj.currentSpeed = currentSpeed;
    obj.color = color;
    obj.gear = gear;
    obj.owner = null;
    obj.showCar = function () {
        console.log(`${this.model} with max speed of ${this.maxSpeed}`);
    }
    obj.gearUp = function () {
        if (this.gear + 1 > maxGear) {
            this.gear = maxGear;
            console.log("Can't get any higher gears");
        } else {
            this.gear++;
            console.log(`${this.owner.name} switched to gear ${this.gear}`);
        }
        if (this.currentSpeed + speedIncrease > this.maxSpeed) {
            this.currentSpeed = this.maxSpeed;
            console.log("Reached maximum speed!");
        } else {
            this.currentSpeed += speedIncrease;
            console.log(`${this.owner.name} reached ${this.currentSpeed}`);
        }

    }
    obj.accelerate = function () {
        if (this.currentSpeed + speedIncrease > this.maxSpeed) {
            this.currentSpeed = this.maxSpeed;
            console.log("Reached maximum speed!");
        } else {
            this.currentSpeed += speedIncrease;
            console.log(`${this.owner.name} accelerated to ${this.currentSpeed}`);
        }

    }
    obj.changeGearUp = function () {
        if (this.gear + 1 > maxGear) {
            this.gear = maxGear;
            console.log("Can't get any higher gears");
        } else {
            this.gear++;
            console.log(`${this.owner.name} switched to gear ${this.gear}`);
        }
    }
    obj.changeGearDown = function () {
        if (this.gear - 1 < 1) {
            this.gear = maxGear;
            console.log("Can't get any higher gears");
        } else {
            this.gear--;
            console.log(`${this.owner.name} switched to gear ${this.gear}`);
        }
    }
    obj.changeColor = function (newColor) {
        this.color = newColor || "white";
        console.log(`${this.owner.name} changed the car into ${this.color}`);
    }
    obj.changeGear = function (nextGear) {
        var validChangeGear = (Math.abs(nextGear - this.gear) == 1) ? true : false;
        if (nextGear > maxGear || nextGear < 1 || !validChangeGear) {
            console.log(`${this.owner.name} is playing with the gears!`);
        } else {
            console.log(`${this.owner.name} switched to gear ${nextGear} from ${this.gear}`);
            this.gear = nextGear;
        }    
    }
    return obj;
}

function createPerson(name, age) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.friend = null;
    obj.eat = function () {
        console.log(`${this.name} ate too much *buuuuuuurp*.`);
    }
    obj.growUp = function () {
        this.age++;
        console.log(`${this.name} leveled up to ${this.age} years old!`)
    }
    obj.drinkWataaah = function (liters) {
        liters = (liters < 0 || !liters) ? 0 : liters;
        console.log(`${this.name} drank ${liters} liters of water.`)
    }
    return obj;
}
var passat = createCar("Passat", 240, 111, "green", 3);
var mercedes = createCar("Mercedes", 280, 160, "blue-ish", 4);
var georgi = createPerson("Georgi", 25);
passat.owner = georgi;
var pavel = createPerson("Pavel", 45);
mercedes.owner = pavel;
passat.gearUp();
mercedes.gearUp();
pavel.friend = georgi;
pavel.drinkWataaah(3);
georgi.growUp();
mercedes.changeGearUp();
passat.changeGearDown();
mercedes.accelerate();
mercedes.changeColor("black");
passat.changeGear(4);