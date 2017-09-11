function Human(name,age,photo){
    this.name = name;
    this.age = age;
    this.photo = photo;
}
function addingHumanElement(human){
    var div = document.createElement("div");
    document.body.appendChild(div);
    var nameParag = document.createElement("p");
    nameParag.textContent = human.name;
    nameParag.style.cssFloat = "left";
    div.appendChild(nameParag);
    var ageParag = document.createElement("p");
    ageParag.textContent = human.age;
    ageParag.style.cssFloat = "left";
    ageParag.style.marginLeft = "10px";
    div.appendChild(ageParag);
    var img = document.createElement("img");
    img.src = human.photo;
    img.height = 200;
    div.appendChild(img);
}
var stoyan = new Human("Stoyan",26,"human-clipart-34.jpg");
addingHumanElement(stoyan);