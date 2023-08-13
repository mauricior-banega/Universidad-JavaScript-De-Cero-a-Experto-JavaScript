/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 16-02

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Cláusula throw en JS (Manejo de errores)

-La clausula throw sirve para personalizar un error, en vez de que muestre el error que indica el sistema, mostrara el error como mensaje que definamos con throw.

- ACLARACION: 
- Para mover linea de codigo, nos posicionamos en la linea que quedamos y presionamos ALT+(feclecha arriba o abajo) para mover la linea de codigo y desplazarla.

*/

'use strict' //Si usamos esto, como vimos no podemos dejar variables sin definir

// let resultado = 'hola'; //Resultado es una cadena, no un numero. Ej:1º: Mostrara No es un numero.

let resultado = ''; //Resultado ahora es una cadena vacia. Ej:2º: Mostrara Es una cadena vacia.

//IMPORTANTE PARA ENTENDER EL EJ: THROW "ES UN LANZADO DE ERROR", por ello se encapsula en error y lo muestra.

try 
{
  //x = 10;

  //Preguntamos, si resultado es Not a Number (sino es un numero), si no lo es, que muestre el error definido en el throw 'No es un numero'. Osea en este ejemplo mandamos COMO ERROR cosas que son ciertas mcuhas veces pero es para poder mandar un ensaje con sentido en throw.

  if(isNaN(resultado)) throw 'No es un numero'; 
  else if (resultado ==='') throw 'Es una cadena vacia'
  else if (resultado >= 0) throw 'Valor positivo'
  else if (resultado < 0) throw 'Valor negativo'
}

catch (error) 
{
    console.log(error);

    //Aca podemos separar el error .name y .message para que nos devuelva lo que necesitemos saber de ese error, que en este caso muestra el error ocurrido por no estar definida x. Pero la quitamos para seguir ejemplificando en base al error de la varialbe resultado.
}

finally
{
    console.log('Termina revisión de errores');
}


console.log('continuamos...');
