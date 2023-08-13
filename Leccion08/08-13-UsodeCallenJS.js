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


//TEMA: USO DE CALL EN JS

//Metodo CALL : Se usa para llamar un metodo que pertenece a un objeto para ser usado tambien en otro metodo, es decir "utilizarse tambien", sin necesidad de estarlo creando en otro objeto tambien de forma repetida. Esto seria asi:

//Creamos 2 objetos similares, donde auno le falta un metodo que tiene el otro.

    let persona1 =
    {
        nombre: 'Juan',
        apellido: 'Perez',
        nombreCompleto: function(){
            return this.nombre + ' ' + this.apellido;
        }
    }

    let persona2 =
    {
        nombre: 'Carlos',
        apellido: 'Lara',
    
    }

    //Mostramos a modo de ej para ver que si llamamos asi, muestra el valor del metodo atributo de persona 1.
    console.log (persona1.nombreCompleto());
   
    //Ahora usaremos "call" para ver como de manera similar pero no igual podemos acregar ese metodo tambien para persona2. Imprimimos para ver el efecto.

    persona1.nombreCompleto.call(persona2);

    //Lo imprimimos para ver el efecto.

    console.log(persona1.nombreCompleto.call(persona2));

    