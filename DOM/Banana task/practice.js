// document.body.style.background = "darkblue";
var banan = document.createElement("img");
banan.src = "banan.png";
banan.height = 200;
banan.style.position = "absolute";
banan.style.top = window.innerHeight / 2 - banan.height / 2 + "px";
banan.style.left = window.innerWidth / 2 - banan.height / 2 + "px";
document.body.appendChild(banan);
var bananObj = {
    top: window.innerHeight / 2 - banan.height / 2,
    left: window.innerWidth / 2 - banan.height / 2,
    rotationDegrees: 0,
    moveDown: function () {
        if (this.top < window.innerHeight - 175) {
            console.log(window.innerHeight);
            console.log(this.top)
            this.top += 20;
            banan.style.top = this.top + "px";
        }

    },
    moveUp: function () {
        if (this.top >= 0) {
            this.top -= 20;
            banan.style.top = this.top + "px";
        }

    },
    moveLeft: function () {
        if (this.left > 0) {
            this.left -= 20;
            banan.style.left = this.left + "px";
        }
    },
    moveRight: function () {
        if (this.left < window.innerWidth-200) {
            this.left += 20;
            banan.style.left = this.left + "px";
        }
    },
    rotate: function () {
        this.rotationDegrees -= 30;
        banan.style.transform = `rotate(${this.rotationDegrees}deg)`;
    }
}
var downArrow = document.createElement("img");
downArrow.src = "arrow.png";
downArrow.height = 50;
downArrow.style.left = "100px";
downArrow.style.top = "125px";
downArrow.style.position = "absolute";
downArrow.addEventListener("click", function () {
    bananObj.moveDown();
})
document.body.appendChild(downArrow);
var leftArrow = document.createElement("img");
leftArrow.src = "arrow.png";
leftArrow.height = 50;
leftArrow.style.left = "50px";
leftArrow.style.top = "75px";
leftArrow.style.position = "absolute";
leftArrow.addEventListener("click", function () {
    bananObj.moveLeft();
})
document.body.appendChild(leftArrow);
leftArrow.style.transform = "rotate(90deg)";
var upArrow = document.createElement("img");
upArrow.src = "arrow.png";
upArrow.height = 50;
upArrow.style.transform = "rotate(180deg)";
upArrow.style.left = "100px";
upArrow.style.top = "25px";
upArrow.style.position = "absolute";
upArrow.addEventListener("click", function () {
    bananObj.moveUp();
})
document.body.appendChild(upArrow);
var rightArrow = document.createElement("img");
rightArrow.src = "arrow.png";
rightArrow.height = 50;
rightArrow.style.transform = "rotate(-90deg)";
rightArrow.style.left = "150px";
rightArrow.style.top = "75px";
rightArrow.style.position = "absolute";
rightArrow.addEventListener("click", function () {
    bananObj.moveRight();
})
document.body.appendChild(rightArrow);
var rotateArrow = document.createElement("img");
rotateArrow.src = "arrow-rotate.png";
rotateArrow.height = 50;
rotateArrow.style.left = "100px";
rotateArrow.style.top = "75px";
rotateArrow.style.position = "absolute";
rotateArrow.addEventListener("click", function () {
    bananObj.rotate();
})
document.body.appendChild(rotateArrow);

