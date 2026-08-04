const principal = document.querySelector("#principal");

let productos = [];

// Obtener productos

fetch("http://localhost:3000/productos")
.then(respuesta => respuesta.json())
.then(datos => {

    productos = datos;

    mostrarProductos(productos);

});

// Mostrar productos

function mostrarProductos(lista){

    principal.innerHTML = "";

    lista.forEach(producto => {

        const precio = Number(producto.precio).toLocaleString("es-CO");

        principal.innerHTML += `

            <article class="productos">

                <img src="${producto.imagen}" alt="${producto.nombre}">

                <div class="descripcionProductos">

                    <h4>Lo más nuevo</h4>

                    <p>${producto.nombre}</p>

                    <div class="descripcion">

                        <span>${producto.descripcion}</span>

                        <span>${producto.color}</span>

                    </div>

                    <div class="precio">

                        $ ${precio}

                        <p class="unidades">

                            ${producto.disponibles} Unidades disponibles

                        </p>

                    </div>

                </div>

            </article>

        `;

    });

    activarAnimacion()

}

// Eventos de filtros

document.querySelectorAll("input[type=checkbox]").forEach(caja=>{

    caja.addEventListener("change", filtrarProductos);

});

function filtrarProductos(){

    let resultado = productos;

    if(document.getElementById("hombre").checked){

        resultado = resultado.filter(producto =>
            producto.categoria.includes("Hombre")
        );

    }

    if(document.getElementById("mujer").checked){

        resultado = resultado.filter(producto =>
            producto.categoria.includes("Mujer")
        );

    }

    if(document.getElementById("unisex").checked){

        resultado = resultado.filter(producto =>
            producto.categoria.includes("Unisex")
        );

    }

    if(document.getElementById("guayos").checked){

        resultado = resultado.filter(producto =>
            producto.categoria.includes("Guayos")
        );

    }

    if(document.getElementById("sandalias").checked){

        resultado = resultado.filter(producto =>
            producto.categoria.includes("Sandalias")
        );

    }

    if(document.getElementById("tenis").checked){

        resultado = resultado.filter(producto =>
            producto.categoria.includes("Tenis")
        );

    }



    mostrarProductos(resultado);

}

    function activarAnimacion() {
        const productos = document.querySelectorAll(".productos");
    
        productos.forEach(producto => {
    
            const contenedorDescripcion = producto.querySelector(".descripcionProductos");
            const precio = producto.querySelector(".precio");
            const descripcion = producto.querySelector(".descripcion")
    
            contenedorDescripcion.addEventListener("mouseenter", () => {
                precio.classList.add("activo");
                descripcion.classList.add("oculto")
            });
    
            contenedorDescripcion.addEventListener("mouseleave", () => {
                precio.classList.remove("activo");
                descripcion.classList.remove("oculto")
            });
    
        });
}
/*  <article class="productos">
            <img src="imagenes/principal5.webp" alt="imagenProducto">
                <div class="descripcionProductos">
                    <h4>Lo más nuevo</h4>
                    <p>Nike Ave Edge</p>
                    <div class="descripcion">
                        <span>Calzado para hombre</span>
                        <span>1 color</span>
                    </div>
                    <div class="precio">$ 84,00
                        <p class="unidades" >Unidades disponibles</p>
                    </div>
                </div>
        </article>*/