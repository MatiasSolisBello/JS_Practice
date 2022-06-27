/*
    TEORIA: comprueba si al menos un elemento del array cumple 
    con la condición implementada por la función proporcionada.
*/

// llamamos los datos de estudents desde data.js
import { students } from "./data.js";


// ¿Existe el apellido Doe en el array?
const existDoe = students.some((x) => 
    x.lastname === "Doe"
);
console.log(existDoe);  // return boolean


// ¿Existe el apellido Smith en el array?
const existSmith = students.some((x) => 
    x.lastname === "Smith"
);
console.log(existSmith);  // return boolean 