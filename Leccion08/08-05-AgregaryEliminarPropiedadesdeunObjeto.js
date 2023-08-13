/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.05

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: AGREGAR Y ELIMINAR PROPIEDADES DE UN OBJETO EN JS

//Mostramos el ej de la funcion de tipo persona

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

    //Asi de simple, podemos AGREGAR un atributo (tel) a nuestro objeto persona.Imprimimos para verlo.

    persona.tel = '3515555555';
    console.log(persona);

    //Y asi para eliminar un atributo (tel).Imprimimos para verlo. Se borra atributo y el valor sociado a el.

    delete persona.apellido;
    console.log(persona);

    