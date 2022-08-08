/*
    TEORIA: recorrer elementos que son parte de un arreglo
    (igual que forEach), pero la diferencia es que
    este recorna un arreglo nuevo
*/

// llamamos los datos de estudents desde data.js
import { students } from "./data.js";


//muestra todos los datos y edad * 2
const list = students.map(x => ({
	...x
})).map(x => ({...x, age: x.age * 2}))
console.log(list)

//muestra nombre y apellido
const fullname = students.map(x => {
	return { 
        fullname: x.name + ' ' + x.lastname,
        age: x.age,
        course: x.course,
        title: x.name + ' - ' + x.course
    }
})
console.log(fullname)


//muestra solo nombres
const names = students.map(x => x.name)
console.log(names)