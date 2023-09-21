// anteriormente vimos como crear un servidor simple con express, esta ves veremos como funcionan los paramtros de ruta, 

// los parametros de ruta son variables que forman parte de nuestra url, normalmente los escribimos de la siguiente manera .../:parametro, estos normalmente se utilizan para pasar informacion de lo que vamos a buscar, en nuestra url, por ejemplo imaginemos que tenemos una API de cursos de programacion, para acceder a estos cursos necesitaremos diferentes, rutas por ejemplo una para pyton, una para java-script y una para java, sin los parametros de ruta tendriamos que generar una ruta por cada una de estas por lo cual tendriamos que generar una consulta por cada ruta, esto no es para nada optimo ya que estariamos repitiendo codigo, en ves de eso generamos una ruta con un parametro llamaod lenguaje, la ruta sabra que el parametro es una varible que ira cambiando y por lo tanto ya no tendremos que repetir el codigo, a continuacion veremos un ejemplo de esto: 

const express = require('express');  
const puerto = 3000

const app = express();  

app.get('/cursos/:lenguaje', (req, res)=>{ 
    let lenguaje = req.params.lenguaje; 
    console.log(lenguaje);  
    res.send(`el lenguaje fue ${lenguaje}`);  
 });  

 app.listen(puerto, ()=>{ 
    console.log(`el servidor esta corriendo en el puerto ${puerto}`); 
 }); 

//  algo que es importante mencionar es que para poder acceder a la ruta es completamente necesario y obligatorio pasarle el parametro a la ruta, ya que este forma parte de la misma, a diferencia de las query params, ya que estas no forman parte de la ruta, pero eso lo veremos mas adelante; 
 
