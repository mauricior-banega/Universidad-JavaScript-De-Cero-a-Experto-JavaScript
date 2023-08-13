/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 7.07

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
ASPECTOS IMPORTANTES DE VISUAL STUDIO CODE:


-----------------------------------------------------------------------------------------
*/


//TEMA: PARAMETROS Y ARGUMENTOS EN JS

//Cuando definimos una funcion podemos observar que dentro de los () esas variables que le asignamos se le llaman "Paramentros". En cambio los "Argumentos" son los valores que finalmente vamos a asignar a los paramentros de la funcion.

//Entonces de las funciones ya vistas seria asi

//let x = function(a , b) { return a + b}; -----------> (a, b) = Paramentros
//let resultado = x (1 , 2);  -----------> (1, 2) = Argumentos

//Lo que mostraremos a continuacion es como ver los argumentos de una funcion mediante la proiedad "arguments", que en si mismo es un Arreglo(Array), que usaremos para imprimir cuantos argumentos tiene la funcion.

let sumar = function (a, b)
{   
    console.log(arguments [0]); //El array posicion 0 de arguments aloja el valor de a
    console.log(arguments [1]); //El array posicion 1 de arguments aloja el valor de b
    return a + b;
}

resultado = sumar (1, 2);
console.log(resultado);

//Explica que si le pasaramos un solo valor (argumento) ej:resultado = sumar (1); este imprimiria el valor de a pero el de b diria "undefined". Tambien si no le pasamos ningun valor osea resultado = sumar (); este imprimiria"undefined" para ambos casos. El resultado de la suma de este ultimo seria console.log(resultado); "Nan" (Not a Number).

//Ahora explicamos como podemos asignarle valores por defecto a los paramentros, habiendo no pasado valores de argumentos. Podremos ver que realiza la funcion de la suma


let sumar2 = function (a = 4, b = 5)
{   
    console.log(arguments [0]); //Arroja undefined los arreglos, claro
    console.log(arguments [1]); //Arroja undefined los arreglos, claro
    return a + b;

    //Esto es porque lo unico que tiene valor asignado como "por defecto"; (a = 4, b = 5). Por ende si mostrara resultado = 9.
}

resultado = sumar2 ();
console.log(resultado);

//Resumen: Los Parametros podemos asignarle valores por default y a los Argumentos sobre-escriben los valores por defecto de nuestros Paramentros, a continuacion el ejemplo.

let sumar3 = function (a = 4, b = 5)
{   
    console.log(arguments [0]); //Paramentro sobre-escrito
    console.log(arguments [1]); //Paramentro sobre-escrito
    console.log(arguments [2]);//Impresion del argumento que "aun" no es paramentro. 
    //Pero si podemos operar "la suma" con el si lo definimos de la siguiente manera.

    return a + b + arguments[2];

    //Esto es porque lo unico que tiene valor asignado como "por defecto"; (a = 4, b = 5). Por ende si mostrara resultado = 9.
}

resultado = sumar3 (10, 5, 7);
console.log(resultado);

    //Ademas, agregamos otro argumento que no hace la suma pero que si imprime arguments a consola como vemos.