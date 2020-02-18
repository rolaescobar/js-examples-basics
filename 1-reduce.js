//funcion reduce() ejecuta  una funcion reductora sobre cada elemento de un array, dovolviendo como resultado un unico valor

const array1 = [1,2,3,4]
const reducer = (accumulator,currentvalue)=> accumulator + currentvalue;

console.log(array1.reduce(reducer));
//espera 10

console.log(array1.reduce(reducer,5))
//espera 15