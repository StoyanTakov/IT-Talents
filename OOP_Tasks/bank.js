/*
Държава
Създайте банка със множество от сметки, addUser(ЕГН, name), openAccount(egn, sum), closeAccount()
Една сметка има User, тип, лихва, пари, private money, withDraw(sum),deposit(sum),
User = phone, ЕГН, name 
*/
function User(egn, name) {
    this.accounts = [];
    this.egn = egn;
    this.name = name;
}

function Account(egn, sum, type) {
    this.type = type;
    this.iban = Math.round((Math.random() + 1) * Math.pow(10, 15));
    if (this.type === "спестовна") {
        this.interest = Number(((Math.random() + 1) * 10).toFixed(2));
    }
    this.holder = null;
    var money = sum;
    this.withDraw = function (sum) {
        money -= sum;
    }
    this.deposit = function (sum) {
        money += sum;
    }
    this.getMoney = function () {
        return money;
    }
    if (this.type === "спестовна") {
        this.payInterest = function () {
            money += money * this.interest;
        }
    }

}

function Bank(name) {
    if (name && (typeof name === "string") && (name.length !== 0)) {
        this.name = name;
        var users = [];
        var accounts = [];
        this.addUser = function (egn, name) {
            if (arguments.length == 2) {
                var isValidUser = true;
                if (!(egn && (typeof (egn) === "string") && (egn.length == 10) && !isNaN(Number(egn)))) {
                    console.log("Не е валидно ЕГН-то.");
                    isValidUser = false;
                }
                if (!(name && (typeof name === "string") && (name.length !== 0))) {
                    console.log("Невалидно име.");
                    isValidUser = false;
                }
                if (users.some(x => x.egn === egn)) {
                    isValidUser = false;
                }
                if (isValidUser) {
                    users.push(new User(egn, name));
                }
            } else {
                console.log("Недостатъчно въведени данни за създаване на user.");
            }
        }
        this.openAccount = function (egn, sum, type) {
            if (arguments.length == 3) {
                type = type.toLowerCase();
                var isValidAccount = true;
                if (!(egn && (typeof (egn) === "string") && (egn.length == 10) && !isNaN(Number(egn)) && users.find(x => x.egn === egn))) {
                    console.log("Невалидно ЕГН.");
                    isValidAccount = false;
                }
                if (!(sum && (typeof sum === "number") && sum >= 10)) {
                    console.log("Недостатъчни/невалидни средства.");
                    isValidAccount = false;
                }
                var userIndex = users.findIndex(x => x.egn === egn);
                if (type && (typeof type === "string") && (type === "спестовна" || type === "разплащателна")) {
                    if (users[userIndex].accounts.find(x => x.type === type)) {
                        isValidAccount = false;
                        console.log("Вече има такава сметка!");
                    }
                }
                if (isValidAccount) {
                    var newAccount = new Account(egn, sum, type);
                    newAccount.holder = users[userIndex];
                    users[userIndex].accounts.push(newAccount);
                    accounts.push(newAccount);
                }
            } else {
                console.log("Недостатъчно данни за отваряне на акаунт.");
            }

        }
        this.closeAccount = function (iban) {
            if (arguments.length === 1) {
                if (iban && iban.toString().length == 16 && accounts.find(x => x.iban === iban)) {
                    var bankAccountIndex = accounts.findIndex(x => x.iban === iban);
                    var accountUser = accounts[bankAccountIndex].holder;
                    accountUser.accounts.splice(accountUser.accounts.findIndex(x => x.iban === iban), 1);
                    accounts.splice(bankAccountIndex, 1);
                } else {
                    console.log("Невалиден IBAN.");
                }
            } else {
                console.log("Неправилно подадени данни за затваряне на акаунта.");
            }
        }
        this.withDraw = function (iban, sum) {
            if (arguments.length === 2) {
                if ((iban.toString().length == 16) && (typeof iban === "number") && accounts.find(x => x.iban === iban)) {
                    var bankAccountIndex = this.accounts.findIndex(x => x.iban === iban);
                    if (sum && typeof sum === "number" && (sum > 0) && (sum <= this.accounts[bankAccountIndex].showMoney())) {
                        accounts[bankAccountIndex].withDraw(sum);
                        var accountUser = accounts[bankAccountIndex].holder;
                        console.log(accountUser.name + " изтегли " + sum);
                        console.log("Останали са " + accounts[bankAccountIndex].showMoney());
                    } else {
                        console.log("Недостатъчно пари в сметката.");
                    }
                } else {
                    console.log("Невалиден IBAN.");
                }
            } else {
                console.log("Неправилно подадени данни за взимане на пари от акаунта.");
            }
        }
        this.deposit = function (iban, sum) {
            if (arguments.length === 2) {
                if (iban && typeof iban === "number" && iban.toString().length == 16 && accounts.find(x => x.iban === iban)) {
                    var bankAccountIndex = accounts.findIndex(x => x.iban === iban);
                    var accountUser = accounts[bankAccountIndex].holder;
                    if (sum && sum > 0) {
                        accounts[bankAccountIndex].deposit(sum);
                        console.log(accountUser.name + " депозира " + sum);
                        console.log("Има в наличност " + this.accounts[bankAccountIndex].getMoney());
                    } else {
                        console.log("Невалидна сума за депозит.");
                    }

                } else {
                    console.log("Невалиден IBAN.")
                }
            } else {
                console.log("Неправилно подадени данни за депозиране на пари в акаунта.");
            }
        }
        this.showAccount = function (egn) {
            if (arguments.length === 1) {
                if (egn && Number(egn) && egn.length == 10 && users.find(x => x.egn === egn)) {
                    var egnUser = users.findIndex(x => x.egn === egn);
                    console.log(`${users[egnUser].name} има: `);
                    users[egnUser].accounts.forEach(function (acc) {
                        console.log(`type: ${acc.type}`);
                        console.log(`IBAN: ${acc.iban}`);
                        console.log(`money: ${acc.showMoney()}`);
                    })
                }
            }
        }
    } else {
        console.log("Невалидно име.");
    }

}
//TODO: get iban somehow !!!
var obb = new Bank("OBB");
obb.addUser("9112121242", "Broilcho");
obb.openAccount("9112121242", 250, "спестовна");
obb.openAccount("9112121242", 300, "разплащателна");