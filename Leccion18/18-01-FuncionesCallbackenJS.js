/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 18-01

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Funciones Callback en JS.
-Explicaremos en base a funciones simples como es esto de tener funciones callback, es decir funciones que tienen como parametros a otra funcion. De esta manera vamos a poder llamar a otra funcion. 

-En definitiva, la importancia de usar este tipo de funciones Callback es que podemos usar funciones de forma asincrona, de manera que una funcion puede ejecutar 2 procesos por separado al mismo tiempo.

- ACLARACIONES: 

-Como sabemos las funciones se ejecutan de forma secuencial, de arriba a abajo.

(i) Recordamos: 

*/

//2 ejemplos de funciones comunes solo para verlas.

function miFuncion1()
{
    console.log('funcion 1');
}

function miFuncion2()
{
    console.log('funcion 2');
}

miFuncion1();
miFuncion2();

//Funcion de tipo callback

function imprimir(mensaje)
{
    console.log(mensaje);
}

function sumar(op1,op2,funcionCallback) //OJO: funcionCallback es un atributo de la funcion, no una funcion. En ella alojaremos el valor de la suma, lo que contiene res.
{
    let res = op1 + op2;
    funcionCallback( `Resultado: ${res}`);
}

sumar (5,3,imprimir);


/*Explicamos el proceso:
 Creamos la funcion imprimir a la que le haremos llevar mediante "mensaje" un valor. Luego creamos funcion sumar, donde le haremos llegar 2 valores numeros para op1/op2 y creamos otra variable funcionCallback que sera la que alojara el valor de la suma de esos nº (res).
 Sucede que mediante el llamado "sumar" pasamos los 2 nº y pasamos como objeto/paramentro la funcion "imprimir", que sera recibida en la variable funcionCallback, por ello al recibir una funcion este activa la f() imprimir y ejecuta como mensaje lo que contiene como parametro dentro de llaves, que es valor de (res). Y lo muestra por consola como idnica la funcion de imprimir.-

 */