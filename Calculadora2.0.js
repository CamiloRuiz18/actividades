const pantalla = document.getElementById("pantalla");

const botones = document.querySelectorAll(".numeros");
const operadores = document.querySelectorAll(".operador")
let operacion = ""
let num1 = ""
let num2 = ""
let respuesta = ""

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {
        pantalla.value = pantalla.value + boton.textContent;
    });
});

document.addEventListener("keydown", function (teclado) {

    botones.forEach(function (boton) {

        if (teclado.key === boton.textContent) {
            boton.click();
        }

    });

    if (event.key === "Enter") {
        document.getElementById("igual").click();
    }

    if (event.key === "Backspace") {
        document.getElementById("delate").click();
    }
});

operadores.forEach(function (operador) {

    operador.addEventListener("click", function () {
        num1 = parseFloat(pantalla.value)
        operacion = operador.textContent
        pantalla.value = ""
    })

});

document.addEventListener("keydown", function (teclado) {

    operadores.forEach(function (operador) {

        if (teclado.key === operador.textContent) {
            operador.click();
        }

    });

});

document.getElementById("igual").addEventListener("click", function () {
    num2 = parseFloat(pantalla.value)
    switch (operacion) {
        case "+":
            respuesta = num1 + num2;
            break;
        case "-":
            respuesta = num1 - num2;
            break;
        case "*":
            respuesta = num1 * num2;
            break;
        case "/":
            if (num2 === "0") {
                pantalla.value = "Valor no valido";
                return
            }
            respuesta = num1 / num2;
            break;
    }

    pantalla.value = parseFloat(respuesta)

});

document.getElementById("delate").addEventListener("click", function () {
    let operacion = null
    let num1 = null
    let num2 = null
    let respuesta = null
    pantalla.value = null
})