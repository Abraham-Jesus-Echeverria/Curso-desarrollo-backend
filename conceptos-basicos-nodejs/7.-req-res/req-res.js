// anteriormente vimos la estructura basica de un servidor vimos que tenemos que usar el metodo createServer del modulo http el cual recide dos parametros muy importantes, los cuales son req y response de los cuales hablaremos a continuacion: 

// el objeto request hace referencia a la peticion que hacemos al servidor y este  tiene muchos metodos y propiedades por lo cual si queremos visualizarlo lo que debemos hacer es un console.log(req);  

// los principales metodos que veremos son los siguientes: 

// req.url = nos muestra la url despues del host que le indiquemos, por jemmplo si nosotros le pasamos la siguiente ruta al navegador: localHost:3000/peticiones/XD dentro de la variable url tendremos /peticiones/XD como valor 

// req.method: nos muestra el metodo que este recibiendo el servidor ya sea PUT, POST, DELETE, GET

// req.header: nos permite ver o modificar los headers de una peticion que como bien sabemos los headers, sirven para establecer informacion sobre la peticion que estamos haciendo por ejemplo el formato en el cual el protocolo http nos devolvera la informacion ya sea en formato json o como un archivo html entre otras cosas.  

// como podemos ver el objeto res cuenta con muchos metodos y propiedades que nos seran utiles al momento de generar una api, a continuacion veremos los metodos del objeto res


const http = require('http');  
const PUERTO = '3000'; 

const servidorPrueba = http.createServer((req,res)=>{ 
    // console.log(req);  
    console.log(req.url); 
    console.log(req.method);  
    console.log(req.headers); 

    res.end("peticiones hechas"); 
})

servidorPrueba.listen(PUERTO, ()=>{ 
    console.log(`el servidor esta corriendo en el puerto: ${PUERTO}`); 
}); 

// -------------------------------obejeto res------------------------------------- 
// el objeto res hace referencia a la respuesta que le daremos al cliente por lo cual contamos con metodos y propieades que nos permitiran perzonalizar o establecer un formato que le responderemos al cliente aunque no veremos todos solos los mas importantes.  

// res.statusCode = nos devuelve el codigo de estado de la peticion que como bien sabemos hay muchos aunque los mas conocidos son el 200 que es el ok el 404 not found entre otros, para mas info visita la documentacion oficial cabe mencionar que podemos asignarle un codigo de respuesta a nuestra peticion como veremos a continuacion: res.statusCode = 404;  

// res.setHeader = este es un metodo que nos permite modificar los valores de la cabecera de nuestra respuesta, esto para poder establecer un formato en el cual nosotros podremos mandarle la informacion al cliente a traves del protocolo http.  

// res.getHeader = nos permite visualizar la cabecera de repuesta que usaremos para responder al cliente. 

const PUERTO2 = '3001'
const servidor2 = http.createServer((req, res)=>{  
    // console.log(res) 
    console.log(res.statusCode);   
    res.statusCode = 404; 
    console.log(res.statusCode);   

    res.setHeader('content-type', 'application/html');  
    console.log(res.getHeaders()); 

    res.end("el servirdor 2 ha recibido sus peticiones"); 
}); 

servidor2.listen(PUERTO2, ()=>{ 
    console.log(`el servidor2 esta corriendo en el puerto ${PUERTO2}`); 
}); 

// como podemos ver este objeto cuenta con varios metodos que nos permitiran realizar nuestros servidores de manera facil y rapida. 


