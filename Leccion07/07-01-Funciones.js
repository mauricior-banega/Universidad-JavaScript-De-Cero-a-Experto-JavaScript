/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 7.01

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
ASPECTOS IMPORTANTES DE VISUAL STUDIO CODE:
-AYUDA DE VSC (Apretando CTL+BARRA EPSACIADORA)

-----------------------------------------------------------------------------------------
*/


//TEMA: FUNCIONES


miFuncion(4,2);//Llamado a la funcion 1º

//Declaracion de la funcion
function miFuncion(a,b)
{
    console.log("Suma: "+(a+b));
}   

//Llamado a la funcion 2º
miFuncion(2,3);

//(*) Este llamado a la funcion podemos realizarlo en cualquier parte del programa, esto se lo denomina "Hoisting". Lo que eso hace es mover la funcion al principio del programa para que pueda ser llamado luego desde cualquier llamadao a ejecucion.

//Ahora si realizamos otro llamado de funcion al comenzo, deberemos de: Ir a Ver/Salida y ahi nos mostrara "ambos" resultados de cada llamado que realizamos, del llamado 1º y 2º.

//Imprime el llamado 1º primero y luego el 2º ya que recorre de arriba a abajo para ejecutar la codificacion.