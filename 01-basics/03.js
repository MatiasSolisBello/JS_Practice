//Los arreglos son una coleccion de objetos
var arr = [5,4,3,2,1];

//Invertir arreglo --> [ 1, 2, 3, 4, 5 ]
arr.reverse();

arr.push("6") //agrega 6 al final
console.log( arr )

arr.unshift("0") //agrega 0 al inicio
console.log( arr )

console.log( arr.toString() ) //0,5,4,3,2,1,6

var deleteArr = arr.pop(); //borrar el ultimo (6)
console.log( arr, deleteArr )

arr.splice( 1, 3 ) //eliminar de posicion 1 a 3
console.log( arr ) //[ 0, 4, 5 ]

arr = arr.slice( 0,3 )
console.log( arr )