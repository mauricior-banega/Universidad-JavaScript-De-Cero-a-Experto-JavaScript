/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 19-04

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Palabra Await y Async con Promesas en JavaScript (FUNCION CON PROMESA + AWAIT + ASYNC)


- ACLARACIONES:

- Para no perder el hilo ver toda esta leccion en caso de dudas
- Ejercisio similar al de clase 19-03, por lo que borramos lo de la anterior clase y comentamos nueva informacion.

(i) Recordamos: 

*/

async function funcionConPromesaYAwait()//Funcion normal + async + cuerpo (se crea una promesa) 
{
    let miPromesa = new Promise (resolver =>{
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

funcionConPromesaYAwait();

/*ACLARACION: AWAIT SOLO SE DEBE UTILIZAR DENTRO DE UNA FUNCION DONDE FUE DECLARADA ASYNC.

- EXPLICACION: Basicamente "await" procesa lo que una promesa ejecuta (resolver('Promesa con await');), osea consume la promesa. En este caso vemos como directamente desde la funcion se muestra lo que devolvio la promesa mediante la impresion + await + nombre de la promesa  console.log(await miPromesa);

Por ultimo, llamamos la funcion directamente, que devolver la impresion directamente dentro de ella declarada.
funcionConPromesaYAwait();


*/