/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.06

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: FORMAS DE IMPRIMIR UN OBJETO EN JS

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

//Una pagina web puede mostrar las atributos de los objects pero no necesariamente el contenido/valor de ellos, por eso a continuacion veremos varias formas de mostrar ambas en una web.


    //1º - Concatenar cada valor de cada propiedad

    console.log(persona);
    

    //2º - for in

    for (nombrePropiedad in persona) 
        {
            console.log(persona[nombrePropiedad]);
        }


    //3º - Mediante el arreglo: Object.values, guardando el valor en una variable.

    let personaArray = Object.values(persona);
    console.log(personaArray);


    //4º - Mediante el arreglo: JSON.stringify. El metodoJSON notacion especial (maneja la propiedad y valor de los objetos); y stringify convierte cada valor en un acadena string.

    let personaString = JSON.stringify(persona)
    console.log(personaString);

    