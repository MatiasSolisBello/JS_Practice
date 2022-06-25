/*
    TEORIA: Condicional hacia todos los datos
*/

// llamamos los datos de estudents desde data.js
import { students } from "./data.js";


// ¿Todos los estudiantes tienen 20 años?
const ña = students.every(x => x.age === 20)
console.log(ña) //return boolean


// ¿Todos los estudiantes tienen una J en su nombre?
const NameWithJ = students.every(x => x.name.includes('J'))
console.log(NameWithJ) //return boolean