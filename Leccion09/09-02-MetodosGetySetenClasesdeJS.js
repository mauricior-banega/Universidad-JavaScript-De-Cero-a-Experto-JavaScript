/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 9.02

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: METODOS GET Y SET EN CLASES DE JS

-Conceptos:

GET - Para obtener el valor del atributo.
SET - Para modificar el valor del atributo.

-Se utiliza usar en clases donde usemos get/set que los mismos empiezen con "_" ya que de esa manera podremos llamarlos sin problemas desde get/set ya que no pueden tener el mismo valor que el atributo de la clase, entonces queda asi que pasa de sera asi: this.nombre = nombre; a this._nombre = nombre;

ACLARACIONES:
(1*)
*/


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

