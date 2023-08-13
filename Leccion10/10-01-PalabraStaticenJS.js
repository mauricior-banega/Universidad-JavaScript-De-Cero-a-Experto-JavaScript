/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 10.01

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: PALABRA STATIC EN JS

-Conceptos:

ACLARACIONES: Explicaremos este concepto en base a las clases de padre/hijo de la leccion anterior.
- 
(1*) 

*/

class Persona 


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

     toString()
     {
        return this.nombreCompleto(); 
     }

     static saludar() //Creamos este metodo static o estatico, que imprimira un mensaje en consola. Este metodo es del tipo clases a diferencia del toString que es del tipo objeto. La propiedad que tiene es que puede ser llamado desde la clase y ejecutado dentro de la clase, pero no asi desde un objeto. Veremos mas adelante.
     {
         console.log('Saludos desde metodo static');
     }

     static saludar2(persona) //Creamos otro metodo static, al cual le haremos llegar un OBJETO mas abajo (Persona.saludar2(persona1)), osea el nombre. Para ver como funciona, despues le mete apellido tambien para mostrar/tomar de persona1.
     {
         console.log(persona.nombre+' '+persona.apellido);
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

console.log(persona1.toString());




let empleado1 = new Empleado ('Maria','Jimenez', 'Sistemas');
console.log(empleado1);

console.log(empleado1.nombre);

console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());



//Veremos que no funciona si llamamos desde un obj al metodo de la clase "static", ejemplificamos

//persona1.saludar(); persona1.saludar is not a function .

//Por eso, si funcionara si lo llamamos desde la clase, tanto padre como tambien la hija y andara.

Persona.saludar(); //No se imprime en consola ya que los metodos static no los muestra, pero si podemos verlo en SALIDA de VSC, ejecutando Quokka. En la ultima linea se ve "saludos desde metodo static".

Empleado.saludar(); //Tambien funciona si llamamos al metodo static desde una clase hija.

Persona.saludar2(persona1); //Asi se puede enviar el valor de persona1. Asi se envia un Objeto hacia un metodo static desde la clase padre.

Empleado.saludar2(empleado1);//Enviamos un objeto de la clase hija y tambien funciona porque hereda. Lo vemos desde SALIDA en VSC.

