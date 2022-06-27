/*
    TEORIA: devuelve el valor del primer elemento 
    del array que cumple la función de prueba proporcionada.
*/

// llamamos los datos de estudents desde data.js
import { students } from "./data.js";


// Muestra el primer Ryan que encuentres
const ryan = students.find((x) => x.name === 'Ryan')
console.log(ryan)

// Muestra la primera edad = 23 que encuentres
const age = students.find((x) => x.age == 23)
console.log(age)