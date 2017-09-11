function addParagraph(){
    var input = document.getElementById("input");
    var p = document.createElement("p");
    p.textContent = input.value;
    input.value = "";
    document.body.appendChild(p);
}
document.getElementById("button").addEventListener("click",function(el){
    el.preventDefault();
    addParagraph();
})