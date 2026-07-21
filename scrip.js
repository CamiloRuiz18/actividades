
let listado = ""

let primerContenedor = document.createElement("div")
let producto = document.createElement("p")
let opciones = document.createElement("div")

opciones.className = "opciones"

let svgSelect = document.createElement("p")
svgSelect.textContent = "seleccionar"

let svgEliminar = document.createElement("p")
svgEliminar.textContent = "Eliminar"

opciones.appendChild(svgEliminar)
opciones.appendChild(svgSelect)

primerContenedor.appendChild(producto)
primerContenedor.appendChild(opciones)

function agregar() {

    listado = document.getElementById("list").value
    document.getElementById("list").value = ""

    producto.textContent = listado
    console.log(producto)

    document.getElementById("elementos").appendChild(primerContenedor)
}

document.getElementById("agregar").addEventListener("click", agregar)



    /*< div >
            <p>Lista</p>
        <div class="opciones">
            <p>select</p>
            <p>borrar</p>
        </div>
    </div >*/