/**
 * @param  {number} year
 * @param  {number} price
 * @param  {boolean} isNotebook
 * @param  {number} hardDiskMemory
 * @param  {number} freeMemory
 * @param  {string} operationSystem
 */
function CreateComputer(year, price, isNotebook, hardDiskMemory, freeMemory, operatingSystem) {
    this.year = ((year > 1970 && year < 2018) || !year) ? year : 2017;
    this.price = ((price > 500 && price < 5000) || !price) ? price : 1000;
    this.isNotebook = (isNotebook == false || isNotebook == true || !isNotebook) ? true : false;
    this.hardDiskMemory = (hardDiskMemory < 200 || !hardDiskMemory) ? 1000 : hardDiskMemory;
    this.freeMemory = (!freeMemory) ? Math.round(hardDiskMemory / 3) : freeMemory;
    var operatingSystems = ["Mac", "Linux", "Windows98", "Windows 7", "Windows 8.1"];
    var isValidOS = ((operatingSystems.indexOf(operatingSystem) == -1) || !operatingSystem) ? false : true;
    this.operatingSystem = (isValidOS) ? "Windows 10" : operatingSystem;
    this.changeOperatingSystem = function (newOperatingSystem) {
        if ((newOperatingSystem !== operatingSystem) && (operatingSystems.indexOf(newOperatingSystem) != -1)) {
            this.operatingSystem = newOperatingSystem;
            console.log(`The OS has been changed to ${this.operatingSystem}.`);
        } else {
            this.operatingSystem = "Windows 10";
            console.log(`The operating system will be ${this.operatingSystem}.`);
        }
    }
    this.useMemory = function (memory) {
        if (this.freeMemory - memory < 0) {
            console.log("Not enough free memory!");
        } else {
            this.freeMemory -= memory;
            console.log(`You have just used ${memory} and left with ${this.freeMemory}.`)
        }
    }

}
var myPC =new CreateComputer(2015, 2200, false, 2000, 1500, "Windows98");
myPC.changeOperatingSystem();
myPC.changeOperatingSystem("Windows 8.1");
myPC.useMemory(2000);
myPC.useMemory(1000);