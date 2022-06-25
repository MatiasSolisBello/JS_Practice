/*
    TEORIA: 
*/

// llamamos los datos de estudents desde data.js
import { students } from "./data.js";


const result = students.some((x) => 
    students.lastname === 'Doe'
) 
console.log(result)     // return boolean