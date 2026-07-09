const pantalla = document.getElementById("pantalla");

const botones = document.querySelectorAll(".numeros");
const operadores = document.querySelectorAll(".operador");

let operacion = "";
let num1 = 0;
let num2 = 0;
let respuesta = 0;
let acumulado = null;
let num2AC = null;
let escribiendo = false;

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {

        if (!escribiendo && acumulado !== null) {
            pantalla.value = "";
        }

        pantalla.value += boton.textContent;
        escribiendo = true;

    });

});

document.addEventListener("keydown", function (teclado) {

    botones.forEach(function (boton) {

        if (teclado.key === boton.textContent) {
            boton.click();
        }

    });

    if (teclado.key === "Enter") {
        document.getElementById("igual").click();
    }

    if (teclado.key === "Backspace") {
        document.getElementById("delate").click();
    }

});

operadores.forEach(function (operador) {

    operador.addEventListener("click", function () {

        if (pantalla.value !== "") {

            if (acumulado === null) {
                num1 = parseFloat(pantalla.value);
            } else {
                num1 = acumulado;
            }

            pantalla.value = "";
        }

        operacion = operador.textContent;
        escribiendo = false;

    });

});

document.addEventListener("keydown", function (teclado) {

    operadores.forEach(function (operador) {

        if (teclado.key === operador.textContent) {
            operador.click();
        }

    });

});

document.getElementById("igual").addEventListener("click", function () {

    if (escribiendo) {
        num2 = parseFloat(pantalla.value);
        num2AC = num2;
    } else {
        num2 = num2AC;
    }

    if (acumulado !== null) {
        num1 = acumulado;
    }

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
            if (num2 === 0) {
                pantalla.value = "Valor no valido";
                return;
            }
            respuesta = num1 / num2;
            break;
    }

    pantalla.value = respuesta;
    acumulado = respuesta;
    escribiendo = false;

});

document.getElementById("delate").addEventListener("click", function () {

    operacion = "";
    num1 = 0;
    num2 = 0;
    respuesta = 0;
    acumulado = null;
    num2AC = null;
    escribiendo = false;
    pantalla.value = "";

});