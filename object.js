var objects = {
    a : "12",
    "b" : "34"
};


objects.c = "56";

objects.showAll = function() {
    for(var key in this) {
        document.write('key : ' + key + ' value : ' + this[key] + '<br>');
    }
}
