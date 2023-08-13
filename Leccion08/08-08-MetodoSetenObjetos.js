/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.08

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: METODO  " SET "  EN OBJETOS EN JS

//Mostramos el ej de la funcion de tipo persona, con el GET incluido. Veremos como funciona el SET

//SET sirve para modificar los valores de los atributos de nuestro objeto.
let persona =
{
    nombre:'Juan',
    apellido:'Perez',
    email:'jperez@gmail.com',
    edad:28,
    idioma:'es', //Pero por convencion es en mayusculas entonces mediante get/set cambiaremos ese dato recibido a Mayusculas. Creamos un get llamada "lang".

    get lang()
    {
        return this.idioma.toUpperCase(); //toUpperCase convierte una cadena en Mayus.
    },

    set lang( lang )
    {
        this.idioma = lang.toUpperCase();//toUpperCase convierte una cadena en Mayus.
    },

    get nombreCompleto()
    {
        return this.nombre+ ' ' +this.apellido;
    }
}
    console.log(persona.lang); 

    persona.lang = 'en'; //Se envia 'en' a lang del "set lang (lang)" contenido entre (). Por ello es que convierte ese valor en Mayus y lo guarda en atributo idioma reemplazando 'es'. 

    console.log(persona.lang); //Muestra el texto en Mayus pero no si se guardo en idioma en Mayus, por ello hacemos la impresion de persona.idioma debajo.
    console.log(persona.idioma);
