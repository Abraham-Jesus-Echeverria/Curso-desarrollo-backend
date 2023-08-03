const http = require('http');  
const PUERTO = 3200;   
const {datos} = require('./data.js'); 
// import data from './data'; 

const servidorAcuarios = http.createServer((req, res)=>{  
    const {method} = req; 
    console.log(method);  

    switch(method){ 
        case 'GET':  
        handleGetQuery(req, res); 
        break;   

        default:   
        res.statusCode = 501;  
        res.end("lo sentimos pero el servidor no puede procesar tu peticion"); 
        break
    }
});  


servidorAcuarios.listen(PUERTO, ()=>{ 
    console.log(`el servidor esta escuchando en el puerto ${PUERTO}`); 
}); 

function handleGetQuery (req, res){ 
    const path = req.url 
    console.log(path); 

    switch(path){ 
        case '/peceras':  
        res.writeHead(200, { 'Content-type': 'application/json' }) 
        return res.end(JSON.stringify(datos.peceras));   

        case '/filtros': 
        res.writeHead(200, { 'Content-type': 'application/json' });  
        return res.end(JSON.stringify(datos.filtros));

        default:  
        res.statusCode = 404; 
        return res.end("lo sentimos no pudimos encontrar la data2");  
        
    }
}