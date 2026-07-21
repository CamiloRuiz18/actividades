function agregar() {

    const iconoSelect = `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="11"/>
        <path d="M7.5 12.5L10.5 15.5L16.5 9.5"
          stroke="white"
          stroke-width="2.2"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"/>
    </svg>`
    const inconoEliminar =  
    `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="black">
    <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v8h-2V9zm4 0h2v8h-2V9zM7 9h2v8H7V9zm1 11h8c1.1 0 2-.9 2-2V7H6v11c0 1.1.9 2 2 2z"/>
    </svg>`
    let listado = ""

    let primerContenedor = document.createElement("div")
    let producto = document.createElement("p")
    let opciones = document.createElement("div")

    opciones.className = "opciones"

    let svgSelect = document.createElement("span")
    svgSelect.classList.add("colorSelect")
    svgSelect.innerHTML = iconoSelect
    svgSelect.addEventListener("click", function(){
        svgSelect.classList.toggle("activo")
    })

    let svgEliminar = document.createElement("span")
    svgEliminar.id = "iconoEliminar"
    svgEliminar.innerHTML = inconoEliminar

    opciones.appendChild(svgEliminar)
    opciones.appendChild(svgSelect)

    primerContenedor.appendChild(producto)
    primerContenedor.appendChild(opciones)

    listado = document.getElementById("list").value
    document.getElementById("list").value = ""

    producto.textContent = listado
    console.log(producto)

    svgEliminar.addEventListener("click", function () {
        primerContenedor.remove();
    })

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