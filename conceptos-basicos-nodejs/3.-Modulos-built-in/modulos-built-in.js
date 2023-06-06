// los modulos built int o modulos incorporados, son modulos que estan instalados en node js nos dotan de ciertas herramientas que nos serviran para poder desarrollar nuestras apps en node js, es decir son modulos incorporados nativamente dentro de node js, y podemos hacer uso de ellos en nuestro codigo. algunos ejemplos de estos modulos son los siguientes: 

// http 
// https 
// fs(file system) 
// os (operating system) 
// path  
// console 
// process 

// a continuacion explicaremos algunos de estos modulos que son de suma importancia conocer 

// -----------------------modulo console----------------------------------- 
// el modulo console lo hemos usado infinidad de veces en el desarollo con js, pero hasta el momento solo el navegaro tenia la capacidad de poder ejecutar este modulo, en la actualidad podemos ejecutar este modulo desde la consola o terminal de nuestro pc, sin necesidad de un navegador gracias a que node no necesita un navegador para poder ejecutarse, algunos ejemplos de este modulo son los siguientes: 

console.log("ejemplo de ejecutar modulo console"); 
console.warn("ese es una alerta con el modulo console"); 
console.error("este es un error con el modulo error"); 
// al modulo error tambien le podemos pasar como parametro una instancia del objeto error para generar un error en la consola la sintaxis seria la siguiente: 
// console.log( new Error('esto es un error') ); 

// ---------------------------------modulo process-------------------------------------- 
// el modulo proccess es de suma importancia ya que nos provee informacion sobre el proceso o archivo js que se esta ejecutando en node js por lo cual si nosotros observamos el objeto proccess en la consola podremos observar mucha informacion desde la version de node js que estamos ejecutando, como informacion del motor v8 eh inclusive informacion sobre la plataforma en la que se esta ejecutando el proceso de node y mucha mas informacion del mismo. 

console.log(process);  

// ________________________________process.env___________________________
// la propiedad env del modulo process nos describe el entorno o ambito en el cual se esta ejecutando nuetro programa de node js por lo cual podremos observar la informacion de este a traves de esta propiedad, por ejemplo el domonio actual, el nombre del usuario, el perfil del usuario/ la ubicacion donde esta instalada windows, el idioma, y algunas caracteristicas del sistema operatico entre otras cosas  normalmente se usa para acceder a las variables que han sido declaradas en el entorno del proyecto que esta ejecutando node js 

console.log(process.env);  

// ____________________________process.argv________________________________ 
// esta propiedad nos devuelve un array de todos los argumentos que pasamos a traves de la consola. 

// por ejemplo cuando nosotros ejecutamos un programa de js con node js le pasamos dos argumentos los cuales son el nombre del archivo.js y el comando node, por lo cual si nosotros hacemos un console.log(proccess.argv), nos devolvera un array con las ubicaciones de node y del archivo js, 

// si nosotros ejecutamos lo siguiente en la consola node archivo.js 1 3 nos devolvera un array con los valores de las ubicaciones de node y el archivo y los valores 1 y 3 dentro del array por lo cual si queremos acceder a ellos podremos hacerlo como lo ariamos normalmente en un array  

console.log(process.argv);  
console.log("accediendo a la segunda posicion del array de argumentos");  
console.log(process.argv[3]);    

// algo que es importante mencionar es que todos los metodos nativos de los array estan disponibles para este array de argumentos.  

// console.log("accediendo a los valores del array de argumentos con un foreach"); 
process.argv.forEach(element => {
    console.log(element); 
});

// node modulos-built-in 1 2 3 

// ---------------------process.memoryUsage()------------------ 
// el metodo memoryUsage() nos dice informacion acerca del uso de memoria que esta utilizando el proceso de node en ejecucion  

console.log(process.memoryUsage()); 
// nos devuelve un objeto con especificaciones de la memoria que usa nuestro proceso de node actual en bytes


// estos son algunos de las propiedades y metodo del modulo process pero en realidad hay muchos mas para mas informacion visita la documentacion oficial de node. 

// --------------------------modulo os-------------------------------------------------- 

// el modulo no es un modulo global en node js por lo cual tendremos que importarlo con un require como lo vimos anteriormente 

const os = require('os'); 

// este modulo nos da informacion acerca del sismtema operativo en el cual se esta ejecutando el proceso de node js 


console.log(os);  
// si nosotros vemos esto en la consola podremos observar informacion detallada acerca del sistema operativo.

console.log(os.type()); 
// nos dice que sistema operativo tenemos en este caso nos saldra Windows_NT ya que mi sistema operativo actual es windows 

console.log(os.homedir()); 
// nos da la direccion de la carpeta principal del sistema que en este caso es en donde esta nuestro usuario

console.log(os.uptime()); 
// nos dice el tiempo de actividad del sistema operativo en segundos

console.log(os.userInfo()); 
// nos devuelve un objeto con la informacion del usuario del sistema operativo 