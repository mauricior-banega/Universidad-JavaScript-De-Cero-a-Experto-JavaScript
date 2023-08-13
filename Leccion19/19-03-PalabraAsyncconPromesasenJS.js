/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 19-03

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Palabra Async con Promesas en JavaScript (FUNCION CON PROMESA)

- ACLARACIONES: Se toma la explicacion en base al ejercisio anterior 19-02. 

- Para no perder el hilo ver toda esta leccion en caso de dudas
- Ejercisio similar al de clase 19-02, por lo que borramos lo de la anterior clase y comentamos nueva informacion.

(i) Recordamos: 

*/

//Ejercisio anterior solo para ver, como es se crea un objeto promesa y como funciona, asi como una funcion con promesa. Veremos la similitud entre uno y otro.

let promesa = new Promise((resolver) => {

    //console.log('Inicio promesa'); 
    setTimeout( () => resolver('Saludo desde setTimeout y Promesa'), 3000) 
    //console.log('Fin promesa');
});

   // promesa.then(valor => console.log(valor));


   //------------------------------------------------------------------------


   //Async indica que una funcion regresa una promesa. En una funcion con promesa, se define la palabra reservada async + nombreF() + cuerpo. Y realizamos la llamada, pasando el paramentro valor que sera el que alojara lo que retorne la F() promesa. Veremos que a el llamado se le pone (), tambien .then y dentro la funcion flecha valor que contendra lo que retorne miFuncionConPromesa, justamente porque no estamos llamando aun objeto promesa sino a una funcion promesa es que lleva los ().

   async function miFuncionConPromesa ()//Funcion normal + async
   {
       return 'Saludos con promesa y Async';
   }

    miFuncionConPromesa().then(valor => console.log(valor));