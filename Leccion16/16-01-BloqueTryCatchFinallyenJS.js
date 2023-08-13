/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 16-01

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Bloque try catch finally en JavaScript (Manejo de errores)

- ACLARACION:
- Para mover linea de codigo, nos posicionamos en la linea que quedamos y presionamos ALT+(feclecha arriba o abajo) para mover la linea de codigo y desplazarla.

*/

'use strict' //Si usamos esto, como vimos no podemos dejar variables sin definir

try //Bloque TRY
{
   // x = 10; Ahora ejemplifica cuando existe una funcion no definida
   miFuncion();
}

catch (error) //Bloque CATCH
{
    console.log(error);
}

finally //Bloque FINALLY: Codigo que se usa para mostrar algo que SIEMPRE se va a ejecutar en consola, a diferencia de catch que puede ejecutarse o no dependiendo de si da error o no, y es OPCIONAL, puede no estar.
{
    console.log('termina la revision de errores');
}

console.log('continuamos...'); //Veremos que esta linea de impresion no se ejecuta porque da error la linea x = 10; is not defined.

//Por ello es que usamos try/catch, para capturar el error y mostrarlo. Dentro del try la linea que no funciona, y en catch (cachamos) ese error, lo guardamos en una variable que llamaremos "error" y la enviaremos a imprimir. Veremos que mostrara [ReferenceError: x is not defined].
 //Quokka ya lo habia mostrado ya, claro. Pero hay casos donde no existe esta aplicacion y la unica forma de verlo es atravez de try/catch. 

 //Ademas vemos que ya SI SE ESTA EJECUTANDO la siguiente linea; console.log('continuamos...'); y esto es porque con este metodo se recupera de que finalice el programa abruptamente ademas de poder ver el error como ya dijimos.


