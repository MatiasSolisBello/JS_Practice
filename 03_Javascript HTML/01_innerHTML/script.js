function button1(){
    document.getElementById("result").innerHTML = "<h1>Hola Mundo</h1>";
}

function button2(){
    document.getElementById("result").innerHTML = "<img src='html.png' style='width: 30%'>";
}

function button3(){
    let button = "<button type='button' class='btn btn-primary'>Button</button>";

    //beforebegin, afterbegin, beforeend, afterend
    document.getElementById("result").insertAdjacentHTML("beforeend", button);
}

function button4(){
    document.getElementById("result").innerHTML=""; 
}