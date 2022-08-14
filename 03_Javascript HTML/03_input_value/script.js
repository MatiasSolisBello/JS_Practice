function clickButton(){
    name_value = "MATIAS"

    //Obtener valor del input
    let name_input = (document.getElementById('name_input').value);

    //Obtener valor del input en mayusculas
    let name_input_mayus = name_input.toUpperCase();

    // Primera letra mayus + resto en minus
    let name_format = name_input.substr(0,1).toUpperCase() + 
        name_input.substr(1).toLowerCase()
    
    // Si input en mayus == nombre original en mayus
    if(name_input_mayus == name_value){
        document.getElementById('result').innerHTML = "<h1>Hola "+name_format+"</h1>";
    }else{

        // Vacia div + vacia y enfoca input
        document.getElementById("result").innerHTML=""; 
        document.getElementById('name_input').value = ""
        document.getElementById("name_input").focus();
    }
}