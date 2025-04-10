// 1. Escribe una función que reciba un array de números y devuelva un nuevo 
// array con solo los números pares.
function getPairNumbers(arr){
    return arr.filter(num => num % 2 === 0);
}
console.log(getPairNumbers([1, 2, 3, 4, 5, 6]));


// 2. Crea una función que reciba un array de números y devuelva un nuevo array 
// con cada número multiplicado por 2.
function getDoubleNumbers(arr){
    return arr.map(num => num * 2);
}
console.log(getDoubleNumbers([1, 2, 3, 4, 5, 6]));


// 3. Utiliza reduce para calcular la suma total de un array de números.
function getSumArray(arr){
    const total = arr.reduce((total, num) => {
        return total + num;
    }, 0);
   return total;
}
console.log(getSumArray([5, 10, 15]));


// 4. Ordena un array de strings de forma ascendente (A-Z).
function getArrayOrder(arr){
    return arr.sort()
}
console.log(getArrayOrder(["banana", "apple", "cherry"]));


// 5. Crea una función que reciba un array de objetos 
// { nombre: string, edad: number } y devuelva el primer objeto con edad mayor 
// a 18.
function getFirstAdult(arr){
    return arr.find((x) => x.age >= 18);
}
const arr = [
    {name: "Ana", age: 17}, 
    {name: "Bruce", age: 18},
    {name: "Luis", age: 21}
]
console.log(getFirstAdult(arr));


// 6. Escribe una función que reciba un array y devuelva un objeto con la 
// cantidad de veces que aparece cada elemento.
function getCountRepeats(arr){
    return arr.reduce((count, num) => {
        count[num] = (count[num] || 0) + 1;
        return count;
    }, {});
}
console.log(getCountRepeats(["a", "b", "a", "c", "b", "a"]));


// 7. Dado un array, elimina los elementos duplicados.
function getDuplicates(arr){
    let result = arr.filter((item,index)=>{
        return arr.indexOf(item) === index;
    })
    return result
}
console.log(getDuplicates([1, 2, 2, 3, 4, 4, 5]));


// 8. Escribe una función que devuelva un nuevo array con los elementos en orden 
// inverso.
function getReverseArray(arr){
    return arr.reverse()
}
console.log(getReverseArray([1, 2, 3]));


// 9. Dado un array de objetos { nombre, edad }, devuelve un nuevo array solo 
// con las edades.
function getOnlyAges(arr){
    return arr.map(x => x.age)
}
const arr9 = [
    {name: "Ana", age: 20}, 
    {name: "Luis", age: 30}
]
console.log(getOnlyAges(arr9));


// 10. Escribe una función que encuentre el número más grande de un array usando 
// reduce.
function getBiggerNumber(arr){
    return arr.reduce((max, num) => {
        return num > max ? num : max;
    }, arr[0]);
}
console.log(getBiggerNumber([3, 10, 6]));


// 11. Escribe una función que reciba un array de números y retorne un objeto 
// con dos propiedades: pares e impares.
function getNewList(arr){
    return arr.reduce((result, num) => {
        if (num % 2 === 0) {
          result.pares.push(num);
        } else {
          result.impares.push(num);
        }
        return result;
    }, { pares: [], impares: [] });
}
console.log(getNewList([1, 2, 3, 4]));


// 12. Crea una función que reciba un array de números y devuelva el promedio.
function getAverage(arr){
    const total = arr.reduce((total, num) => {
        return total + num;
    }, 0);
   return total / arr.length;
}
console.log(getAverage([10, 20, 30]));