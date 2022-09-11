function clickButton(){
    //Obtener valor del input
    let name_input = document.querySelector('#name').value

    //Obtener valor del input en mayus - minus
    let name_mayus = name_input.toUpperCase();
    let name_minus = name_input.toLowerCase();

    console.log('Mm -> ', name_mayus, name_minus);

    // Primera letra mayus + resto en minus
    let name_format = name_input.substr(0,1).toUpperCase() + 
        name_input.substr(1).toLowerCase()
    console.log('name_format -> ', name_format);

    let myKings = []

    // añadir valores al array .push
    myKings.push(name_format)
    console.log(myKings);

    document.querySelector('#result').insertAdjacentHTML(
        "beforeend", 
        `<h1>${myKings[0]}</h1>`
    )
}