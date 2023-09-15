// para iniciar nuestro proyecto con express de manera nativa primero deberemos hacer un npm init y crear un paquete, luego instalamos express con el comando npm install express para que nos instale, express en su ultima version, lo siguiente sera seguir los siguientes pasos: 

// esta es la forma base de generar una app lo primero que debemos hacer es importar express: 
const express = require('express');   
// lo siguiente es ejecutarlo y guardarlo dentro de una variable; 
const app = express();  
const puerto = 3000

// lo siguiente sera definir el metodo por el cual llegara la informacion en este caso es un get este metodo recibe dos parametros la primera es la ruta a la cual estara ligado este metodo, lo siguiente es una callback o funcion que recibira dos parametros el primero hace referencia a la peticion y el segundo a la respuesta
app.get('/', (req, res)=>{  
    // lo siguiente sera devolver una respuesta al cliente para ello usamos el metodo send que seria el equivalente al metodo res de node.js
    res.send('la peticion ha llegadoXD'); 
}); 

// y luego el metodo listen que nos sirve para ejecutar el servidor este metodo recibe dos parametros el primero es el puerto en el cual correra el servidor y el segundo una callback que se ejecuta cuando se inicia el servidor
app.listen(puerto, ()=>{ 
    console.log(`el servidor esta escuchando en el puerto ${puerto}`); 
}); 

