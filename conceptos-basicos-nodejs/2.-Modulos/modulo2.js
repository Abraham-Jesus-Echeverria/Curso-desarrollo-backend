// como vimos anterirmente podemos exportar datos de un modulo a otro con el objeto export pero para poder acceder a ellos desde otro elemento lo tendremos que hacer desde la funcion required(); para ello deberemos crear una variable en la cual exportaremos el objeto exports a traves de la funcion required como lo veremos a continuacion


// dentro de esta variable estamos importando el modulo1 por lo cual podremos ver todo lo que s ejecuta en el modulo1 seguido de lo que nosotros ejecutemos en este modulo, practicamente estamos ejecutando el modulo1 y todas funciones dentro del modulo2 , y luego todo lo que pongamos debaje de este seguira el flujo del programa de manera consecutiva 
const saludos = require("./modulo1.js");     

// ahora si lo que queremos es exportar las funciones de el modulo1 para poder ejecutarlas dentro de este modulo siguiendo el flujo del programa podremos hacerlo desde el objeto module.exports  

console.log(saludos.saludo2("saludo2 desde el modulo2")); 
console.log(saludos.saludo3()); 

// ahora digamos que en un modulo tenemos varias funciones exportadas pero no queremos tener acceso a todas las funciones importadas en este modulo, lo que hacemos es muy facil tendremos que destructurar la funcion que vayamos a usar en un modulo en especifico con la siguiente sintaxis: 

const { saludos, saludo3 } = require("./modulo1.js");   
// poedemos llamar las funciones detructuradas sin necesidad de usar una variable como lo vimos anteriormente, porque ya las hemos detructurado por lo cual si nosotros intetamos acceder al la funcion saludos() nos marcara error ya que no esta destructurada en nuestra importacion 
console.log(saludos()); 
console.log(saludo3());

