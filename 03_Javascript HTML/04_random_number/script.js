let value1 = document.getElementById("value1").value = Math.floor(Math.random() * 10);
let value2 = document.getElementById("value2").value = Math.floor(Math.random() * 10);

function calculate(){
    result = value1 + value2
    value3 = document.getElementById("value3").value;

    if(value3 == result){
        document.getElementById("result").innerHTML = "<h1>Correcto</h1>"
    }else{
        document.getElementById("result").innerHTML = "<h1>Incorrecto</h1>"
    }
}