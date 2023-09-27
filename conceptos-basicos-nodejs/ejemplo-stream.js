
// que es un stream: 
/* un stream es una manera de enviar datos de obtener datos secuencialmente de manera incremental.

es decir que podemos obtener los datos secuencialmente y poco a poco en ves de cargar todos los datos de golpe. 

esto gracias a que los streams nos envian los datos en pequeños fragmentos de informacion llamdos buffers los cuales deberemos ir concatenando poco a poco, 

esto optimiza el uso de la descarga de datos, ya que si por ejemplo tenemos un archivo muy grande, en ves de descargar todo el archivo, mejor se va descargando poco a poco segun nuestras necesidades. 

un ejemplo de esto puede ser una pelicula online, cuando nosotros vemos una pelicula online, los datos de esta pelicula van siendo descargados poco a poco mientras esta sigue reproduciendose, de esta manera bajamos los datos secuencialmente en ves de bajar todos los datos al darle play a la pelicula, ya que si hacemos esto, la pelicula tardara muchop en cargar, 

en node js, los streams se usan para poder obtener los datos que el cliente nos envia a nuestra API y de esta manera concatenar los buffers para luego parsear la informacion y usarla como en el siguiente ejemplo:*/
const http = require('http'); 
const port = 3000; 

const Server = http.createServer((req, res)=>{  
    console.log(req.url); 
    console.log(req.method); 
    if(req.url === '/' && req.method === 'GET'){ 
        console.log('esta es una cadena de string');  
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('hola desde stream'); 
    }

    if(req.url === '/stream' && req.method === 'POST' ){ 
        let dataStream = '';

        req.on('data' ,(chunk) =>{ 
            dataStream += chunk; 
        }); 
        req.on('end',()=>{ 
            console.log('el cuerpo de la peticion es la siguiente');
            res.writeHead(200, {'Content-type' : 'application/json' }); 
            // res.end(JSON.parse(dataStream));  
            JSON.parse(dataStream); 
            console.log(dataStream); 
            res.end();
        })
    }
}); 

Server.listen(port, ()=>{ 
    console.log(`el puerto esta corriendo en ${port}`); 
}); 
