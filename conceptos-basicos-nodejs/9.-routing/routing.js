// como bien sabemos el routing es de sumamente importante ya que en las apis gracias a las rutas, podremos acceder a la informacion requerida segun nuestra api y tambien podremos definir el tipo de peticion que estamos haciendo un GET. POST, DELETE, UPDATE, entre otros anteriormente vimos el modulo url que como bien sabemos una url practicamente es una ruta y todos sus parametros pues es sumamente importante conocerlo ya que gracias a este podremos realizar las peticiones en un servidor crado con node como veremos a continuacion: 

const http = require('http'); 
const {info} = require('./data.js' );  

// generamos el servidor y hacemos un switch case para determinar a traves del metodo el tipo de peticion que estamos haciendo
const servidor1 = http.createServer((req, res)=>{  
    const {method} = req 

    switch(method) { 
        case 'GET':  
        return handleQueryGet(req, res);  
        // generamos una funcion para controlar el metodo get le pasamos como parametro el req y el res no colocamos el break ya que el return rompe con el flujo de la funcion 

        case 'POST': 
        return handleQueryPost(req, res); 


        default: 
        res.statusCode = 501;
        res.end("la peticion no puede ser manejada por el servidor..."); 
    }
}) 

// definimos el puerto que nuestro servidor escuchara las peticiones
const PUERTO = '4000'; 

servidor1.listen(PUERTO, ()=>{ 
    console.log(`escuchando en el puerto ${PUERTO}`); 
})  

// funciones que manejaran las peticiones; 

function handleQueryGet (req, res) { 
    const path = req.url;   

    /*{ 
        en caso de un if else seria lo siguiente: 
        if(path === '/'){ 
            res.statusCode = 200; 
            return res.end("vienvenidos a mi servidor")
        }else if(path === '/cursos'){ 
            res.statusCode = 200; 
            return res.end(JSON.stringify(info.cursos))
        }  
        usamos el return para cortar el flujo de la funcion y evitar que se ejecut

        res.statusCode = 400; 
        res.end('lo sentimos pero esa ruta no existe'); 
    }*/
    // sacamos el path para evaluarlo 
    switch(path){  
        case '/': 
        res.writeHead(200, {'Content-type': 'application/json'}) 
        // tambien podemos configurar la cabecera de nuestra peticion para devolver la informacion que queramos; 
        res.statusCode = 200; 
        res.end("bienvenidos a mi primer api desde el swtich"); 
        break;   
    // dependiendo de la ruta que nosotros le demos podremos decidir que informacion devolver al navegador 
    // cabe mencionar que el statusCode por defecto es 200 por lo cual si queremos podemos quitar las asignaciones ya que al dal la respuesta el servidor nos devolvera ese 200
        case '/cursos': 
        // res.statusCode = 200; 
        res.end(JSON.stringify(info)); 
        break; 

        case '/cursos/matematicas':    
        // res.statusCode = 200;   
        res.end(JSON.stringify(info.matematicas)); 
        break;  
    // en este caso le enviamos la informacion parseada del modulo que importamos donde se encuentra la data, esto para que nos lo devuleva en formato json y como podremos observar solo le pasamos la informacion de matematicas

        case '/cursos/ingles':  
        // res.statusCode = 200; 
        res.end(JSON.stringify(info.ingles)); 
        break;   

        default:  
        res.statusCode = 404;   
        // en este caso si hay que especificar el statusCode ya que estamos devolviendo un codigo 404 not found
        res.end(`lo sentimos no pudimos encontrar esa ruta ${res.statusCode}`)
    }
}

function handleQueryPost (req, res) { 
    const path = req.url; 
     switch(path){ 
        case '/cursos/matematicas':  
        let cuerpo = '';  

        req.on('data', (contenido)=>{   
        //    cuerpo =  JSON.parse(contenido);  
            cuerpo += contenido.toString();  
            // le enviamos un objeto de js y lo convertimos en una cadena de caracteres para poder visualizarlo en la consola
        });  
        // el evento data se dispara cuando llega la informacion al servidor de una peticion, 

        req.on('end', ()=>{ 
            console.log(en)
        })
        break 

        default: 
        res.statusCode = 404; 
        res.end('lo sentimos no pudimos encontrar esa ruta')
     }
}