let Numero1 = ""
let Convertir =""
let Centigrados = 0

document.getElementById("igual").addEventListener("click", function(){
    Numero1 = Num1.value
    Convertir = grados.value
    if (Convertir === "°C"){
        Centigrados = Numero1 * 1.8 + 32
        console.log(Centigrados)
    } else {
        console.log(Numero1)
        console.log(Centigrados)
        Centigrados = (Numero1 - 32) / 1.8
        console.log(Centigrados)
    }
})
