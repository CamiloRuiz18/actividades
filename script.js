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

    const imagen = producto.querySelector(".descripcionProductos");
    const precio = producto.querySelector(".precio");

    imagen.addEventListener("mouseenter", () => {
        precio.classList.add("activo");
    });

    imagen.addEventListener("mouseleave", () => {
        precio.classList.remove("activo");
    });

});