/*
TEORIA: recorrer elementos que son parte de un arreglo
*/


// llamamos los datos de estudents desde data.js
import { students } from "./data.js";

const fullname = []

//listar todo
students.forEach((students) => {
	console.log(students)
})

console.log('----------------')

// solo nombre y apellido en un solo array
students.forEach((student) => {
	fullname.push(student.name + ' ' + student.lastname)
})
console.log(fullname)

