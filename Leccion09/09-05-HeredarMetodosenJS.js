/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 9.05

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: HEREDAR METODOS EN JS

-Conceptos: 

ACLARACIONES: Se tomara del ejercicio anterior las mismas clases.
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

    nombreCompleto() //Metodo que se va a Heredar a la clase Empleado (clase hija). Que mostraremos despues cargando atrubutos y mostrando por consola
     {
         return this._nombre +' '+this.apellido;
     }
}




class Empleado extends Persona 
{
    constructor(nombre, apellido, departamento) 
    {   
        super(nombre, apellido); 
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


let empleado1 = new Empleado ('Maria','Jimenez', 'Sistemas');
console.log(empleado1);

console.log(empleado1.nombre);


//Aca demostramos como la clase hija hereda el metodo nombreCompleto.-
console.log(empleado1.nombreCompleto());