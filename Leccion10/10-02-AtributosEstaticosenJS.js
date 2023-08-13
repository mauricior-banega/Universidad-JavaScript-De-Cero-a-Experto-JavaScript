/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 10.02

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: ATRIBUTOS ESTATICOS EN JS

-Conceptos:

ACLARACIONES: Explicaremos este concepto en base a las clases de padre/hijo de la leccion anterior.
- 
(1*) 

*/

class Persona 

{
    static contadorObjetosPersona = 0; //Variable o atributo de la clase Persona (no es un atrubuto del objeto)

    //Crearemos para este practico que este nuevo atributo sea un contador de objetos. aumente segun la cantidad de objetos que existan.

    //OJO: Para crearlo hay que apuntar la clase y no apuntar aun objeto, por ello que no hay que hacer this.contadorObjetosPersona++; sino como definiremos.

    constructor(nombre, apellido) 
    {
        this._nombre = nombre; 
        this._apellido = apellido;
        Persona.contadorObjetosPersona++; //Contador, que suma en 1 cada vez que se ejecuta el constructor.
        console.log('Se incrementa contador: '+Persona.contadorObjetosPersona);
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



Persona.saludar(); 
Empleado.saludar(); 
Persona.saludar2(persona1); 
Empleado.saludar2(empleado1);



//Al igual que los metodos estaticos, los atributos estaticos no pueden ser llamados mediante un objeti, sino que hay que llamarlos por medio de la clase. Comentamos

//console.log(persona1.contadorObjetosPersona);

//De esta manera:

console.log(Persona.contadorObjetosPersona);

//Si queremos acceder desde la clase hija? Tambien se puede

console.log(Empleado.contadorObjetosPersona);