/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.07

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: METODO  " GET "  EN OBJETOS EN JS

//GET: Significa "Obtener" y por lo tanto nos permite obtener los valores de nuestras propiedades, en este caso una fucion.

//Mostramos el ej de la funcion de tipo persona

let persona =
{
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad:28,
   //* nombreCompleto: function()
    get nombreCompleto()
    {
        return this.nombre+ ' ' +this.apellido;
    }
}

   //* console.log(persona.nombreCompleto());

    //Mostramos y comentamos indicando con * lo quitado. Explicamos asi como se imprimia el valor de una funcion antes. Pero se puede usar otro metodo simplificado y mas practico para imprimir una funcion.

    console.log(persona.nombreCompleto);

    //De esta manera observamos que se agrega "get" en la declaracion del atributo de la funcion nombreCompleto, le quitamos ": funtion()" y para imprimir pasamos el nombre del objeto, punto el nombre de la funcion sin ().

