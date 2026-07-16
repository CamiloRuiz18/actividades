/*1. Escriba un programa que solicite al usuario el radio de un círculo y luego calcule
y muestre el área y el perímetro del círculo, debe utilizar funciones.*/

let Radio = 0;
let Area = 0;
let Perimetro = 0;
let datos = {}

function operaciones() {

    Radio = parseFloat(document.getElementById("Radio").value);
    Area = Math.PI * (Radio ** 2) + " Cm2"
    Perimetro = 2 * Math.PI * Radio

    datos.Area = Area
    datos.Perimetro = Perimetro

    document.getElementById("Respuesta").innerHTML = "Radio: " + Radio + "cm" + "\n" + "Area: " + datos.Area + "\n" + "Perimetro: " + datos.Perimetro

}
document.getElementById("Calcular").addEventListener("click", operaciones)


/*2. Escriba un programa que utilice una función llamada calcular la cual toma dos
parámetros: base y exponente. Esta función debe calcular y devolver el resultado
de elevar la base al exponente.*/

function calcualar() {

    let Base = parseFloat(document.getElementById("Base").value)
    let Exponente = parseFloat(document.getElementById("Exponente").value)

    let Respuesta = Base ** Exponente
    document.getElementById("Respuesta2").innerHTML = "La respuesta es: " + Respuesta
}
document.getElementById("Calcular2").addEventListener("click", calcualar)



/*3. Cree un programa que solicite al usuario ingresar una lista de números y luego
encuentre el número más grande en esa lista.*/

let numeroMayor = 0;
let comparar = 0;
let contador = 0;

document.getElementById("ingresar").addEventListener("click", function () {

    comparar = parseFloat(document.getElementById("list").value)

    if (comparar > numeroMayor) {
        numeroMayor = comparar
    }

    contador++;

     if (contador === 10) {

        document.getElementById("Respuesta3").innerHTML = "El numero mayor de la lista es: " + numeroMayor

        contador = 0;
        numeroMayor = 0;
        document.getElementById("list").value = "";
    }

})




/*4. utilizando el Bucle for haga:
• Imprimir los números del 20 al 30 en la consola.
• Imprimir los números pares del 30 al 50 en la consola.
• Calcular la suma de los primeros 50 números naturales.
• Imprimir la tabla de multiplicar del 8.
• Imprimir los elementos de un array.
• Imprimir un patrón de asteriscos en forma de triángulo, con altura 9.
• Calcular la suma de los números pares del 1 al 50.
• Imprimir los números del 30 al 20 en orden descendente.
• Calcular el promedio de un array de números.*/