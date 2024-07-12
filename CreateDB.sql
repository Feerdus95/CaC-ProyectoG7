CREATE DATABASE IF NOT EXISTS cac_g7;

USE cac_g7;

CREATE TABLE IF NOT EXISTS turismo(
	id int not null auto_increment primary key,
    nombre varchar(255) not null,
    apellido varchar(255) not null,
	email varchar(255) not null,
    fecha_desde date not null,
    fecha_hasta date not null,
    actividad varchar(255) not null,
    monto float not null,
    cant_personas int not null,
	comentarios varchar(255)
	);
    
INSERT INTO turismo VALUES (id,"Nombre1","Apellido1","Email1@mail.com","2022-11-11","2022-11-12","Actividad1",5000.00,3,"Esto es un comentario en la DB");
    
SELECT * FROM cac_g7.turismo;