/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 9.03

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: HOISTING Y CLASES EN JS

-Conceptos: Hoisting, recordamos que es la propiedad para crear objetos/atributos en cualquier lado (al comiezo o al final) sin importar donde este una funcion. Ahora esto no ocurre en una clase, osea no se puede llamar o instanciar a una clase si aun no esta definida.



ACLARACIONES:
- Ejemplifica desde la clase Persona, de la leccion anterior de get/set. No es importante notas eso aca, pero si ver el tema del Hoisting.
(1*) 

*/


// let personaX = new Persona('Xiomara','Xuxa'); esto daria Persona is not denided; osea que llamarlo antes de definir la clase no esta permitido.


class Persona //Las clases tienen Metodos
{
    constructor(nombre, apellido) //Metodo/funcion constructor
    {
        this._nombre = nombre; //Atributos del metodo constructor.
        this._apellido = apellido;
    }

    get nombre() //Metodo/funcion GET, sin embargo desde console no se llama al get con (), ya que JS sabe que esta haciendo referencia indirectamente a get.
    {
        return this._nombre;
    }

    set nombre(nombre) //Metodo/funcion SET, y se define directamente la variable en la sgte linea con el nombre cambiado de Juan Perez a Juan Carlos.
    {
        this._nombre = nombre;
    }
}


let persona1 = new Persona('Juan','Perez'); //Llama indirectamente a get (1º nombre).
console.log(persona1.nombre);

persona1.nombre = 'Juan Carlos'; //Llama indirectamente a set (2º nombre, cambiado).
console.log(persona1.nombre);