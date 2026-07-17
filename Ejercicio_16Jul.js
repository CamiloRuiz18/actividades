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
• Imprimir los números del 20 al 30 en la consola.*/

function puntoCuatro() {

    let Result = "";

    for (let i = 20; i <= 30; i++) {
        Result += i + " "
    }

    return "4) " + Result + "\n"

}



/*• Imprimir los números pares del 30 al 50 en la consola.*/

function cuatro_1() {

    let numerosPares = "";

    for (let a = 30; a <= 50; a++) {

        if (a % 2 === 0) {
            numerosPares += a + " "
        }
    }

    return "4.1) " + numerosPares + "\n"
}

/*• Calcular la suma de los primeros 50 números naturales.*/

function cuatro_2() {

    let sumaNumeros = 0

    for (let b = 1; b <= 50; b++) {
        sumaNumeros += b
    }

    return "4.2) La suma es: " + sumaNumeros + "\n"

}


/*• Imprimir la tabla de multiplicar del 8.*/

function cuatro_3() {

    const Tabla8 = [
        "8 x 1 = 8",
        "8 x 2 = 16",
        "8 x 3 = 24",
        "8 x 4 = 32",
        "8 x 5 = 40",
        "8 x 6 = 48",
        "8 x 7 = 56",
        "8 x 8 = 64",
        "8 x 9 = 72",
        "8 x 10 = 80"
    ]

    let arrayTabla = "";

    for (let c = 0; c < Tabla8.length; c++) {
        arrayTabla += Tabla8[c] + "<br>"
    }

    return "4.3) <br>" + arrayTabla

}

/*function tablaMultiplicar() {

    let tabla = [];

    for (let mult = 1; mult <= 10; mult++) {
        tabla.push(numero + " x " + mult + " = " + (numero * mult));
    }

}*/


/*• Imprimir los elementos de un array.*/

function cuatro_4() {

    const Telefono = [
        "Samsung A22",
        "1.200.000",
        "Telefono",
        "Disponible"
    ]

    let array = "";

    for (let d = 0; d < Telefono.length; d++) {
        array += Telefono[d] + "<br>"
    }

    return "4.4) <br>" + array

}


/*• Imprimir un patrón de asteriscos en forma de triángulo, con altura 9.*/
//en este punto si tome gran parte de la IA porque no di en como hacerlo
function cuatro_5() {

    let resultado = "";

    for (let fila = 1; fila <= 9; fila++) {

        for (let espacio = 9; espacio > fila; espacio--) {
            resultado += " ";
        }

        for (let estrella = 1; estrella <= (fila * 2 - 1); estrella++) {
            resultado += "*";
        }

        resultado += "<br>";
    }

    return "4.5) <br>" + resultado;

}

/*• Calcular la suma de los números pares del 1 al 50.*/

function cuatro_6() {

    let sumaPares = 0;

    for (let f = 1; f <= 50; f++) {

        if (f % 2 === 0) {
            sumaPares += f
        }
    }

    return "4.6) El resultado es: " + sumaPares + "\n"
}

/*• Imprimir los números del 30 al 20 en orden descendente.*/

function cuatro_7() {

    let inversa = "";

    for (let g = 30; g >= 20; g--) {
        inversa += g + " "
    }

    return "4.7) " + inversa + "\n"

}

/*• Calcular el promedio de un array de números.*/

function ejecutarTodo() {
    let P4 = puntoCuatro();
    let P4_1 = cuatro_1();
    let P4_2 = cuatro_2();
    let P4_3 = cuatro_3();
    let P4_4 = cuatro_4();
    let P4_5 = cuatro_5();
    let P4_6 = cuatro_6();
    let P4_7 = cuatro_7();

    document.getElementById("Respuesta4").innerHTML =
        P4 + "\n" + P4_1 + "\n" + P4_2 + "\n" + P4_3 + "\n" + P4_4 + "\n" + P4_5 + "\n" + P4_6 + "\n" + P4_7
}

document.getElementById("enter").addEventListener("click", ejecutarTodo)
