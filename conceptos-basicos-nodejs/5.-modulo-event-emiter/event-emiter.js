// el modulo event emiter es un modulo que nos permite crear nuestros eventos por lo cual es necesario saber utilizarlo, a continuacion veremos un ejemplo de como importar y utilizar este modulo para crear nuestros propios eventos  

// este metodo nos permite definir, emitir y escuchar un evento perzonalizado, a continuacion veremos un ejemplo de como utilizar este: 

const EventEmitter = require('events'); 

// para crear nuestro evento hay que declarar una variable y generar una instancia a partir del la clase EventEmitter, como veremos a continuacion: 

const eventoPerzonalido = new EventEmitter(); 

// una ves definido nuestro evento pásamos a generar un manejador de evento que se generara a partir de un parametro, por ejemplo cuando se genera un evento click normalmente lo hacemos de la siguiente manera: 

/* document.addEventlistener('click'(e)=>{console.log(e)}) 

pues la sintaxis de esto es muy parecido solo que ahora nosotros tendremos que crear el evento ya que no existe por medio del metodo on de la clase EventEmmitter como veremos a continuacion:  */ 

eventoPerzonalido.on('compra', ()=>{ 
    console.log('se disparo el evento compra'); 
}); 

// internamente js emite los eventos internamente al interactuar con la interfaz de usuario, por ejemplo cuando presionamos un boton o cuando se realiza un cambio en un input, pero en este caso como no estamos interactuando con una interfaz de usuario tendremos que emitir el evento nosotros mismo, con el metodo emit('evento') de la siguiente manera 

eventoPerzonalido.emit('compra');  

// -------------------------------segundo ejemplo------------------------------ 
// a continuacion veremos otro breve ejemplo de como 

const eventoPerzonalidado2 = new EventEmitter(); 

eventoPerzonalidado2.on('venta', (e)=>{  
    console.log("el evento venta ha sido disparado"); 
    console.log(e)
}); 

eventoPerzonalidado2.emit('venta');  

// estos eventos perzonalizados pueden ser emitidos o disparados cuando el servidor reciba peticiones a traves del front end por lo cual podremos enviar informacion o ejecutar una funcion en especifico cuando nos el cliente este realizando sus peticiones. 
