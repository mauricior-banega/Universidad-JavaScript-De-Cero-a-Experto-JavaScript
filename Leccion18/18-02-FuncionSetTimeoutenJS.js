/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 18-02

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Funciones Set Time Out en JS.
-

- ACLARACIONES: 

-Este tipo de funciones setTimeout tambien es un tipo de funcion asincona, del cual explicaremos su funcionamiento, que es somilar al del callback que vimos en la anterior clase.

(i) Recordamos: 

*/

//Llamadas asincronas con uso setTimeout (esta funcion lo que hace es ejecutar una orden luego de cierto tiempo). Por esto es que llamaremos a una funcion callback con el uso de setTimeout.

//Los tiempos en setTimeout son en escala de milisegundos, por ello si ponemos ej: 3000 ms, seran 3s (segundos).

function miFuncionCallback()
{
    console.log('Saludo asincrono despues de 3 segundos');
}

//Definimos como primera referencia la funcion (miFuncionCallback), sin () ya que es un objeto tambien. Y posteriormente cuantos milisegundos se va a ejecutar el llamado. por esto es que decimos que es asincrona, ya que puede el codigo haber ejecutado ya todos los procesos definidos pero si hay una funcion setTimeout esta se va a ejecutar en paralelo con otras o luego de haber terminado el programa de haber ejecutado todas las instrucciones si es necesario, en definitiva se ejecutara cuando transcurra el tiempo que se definio.

    setTimeout (miFuncionCallback , 3000); //despues de 3 segundos

//Tambien podemos firectamente definir una funcion (en este ejemplo es otra funcion nueva), dentro ya de la definicion del setTimeout, quedando asi. Osea pasarle directamente la funcion como paramentro.

    setTimeout( function(){console.log('Saludo asincrono 2')}, 4000); //funcion anonima+instruccion+tiempo.

//Describiremos una forma aun mas resumida de como definir tambien una funcion, haciendola para una f() del tipo flecha.

    setTimeout(() => console.log('Saludo asincrono 3 desde funcion flecha'), 1000); //funcion expresada solo con ()+ => + instruccion (que si es de una sola linea de codigo) no es necesario los parentesis + el tiempo.








