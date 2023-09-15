// nodemon es una dependencia de node js que nos permite efectuar cambios al momento de desarrollar nuestros servidores con node y estos se veran reflejados en el funcionamiento de el mismo sin la necesidad de tener que reiniciar el servidor lo unico que tendremos que hacer es descargarlo de manera global (se puede descargar en local pero para poder ejecutarlo deberas leer la documentacion oficial) y luego ejecutar nuestro servidor con nodemon, para instalarlo solo deberemos agregar el siguiente comando a nuestra terminal: 

// npm install -g nodemon 

// y para ejecutarlo solo debermos iniciarl el servidor con la palabra nodemon en ves de node seguido del nombre del archivo en donde tenemos nuestro servidor, como veremos en el siguiente ejemplo: 

// nodemon apiXD.js  

// algo que es importante mencionar es que en las ultimas versiondes de node js, podemos usar el comando node --watch y esto nos permitira supervisar y reiniciar la aplicacion para poder vizualizar los cambios para mas info visita la documentacion oficial

const http = require('http');  
const PUERTO = 3000 
const {data} = require('./data')

const servidorPruebaNodemon = http.createServer((req, res)=>{ 
    const {method, url} = req   
    if(method === 'GET' && url === '/'){  
        res.writeHead(200, { 'Content-type': 'text/plain' }) 
        return res.end('vienvenido a mi api prueba nodemon') 

    }else if(method === 'GET' && url === '/peceras'){   

        res.writeHead(200, { 'Content-type': 'application/json' });  
        return res.end(JSON.stringify(data.peceras));  

    }else if(method === 'POST' && url ==='/add' ){     
        let body = '';  

        req.on('data', (chunk)=>{ 
            body += chunk.toString(); 
        }); 

        req.on('end', ()=>{ 
            const dataX = JSON.parse(body);  
            console.log(dataX);    
        } ); 
        res.writeHead(200, { 'Content-type': 'text/plain'})
        return res.end('el post ha llegado');; 
    } 
    res.writeHead(501, { 'Content-type': 'text/plain' })  
    res.end('lo sentimos pero su peticion no puede ser procesada');  
}); 

servidorPruebaNodemon.listen(PUERTO,()=>{ 
    console.log(`el servidor se esta ejecutando en el puerto ${PUERTO}`); 
}); 