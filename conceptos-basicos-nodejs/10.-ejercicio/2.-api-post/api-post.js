const http = require('http'); 
const {datos} = require('./data.js');  
const PUERTO = 3300; 

const servidorPostAcuario = http.createServer((req,res)=>{  
    const {method} = req;  
    console.log(method); 
    switch(method){ 
        case 'GET' :  
        if(req.url === '/'){ 
            res.statusCode = 200; 
            res.setHeader('Content-Type', 'application/json') 
            res.end(JSON.stringify(datos)) ; 
        }
        break;  

        case 'POST':   
        handlePost(req, res); 
        break;   

        default:   
        res.statusCode = 501;  
        res.end("lo sentimos pero el servidor no puede procesar tu peticion"); 
        break; 


    }
}); 

servidorPostAcuario.listen(PUERTO, ()=>{ 
    console.log(`el servidor esta escuchando en el puerto ${PUERTO}`); 
}); 

const handlePost = (req,res) =>{ 
    const {url} = req; 
    switch(url){ 
        case '/':  
        res.end("hemos recivido un post");   
        break;   

        case '/add/pecera':  
        let data = '';  
        // es sumamente necesario inicializar esta variable data como una cadena de string ya que en el evento data los datos van llegando en pequeños fragmentos como cadenas de texto que necesitaremos ir concatenando y asi obtener la informacion en el formato indicado y luego poder parsear la informacion adecuadamente. 
        req.on('data', (chunk)=>{  
            data += chunk.toString(); 
        });  
        // cuando enviamos un post a traves de node js, estos son enviados en pequeños fragmentos llamados buffers ya que los datos pueden persar mucho y enviarlo todo de una ves seria demasiado pesado por lo cual node divide los datos y el evento data se dispara cada vez que un fragmento de datos llega, en este evento nosotros contatenamos esos datos en una cadena de string, para luego poder parsearlos

        req.on('end', ()=>{  
            // console.log(req.headers);  
            // pendiente marca error 
            const dataX = JSON.parse(data); 
            console.log(dataX);    
            datos.peceras.push(dataX); 
            res.statusCode = 200; 
            res.setHeader('Content-Type', 'text/plain');
            res.end('Solicitud POST recibida'); 
        }) 

        break; 
         // el evento end se dispara una ves que el buffer de datos este vacio es decir que se disparara cuando todos los datos hayan llegado y los hayamos  
        
        default:  
        res.statusCode = 404;    
        res.setHeader('content-Type', 'text/plain'); 
        res.end("lo sentimos pero la ruta no se ecuentra");  
        break; 
    }
}