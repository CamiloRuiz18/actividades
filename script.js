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