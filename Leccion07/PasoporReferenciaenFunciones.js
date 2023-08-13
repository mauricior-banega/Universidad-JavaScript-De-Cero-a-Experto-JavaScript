/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 7.10

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: PASO POR REFERENCIA EN FUNCIONES JS 

//Paso por Referencia: Cuando a un objeto podemos cambiarle los atributos o metodos. A diferencia del paso por valor que vimos antes. 

// Creamos el objeto persona, al cual le asignamos atributos (nombre/apellido).
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1)
{
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

//Paso por Referencia
cambiarValorObjeto(persona);
console.log(persona);