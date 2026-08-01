 /*filtros*/
const categorias = document.querySelectorAll(".contenedorFiltros > div");

categorias.forEach(categoria => {

    const titulo = categoria.querySelector(".cajon");
    const filtros = categoria.querySelector(".filtros");
    const flecha = categoria.querySelector(".cajon");

    titulo.addEventListener("click", () => {
        filtros.classList.toggle("oculto");
        flecha.classList.toggle("rotar");
    });

});

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

fetch("http://localhost:8080/productos")
.then(respuesta => respuesta.json())
.then(productos => {

    const principal = document.getElementById("principal");

    productos.forEach(producto => {

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

                    <div class="precio">$${producto.precio}
                    <p class="unidades">Unidades disponibles</p>
                    </div>

                </div>

            </article>
        `;
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
    });

});