// como bien sabemos al momento de generar una api, nosotros realizamos las peticiones a traves de el protocolo http y este mismo realiza estas peticiones accediendo a diferentes rutas o urls, por lo cual es sumamente importante conocer las propiedades de una url antes de ver el modulo url, 

// una url normalmente se ve de la siguiente manera: 

// http://www.ejemplo-url.com 

// y las propiedades de esa url son las siguientes:  

// http: este es el protocolo por el cual se comunica el servidor con el front, lo veremos en la mayoria de las urls ya que la internet esta basada en una arquitectura cliente servidor y la mayor parte de las veces usamos el protocolo http o https que es lo mismo pero con una capa extra de seguridad. 

// www: esto es un subdominio, un subdominio o dominio de segundo nivel es una clasificacion que deriba de el dominio original, esto con fines de relacionar una web secundaria a nuestra web principal a traves del dominio y de esta manera tener una mejor organizacion, un ejemplo de un subdominio podria ser lo siguiente: htttp://fotos.ejemplo-url.com, como podemos ver podriamos decir que estamos en una pagina de fotgrafias pero teniendo en cuenta que la pagina principal es http://www.ejemplo-url.com 

// .com: dominio de orden supoerior, o top level domain (TLD) un dominio de orden superior son las letras que aparecen al final de tu dominio y estas son de sumaimportancia ya que le dan un valor representativo a tu pagina web, por ejemplo el .com normalmente se utiliza para organizaciones comerciales, por lo cual si quieres hacer una pagina de comercio debes usar el .com, otro ejemplo de esto podria ser el .edu, estas normalmente se usan para organizaciones educativas, por lo cual si quieres hacer una web para una escuela, preparatoria, universidad etc etc, debes tener un TLD .edu, y asi tenemos muchas mas. 

// -------------------------------------parametros en las url---------------------------------------- 
// existen dos tipos de parametros en las url, los parametros de ruta y los parametros de consulta de los cuales hablaremos a continuacion: 

// parametros de ruta: normalmente estos parametros forman parte de nuestras rutas y hay que declararlas para poder utilizarlas, ya que de esta manera no podremos acceder a la ruta si no le pasamos dicho parametro ya que este forma parte del mismo. para declarar este parametro normalmente lo hacemos con dos puntos antes del nombre de la variable que contendra el parametro, por ejemplo: 
// imagenes/clientes/:idCliente, como podemos para poder acceder a esta ruta es sumamente necesario mandarle como parametro el id del cliente, de lo contrario no podremos acceder. 

// parametros de consulta o queryParams: estos a diferencia de los anteriores no forman parte de la ruta, por lo cual podremos acceder a la ruta sin estos parametros, normalmente estos parametros se utilizan, para filtrar la informacion que nos trae nuestra api, ya que normalmente son dinamcos, un prametro de consulta es representado por n ? despues de la ruta a la cual accediomos, por ejemplo lo siguiente: 
// https://www.ejemplo-ruta.com?paremtro=23  
// como podremos observar le estamos pasando un pametro de consulta a nuestra ruta, y podremos usar este parametro para poder filtrar informacion o realizar cualquier otra cosa con esta variable, un ejemplo muy claro de como funciona esto son las paginaciones de una tabla que le manda paramtros de consulta a la url para que nos filtre la informacion y nos devuelva un numero determinado de datos, 
// cabe mencionar que en una url podemos pasar mas de un parametro de consulta, simplemente separandolo con un & como veremos a continuacion:  
// https://www.ejemplo-ruta.com?paremtro1=23&parametro2=12  
// como podremos observar en este ejemplo le estamos pasando dos parametros de consulta a la url, por lo cual podremos acceder a estos parametros sin ningun problema, 
// algo que es importante mencionar sobre los parametros de consulta es que estos tienen una estructura clave valor como los objetos de js, por lo cual podremos acceder a ellos como si fueran objetos de js. 
 
// ---------------------------------modulo url--------------------------------------- 
// el modulo url es de sumaimportancia ya que nos permite acceder a las propiedades de las url y esto nos facilita el desarollo de nuestras apps, para poder usar este modulo debermos generar una nueva instancia de este de la siguiente manera: 

const miURL = new URL('https://www.ejemplo.com/productos/clientes?parametro1=12&parametro2=24'); 

// como podemos observar es facil de utilizar el modulo generamos una instancia del objeto url y le pasamos como parametro una cadena de string que va contener la url que queramos utilizar, las principales propiedades de este metodo son los siguientes: 

console.log(miURL.hostname); 
// nos mostrara el hostname de nuestra url que en este caso es www.ejemplo.com  

console.log(miURL.pathname);   
// nos mostrara el path o camino de nuestra url que en este caso es productos/clientes 

console.log(miURL.searchParams) 
// nos mostrara un objeto con los paramtros de consulta que tengamos en la url  

// para acceder a los parametros de consulta de manera individual tendremos que hacerlo con un metodo get, como veremos a continuacion: 

console.log(miURL.searchParams.get('parametro1')); 
console.log(miURL.searchParams.get('parametro2')); 


console.log(miURL.protocol);  
// nos mostrara el protocolo que estemos usando en nuestra url que en este caso es https: 



