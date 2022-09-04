let red = "https://www.html6.es/img/rojo"
let blue = "https://www.html6.es/img/azul"


function button1(){
    document.getElementById("result").insertAdjacentHTML(
        "beforeend", 
        `<img class="red" src="${red}" style='width: 10%'>`
    )
}


function button2(){
    for(let i=0;i<4;i++){
        result.insertAdjacentHTML(
            "beforeend", 
            `<img class="blue" src="${blue}" style='width: 10%'>`
        )
    }
}


function button3(){
    let count_blue = document.querySelectorAll(".blue").length;
    for (let i=0; i<=count_blue; i++){
        document.querySelectorAll(".blue")[0].src = red;
        document.querySelectorAll(".blue")[0].setAttribute(
            "class","red"
        );
    }
}


function button4(){
    let count_red = document.querySelectorAll(".red").length;
    for (let i=0; i<=count_red; i++){
        document.querySelectorAll(".red")[0].remove();
    }
}


function button5(){
    document.getElementById("result").innerHTML="";
}