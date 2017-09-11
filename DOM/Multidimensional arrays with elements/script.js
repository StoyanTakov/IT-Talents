function addElements(container){
    var container = container+"";
    container = document.createElement(container);
    document.body.appendChild(container);
    var elements = Array.prototype.slice.call(arguments,1);
    function appendElements(el){
        if (Array.isArray(el)) {
            appendElements(el[0]);
        }
        
    }
}