// para poder desarrollar una app con node js, hacemos uso de modulos, los modulos practicamente son archivos js, en los cuales vamos a guardar el codigo de una seccion  de nuestra app, ya que es mejor divir el codigo de nuestra app en diferentes modulos, que tenerlo todo en una sola pagina de js, ya que de esta merna es dificil de leer el codigo,  

// ademas de que la principal finalidad de un modulo es reutlizar su codigo, por lo cual esto hara que nuestra api sea mucho mas rapida 

// a pesar de que normalmente dividimos nuestro codigo en diferentes modulos, nosotros podemos relacionar estos modulos, a traves de importaciones en las cuales nosotros podremos compartir funciones de un modulo a otro, esto a traves de la regla imports, un ejemplo de esto es lo siguiente: 

function saludos (saludo) { 
    return (`hola me llamo ${saludo}`); 
}

// console.log(saludos("Abraham")); 
// para poder ver el resultado de esta funcion en la consola tendremos que ejecutar el comando node url/nombre del modulo en este caso seria node ./modulo.js  

// para poder exportar una funcion lo deberemos hacer a traves de el objeto module.export, si nosotros visualizamos este elemento en la consola podremos ver como es que nos devuelve un objeto vacio, por lo cual todos los metodos disponibles para los objetos estaran disponibles para este elemento por lo cual podremos introducir nuestras funcionalidades a este elemento y poder acceder a ellos en otro modulo a traves de la nomenclatura del punto
// console.log("module.ecports"); 
// console.log(module.exports);  

// introduciendo la funcion dentro del objeto exports: para poder introducir una o mas funciones dentro de este elemento lo podremos hacer, como cualquier objeto, estableciendo un valor a traves de la nomenclatura del punto o como un objeto, como veremos a continuacion

// nomenclatura del punto. 

// module.exports.saludo = saludos;  
// console.log("module exports con funcion a traves de la nomenclatura de punto"); 
// console.log(module.exports);  
// si nosotros visualizamos este valor en la consola, podremos observar como tenemos un valor en el objeto, que equivale a una funcion 

// metiendo valores a traves de un objeto

function saludo2 (nombre) { 
    return `${nombre}`; 
}  
console.log(saludo2("saludo dos desde el modulo1")); 
function saludo3 () { 
    return "hola soy saludo tre";  
} 
console.log(saludo3()); 

console.log("module.exports como objeto y con valores multiples"); 
module.exports = { 
    saludos : saludos, 
    saludo2 : saludo2, 
    saludo3 : saludo3, 
} 

console.log(module.exports); 


