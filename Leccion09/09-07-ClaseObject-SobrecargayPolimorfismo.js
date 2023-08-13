/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 9.07

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA:CLASE OBJECT, SOBRECARGA Y POLIMORFISMO EN JS

-Conceptos:

ACLARACIONES: Todo explicado dentro del codigo.
- 
(1*) 

*/

class Persona //En JS podemos crear una clase de esta forma y esta bien, pero la definicion tacitade este es "extends Object" (class Persona extends Object ). Esio significa que Object es la clase padre de todas las clases que se pueden crear en JS. 

//La clase Object, posee metodos, como "prototype" seria Object.prototype.(etc), ahi se desprenden como nos mostrara VSC todos los metodos contenidos en el, por ej: "toString", del cual usaremos mucho para conocer los valores alojados en una variable o atributo.
{
    constructor(nombre, apellido) 
    {
        this._nombre = nombre; 
        this._apellido = apellido;
    }

    get nombre() 
    {
        return this._nombre;
    }

    set nombre(nombre) 
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

    nombreCompleto() 
     {
         return this._nombre +' '+this.apellido;
     }

     toString() //"Sobre-escribimos el metodo toString de la clase padre Object". Esto es para que este metodo pueda devolverlos el contenido del metodo nombreCompleto(). Y no nos muestre en la consola el, cuando llamamos a toString: objetc Object (porque no conoce cual metodo hacer referencia).
     {
        return this.nombreCompleto(); //Se aplica polimorfismo; se aprovecha a llamar el mismo metodo que existe en clase padre como hija. Esto significa en definitiva: Multiples formas en tiempo de ejecucion, el metodo que se ejecuta depende si es una referencia del tipo padre o tipo hijo.
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

    
    nombreCompleto()
    {

         return super.nombreCompleto()+', '+this.departamento; 
    }
}

//-----------------------------------------------------------------------

let persona1 = new Persona('Juan','Perez'); 
console.log(persona1);

//Como vemos, aca toString hace referencia a nombreCompleto() de la clase padre. Porque usa (persona1).
console.log(persona1.toString());






let empleado1 = new Empleado ('Maria','Jimenez', 'Sistemas');
console.log(empleado1);

console.log(empleado1.nombre);


console.log(empleado1.nombreCompleto());

console.log(empleado1.toString()); //Vemos que funciona correctamente al crear la sobre-escritura de toString (decimos que esta sobreescrito porque ya esta definido por defecto en una clase toString, pero lo re-definimos para hacer referencia a que metodo es que tiene que extraer su cadena/valor, que es nombreCompleto()).

//POLIMORFISMO: Decimos que lo es explicando lo siguiente; toString hace referencia a nombreCompleto() pero es un metodo heredado y que ambas clases poseen (padre/hijo), por ende la pregunta es, de cual de los dos USA para extraer su valor e imprimir?. Bien, lo hace desde desde la clase hija empleado, porque DEPENDE SIEMPRE cual es la variable/atributo que lo llama y a que clase pertenece, en este caso lo hace "empleado1" por ende el metodo nombreCompleto que mostrara, sera de esa clase (hija).