let info = {
    'matematicas': [ 
        { 
            id: 1, 
            titulo: 'curso algebra', 
            visitas: 1000, 
            nivel: 'principiante' 
        },  
        { 
            id: 2, 
            titulo: 'curso algebra', 
            visitas: 2000, 
            nivel: 'avanzado' 
        },  
        { 
            id: 3, 
            titulo: 'curso calculo diferencial', 
            visitas: 2000, 
            nivel: 'avanzado' 
        }, 
        { 
            id: 4, 
            titulo: 'curso calculo integral', 
            visitas: 1200, 
            nivel: 'avanzado' 
        },
    ], 
    'ingles': [
        { 
            id: 1, 
            titulo: 'verbo to be', 
            visitas: 1100, 
            nivel: 'principiante' 
        },  
        { 
            id: 2, 
            titulo: 'pasado progresivo', 
            visitas: 1000, 
            nivel: 'principiante' 
        },  
        { 
            id: 3, 
            titulo: 'presente ', 
            visitas: 1000, 
            nivel: 'principiante' 
        }, 
    ]
} 

// exportando la data; 

module.exports.info = info; 