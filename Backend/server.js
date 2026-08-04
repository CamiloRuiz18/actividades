const express = require("express");
const cors = require("cors");

const conexion = require("./conexion");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/productos",(req,res)=>{

    conexion.query(

        "SELECT * FROM productos",

        (error,resultados)=>{

            if(error){

                return res.status(500).json(error);

            }

            res.json(resultados);

        }

    );

});
app.listen(3000,()=>{

    console.log("Servidor iniciado");

});
