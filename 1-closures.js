function creaSumador(x) {
    return function (y) {
        return function (z) {
            return x + y + z
        }

    }
}

var suma5 = creaSumador(5);
var suma6 = suma5(3);
console.log(suma6(10))