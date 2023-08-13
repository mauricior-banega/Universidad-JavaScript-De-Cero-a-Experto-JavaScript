/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 14-01 

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: MODO STRICT (ESTRICTO) EN JS

- Para evitar malas practicas es que existe la cadena "use strict", esta sirve para marcarnos malas practicas, como lo es no definir que tipo de dato es una variable definida, si bien no nos arroja error el no ponerla, en proyectos grandes el no especificarlo pùede crear problemas. Para esto sirve use strict, que si la definimos al comienzo del archivo o dentro de una clase, este aplica una restriccion marcando esas incosistencias y no funcionaran hasta que sean corregidas.

- ACLARACION: Esta Leccion 14-01 en los videos de Udemy esta sola (al pedo), desde aca saltamos a la Leccion 15.

(1*) 

*/


"use strict" 

let x = 10;
console.log(x);

miFunction();

function miFuncion()
{   "use strict" 
    y = 15;
    console.log(y); //No muestra nada porque y no esta difinida.
}