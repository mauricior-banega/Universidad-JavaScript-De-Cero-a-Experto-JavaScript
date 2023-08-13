/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 17-01

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Mas de Funciones Flecha (Arrows) en JS. Veremos varias formas de definir este tipo de funciones, de manera que quede mas simplificado.


- ACLARACIONES: Nos basamos en el ej del caso anterior 17-01. Eliminamos aclaraciones comentadas anteriores.

-Para comentar pedasos del codigo entero:
1.Seleccionamos el codigo.
2.Presionamos CTL + / 
-Y automaticamente comentara el pedaso del codigo seleccionado con // en cada linea.
(En mi teclado no funciona, despues ver porque).

(i) Recordamos: 

*/

let miFuncion = function miFuncion() 
{
    console.log('Saludos desde mi funcion');
}

//Veremos formas de definir tambien esta funcion flecha

/* 1º Como definimos en el practico anterior, modelo normal clasico.

            let miFuncionFlecha = () => 
            {
                console.log('Saludos desde mi funcion flecha');
            }

*/

/* 2º Como el argumento de la funcion entra en una sola linea, quitamos los {} y ponemos el argumento en la misma linea despues de =>. 

            const miFuncionFlecha = () => console.log('Saludos desde mi funcion');

*/

//          miFuncionFlecha();


/* 3º En este caso, nuestra funcion devolvera/retornara un valor, a modo de ejemplo. A diferencia del otro que no devolvia nada (return). Y veremos en el 4º como se puede simplificar aun mas. Comentamos este



const saludar = () =>
{
    return 'Saludos desde funcion flecha';
}

console.log(saludar());

*/

/* 4º.1 Simplificado (devolviendo una cadena): Como el argumento de retorno es de una sola linea podemos tambien suprimir los {} y ponerlo delante de =>; incluso como vimos que "return" sino esta el sistema lo sabra y lo pondra por defecto (no visible) podemos escribir asi el codigo de nuestra funcion.

*/

const saludar = () => 'Saludos desde funcion flecha';

console.log(saludar()); //Imprimo funcion flecha

// 4.2º Simplificado (devolviendo un objeto): Aclara que si ponemos solo {nombre:'Juan'}, apellido: 'Lara'}para traernos el objeto nombre con el atributo Juan, puede confundirse con el "cuerpo" de la funcion y es por ello que ademas lo encerraremos dentro de (), quedando asi:

//const regresaObjeto = () => {nombre:'Juan'};

const regresaObjeto = () => ({nombre:'Juan', apellido: 'Lara'});
console.log(regresaObjeto());

// 4.3º Simplificado (recibiendo parametros): Mostraremos la forma clasica y la simplificada de este tipo de funcion flecha simplificada de modo que se reciban paramentros a ella ().

    //Funcion Flecha no Simplificada (Clasica) con Paramentros
    const funcionConParamentrosClasico = function(mensaje)
    {
        console.log(mensaje);
    }


    //Funcion Flecha Simplificada con Paramentros: Incluso si se recibe 1 solo paramentro puede no tener (). Comento

    //        const funcionConParametros = (mensaje) => console.log(mensaje);

    const funcionConParametros = mensaje => console.log(mensaje);

    funcionConParametros('Saludos con Paramentros');


    //Ahora, si recibieramos varios paramentros:

    //const funcionConVariosParamentros = (op1,op2) => op1 +op2; De una linea, si es mas complejo como en el de abajo se hace.

    const funcionConVariosParamentros = (op1,op2) => 
    {
       let resultado = op1+op2;
         return `Resultado: ${resultado}`; //Motramos "resultado" con Template String.
    };

    console.log(funcionConVariosParamentros(3,5));

