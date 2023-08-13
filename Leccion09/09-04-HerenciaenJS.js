/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 9.04

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: HERENCIA EN JS

-Conceptos: Herencia es el concepto de que una clase Persona (principal o padre), tenga otra clase/s ej:Empleado (clase hija). Como veremos en ej ojemplo. Tambien agregamos una imagen que estara en la carpera para abrir.-

-Esta imagen se la denomina Diagrama UML (Unified Modeling Language), se esto usamos mucho en la facu.

-Ejemplifica desde la clase Persona, de la leccion anterior de get/set.

ACLARACIONES:
- 
(1*) 

*/

class Persona //CLASE PADRE
{
    constructor(nombre, apellido) 
    {
        this._nombre = nombre; 
        this._apellido = apellido;
    }

    get nombre() //MOSTRARA VALOR
    {
        return this._nombre;
    }

    set nombre(nombre) //MODIFICA VALOR
    {
        this._nombre = nombre;
    }

    get apellido() 
    {
        return this._apellido;
    }

    set apellido(apellido) 
    {
        this._apellido = apellido;
    }
}


class Empleado extends Persona //Se crea, nombre de clase hija + extends (palabra reservada) + clase padre.
{
    constructor(nombre, apellido, departamento) //El constructor debe tener no solo el atributo de su clase sino tambien los de la clase padre.
    {   
        super(nombre, apellido); //Super lleva los atributos de la clase padre, asi se "llama".
        this._departamento = departamento; 
    }

    get departamento() 
    {
        return this._departamento;
    }

    set departamento (departamento) 
    {
        this._departamento = departamento;
    }

}


let persona1 = new Persona('Juan','Perez'); 
console.log(persona1);

//let empleado1 = new Empleado (); Si intentamos crear este objeto esta incompleto (da error); ya que tiene que tener algunas cosas mas. Como la palabra "super" debajo de la primera linea del constructor de la clase hija; super(); y dentro los paramentros definidos en la clase padre (nombre/apellido), entre algunas cosas mas que se explican arriba. Una vez hecho todo la linea comentada no da error, pero sin embargo hay que cargarle los valores a los paramentros de la clase hija, los 3.

let empleado1 = new Empleado ('Maria','Jimenez', 'Sistemas');
console.log(empleado1);

//Aca, mostramos que SI podemos llamar al get de la clase Persona sin ningun problema ya que Empleado es la clase hija y hereda del clase Persona (padre) ese metodo.
console.log(empleado1.nombre);