/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.03

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: CREACION DE OBJETOS EN JS

//Tambien podemos crear un Objeto de la soguiente manera, en vez de encerrar los atributos dentro de corchetes creamos un objeto de la siguiente manera let persona2 = new Object(); y luego definimos directamente el nombre del objeto, punto y seguido, el o los atrubutos que tiene.

let persona2 = new Object();
 
persona2.nombre = 'Carlos';
persona2.direccion = 'Rodriguez Peña 15';
persona2.telefono = '3515555555'

console.log(persona2.nombre);

//Es otra forma de poder expresar a un objeto, es una muestra para conocer como tambien se pueden expresar los Objetos en JS.