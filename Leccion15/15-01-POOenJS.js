/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 15-01

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Programacion Orientada a Objetos (POO) en JS 

- ACLARACION: Veremos SOBRE-ESCRITURA 

Fotos aclarativas de la leccion dentro de esta carpeta (polimorfismo/sobreescritura.png)

*/

class Empleado //Clase Padre
{
    constructor(nombre,sueldo)
    {
        this.nombre = nombre; //No le ponemos _ ya que tampoco usaremos get/set en el ejemplo de esta clase.
        this.sueldo = sueldo;
    }

    obtenerDetalles() 
    {
        return `Empleado: nombre: ${this.nombre}, sueldo  ${this.sueldo}`
    }

}


class Gerente extends Empleado //Clase Hija: Agregar super + atributos de clase padre tambien
{
    constructor(nombre, sueldo, departamento)
    {   super(nombre,sueldo);
        this.departamento = departamento; //atributo solamente de la clase hija
    }

    //Agregamos la misma clase que en clase Empleado, le cambiamos el contenido.
    obtenerDetalles() 
    {
       // return `Gerente: departamento: ${this.departamento}`
       return `Gerente: ${super.obtenerDetalles()}, departamento: ${this.departamento}`
    }
}

let gerente1 = new Gerente ('Carlos', 5000, 'Sistemas');
console.log(gerente1);

//Como vemos obtenerDetalles no tiene los datos de departamento, por ende hay que crear para SOBRE-ESCRIBIR el metodo de la case padre obtenerDetalles tmabien en la hija.
console.log(gerente1.obtenerDetalles());

//Vemos que la impresion mostraba "Gerente: departamento: Sistemas", y estaba bien. Pero si tambien desde la clase fija queremos acceder al mismo METODO de la clase padre, lo hacemos definiendo super en el metodo hijo. Para asi mostrar tambien los datos de Empleado: nombre, sueldo + departamento que ya estaba. Quedando correctamente como vemos arriba.-



