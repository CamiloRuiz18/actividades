create database Nike;
use Nike;

create table productos (
	id_producto int auto_increment primary key,
    imagen varchar (225),
	nombre varchar (50) not null,
    descripcion varchar (250),
    categoria varchar (50),
    color varchar (20),
    disponibles int,
    precio decimal (10,2) not null
);

insert into productos (imagen,nombre,descripcion,categoria,color,disponibles,precio)
values
("imagenes/principal1.webp","Nike Air Max 90 Premium","Calzado para hombre","Hombre","1 color",2,"764950"),
("imagenes/principal2.webp","Nike Air Max Dn8 Premium SE","Calzado para hombre","Hombre","1 color",4,"1129950"),
("imagenes/principal3.webp","Air Jordan 1 Low SE","Calzado para hombre","Hombre","1 color",1,"784950"),
("imagenes/principal4.webp","Nike Free Metcon 7","Calzado para hombre","Hombre","5 color",3,"714950"),
("imagenes/principal5.webp","Nike United Tiempo Maestro Academy","Guayos de futbol para terrenos múltiples de color low","Guayos","1 color",5,"549950"),
("imagenes/principal6.webp","Nike Ave Edge","Calzado para hombre","Hombre","1 color",4,"874950"),
("imagenes/sandalias1.webp","Nike Victory One","Chanclas para hombre","Sandalias - Hombre","2 colores",4,"194950"),
("imagenes/sandalias2.webp","Nike Marina","Chanclas para hombre","Sandalias - Hombre","3 colores",2,"194950"),
("imagenes/sandalias3.webp","Nike Marina","Chanclas para hombre","Sandalias - Hombre","3 colores",5,"194950"),
("imagenes/sandalias4.webp","Nike Marina","Chanclas para hombre","Sandalias - Hombre","3 colores",3,"194950"),
("imagenes/sandalias5.webp","Nike Calm 2.0","Chanclas para hombre","Sandalias - Hombre - Unisex","4 color",3,"295950"),
("imagenes/sandalias6.webp","Nike Offcourt","Calzado para hombre","Sandalias - Hombre","2 colores",2,"214950"),
("imagenes/guayos1.webp","Nike Mercury Syperfly 11 Elite SE","Guayos para fútbol para terreno firme de corte low","Guayos - Hombre","1 color",7,"1784950"),
("imagenes/guayos2.webp","Nike Phantom 6 Hight Academy","Guayos para fútbol para pasto sintético (turf)","Guayos - Hombre","2 colores",5,"599950"),
("imagenes/guayos3.webp","Nike Mercury Syperfly 11 Academy","Guayos para fútbol para terreno firme de corte Hight","Guayos - Hombre","1 color",7,"539950"),
("imagenes/guayos4.webp","Nike Mercurial Vapor 17 Elite SE","Guayos para fútbol para terreno firme de corte low","Guayos - Hombre","1 color",4,"1679950"),
("imagenes/guayos5.webp","Nike Tiempo Maestro Elite","Guayos para fútbol para terreno firme de corte low","Guayos Hombre","2 colores",4,"1384950"),
("imagenes/guayos6.webp","Nike Phantom 6 Low Academy","Guayos para fútbol para pasto sintético (turf)","Guayos - Hombre","4 colores",5,"549950"),
("imagenes/mujer1.webp","Nike Air Max Plus","Calzado","Mujer - Tenis","1 color",3,"1029950"),
("imagenes/mujer2.webp","Nike Air Max TL 2.5","Calzado","Mujer - Tenis","1 color",2,"999950"),
("imagenes/mujer3.webp","Nike Air Max 90","Calzado","Mujer - Tenis","1 color",3,"844950");

show databases;
select * from productos;

UPDATE productos
SET imagen = 'imagenes/sandalias1.webp'
WHERE id_producto = 7;

select * from productos where id_producto = 3;

SELECT id_producto, nombre
FROM productos;

TRUNCATE TABLE productos;

ALTER TABLE productos AUTO_INCREMENT = 1;

DROP DATABASE Nike;