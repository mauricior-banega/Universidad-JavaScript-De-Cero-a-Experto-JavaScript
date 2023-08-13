/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 15-03

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Veremos el funcionamiento de la declaracion INSTANCEOF (Instancia de) en JS.
-Esta declaracion nos permite saber a que clase pertenece un tipo de variable.


- ACLARACION: . Idem al anterior 15.1, pero se quitan comentarios anteriores.


*/

class Empleado //Clase Padre
{
    constructor(nombre,sueldo)
    {
        this.nombre = nombre; 
        this.sueldo = sueldo;
    }

    obtenerDetalles() 
    {
        return `Empleado: nombre: ${this.nombre}, sueldo  ${this.sueldo}`
    }

}


class Gerente extends Empleado //Clase Hija
{
    constructor(nombre, sueldo, departamento)
    {   super(nombre,sueldo);
        this.departamento = departamento; 
    }

    
    obtenerDetalles() 
    {
       return `Gerente: ${super.obtenerDetalles()}, departamento: ${this.departamento}`
    }
   
}

//En esta funcion ejemplificamos como funciona "instanceof"

function determinarTipo(tipo)
{
    console.log(tipo.obtenerDetalles());
     
    //Preguntaremos si la variable tipo es de una clase u otra
    if(tipo instanceof Gerente)
    {
        console.log('Es un objeto de la clase Gerente');

        //Aca explica que tipo (cuando sea identificado como de clase Gerente entonces si mostrara el valor del atributo de la clase hija Gerente.
        
        console.log(tipo.departamento);
    }
    else if(tipo instanceof Empleado)
    {
        console.log('Es un tipo Empleado');

        //Ahora, cuando tipo no sea de clase Gerente y sea de empleado, e intentemos acceder al valor del atributo (tipo.departamento) nos mostrara que aun "no esta definida" y es porque claro, existe solo en Gerente.

        console.log(tipo.departamento);
    }
    else if(tipo instanceof Object) //Object es la clase padre, de todas las clases en JS
    {
        console.log('Es un tipo Object');
    }

    /*Veremos que la respuesta es que si, desde la salida de la consola. Pero tambien lo muestra para la clase hija Gerente, porque mandamos a imprimirlo tambien y aplica la misma pregunta para la clase hija.
    -(instaceof) respondera que si, a clases del mismo tipo o a clases padre, pero no responde si es a clases hija. El el 1er if responde que si es de clase Gerente (porque es del mismo tipo)y tambien a clase Empleado (porque es de clase padre). preguntamos tambien si es del tipo Object (si en ambos).
    */
}

//---------------------------------------------------


let empleado1 = new Empleado ('Juanjo', 2600);
console.log(empleado1);
let gerente1 = new Gerente ('Carlos', 5000, 'Sistemas');
console.log(gerente1);

console.log(gerente1.obtenerDetalles());


determinarTipo(empleado1); 
determinarTipo(gerente1); 
