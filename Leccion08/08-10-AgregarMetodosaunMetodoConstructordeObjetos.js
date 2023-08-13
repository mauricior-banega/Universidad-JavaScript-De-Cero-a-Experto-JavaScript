/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.10

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: AGREGAR METODO A UN METODO CONSTRUCTOR EN OBJETOS EN JS

//D e la f() constructor anterior ejemplificamos esta. Aqui veremos que agregamos un metodo/funcion para mostrar el "nombre completo" de un objeto, en el mismo metodo que tiene el objeto, asi:

function Persona(nombre, apellido, email)
{   
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function() //Metodo o F() que concatena los atributos para ser utilizado como atributo que se mostrara luego por consola.
    {
        return this.nombre +' '+this.apellido; 
    }
}


let padre = new Persona('Juan', 'Perez', 'jperez@mail.com'); 

console.log(padre.nombreCompleto());

//-------------

let madre = new Persona('Laura', 'Quintero', 'jquintero@mail.com');

console.log(madre.nombreCompleto());

//Tanto padre como madre pueden usar este mismo metodo.

