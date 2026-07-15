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

document.getElementById("Consult2").addEventListener("click", function (){
    Nombre = document.getElementById("Name").value;
    Edad = document.getElementById("Edad").value;
    if (Edad < 18){
        document.getElementById("Respuesta2").innerHTML = Nombre + " es menor de edad"
    } else {
        if (Edad >= 18 && Edad < 55 ){
            document.getElementById("Respuesta2").innerHTML = Nombre + " es edulto"
        } else {
            if (Edad >= 55){
                document.getElementById("Respuesta2").innerHTML = Nombre + " es una persona de edad"
            }
        }
    }
})

/*3. Utilice un bucle for para imprimir los valores de i desde 0 hasta 4.*/




/*4. Utilice un bucle while para imprimir los valores de un contador desde 0 hasta 4.*/




/*5. Cree un bucle for que se detenga cuando i sea igual a 3 usando la instrucción
break.*/




/*6. Implemente un bucle for que salte la iteración cuando j sea igual a 2 usando la
instrucción continue.*/




/*7. Convierta un número del 1 al 12 en el nombre del mes correspondiente. El
programa debe solicitar al usuario que ingrese un número del 1 al 12 y luego
mostrar el nombre del mes asociado.
Ejemplo:
• Ingresa un número del 1 al 12 para saber el mes correspondiente: 9
• El mes correspondiente al número 9 es: Septiembre*/