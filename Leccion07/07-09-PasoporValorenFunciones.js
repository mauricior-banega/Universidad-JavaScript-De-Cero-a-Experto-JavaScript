/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 7.09

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: PASO POR VALOR EN FUNCIONES JS (En la sgte, Paso por Referencia)

//Paso por Valor: Cuando utilizamos variables que no tienen metodos ni propiedades (valor primitivo)

//A continuacion mostraremos una funcion que interara cambiar el valor de la variable x

//Valor Primitivo 
let x = 10; 


function cambiarValor(a)
{
    a = 20; 
    //return; Lo comentamos, porque? (1*)
}

cambiarValor(x); //10
console.log(x);
console.log(a);
/*Podemos observar que lo que hace la funcion es mediante cambiarValor(x) donde x valor 10m entonces la funcion dice que el valor de x sea el de a pero que luego a valga 20, quedando:

             a = 20 y x = 10 (aun); es decir que el unico que cambia es a y no x. Esto es lo que llamamos "Paso por Valor".
Ademas la variable "a" al finalizar la funcion se destruye ya que este definida solo dentro de ella. Y si la llamamos fuera del metodo para imprimirla nos dice que a no esta definida.

            console.log(a); a is not defined
*/