
function VentaProducto(producto){ 
    return new Promise((resolve, reject)=>{ 
        console.log("procesando pedido..."); 
        setTimeout(()=>{
            if(producto === "taza"){ 
                resolve("producto en existencia"); 
            }else{ 
                reject("no tenemos el producto"); 
            }; 
        },2000); 
    }); 
} ; 

function EnvioProducto(respuesta){ 
    return new Promise((resolve)=>{ 
        console.log("realizando envio..."); 
        setTimeout(()=>{ 
           if(respuesta){ 
            resolve("envio realizado"); 
           }
        },2000); 
    }); 
; } 

// esta es la forma de encadenar dos promesas con then y catch descomentar para ver funcionamiento
// VentaProducto("taza") 
// .then((res)=>{ 
//     console.log(res); 
//     return EnvioProducto(res); 
// }).then((res2)=>{ 
//     console.log(res2); 
// }).catch((err)=>{ 
//     console.log(err); 
// }) 

async function realizadoPedido(){  
 try{ 
    let res =  await VentaProducto("taza");  
    console.log(res); 
    let res2 = await EnvioProducto(res); 
    console.log(res2)
 }catch(err){ 
    console.log(err); 
 }
}  
realizadoPedido();  
// como podemos ver esta manera es mucho mas legible que la anterior por lo cual es mas recomendable usar
