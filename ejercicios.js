/*1. Declare una variable de tipo string y asígnele un mensaje de saludo.
Luego, imprima la variable.*/
String = "Hola mundo"
console.log(String)

/*2. Declare una variable de tipo number y asígnele su edad. Luego,
imprima la variable.*/
Number = 21
console.log(Number)

/*3. Declare una variable de tipo boolean y asígnele true o false según su
preferencia. Luego, imprima la variable.*/
Boolean = true
console.log(Boolean)

/*4. Declare una variable de tipo null y otra de tipo undefined. Luego,
imprima ambas variables.*/
let Punt4 = null
let punt4 = undefined
console.log(Punt4, punt4)

/*5. Cree un objeto que represente un artículo con propiedades como
nombre, precio y categoría. Imprima el objeto en la consola.*/
const Telefono = {
    nombre: "Samsung A22",
    precio: "1.200.000",
    categoria: "Telefono",
    estado: "Disponible"
}
console.log(Telefono)

/*6. Declare un array que contenga nombres de ciudades. Imprima el array
en la consola.*/
const Ciudades = ["BogotaDC","Medellin","Villavicencio"]
console.log(Ciudades)

/*7. Declare una variable y asígnele su color favorito. Luego, modifique la
variable con otro color e imprima ambos valores en la consola.*/

let color = "Azul_claro"
color += " Naranja"
console.log(color)

/*8. Declare dos variables, una sin asignarle ningún valor y otra con el valor
null. Imprima ambas variables en la consola.*/

let Sin = "  "
let Con = null
console.log(Sin + Con)