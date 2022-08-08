/*
    TEORIA: seleccionar elementos de un arreglo segun
    condicion
*/

// llamamos los datos de estudents desde data.js
import { students } from "./data.js";


//si curso es Web Development
const webDevelop = students.filter(x => 
    x.course === 'Web Development'
)
console.log(webDevelop)


//si curso NO es Web Development
const NotWebDevelop = students.filter(x => 
    x.course !== 'Web Development'
)
console.log(NotWebDevelop)
