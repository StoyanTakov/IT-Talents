function addContainerAndChildNodes(container){
    var container = document.createElement(container);
    document.body.appendChild(container);
    var elements = Array.prototype.slice.call(arguments,1);
    elements.forEach(function(el){
        var element = document.createElement(el);
        container.appendChild(element);
    })
}
addContainerAndChildNodes("div","p","img","div");