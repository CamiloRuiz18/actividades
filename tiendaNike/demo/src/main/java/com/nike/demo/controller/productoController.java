package com.nike.demo.controller; //indica en que carpeta esta ubicada la clase

import com.nike.demo.entity.Producto; //importa la clase producto para poder utilizarla (Producto.java)
import com.nike.demo.repository.ProductoRepository; //importa el repositorio (ProducoRepository.java) = es quien se comunica con la base de datos

import org.springframework.web.bind.annotation.CrossOrigin;  //
import org.springframework.web.bind.annotation.GetMapping;    //. importa tres anotaciones de springboot
import org.springframework.web.bind.annotation.RestController;  // se usan para crear API REST

import java.util.List; //List es la estructura que permite almacenar varios elementos de un tipo en una variable

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class productoController {

    private final ProductoRepository repository;

    public productoController(ProductoRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/productos")
    public List<Producto> listarProductos() {
        return repository.findAll();
    }

}