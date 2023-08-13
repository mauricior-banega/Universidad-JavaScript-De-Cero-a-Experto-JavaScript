/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 7.08

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
ASPECTOS IMPORTANTES DE VISUAL STUDIO CODE:


-----------------------------------------------------------------------------------------
*/


//TEMA: SUMAR TODOS LOS ARGUMENTOS

//Realizaremos una funcion que llamaremos antes de ser declarada, (Hoisting) por el que no usaremos el ejemplo de "funcion flecha" por ese motivo. En ella recorreremos todo el array sumarTodo sumando mediante un for cada valor, que se alojara en suma a medica que lo recorra. El retirno sera guardado en resultado y se mostrara por consola.

let resultado = sumarTodo (5, 4, 13, 10, 9);

console.log(resultado);

function sumarTodo()
{
    let suma = 0;
    for (let i=0; i<arguments.length; i++)
    {
        suma += arguments[i]; //Seria:  suma = suma + arguments[i]
    }
    return suma;
}
