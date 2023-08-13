/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 10.05

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: CREACION DE CONSTANTES ESTATICAS EN JS.

-Conceptos: Explicamos como crear una variable de la clase Persona, que sea estatica y que no se pueda modificar. No podemos usar const "propiedad de variable de tipo objeto" que mantiene sin poderse modificar su valor, ya que como dijimos sirve solo para objetos.

-Bien esto se crea mediante la cracion de una variable estatica + get + cualquier nombre definido y dentro que retorne el valor establecido. En este caso se le asigna 5 que sera el valor maximo que podra tomar, sin poderse modificar manualmente de forma directa pero si cambiara a medida que creemos objetos padrs o hijos, hasta ese valor max de 5. Mostrara un mje de error por consola cuando lo supere.

-PARA QUE SIRVE AL FINAL EL METODO ESTE EJ: MAX_OBJ? Bien, sirve para crear una variable estatica cuyo valor no se pueda modificar, osea que se comporte como una variable constante.

ACLARACIONES: Explicaremos este concepto en base a las clases de padre/hijo de la leccion anterior.
- 
(1*) 

*/

class Persona 

{
    static contadorPersonas = 0; //Atributo de la clase: Como empieza con static este pertenece a la clase

    static get MAX_OBJ() //Metodo creado que solo va a devolver el valor de 5. Que sera usado para luego comparar el max de id que se puedan crear, desde el id que esta en modo contador.
    {
        return 5;
    }

    constructor(nombre, apellido) 
    {
        this._nombre = nombre; 
        this._apellido = apellido;
        
        if(Persona.contadorPersonas < Persona.MAX_OBJ) //Lo que haremos aca es poder crear objetos, donde el id se incremente HASTA maximo el valor de 5; sino que de error.
        {
            this.idPersona = ++Persona.contadorPersonas; 
        }
        else
        {
            console.log('Se han superador el maximo de objetos permitidos');
        }
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

let persona1 = new Persona('Juan','Perez'); 
console.log(persona1.toString());

let empleado1 = new Empleado ('Maria','Jimenez', 'Sistemas');
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona('Carla','Ramirez'); 
console.log(persona2.toString());
console.log(Persona.contadorPersonas);



//Ahora explicamos lo de esta leccion, imprimimos el valor de MAX_OBJ.Nos mostrara que es 5, ya que es el valor definido arriba, en la clase Persona.

console.log(Persona.MAX_OBJ);

//Que sucede si lo queremos cambiar al valor? De 5 que sea 10 accediendo desde la clase, se cambia?. No, ya que no definimos un metodo set, sino get (que devuelve, no que modifica), como veremos mas abajo.
Persona.MAX_OBJ = 10; //No da error; pero veremos que el valor no cambia porque es un metodo del tipo statico si, pero get (no set).

//Sigue siendo 5
console.log(Persona.MAX_OBJ);


//Ej de crear mas de 5 objetos
let persona3 = new Persona('Mariano','Stumpf'); 
let persona4 = new Persona('Carlos','Banega'); 
//Veremos que desde consola arroja el error "Se han superador el maximo de objetos permitidos "
let persona5 = new Persona('Lorena','Quiteros'); 
console.log(persona5.toString());

//Vemos tambien que el valor del metodo que devuelve el id/nombre/apellido ya no cargo un nuevo id para esta persona5, ya que super el valor al sera el objeto nº 6.


