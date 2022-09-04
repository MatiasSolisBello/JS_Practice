// Si quieres usar la mism imagen de la moneda de la actividad usa esta URL
let urlCoin = "https://www.html6.es/img/moneda.png";

window.onload = start;
function start() {
    coin = 5
    let c = document.querySelector(".coins")
    c.innerHTML=`<h3>Monedas: ${coin}</h3>`
    for(let i=0;i<coin;i++){
        document.querySelector(".coins").insertAdjacentHTML(
            "beforeend", 
            `<img class="coin" src="${urlCoin}">`
        )
    }
}    


// Funcion asociada a boton "Empezar"
function startBet(){
    let value = document.getElementById('input_bet').value
    if (value >= 2 && value <= 9){
        createCards(value)
    }
}


function createCards(value){
    green_number = 0
    for(let i=0;i<value;i++){

        let random_number = Math.floor(Math.random() * 10);
        let style_button = checkRandomNumber(random_number, value)

        document.querySelector(".result").insertAdjacentHTML(
            "beforeend", 
            `<div class="cards ${style_button}">${random_number}</div>`
        )

        if (style_button == 'green'){
            green_number += 1
        }
    }

    if (green_number > 0){
        document.querySelector(".info").insertAdjacentHTML(
            "beforeend", 
            `<h1>Se ha encontrado ${green_number} coincidencias</h1>`
        )
        createCoincidence(green_number)
    }else{
        document.querySelector(".info").insertAdjacentHTML(
            "beforeend", 
            `<h1>No hay coincidencias</h1>`
        )
        deleteCoincidence(value)
    }
    
}


function checkRandomNumber(random_number, value){
    if (random_number == value){
        return "green";
    }else{
        return "red";
    }
}


function createCoincidence(green_number){
    console.log('createCoincidence -> ', green_number);
}


function deleteCoincidence(value){
    console.log('deleteCoincidence -> ', value);
}