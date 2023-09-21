// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// }) 
// se especifica el valor de nuestro servicio como T, esto significa type Generic es decir que el tipo de dato sera espeicificado cuendo generemos una instancia de la clase ( constructor(private crudService: CrudService<any>) { } )
// export class CrudService<T> {
//   constructor(private http: HttpClient) { }

//   getAll(endpoint: string): Observable<T[]> {
//     return this.http.get<T[]>(endpoint);
//   }

//   getById(endpoint: string, id: number): Observable<T> {
//     return this.http.get<T>(`${endpoint}/${id}`);
//   }

//   create(endpoint: string, item: T): Observable<T> {
//     return this.http.post<T>(endpoint, item);
//   }

//   update(endpoint: string, id: number, item: T): Observable<T> {
//     return this.http.put<T>(`${endpoint}/${id}`, item);
//   }

//   delete(endpoint: string, id: number): Observable<void> {
//     return this.http.delete<void>(`${endpoint}/${id}`);
//   }
// } 

// -------------------uso del crud en un componente angular---------------------------- 


// Una forma eficiente de realizar un CRUD (Create, Read, Update, Delete) genérico que pueda ser utilizado por todos los componentes de tu sistema en Angular es crear un servicio de fachada (facade service) que encapsule las operaciones CRUD comunes. Aquí te mostraré un ejemplo de cómo podrías implementar esto:

// Paso 1: Crear el servicio de fachada

// Primero, crea un servicio de fachada que contendrá las operaciones CRUD genéricas. Por ejemplo, crea un servicio llamado CrudService:

// typescript
// Copy code
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CrudService<T> {
//   constructor(private http: HttpClient) { }

//   getAll(endpoint: string): Observable<T[]> {
//     return this.http.get<T[]>(endpoint);
//   }

//   getById(endpoint: string, id: number): Observable<T> {
//     return this.http.get<T>(`${endpoint}/${id}`);
//   }

//   create(endpoint: string, item: T): Observable<T> {
//     return this.http.post<T>(endpoint, item);
//   }

//   update(endpoint: string, id: number, item: T): Observable<T> {
//     return this.http.put<T>(`${endpoint}/${id}`, item);
//   }

//   delete(endpoint: string, id: number): Observable<void> {
//     return this.http.delete<void>(`${endpoint}/${id}`);
//   }
// }
// Este servicio CrudService es parametrizado con el tipo T, lo que significa que puede manejar cualquier tipo de datos que se le pase. Las operaciones CRUD (getAll, getById, create, update, delete) se definen de forma genérica y toman una URL endpoint específica como argumento.

// Paso 2: Usar el servicio de fachada en componentes

// Luego, en tus componentes, puedes utilizar el CrudService para realizar operaciones CRUD en los datos. Aquí tienes un ejemplo de cómo utilizarlo en un componente:

// typescript
// Copy code
// import { Component, OnInit } from '@angular/core';
// import { CrudService } from './crud.service';

// @Component({
//   selector: 'app-mi-componente',
//   templateUrl: './mi-componente.component.html',
//   styleUrls: ['./mi-componente.component.css']
// })
// export class MiComponente implements OnInit {
//   items: any[]; // Define el tipo adecuado para tus datos

//   constructor(private crudService: CrudService<any>) { }

//   ngOnInit(): void {
//     this.crudService.getAll('https://api.ejemplo.com/items').subscribe((data) => {
//       this.items = data;
//     });
//   }

//   crearItem(item: any): void {
//     this.crudService.create('https://api.ejemplo.com/items', item).subscribe((data) => {
//       // Procesar la respuesta o realizar acciones adicionales si es necesario
//     });
//   }

//   actualizarItem(id: number, item: any): void {
//     this.crudService.update('https://api.ejemplo.com/items', id, item).subscribe((data) => {
//       // Procesar la respuesta o realizar acciones adicionales si es necesario
//     });
//   }

//   eliminarItem(id: number): void {
//     this.crudService.delete('https://api.ejemplo.com/items', id).subscribe(() => {
//       // Realizar acciones adicionales si es necesario
//     });
//   }
// } 

// --------------------------el uso de la T en ts------------------------------------------

// Entiendo tu confusión. La parametrización de las funciones y el servicio como tipo T en el ejemplo es una técnica de programación genérica que permite que estas funciones y el servicio puedan trabajar con diferentes tipos de datos sin necesidad de ser específicos para un tipo particular.

// Aquí hay una explicación más detallada:

// Tipo Genérico T: En TypeScript, cuando se utiliza T como un tipo genérico, significa que el tipo será definido cuando se use la función o el servicio. Esto permite que las funciones o servicios sean más flexibles y puedan funcionar con diferentes tipos de datos. En el caso del CrudService, T representa el tipo de datos con el que trabajará, y este tipo se especificará cuando se crea una instancia del servicio.

// Reutilización de Código: La principal ventaja de usar tipos genéricos es la reutilización de código. En lugar de tener que escribir funciones y servicios separados para cada tipo de dato (por ejemplo, uno para usuarios, otro para productos, etc.), puedes utilizar un servicio genérico que funcione con cualquier tipo de dato.

// Seguridad de Tipos: Aunque T es genérico, TypeScript sigue proporcionando seguridad de tipos. Cuando utilizas una instancia del CrudService, TypeScript conoce el tipo de datos con el que estás trabajando y te dará sugerencias de código y detectará errores de tipo en tiempo de compilación si intentas hacer operaciones incorrectas con los datos.

// Flexibilidad: Al parametrizar las funciones y el servicio como tipo T, puedes crear instancias de CrudService para trabajar con diferentes tipos de datos en diferentes componentes de tu aplicación. Esto simplifica la gestión de datos en toda la aplicación.

// Aquí hay un ejemplo de cómo se utiliza esta flexibilidad en la práctica:

// export interface Usuario {
//     id: number;
//     nombre: string;
//     email: string;
//   }

// // Crear una instancia de CrudService para trabajar con una interfaz usuarios
// const userService = new CrudService<Usuario>();

// // Crear una instancia de CrudService para trabajar con productos
// const productService = new CrudService<Producto>();
// En resumen, la parametrización de las funciones y el servicio como tipo T es una técnica poderosa que permite la reutilización de código, la seguridad de tipos y la flexibilidad para trabajar con diferentes tipos de datos en una aplicación Angular. Esto es especialmente útil cuando necesitas realizar operaciones CRUD en varios tipos de recursos de datos en tu aplicación.