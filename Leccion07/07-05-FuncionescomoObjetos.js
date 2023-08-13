/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 7.05

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
ASPECTOS IMPORTANTES DE VISUAL STUDIO CODE:
-AYUDA DE VSC (Apretando CTL+BARRA ESPACIADORA)

-----------------------------------------------------------------------------------------
*/


//TEMA: FUNCIONES COMO OBJETOS

//Las funciones son en si mismo tambien objetos y como tal pueden tener Propiedades y Métodos. 

//De una de las funciones podremos ver mediante el mensaje por consola, cuantos argumentos tiene determinada funcion, esa pregunta se hace dentro de la funcion unicamente y no fuera-


function miFuncion(a,b)
{
     //Propiedad de la que disponemos en JS para que nos muestre cuantos argumentos tiene. Ej: 2
    console.log(arguments.length);
    return a + b; 
}   

    let resultado = miFuncion(2,3); 

    console.log(resultado);


//Tambien podemos asignar en una variable, la funcion pero en texto mediante un Método,"toString". De esta manera comprobamos que una funcion es ciertamente un objeto.

    var miFuncionTexto = miFuncion.toString();
    console.log(miFuncionTexto);