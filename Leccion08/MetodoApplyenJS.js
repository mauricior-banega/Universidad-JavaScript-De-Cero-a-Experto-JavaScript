/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.15

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: METODO APPLY EN JS

/*
*/


let persona1 =
{
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo,tel){

        
       return titulo+ ': '+this.nombre + ' ' + this.apellido + ', '+ tel; 

       
    }
}

let persona2 =
{
    nombre: 'Carlos',
    apellido: 'Lara',

}


console.log (persona1.nombreCompleto('Lic.', '4444555666'));

/*Uso de "apply" para usar el metodo de persona1.nombreCompleto con los datos de persona2
//Pero para agregarle parametros hay que usar un arreglo/array, a diferencia del metodo call que se agregaban de forma concatenada separado por comas.
De esta manera es mas facil de usar ya que no es necesario que en la impresion tengamos que agregar los paramentros uno a uno alli, sino que aca directamente en el array los declaramos y lo llamamos directamente. Vale tambien poner directamente con "apply" poner corchetes y dentro el valor osea, (persona2, ['Ing', '8888899999']);
*/ 


let arreglo = ['Ing', '8888899999'];
console.log (persona1.nombreCompleto.apply(persona2, arreglo));

