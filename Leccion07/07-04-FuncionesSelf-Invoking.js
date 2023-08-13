/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 7.04

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
ASPECTOS IMPORTANTES DE VISUAL STUDIO CODE:
-AYUDA DE VSC (Apretando CTL+BARRA ESPACIADORA)

-----------------------------------------------------------------------------------------
*/


//TEMA: FUNCIONES SELF-INVOKING (Funciones que se llaman a si mismas)

/*
    Dejamos el anterior ejemplo para mostrar otra funcion tambien anonima pero distinta.

    let x = function(a , b) { return a + b};

    let resultado = x (1 , 2); 

    console.log(resultado);

*/  

//FUNCION SELF-INVOKING: Se las denomina como ya aclaramos "que se llaman a si mismas" y sirven para ser ejecutada al crer nustro programa a modo de guia o bandera para que nos hasta donde corrio la misma. Ademas, tiene como propiedad que no puede ser llamada nuevamente, solo se ejecuta una sola vez.
    (function(){
        console.log('Ejecutando la funcion');
    })();

//Podemos usarla asi sin variables asignadas, para que solo muestre mensaje por consola, o bien asignarle variables asi.

    (function(a , b){
        console.log('Ejecutando la funcion: '+ (a + b));
    })(3, 4);