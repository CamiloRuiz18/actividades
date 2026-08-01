package com.nike.demo.controller;

import com.nike.demo.entity.Producto;
import com.nike.demo.repository.ProductoRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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