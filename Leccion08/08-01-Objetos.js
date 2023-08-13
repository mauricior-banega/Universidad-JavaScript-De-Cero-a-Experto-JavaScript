/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.0

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: OBJETOS EN JS

//A el se pueden asociar propiedades y metodos. En el 1º ejemplo vemos que como es del tipo primitivo, no tienen propiedades ni petodos en cambio en el 2º si.

let x =10;
console.log(x.length);

let persona =
{
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad:28
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);

console.log(persona);
