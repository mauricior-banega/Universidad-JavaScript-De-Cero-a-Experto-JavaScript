/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 19-02

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Funcion setTimeout y Promesas en JS



- ACLARACIONES: 

- Para no perder el hilo ver toda esta leccion en caso de dudas
- Ejercisio similar al de clase 19-01, por lo que borramos lo de la anterior clase y comentamos nueva informacion.

(i) Recordamos: 

-----------------DEJAMOS EL EJEMPLO ANTERIOR DE COMAPRACION/REFERENCIA-----------------

let miPromesa = new Promise ((resolver,rechazar) => { 
    
    let expresion = true;

    if(expresion)
    {
        resolver('Resolvio correcto');
    }
    else
        rechazar('Se produjo un error'); 

    });

   
                miPromesa
                .then( valor => console.log(valor))
                .catch( error => console.log(error));
                        
*/


//En este nuevo ejemplo, crearemos una promesa a la que haremos llegar una sola funcion para que procese su argumento "resolver", no ejecutaremos un rejected para este caso. Veremos como se aplica el mismo funcionamiento, añadiendo la funcionalidad de setTimeout que simulara una demora (de un proceso tipico en sistema) ejemplo ir y buscar algun dato que pueda tener segundos de demora. 

let promesa = new Promise((resolver) => {

    console.log('Inicio promesa'); //Se crean para mostrar como ejecutan primero las impresiones 'Inicio promesa/'Fin promesa' y luego el saludo. De esta forma vemos como trabaja de forma asincrona la promesa.

    setTimeout( () => resolver('Saludo desde setTimeout y Promesa'), 3000) //Funcion setTimeout, recordemos tambien recibe una funcion Callback. Esta llamara a la funcion reseolver y le pasara un mensaje + segundos.

    console.log('Fin promesa');
});

    promesa.then(valor => console.log(valor));

    //ACLARACION: Asu vez una promesa puede dar como resultado otra promesa, mas adelante veremos el ejemplo.