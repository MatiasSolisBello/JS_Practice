function sumar() {

    //get total value
    const $total = document.getElementById('total');
    let subtotal = 0;

    //get monto values
    [...document.getElementsByClassName("amount")].forEach(function (element) {
        if (element.value !== '') {
            subtotal += parseFloat(element.value);
        }
    });
    $total.value = subtotal;
}