/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 10.04

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: EJEMPLO USANDO LA PALABRA STATIC EN JS

-Conceptos:

ACLARACIONES: Explicaremos este concepto en base a las clases de padre/hijo de la leccion anterior.
- 
(1*) 

*/

class Persona 

{
    static contadorPersonas = 0; //Atributo de la clase: Como empieza con static este pertenece a la clase

    constructor(nombre, apellido) 
    {
        this._nombre = nombre; 
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas; //En vez de poner ++ al ultimo (Persona.contadorPersonas++) lo podremos al comienzo, para que primero sume y luego se asigne el valor, es decir mueste 1 en vez de 0 debajo, en la impresion. Y this.idPersona aclaro, si es un atributo del objeto del que un objeto static osea atributo de la clase, HACE llegar el valor a el. De esta forma los objetos si pueden trabajar con el valor que es lo que necesitamos para mostrar el nº de id incremental +nombre/apellido.
       
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
         return this.idPersona +' '+this._nombre +' '+this.apellido;
     }

     toString()
     {
        return this.nombreCompleto(); 
     }

     static saludar() 
     {
         console.log('Saludos desde metodo static');
     }

     static saludar2(persona) 
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

//1º Elemento del contador +1
let persona1 = new Persona('Juan','Perez'); 
console.log(persona1.toString());

//1º Elemento del contador +1=2
let empleado1 = new Empleado ('Maria','Jimenez', 'Sistemas');
console.log(empleado1.toString());

//Muestra el total creado de objetos creados de la clase
console.log(Persona.contadorPersonas);

//Creamos un objeto nuevo "persona2", y vemos como tambien suma +1=3 el id. Y el contador imprime ahora el id total de 3. Esto funciona tanto si creamos objetos nuevos de la clase padre como hija.
let persona2 = new Persona('Carla','Ramirez'); 
console.log(persona2.toString());
console.log(Persona.contadorPersonas);