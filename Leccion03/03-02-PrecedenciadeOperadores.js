/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 3.02

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
ASPECTOS IMPORTANTES DE VISUAL STUDIO CODE:
-Agregamos a la carpeta Leccion 03 la imagen que muestra los niveles jerarquicos en los que se aplican cada operador aritmetico en JS.

-----------------------------------------------------------------------------------------
*/


//TEMA: PRECEDENCIA DE OPERADORES

//-Existe un nivel de tipos de operadores y cuales se realizan primero que otros, esto esta en la web.

let a = 3, b = 2, c = 1, d = 4;
let z = a * b + c; //Se resuelve de izq a der siempre. Y 1º se resuelve: a*b,2º suma c.

console.log(z);


     z =  c + a * b ; //Se resuelve de izq a der siempre, pero como el nivel de * es mayor que la suma es que 1º se resuelve: a*b y 2º suma c.

console.log(z);


     z = a * b + c / d; //Se resuelven cada op * y /, al ultimo suma los resultados.

console.log(z);


    z =  c + a * b / d; //Se resuelve 1º a*b, 2º divide d y por ultimo suma c.

    console.log(z);


    //Para que realice primero una suma, tenemos que encerrar entre () el o los terminos.
    z =  (c + a) * b / d; //Se resuelve 1º a*b, 2º divide d y por ultimo suma c.

    console.log(z);


  /*--------------------------------------------------------------------------------*/

   //TEMA: OPERADORES DE ASIGNACION 

    let e = 1;

    e += 3; //e = e + 3;
    console.log(e);


    e -= 2; //e = e - 2; 
    console.log(e);

 /*
    -Igual explicacion para los siguientes operadores: 

                            *=
                            /=
                            %=
                            **=
 
 ----------------------------------------------------------------------------------------
                            */

// TEMA: OPERADORES DE COMPARACION:

//Dejare hasta aca esta clase de practicos (Seccion nº 22) ; de ser necesarios retomare nuevamente el video para hacerlos ya que son muy basicos y es necesario aprender funciones.

