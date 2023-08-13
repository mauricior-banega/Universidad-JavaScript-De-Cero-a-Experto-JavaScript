/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.12

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: PASO DE ARGUMENTOS A "CALL" EN JS

/*De los objetos persona, idem al ejercisio anterior explicamos este tema.

-Agregamos argumentos dentro de la funcion nombreACompleto, que era as:

            nombreCompleto: function(){
            return this.nombre + ' ' + this.apellido;

-Ahora le agregamos estos argumentos, que le haremos llegar al llamar a la funcion desde la consola. Agregamos argumentos de titulo/estudio y telefono.
*/


let persona1 =
{
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo+ ': '+this.nombre + ' ' + this.apellido + ', '+ tel; //Podemos concatenar todos los argumentos que queramos, en este caso los 2 del practico este.

        //Estos valores llevan la referencia this, porque no referencian a un atributo del objeto sino que son argumentos de la funcion unicamente.
    }
}

let persona2 =
{
    nombre: 'Carlos',
    apellido: 'Lara',

}

//Como definimos dos argumentos en la funcion, cuando imprimimos sin estos valores de ('Lic.', '4444555666') aparece undefined Juan Perez undefined. Pero de esta manera hacemos llegar los valores de los argumentos que son los que imprime corectamente.
console.log (persona1.nombreCompleto('Lic.', '4444555666'));


//Para este metodo que utiliza el metodo "call", tenemos que llamar a persona 1 que tiene el metodo de nombreCompleto, dentro del () el nombre del 2º objeto osea persona2, como vimos en el anterior practico. Pero ademas dentro separado por comas le pasamos los valores de los argumentos (titulo y tel), para que no se muestren undefined, y se vean correctamente.

console.log(persona1.nombreCompleto.call(persona2, 'Ing', '444111222'));