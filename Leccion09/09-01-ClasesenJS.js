/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 9.01

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/


/*TEMA:CLASES EN JS

-Conceptos:

1-Una CLASE es una PLANTILLA.
2-Posee un nombre.
3-Posee atributos y metodos.
4-Un OBJETO es una instancia de una CLASE.

EJ: Clase (PERSONA) tiene OBJETOS (PERSONA1) y (PERSONA2).

Y como lo que veia en la facu:

EJ: Clase: Persona/ Atributos: nombre-genero-ocupacion / Metodos: +Obtener nombre() +Obtener genero() +Obtener ocupacion() etc.

ACLARACIONES:
(1*) - this.nombre hace referencia al Atributo y nombre es la variable que le hara llegar al constructor el valor de esa variable.

(2*) -let persona1 hace referncia al objeto y  = new Persona(); es la instancia del objeto o clase, asi se llama y se usa la misma plantilla de la clase para crearla, como vemos "Persona".
*/


class Persona
{
    constructor(nombre, apellido)
    {
        this.nombre = nombre; //Aclaracion super importante (1*)
        this.apellido = apellido;
    }
}

//Objeto 1º de clase Persona (persona1)
let persona1 = new Persona('Juan','Perez'); //Aclaracion super importante (2*)

console.log(persona1);


//Objeto 2º de clase Persona (persona2)
let persona2 = new Persona('Carlos','Lara'); 

console.log(persona2);