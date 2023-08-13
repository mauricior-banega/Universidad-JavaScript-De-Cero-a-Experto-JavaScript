/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.11

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: DISTINTAS FORMAS DE CREAR OBJETOS EN JS

//Un Objeto,se puede acrear con la palabara reservada new + tipo de Objeto pero tambien podemos usar las formas simplificadas para crearlos como mostraremos, con distintos tipos de objetos:

let miObjeto = new Object(); 
let miObjeto2 = {};

let miCadena = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean = false;

let miArreglo = new Array();
let miArreglo2 =[];

let miFuncion = new Function();
let miFuncion2 = function(){};