var obj = {
    name: "Frederick",
    age: 30
};

console.log( obj );

//Convierte un objeto o valor de JavaScript 
//en una cadena de texto JSON
var jsonString = JSON.stringify( obj )
console.log( jsonString );

//analiza una cadena de texto como JSON, 
//transformando opcionalmente el valor producido por el análisis.
var objectFromJSON = JSON.parse( jsonString );
console.log( objectFromJSON );