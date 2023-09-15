function suma(a, b){ 
    return a + b;
}; 

function resta(a, b){ 
    return a - b; 
}; 

function multiplicacion(a, b){ 
    return a * b; 
}; 

function division(a, b){ 
    if (b == 0){ 
        console.log('lo sentimos no se puede dividir un valor entre cero'); 
    }else{ 
        return a / b; 
    }
} 

module.exports = { 
    suma, 
    resta, 
    multiplicacion, 
    division
}