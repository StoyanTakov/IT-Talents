function Call(receiver,duration) {
    var priceForAMinute = 0.20;
    var isValidCall = true;
    if (duration < 0) {
        isValidCall = false;
        console.log("Invalid duration.");
    }
    if (this.simMobileNumber === receiver.simMobileNumber) {
        isValidCall = false;
        console.log("You are calling yourself!");
    }
    if (!this.hasSimCard || !receiver.hasSimCard) {
        isValidCall = false;
        console.log("One of you doesn't have a sim card.");
    }
    if (isValidCall) {
        this.outgoingCallsDuration += duration;
        this.lastOutgoingCall = receiver.simMobileNumber;
        receiver.lastIncomingCall = this;
        this.caller = this;
        console.log(this);
        this.receiver = receiver;
        this.duration = duration;
    }

}

function GSM(model) {
    this.model = model;
    this.hasSimCard = false;
    this.simMobileNumber = "";
    this.outgoingCallsDuration = 0;
    this.lastIncomingCall = null;
    this.lastOutgoingCall = null;
    this.insertSimCard = function (simMobileNumber) {
        if (this.hasSimCard) {
            console.log("You already have an inserted sim card!");
        } else {
            if (this.simMobileNumber.length !== 10 || !this.simMobileNumber || !this.simMobileNumber.startsWith("08")) {
                console.log("Not a valid number! Get a new sim card.");
            } else {
                this.hasSimCard = true;
                this.simMobileNumber = simMobileNumber;
            }
        }
    }
    this.removeSimCard = function () {
        if (!this.hasSimCard) {
            console.log("There is no sim card to remove.");
        } else {
            this.hasSimCard = false;
            this.simMobileNumber = "";
            console.log("The sim card has been removed.");
        }
    }

    this.getSumForCall = function () {
        if (this.outgoingCallsDuration === 0) {
            console.log("There are no calls.");
        } else {
            console.log("The total price of the calls is: " + this.outgoingCallsDuration * call.priceForAMinute);
        }
    }
}
var nokia = new GSM("n70");
var motorola = new GSM("motorola");
nokia.insertSimCard();
motorola.insertSimCard();
nokia.call = new Call(motorola,50);