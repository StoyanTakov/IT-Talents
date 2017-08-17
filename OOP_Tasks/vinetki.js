function Driver(name, gasStation) {
    this.name = name;
    var vehicles = [];
    var money = Math.round(Math.random() * 10000);
    this.gasStation = gasStation;
    this.getMoney = function () {
        return money;
    }
    this.addVehicle = function (vehicle) {
        vehicles.push(vehicle);
    }
    this.getVehicles = function () {
        console.log(`${this.name} has the following vehicles:`);
        vehicles.forEach(x => x.getVehicleInfo());
    }
    this.buyVignetteForAll = function () {
        vehicles.forEach(function(vehicle){
            
        })
    }
}

function Vehicle(type) {
    var model = Math.round(Math.random() * 1000);
    var vignette = null;
    var yearOfManufacture = 1990 + Math.round(Math.random() * 27);
    var type = type;
    this.getVehicleInfo = function () {
        console.log(`Type: ${type}; Model: ${model}; Year of manufacture: ${yearOfManufacture}`);
    }
    this.getType = function () {
        return type;
    }
}

function Vignette(dateOfIssue, color, expDate) {
    var dateOfIssue = dateOfIssue;
    var color = color;
    var expDate = expDate;
    this.stickedToWindow = function () {

    }
    this.getExpDate = function () {
        return expDate;
    }
    this.getColor = function () {
        return color;
    }
    var price = (function () {
        var vignettePrices = {
            red: 5,
            blue: 7,
            green: 10
        }
        var price = vignettePrices[color];
        var pricesForDurationVignettes = {
            week: price * 7,
            month: price * 7 * 10,
            year: price * 7 * 10 * 6
        }
        if (Math.abs(dateOfIssue.getDay() - expDate.getDay() === 1)) {
            return price;
        } else {
            if (Math.abs(dateOfIssue.getMonth() - expDate.getMonth() === 1)) {
                return pricesForDurationVignettes.week;
            } else {
                return pricesForDurationVignettes.year;
            }
        }

    })();
    this.getPrice = function () {
        return price;
    }
}

function GasStation(name) {
    var name = name;
    var turnover = 0;
    var availableVignettes = [];
    var vignettesCount = new Array(10000);
    vignettesCount.fill(null);
    var listOfVehicles = ["car", "truck", "bus"];
    var colorsVehicles = ["red", "blue", "green"];
    vignettesCount.forEach(function (x, index, arr) {
        var today = new Date();
        //Choosing on a random chance or the vignettes to be for a day, month or for an year and what color
        var dayOrWeekOrMonth = Math.random();
        var randomColor = colorsVehicles[Math.round(Math.random() * 2)];
        if (dayOrWeekOrMonth < 0.33) {
            arr[index] = new Vignette(today, randomColor, new Date(today.getFullYear(), today.getMonth(), today.getDay() + 1));
        } else {
            if (dayOrWeekOrMonth >= 0.33 && dayOrWeekOrMonth < 0.66) {
                arr[index] = new Vignette(today, randomColor, new Date(today.getFullYear(), today.getMonth() + 1, today.getDay()));
            } else {
                arr[index] = new Vignette(today, randomColor, new Date(today.getFullYear() + 1, today.getMonth(), today.getDay()));
            }
        }
    })
    this.sellVignette = function (vehicle) {
        var listByTypeVehicle = availableVignettes.filter(x => vehicle.getType() === listOfVehicles[colorsVehicles.indexOf(x.getColor())]);

    }
    availableVignettes = vignettesCount.sort((a, b) => a.getPrice() > b.getPrice());
    this.showVignettes = function () {
        availableVignettes.forEach(function (x) {
            console.log(x.getColor() + " " + x.getPrice());
        })
    }
}
var lukoil = new GasStation("Lukoil");
var drivers = new Array(20);
drivers.fill(null);
var names = ["Абен", "Aблен", "Август", "Августиан", "Августин", "Авел", "Авер", "Аверно", "Авксентий", "Аво", "Авраам", "Аврам",
    "Аврели", "Аврелий", "Аврор", "Агапи", "Агапий", "Агатопод", "Агент", "Аглай"
];
drivers.forEach(function (x, index, arr) {
    arr[index] = new Driver(names.shift(), lukoil);
});
drivers.forEach(x => console.log(x.name + " " + x.getMoney()));
var listOfVehicles = ["car", "truck", "bus"];
var numberOfCarsADriverOwns = 10;
drivers.forEach(function (x) {
    for (var index = 0; index < numberOfCarsADriverOwns; index++) {
        var randomVehicle = listOfVehicles[Math.round(Math.random() * 2)];
        x.addVehicle(new Vehicle(randomVehicle));
    }
    x.getVehicles();
})
drivers.forEach(function (x, index) {
    if ((index + 1) % 3 === 0) {

    }
})
lukoil.showVignettes();