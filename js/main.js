function sum() {
    var number = 0;
    var len = arguments.length;

    for (var i = 0; i < len; i += 1) {
        number += arguments[i];
    }

    return number;
}

var a = sum(2,4)

console.log(a);
