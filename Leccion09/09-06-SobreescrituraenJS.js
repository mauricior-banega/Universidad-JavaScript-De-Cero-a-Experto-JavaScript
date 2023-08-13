/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 9.06

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA:SOBRE-ESCRITURA EN JS

-Conceptos: Sobre-escritura; seria basicamente modificar el comportamiento de algun metodo desde la clase hija a la clase padre.

ACLARACIONES: Siguiendo con el ejemplo aplicado de clase padre e hija (Persona/Empleado) mostraremos como poder acceder a los datos de la clase hija Empleado (departamento) desde la clase padre (Persona) ya que sino aplicamos el concepto de "Sobre-escritura" Persona no conoceria el valor de departamento.
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

    //Sobre-escritura: Se crea un metodo igual al de la clase padre (nombreCompleto()), mismo nombre y parametros. De esta manera se "reemplazara" el metodo.
    nombreCompleto()
    {
        // return this._nombre +' '+this.apellido+' '+this.departamento; 
        
        //Pero pero, vemos que basicamente es el mismo codigo de la clase padre con el agregado departamento. Ahora, como hacer para no tener que hacer esta copia redundante? De esta manera. (Comento linea superior)

         return super.nombreCompleto()+', '+this.departamento; //Le agregamos el metodo super + el nombre del metodo que contiene ya el nombre/apellido.
    }
}

//-----------------------------------------------------------------------

let persona1 = new Persona('Juan','Perez'); 
console.log(persona1);


let empleado1 = new Empleado ('Maria','Jimenez', 'Sistemas');
console.log(empleado1);

console.log(empleado1.nombre);


//Aca demostramos como la clase hija hereda el metodo nombreCompleto. No solo muestra el nombre/apellido y el departamento.
//Tambien, vemos que el resultado es correcto tras utilizar el codigo super.nombreCompleto() en return del metodo hijo.
console.log(empleado1.nombreCompleto());
