// para realizar nuestro primer servidor en node js lo primero que debemos hacer es importar el modulo http ya que gracias a sus metodos y herramientas podremos escucar peticiones en el servidor y recibir informacion 

const http = require('http'); 

// una ves hecho esto pasamos a declarar nuestro servidor con el metodo createServer como veremos a continuacion 

// este metodo recibe una funcion flecha que le pasaremos dos parametros sumamente importante, req que hace referencia a las peticiones que le hagamos al servidor y el response que es la respuesta que el servidor dara al cliente 


const servidor = http.createServer((req, response)=>{ 
    // proceso 
    console.log('peticion'); 

    // el metodo end nos sirve para devolver un valor al cliente una ves que se haya realizado una peticion, y finalizar el proceso del servidor, ya que si no lo usamos el servidor jamas dejara de buscar las peticiones que le digamos y el navegador se quedara cargando siempre ya que le servidor jamas termina sus procesos
    response.end('este es el servidor respondiendo las consultas han finalizado');

})

// una ves declarado el servidor lo siguiente sera indicarle en que puerto se va correr, para ello deberemos utilzar el meotod listen este metodo recibe dos parametros el puerto que como bien sabemos un puerto es un espacio virtual de nuestro sistema opertativo en el cual podremos ejecutar una aplicacion a la cual nosotros podramos acceder, y el segundo paramtro es una funcion en la cual le diremos que hacer cuando el servidor empieze a correr, como veremos en el siguiente ejemplo 

const PORT = '3003'
servidor.listen(PORT, ()=>{ 
    console.log("el servidor esta corriendo adecuadamente"); 
}); 

// para poder correr el servidor lo unico que demos hacer es ir a la terminal y agreger node ubicacion del proyecto/nombre proyecto en este caso node primer-servidor.js y el servidor estara listo para usarse, por lo cual si nosotros vamos al navegador y escribimos localHost:3000 podremos ver como nos devuelve el mensaje que escribimos en el metodo ends

// otro ejemlo de como funciona esto es lo siguiente  

// ---------------------------ejemplo servidor 2-------------------------------

const servidor2 = http.createServer((req, res)=>{  
    console.log('peticion2'); 
    res.end("este es el servidor2 respondiendo")
}); 

servidor2.listen('4000', ()=>{ 
    console.log(`el servidor 2 esta corriendo adecuadamente en la siguiente ruta localHost:4000 `); 
}); 

// algo que es importante mencionar es que cada ves que recargamos el navegador el servidor inicia sus procesos y realiza las peticiones que le indiquemos, una ves hecha las peticiones se finaliza el proceso del servidor gracias al metodo end y nos devueve un valor, aunque el servidor termine su proceso este se seguira ejecutando, por lo cual cada vez que recargemos el navegador pasara este proceso. 

// es de sumaimportancia cerrar las consultas con el metodo end, ya que si no se mantendra abierta una coneccion con la base de datos y este sera reconocido por nuestro hosting, al tener muchas conecciones abiertas el hosting sera saturado y por lo siguiente el servidor colapsara; 
