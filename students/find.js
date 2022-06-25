/*
    TEORIA: Buscar un elemento dentro de un arreglo
*/

// llamamos los datos de estudents desde data.js
import { students } from "./data.js";


//
const ryan = students.find((x) => x.name === 'Ryan')
console.log(ryan)