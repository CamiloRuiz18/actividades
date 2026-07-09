const pantalla = document.getElementById("pantalla");

const botones = document.querySelectorAll(".numeros");
const operadores = document.querySelectorAll(".operador")

botones.forEach(function (boton) {

    boton.addEventListener("click", function () {
        pantalla.value = pantalla.value + boton.textContent;

        operadores.forEach(function (operador) {

            operador.addEventListener("click", function () {

                pantalla.value = ""
                pantalla.value = "hola"
            })

        });

    });

});