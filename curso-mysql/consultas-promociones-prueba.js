
// consultas para consumir informacion en el front 
//------------consulta para traer las cards segun el id de la seccion:---------- 

/* SELECT ps.idSeccion, ps.nombreSeccion, pc.idCard, pc.nombreImagen, pc.texto, pc.titulo 
    FROM `promociones_secciones` ps 
    LEFT JOIN `promociones-card` pc 
    ON ps.idSeccion = pc.idSeccion WHERE ps.idSeccion= 2 --cambiamos el 2 por una variable */  

//---------------------consulta para las secciones-----------------------  

// obtener todas 
/* SELECT * FROM promociones_secciones */  

// obtener una en especifico a traves de su id 
// SELECT * FROM promociones_secciones WHERE idSeccion = 2 -- cambiamos el 2 por una variable


// ------------------consultas para el slider------------------------ 
// obtener todas 
// SELECT * FROM promociones_slider   

// obtener todas a traves de un id  
// SELECT * FROM promociones_slider WHERE IdContentSlider = id 

// -----------------consultas para la presentacion--------------------   

// consulta para traer todos los elementos de la presentacion. 
// SELECT * FROM `promociones-presentacion` 

// consulta para acceder a la presentacion a traves de su id 
//SELECT * FROM `promociones-presentacion` WHERE idPresentacion = id

// ----------------------consultas para la seccion contacto-------------------------  

// consulta para traer toda la informacion segun su id. 
// SELECT * FROM `promociones-presentacion`  

// consulta para traer la informacion de contacto segun su id
// SELECT * FROM `promociones-contacto` WHERE idContacto = id 


// ---------------------nombre de las tablas----------------------------- 

/* 
[2:35 p. m., 11/5/2023] Abraham Echeverría 😁: Promociones
[2:35 p. m., 11/5/2023] Abraham Echeverría 😁: Promociones_slider
[2:37 p. m., 11/5/2023] Abraham Echeverría 😁: Promociones-secciones
[3:27 p. m., 11/5/2023] Abraham Echeverría 😁: Promociones-presentacion 
promociones-contacto  
promociones-cards 

*/ 

// consulta para hacer un insert. 

/* INSERT INTO `promociones_presentacion` SET Titulo='titulo ejemplo', Texto='textoEjemplo'    


// consulta para hacer un update ejemplo

/* UPDATE promociones_presentacion SET Titulo= 'Alfred Schmidt', Texto = 'Frankfurt' WHERE idPresentacion = 9;


nota se cambio la tabla secciones para agregar la seccion de promociones. 
*/


