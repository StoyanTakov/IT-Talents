var submitButton = document.querySelector("button");
var inputs = document.querySelectorAll("input");
Array.prototype.forEach.call(inputs, function(input) {
    input.addEventListener("input", function() {
        input.value = input.value.toUpperCase();
        if (input.value.length < 6) {
            document.getElementById(input.name).style.display = "inline";
        } else {
            document.getElementById(input.name).style.display = "none";
        }
    })
})

submitButton.addEventListener("click", function(event) {
    if (Array.prototype.find.call(inputs, input => input.value.length < 6)) {
        event.preventDefault();
    }

})