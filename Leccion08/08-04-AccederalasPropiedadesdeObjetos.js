/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.04

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: ACCEDER A LAS PROPIEDADES DE LOS OBJETOS EN JS


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

    console.log(persona.nombre);

    //Podemos mostrarlo como hemos visto, imprimiento persona.nombre pero tambien se puede mostrar en forma de arreglo (array). Con la diferencia que en vez de poner la posicion [0],[1] etc ponemos directamente el String del atributo, asi:

    console.log(persona['apellido']);

    //Tambien podemos recorrer cada atributo del objeto persona mediante un "for in":


    //for in

    //Explicacion: Recorre (mediante el for), dentro de (in) persona (el objeto definido) y se guarda cada propiedad en nombrePopiedad.
    //Luego, para imprimir cada valor/nombre alojado en cada propiedad definimos el nombre del objeto y entre [] la variable que aloja cada propiedad.

    for (nombrePropiedad in persona) 
    {
        console.log(nombrePropiedad);
        console.log(persona[nombrePropiedad]);
    }