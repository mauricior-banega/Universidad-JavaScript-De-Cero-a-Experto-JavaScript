/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 19-01

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Promesas

Es un objeto del tipo Promesa que guardaremos en una variable, esta devuelve 2 resultados (resolved(.then)/rejected(.catch)), o solo 1 en caso que precisemosm mientras la promesa no se haya ejecutado o este en proceso de devolverlo, se encontrara en estado de "pendiente". Para este ejemplo mostraremos una promesa a la que haremos llegar 2 argumentos/funciones del tipo funcion callback (resuelto,rechazado) y como recibiremos estas 2 funciones callback se usa la notacion de funcion flecha para definirlo. Y dentro pondremos las condiciones/cuerpo de la funcion, que se ejecutaran, y por ultimo haremos el llamado a esta fucnion promesa del que amplio mas adelante.

Ej: let miPromesa = new Promise ((resolver,rechazar) => { cuerpo de la funcion });

-Bajaremos }); para poder poner mas claro el codigo, y recomendamos cerrar toda la funcion y luego aplicar los enter necesarios para no tener problemas luego de hacer incorrectamente.

Ej: let miPromesa = new Promise ((resolver,rechazar) => { 
    
    cuerpo de la funcion 

    });

- ACLARACIONES: 


(i) Recordamos: 

*/

let miPromesa = new Promise ((resolver,rechazar) => { 
    
    let expresion = true; //Expresion booleana, que si es verdadero se ejecutara "resolver" y si es falsa, se ejecutara "rechazar". Ya que el if luego procesa si es true, si da false va por else hacia "rechazar".

    if(expresion)
    {
        resolver('Resolvio correcto'); //Este mensaje de enviara a una variable, que llegara depiendiendo lo que sea, desde resolver/rechazar a valor o error, que luego mostrara ese valor elojado por consola como esta definido.
    }
    else
        rechazar('Se produjo un error'); //idem

    });

    /*Valor y Error son argumentos de la funcion por lo que no van separados con ; sino con , ya que son funciones flecha cada una de ellas.
    Entonces: 1º Funcion tipo flecha :  valor => console.log(valor) 
              2º Funcion tipo flecha :  error => console.log(error) );
    */ 

    //(*)       miPromesa.then( valor => console.log(valor), error => console.log(error) ); 
    
    /*-Proceso: Se manda a llamar a la funcion miPromesa, se reciben las funciones flecha "valor para resolver" y "error para rechazar", se ejecuta la funcion y devuelve un retorno, siendo en este ejemplo el resultado: true, desde la comparacion en el if y por ello es que se ejecuta la primera funcion resolver, que envia el mensaje 'Resolvio correcto' hacia la funcion callback que lo llamo, guardando ese 'Resolvio correcto' en valor y posterior mostrandolo. 

    -Por el contrario si expresion fuese falsa, haria el mismo proceso, llamando a la funcion rechazar y mostrando 'Se produjo un error'.

    -El llamando tambien lo podremos verlo tambien escrito/organizado de esta forma, con lineas por debajo asi y seria lo mismo:

                miPromesa.then
                    ( 
                    valor => console.log(valor), 
                    error => console.log(error) 
                    ); 

    -Comentaremos el (*) ya que ahora agregaremos el .catch y completaremos la expresion de la funcion error. Quedando por fin de esta manera:
    */
        
   /*Quedando de esta manera: 
   
                miPromesa.then( valor => console.log(valor)).catch( error => console.log(error)); 

    pero pero pero la forma mas comun de verlo es organizado de esta otra manera:
    */
   
                miPromesa
                .then( valor => console.log(valor))
                .catch( error => console.log(error));
                        