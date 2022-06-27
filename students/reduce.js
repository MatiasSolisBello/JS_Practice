/*
    TEORIA: ejecuta una función reductora sobre cada elemento 
    de un array, devolviendo como resultado un único valor.
*/

// llamamos los datos de estudents desde data.js
import { students } from "./data.js";


// Suma de las edades
const prom = students.reduce((total, x) =>
    total + x.age, 0
)
console.log(prom)