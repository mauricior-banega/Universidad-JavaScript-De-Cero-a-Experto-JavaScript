/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 15-02

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Polimorfismo en JS 

- ACLARACION: Veremos POLIMORFISMO. Idem al anterior 15.1, pero se quitan comentarios anteriores.

Fotos aclarativas de la leccion dentro de esta carpeta (polimorfismo/sobreescritura.png)

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

//Creamos una funcion que imprima los datos de obtener detalles, osea lo mismo de arriba, pero con la diferencia que segun el tipo de objeto que lo llame sera el metodo que elegira, en este caso imprimira.

function imprimir(tipo)
{
    console.log(tipo.obtenerDetalles());
}

//---------------------------------------------------


let empleado1 = new Empleado ('Juanjo', 2600);
console.log(empleado1);
let gerente1 = new Gerente ('Carlos', 5000, 'Sistemas');
console.log(gerente1);

console.log(gerente1.obtenerDetalles());

//Lo que aca explicaremos es como sucede el POLIMORFISMO, que es cuando depende del tipo de objeto que lo llame, sera el metodo que utilizara. Explicamos debajo.

imprimir(empleado1); //Aca, es cuando definimos el tipo, osea que llame al obtenerDetalles del tipo Padre:Empleado y no al obtenerDetalles de la clase hija:Empleado.

imprimir(gerente1); //Despues si lo hacemos de nuevo se superponer claro, pero muestra correctamente que aca llama al obtenerDetalles de la clase hija.