/*1. Escriba un programa que verifique si un número es positivo, negativo o cero e
imprima el resultado.*/

Number = 0;
let datos = {};

document.getElementById("Consult").addEventListener("click", function () {

    Number = parseFloat(document.getElementById("Num").value);
    datos.Valor_ingresado = Number;

    if (Number === 0) {
        datos.Resultado = "Es un cero"
        document.getElementById("Respuesta").innerHTML = "Numero: " + datos.Valor_ingresado + "\n" + "Valor: " + datos.Resultado
    } else {
        if (Number < 0) {
            datos.Resultado = "Es un numero negativo"
            document.getElementById("Respuesta").innerHTML = "Numero: " + datos.Valor_ingresado + "\n" + "Valor: " + datos.Resultado
        } else
            datos.Resultado = "Es un numero positivo"
        document.getElementById("Respuesta").innerHTML = "Numero: " + datos.Valor_ingresado + "\n" + "Valor: " + datos.Resultado
    }
})

/*2. Cree un programa que determine si una persona es menor de edad, adulta o
anciana según su edad, debe pedir el nombre e imprimir nombre y la categoría
(ejemplo: “Mauricio eres adulto”).*/

let Nombre = ""
let Edad = 0

document.getElementById("Consult2").addEventListener("click", function () {
    Nombre = document.getElementById("Name").value;
    Edad = document.getElementById("Edad").value;
    Respuesta = document.getElementById("Respuesta2")

    if (Edad < 18) {
        Respuesta.innerHTML = Nombre + " es menor de edad"
    } else {
        if (Edad >= 18 && Edad < 55) {
            Respuesta.innerHTML = Nombre + " es edulto"
        } else {
            if (Edad >= 55) {
                Respuesta.innerHTML = Nombre + " es una persona de edad avanzada"
            }
        }
    }
})

/*3. Utilice un bucle for para imprimir los valores de i desde 0 hasta 4.*/

document.getElementById("Consult3").addEventListener("click", function () {

    let Result = "";

    for (let i = 0; i <= 4; i++) {
        Result += i + " "
    }

    document.getElementById("Respuesta3").innerHTML = Result;

})

/*4. Utilice un bucle while para imprimir los valores de un contador desde 0 hasta 4.*/

document.getElementById("Consult4").addEventListener("click", function () {

    let contador = 0
    let igual = 0;

    while (contador < 4) {
        contador++;
        igual += " " + contador + " "
    }

    document.getElementById("Respuesta4").innerHTML = igual;
})


/*5. Cree un bucle for que se detenga cuando i sea igual a 3 usando la instrucción
break.*/

document.getElementById("Consult5").addEventListener("click", function () {

    let Result = "";

    for (let i = 0; i <= 4; i++) {
        if (i === 3) {
            break
        }
        Result += i + " "
    }

    document.getElementById("Respuesta5").innerHTML = Result;

})


/*6. Implemente un bucle for que salte la iteración cuando j sea igual a 2 usando la
instrucción continue.*/

document.getElementById("Consult6").addEventListener("click", function () {

    let Result = "";

    for (let i = 0; i <= 5; i++) {
        if (i === 2) {
            continue;
        }
        Result += i + " "
    }

    document.getElementById("Respuesta6").innerHTML = Result;

})



/*7. Convierta un número del 1 al 12 en el nombre del mes correspondiente. El
programa debe solicitar al usuario que ingrese un número del 1 al 12 y luego
mostrar el nombre del mes asociado.
Ejemplo:
• Ingresa un número del 1 al 12 para saber el mes correspondiente: 9
• El mes correspondiente al número 9 es: Septiembre*/

let Meses = {
    1: "Enero", 2: "Febrero", 3: "Marzo", 4: "Abril", 5: "Mayo", 6: "Junio", 7: "Julio",
    8: "Agosto", 9: "Septiembre", 10: "Octubre", 11: "Noviembre", 12: "Diciembre"
}

let Numero = ""

document.getElementById("Consult7").addEventListener("click", function () {

    Numero = parseFloat(document.getElementById("numeroMes").value);
    if (Numero >= 1 && Numero <= 12) {
        document.getElementById("Respuesta7").innerHTML = "El mes correspondiente es: " + Meses[Numero];
    } else {
        document.getElementById("Respuesta7").innerHTML = "Valor no valido"
    }

})