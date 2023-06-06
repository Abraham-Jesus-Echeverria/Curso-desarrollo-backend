// como bien sabemos en js tenemos los timers para poder simular un evento asincrono dentro de js, estos nos son muy utiles al momento de querer interpretar un evento despues de un determinado tiempo, pues en node podemos hacer uso de estas funciones ya que estan incorporadas dentro del mismo, por lo cual podemos acceder a la siguientes funciones. 

// setTimeOut(funcion, tiempo en ms, argumento1, argumento2), esta funcion se interpreta despues de un determinado tiempo que le indiquemos en mili segundos, el primer aegumento es la funcion que se le va pasar el segundo es el intervalo de tiempo y los siguientes son los parametros que le pasaremos a la funcion que se ejecutara. 

// setInmediate(funcion, argumento1, argumento2), esta funcion se ejecuta despues de que el codigo sincrono se haya ejecutado 

// setInterval(funcion, tiempo en ms, argumento1 argumento2), esta funcion se ejecuta infinitas veces cada determinado tiempo que le indiquemos. 

// -------------------------------------ejemplo setTimeOut------------------------------- 

function functionExample1 (mensaje1, mensaje2) { 
    console.log(`este es el mensaje1 ${mensaje1} y el mensaje2 ${mensaje2} `); 
}
setTimeout( functionExample1, 2000, "mensaje xd", "mensaje ejemplo2" );  

// otro ejemplo de la sintaxis de como ejecutar esto es lo siguiente: 

setTimeout(()=>{ 
    functionExample1("mensaje desde segunda sintaxis", "mensaje desde tercera sintaxis"); 
}, 5000);  

// ----------------------------- ejemplo setImiediate()---------------------- 

function functionExample2 (mensaje1, mensaje2) { 
    console.log(`setInmediate mensaje1 ${mensaje1}, ${mensaje2} `)
}
console.log("codigo antes");  

let timerID = setImmediate( functionExample2, "argumento1", "argumento2" ); 

console.log("codigo despues");  

// como podemos ver primero se ejectuan los codigos sincronos que en este caso son los console, luego se ejecuta el setImmediate, ya que este se ejecuta despues de haber ejecutado todo el codigo sincrono y de ultmo se ejecutan las funciones que tienen el setTimeOut. 

// ------------------------------------ejemplo setInterval------------------------------ 
// como bien sabemos el setInterval se utiliza para ejecutar una funcion un numero infinito de veces en cada intervalo de tiempo que le indiquemos en ms, un ejemplo de esto es lo siguiente: 

function functionExample3(argumento1){ 
    console.log(argumento1)
}

setInterval(functionExample3, 1000, "ARGUMENTO"); 

// si nosotros ejecutamos el codigo podremos ver que se ejecuta un numero infinito de veces cad segunto. 

