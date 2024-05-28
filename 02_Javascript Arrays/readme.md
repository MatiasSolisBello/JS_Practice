# Apuntes de Videotutorial de Fazt

[![banner](https://i.ytimg.com/vi/qqR1enOceVg/maxresdefault.jpg "banner")](https://i.ytimg.com/vi/qqR1enOceVg/maxresdefault.jpg "banner")

## ForEach
Recorrer elementos que son parte de un arreglo
```javascript
students.forEach((students) => {
	console.log(students)
})
```

## Map
Recorrer elementos que son parte de un arreglo (igual que forEach), pero la diferencia es que este **retorna un arreglo nuevo**.

```javascript
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
```

## Filter
Seleccionar elementos de un arreglo segun condicion
```javascript
const webDevelop = students.filter(x => 
    x.course === 'Web Development'
)
console.log(webDevelop)
```


## Reduce
Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
```javascript
// Suma de las edades
const prom = students.reduce((total, x) =>
    total + x.age, 0
)
console.log(prom)
```

## Sort
Ordenar los datos
```javascript
// ordenar por edad de manor a mayor
const order2 = students.sort((a, b) => a.age - b.age)
```

## Find
Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
```javascript
// Muestra el primer Ryan que encuentres
const ryan = students.find((x) => x.name === 'Ryan')
console.log(ryan)

// Muestra la primera edad = 23 que encuentres
const age = students.find((x) => x.age == 23)
console.log(age)
```

## Some
Comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
```javascript
// ¿Existe el apellido Doe en el array?
const existDoe = students.some((x) => 
    x.lastname === "Doe"
);
console.log(existDoe);  // return boolean
```

## Every
Condicional hacia todos los datos, retorna solo boolean
```javascript
// ¿Todos los estudiantes tienen 20 años?
const age_list = students.every(x => x.age === 20)
console.log(age_list)
```

