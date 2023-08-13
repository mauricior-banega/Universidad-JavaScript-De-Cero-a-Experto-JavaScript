/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 19-05

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Promesas con Async, Await y setTimeout en JavaScript


- ACLARACIONES:

- Para no perder el hilo ver toda esta leccion en caso de dudas
- Ejercisio similar al de clase 19-04, por lo que borramos lo de la anterior clase y comentamos nueva informacion.

(i) Recordamos: 

*/

//Ejercisio anterior solo para verlo y ver la diferencia con el otro.


async function funcionConPromesaYAwait()//Funcion normal + async + cuerpo (se crea una promesa) 
{
    let miPromesa = new Promise (resolver =>{
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

//funcionConPromesaYAwait();

//----------------------------------------------------------------------------------------

//Funcion con Promesa Await y setTimeout

async function funcionConPromesaAwaitTimeout()
{
    let miPromesa = new Promise (resolver =>{

        setTimeout(()=> resolver('Promesa con await y timeout'), 3000)
    });

    console.log(await miPromesa);
}

funcionConPromesaAwaitTimeout();