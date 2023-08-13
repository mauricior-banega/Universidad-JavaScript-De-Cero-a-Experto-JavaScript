/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 7.06

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
ASPECTOS IMPORTANTES DE VISUAL STUDIO CODE:


-----------------------------------------------------------------------------------------
*/


//TEMA: FUNCIONES "FLECHA"

/*
    Este tipo de funciones es "similar" a las del tipo Expresion y es por ello que la dejamos aca para muestra comentada.

    
    let x = function(a , b) { return a + b};

    let resultado = x (1 , 2); 

    console.log(resultado);

*/  

    const sumarFuncionTipoFlecha = (a, b) => a + b; 
    
    //Funcion "Flecha": Vemos que tambien se le asigna una variable, y que iguala a la expresion de la funcion SIN la palabra "function". Ademas se le agrega el simbolo (=>) y despues va sin los () el contenido de la funcion sin la palabara return tampoco. (Es como mas simplificada, esta buena). Luego hacemos el llamado de la funcion como siempre y mostramos por consola.

    resultado = sumarFuncionTipoFlecha(3,5);

    console.log(resultado);