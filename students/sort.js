/*
    TEORIA: ordenar los datos
*/

// llamamos los datos de estudents desde data.js
import { students } from "./data.js";


// ordenar por edad de manor a mayor
const order2 = students.sort((a, b) => a.age - b.age)
//console.log(order2)


// ordenar por edad de menor a mayor
const order = students.sort((a, b) => b.age - a.age)
console.log(order)