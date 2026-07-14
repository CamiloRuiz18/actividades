let Numero1 = ""
let Convertir =""
let respuesta = 0

document.getElementById("igual").addEventListener("click", function(){
    Numero1 = Num1.value
    Convertir = grados.value
    if (Convertir === "°C"){
        respuesta = Numero1 * 1.8 + 32;
        resultado.textContent = "El resultado es: " + respuesta;
    } else {
        respuesta = (Numero1 - 32) / 1.8;
        resultado.textContent = "El resultado es: " + respuesta;
    }
})
