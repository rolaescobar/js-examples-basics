
"use strict"
const arreglo1 =[1,2,3,4,5,{nombre:'Mario'}]
const arreglo2 = Array.from(arreglo1)

arreglo2[4] = 55
arreglo2[5].nombre = 'Luis'

console.log(arreglo1)
console.log(arreglo2)


