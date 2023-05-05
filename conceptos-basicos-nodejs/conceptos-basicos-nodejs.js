// node js es un entorno de ejecucion para java Script que hase uso de eventos asincronos, antes de node los programas hechos con js solo podian ejecutarse en nevagadores como crhome, pero gracias a que node js esta basado en el motor de ejecucion de crhome v8 este tiene la capacidad de poder ejecutar codigo de js sin tener que ir al navegador, ya que este nos brinda de todas las herramientas necesarias para ejecutar nuestros programas de js 

// -----------------------------para que sirve node----------------------------------------- 

// primero que nada debemos saber que es un servidor, un servidor es el encargado de recivir y administrar las peticiones que haga el cliente desde la ui/ux a traves de un protocolo para luego leer dicha informacion y hacer la peticion de datos a una base de datos para luego devolverlo al cliente normalmente a esto se le llama arquitectura cliente servidor

// pricipalmente node js nos sirve para realizar servidores que nos permitan realizar peticiones de datos a una base de datos de manera asincrona ya que no bloqueamos el hilo principal de ejecucion de nuestro programa o servidor mientras se hacen las peticiones, 


// ------------------------------protocolos----------------------------------- 
// como mencionamos anteriormente node js nos permite administrar las peticiones que recibimos desde la interfaz de usuario, pero para poder entender estas peticiones node js hace uso de los protocolos ya que el front envia una peticion en un formato y node o el servidor envia informacion en otro formato, es decir para poder comunicar el front con el servidor debemos hacerlo a traves de un protocolo, en el caso de la web los protocolos mas utilizados para esto son los http y https de los cuales hablaremos mas adelante

// --------------principales caraceristicas de node js--------------------------------- 

// node nos permite hacer aplicaciones en el servidor que sean completamente escalables, es por ello que tiene ventaja en otros lenguajes del servidor como php etc.  

// node usa javascript como lenguaje de programacion principal. 

// node es openSource es decir de codigo abierto por lo cual es totalmente gratiuito 

// node js es multiplataforma, es decir se puede usar con cualquier tipo deinterfaz de usuario siempre y cuando se usa el protocolo http para comunicarse 

// node esta basado en el motor v8 de crhome por lo cual nos permite ejecutar codigo de js en la consola de nuestro pc 

// node sirve para desarrollo backend y generacion de APIS

// node nos permite hacer aplicaciones en tiempo real ya que establece una conexion bidireccional y dinamica entre el servidor y el cliente, por lo cual estos se comparten informacion en tiempo real

// --------------------------------------REPL NODE----------------------------------------
// el REPL de node por sus siglas Read EvaL Print Loop o en español ciclo de leer evaluar e imprimir, este es una herramienta que nos permite interactuar con node utilizando diferentes comandos 

// para usarlo debemos ejecutar en la consola el comando node y para saber cuales son los comandos debemos escribir el comando .help y nos dira los comandos disponibles para usar el REPL los cuales son los sigientes:  

// .break    Sometimes you get stuck, this gets you out
// .clear    Alias for .break
// .editor   Enter editor mode nos sirve para ejecutar codigo en el REAPLE 
// .exit     Exit the REPL
// .help     Print this help message
// .load     Load JS from a file into the REPL session 
// .save     Save all evaluated commands in this REPL session to a file 

// -------------------------paginas dinamicas y estaticas---------------------------
// es de suma importancia saber cual es la dierencia entre una pagina estatica y una dinamica, 

// pagina estatica: una pagina estatica es una pagina que no tiene ninguna interaccion con el usuario es decir es simplente una pagina que ya tiene recargado todos los datos y que solo muestra en pantalla sin que el usuario pueda hacer ninguna interaccion con el 

// pagina dinamica: una pagina dinamica es una web que tiene interaccion con el usuario a traves de elementos que normalmente disparan eventos, y con los cuales nosotros podemos hacer dichas peticiones a un servidor, a demas que dependiendo de dichas peticiones se va renderizando de manera asincrona informacion en nuestra pantalla 
