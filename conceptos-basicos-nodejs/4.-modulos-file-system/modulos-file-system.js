// los modulos fyle system, son muy utiles, para poder realizar diversas acciones a los archivos de nuestro sistema o proyecto las funciones o metodos mas utiles de estos modulos son los siguientes: 

// leer archivos 

// modificar archivos 

// copiar archivos 

// Eliminar archivos 

// algo que es sumamente importante mencionar es que absolutamente todos los metodoso de este modulo son asincronos asi que hay que tener eso en cuenta ya que no sabemos cuanto tiempo se demorara en realizar cada accionm, y una ves realizada esa accion nos devolvera una respuesta 

// pero tambien podemos hacer que los metodos sean sincronos, agregando la palabra sync al final del nombre del metodo por ejemplo: 

// evento asyncrono: 
// fs-rename() 

// evento syncrono 
// fs.renameSync() 

// como vemos es muy facil convertirlo en un evento syncrono a continuacion veremos unos ejemplos de como utilizar los metodos de este modulo. 


// ------------------------------ejemplo metodos modulo fs--------------------------------- 

// de primera intancia para poder utilizar este modulo hay que importarlo ya que no esta instalado nativamente en node js, para poder importarlo lo deremos hacer de la siguiente manera:  

const fs = require('fs');  

// ---------------------------------metodo readFile-------------------------

// el primer metodo que vamos a ver es el metodo para leer un archivo el cual la sintaxis es la siguiente: 

/* fs.readFile('ubicacion del archivo', 'formato del archivo', (err, contenido)=>{ 
    if(err){ 
        console.log(err) 
    }else{ 
        console.log(contenido); 
    } 
})  

como podemos ver recibe tres argumentos el primero es la ubicacion del archivo el segundo es el formato del archivo que en su defecto sera utf-8 y luego una callback en la cual si la peticion falla nos devolvera un error, pero si todo sale bien nos leera el contenido del archivo a continuacion veremos un ejemplo de como funciona esto:*/ 

fs.readFile('./fileExample.html', 'utf-8', (err, content)=>{ 
    if(err){ 
        console.log(err) 
        // throw err
    }else{ 
        console.log(content); 
    }
})  

// la forma asincrona de llamar este metodo es el siguiente: 

fs.readFileSync('./fileExample.html', 'utf-8'); 

// algo que es importante mencionr es que al llegar el error no para el flujo del programa pero siqueremos que pare el flujo del programa deberemos usar trow y lanzar el error, 

// ------------------------------------metodo rename----------------------------------- 

// la sintaxis de este metodo es la siguiente:  

/* fs.rename('ubicacion', 'nuevo nombre', (err)=>{ 

}) */

fs.rename('./fileExample.html', 'main.html', (err)=>{ 
    if(err){ 
        console.log(err)
    }else{ 
        console.log('nombre cambiado exitosamente'); 
    }
}); 

// la forma sincrona de este metodo es el siguiente: 

fs.renameSync('./main.html', 'master.html');  

// --------------------------metodo appendFile------------------------------------- 
// el metodo appendFile nos sirve para insertar un elemento en la ultima linea de codigo, un ejemplo de como utilizar esta funcion es la siguiente: 

fs.appendFile('./master.html', '<div>hola</div>', (err)=>{ 
    if(err){
        console.log(err); 
    }else{ 
        console.log("el archivo se ha modificado adecuadamente"); 
    }
} ); 

// algo que es portante mencionar es que este metodo si no encuentra el archivo especificado creara uno nuevo, con el nombre que le hemos indicado. 

// la fomra sincrona de realizar esta operacion es la siguiente; 

fs.appendFileSync('./master.html', '<div>segundo elemento </div>')

// -----------------------metodo writeFile-------------------------------- 
// el metodo writeFile sirve para sobreescribir o remplazar todo el contenido de un archivo por un elemento un ejemplo de como usar esto es lo siguientes: 

fs.writeFile('./master.html', '<div>Contenido nuevo</div>', (err)=>{ 
    if(err){ 
        console.log(err)
    }else{ 
        console.log('el archivo se ha sobreescribido adecuadamente'); 
    }
}); 

// cabe mencionar que este metodo al igual que el otro si no encuentra el archivo especificado creara uno nuevo con ese mismo nombre. 

// la forma sincrona de usar este elemento es el siguiente:  

fs.writeFileSync('./master.html', '<div>Nuevo contenido2</div>');    


// ----------------------------modulo fsUnlink------------------------------
// el modulo fsUnlink nos sirve para eliminar un archivo en especifico, a continuacion veremos un ejemplo de como funciona esto.

fs.unlink('./master.html', (err) =>{ 
    if(err){ 
        console.log(err) 
    }else{ 
        console.log('el file se ha eliminado adecuadamente');
    }
});  

// la forma asincrona de este metodo es el siguiente. 

fs.unlinkSync('./master.html') 



