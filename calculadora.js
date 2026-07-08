document.getElementById("calcular").addEventListener("click", function () {

    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacion = (document.getElementById("operacion").value);
    let respuesta;

    if (operacion === "suma") {
        respuesta = numero1 + numero2;
    } else if (operacion === "resta") {
        respuesta = numero1 - numero2;
    } else if (operacion === "multiplicacion") {
        respuesta = numero1 * numero2;
    } else if (operacion === "division") {
        if (numero2 == 0) {
            document.getElementById("respuesta").innerHTML = "Valor no valido"; return;
        }
        respuesta = numero1 / numero2;
    }

    document.getElementById("respuesta").innerHTML = "El resultado es: " + respuesta;

});