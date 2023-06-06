
// la promesa retorna el mensaje de exito si la condicion se cumple si no nos manda el error 
function PidiendoProducto(producto){ 
    return new Promise((resolve, reject)=>{ 
        console.log("procesando pedido..."); 
        setTimeout(()=>{ 
            if(producto === 'taza') { 
                resolve("el producto es una taza"); 
            }else{ 
                reject("no tenemos disponible el producto"); 
            }
        }, 2000);  
    })
} 

// ejemplo de como llamar a la promesa usando el then y catch descomentar para ver el funcionamiento
// PidiendoProducto('lapiz') 
// .then((res)=>{ 
//     console.log(res); 
// }).catch((err)=>{ 
//     console.log(err); 
// }) 

// ejemplo de como llamar a la promesa con una funcion asincrona
async function procesandoPedido(){ 
    try{ 
        const res = await PidiendoProducto("lapiz"); 
        console.log(res);  
    }catch(err){ 
        console.log(err)
    }
}  

procesandoPedido(); 