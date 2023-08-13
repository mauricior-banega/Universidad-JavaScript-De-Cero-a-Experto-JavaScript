/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 17-01

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Funciones Flecha (Arrows) en JS


- ACLARACIONES:

(i) Recordamos: 
-Que una FUNCION puede ser llamada desde cualquier parte del archivo (Hoisting).
-


*/


/* EJ FUNCION Nº 1 - Esta funcion muestra el mensaje en consola y es el formato tipo de funcion. Lo comentaremos para ejemplificar como queda cuando se define a una variable. La comentamos

function miFuncion()
{
    console.log('Saludos desde mi funcion');
}

miFuncion();

*/

/* EJ FUNCION Nº 2 - Es la misma funcion, pero donde ya esta asignada a una variable. Ahora la comentamos para ejemplificar el 3º donde la transformamos a funcion flecha ya que es mas facil crearla porque la misma esta contenida como dijimos en una variable.

*/

let miFuncion = function miFuncion() //Variable que contendra la funcion
{
    console.log('Saludos desde mi funcion');
}

//Esta es la expresion de funcion flecha. Observamos que a diferencia de la de arriba, no es necesario especificar la palabra "function" ni un nombre propio (puede ser anonimo) como en el ej, seguido de = y > (=>) y dentro de los {} la declaracion.

let miFuncionFlecha = () => 
{
    console.log('Saludos desde mi funcion flecha');
}

//ACLARACION IMPORTANTE: Las en funciones flecha no se aplica el principio de Hoisting, por ello es que si lo llamamos antes de ser definido nos indicara error (Cannot access 'miFuncionFecha' before initialization). Esto, se da porque asignamos a esta funcion flecha a una variable, y esta no puede ser ejecutada antes de ser creada ya que es un objeto.

//Ademas la funcion flecha esta definida con let pero lo mas comun en una funcion es que tengamos valores que no deban ser modificados, asique sera mas comun verla definida con const; osea conts miFuncionFlecha = () => ...

miFuncion();
miFuncionFlecha();