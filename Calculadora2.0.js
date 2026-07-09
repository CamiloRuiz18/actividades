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

operadores.forEach(function (operador) {

    operador.addEventListener("click", function () {
        num1 = parseFloat(pantalla.value)
        operacion = operador.textContent
        pantalla.value = ""
    })

});

document.getElementById("igual").addEventListener("click", function (){
    num2 = parseFloat(pantalla.value)
    if(operacion === "+"){
        respuesta = num1 + num2
        pantalla.value = parseFloat(respuesta)
    }
});