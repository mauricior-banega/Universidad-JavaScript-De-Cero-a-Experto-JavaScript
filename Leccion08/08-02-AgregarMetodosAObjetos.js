/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.02

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: AGREGAR METODOS A OBJETOS

//Lo que haremos aca es agregar un metodo/funcion (que es lo mismo). Lo hacemos creando el nombre de la funcion, sin expecificar en este ejemplo ningun valor entre () pero dentro de la misma retornar el bombre y apellido, con un espacio, esto lo hacemos mediante this. (1*)

//this. lo utilizamos para "apuntar", osea marcar referencia DENTRO del Objeto, a alguno de sus metodos. Por ej si usaramos this fuera del Objeto no funcionaria.

let persona =
{
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad:28,
    nombreCompleto: function()
    {
        return this.nombre+ ' ' +this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());

//Y para imprimir el resultado del metodo funcion hay que llamar el nombre de la funcion con los ().