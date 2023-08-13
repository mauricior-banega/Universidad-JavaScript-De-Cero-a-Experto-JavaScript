/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 7.03

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
ASPECTOS IMPORTANTES DE VISUAL STUDIO CODE:
-AYUDA DE VSC (Apretando CTL+BARRA ESPACIADORA)

-----------------------------------------------------------------------------------------
*/


//TEMA: FUNCIONES DE TIPO "EXPRESION" O ANONIMAS.

/*

function miFuncion(a,b)
{
    return a + b; // Hacemos que retorno directamente el resultado. Los valores se lo asignamos mediante el llamado directamente, del cual ADEMAS podemos asignarlo a una variable, como veremos a continuacion. Para que? Para luego poder mandar a imprimir el valor contenido en la variable creada.
}   

    let resultado = miFuncion(2,3); //Se iguala y se guarda en variable

    console.log(resultado);

    -Dejamos a modo de ejemplo la funcion anterior ya que crearemos la misma pero del tipo expresion.
    -----------------------------------------------------------------------------------------
    */


    let x = function(a , b) { return a + b};

    //Este tipo de funciones podemos asigarlas a una variable y NO tiener un nombre, es por eso que se las denomina anonimas. Ademas al  finalizar se coloca (;) ya que codifican en una linea de codigo.

    let resultado = x (1 , 2); //Creamos la variable resultado y a x (que seria la funcion alojada en una variable) le asignamos los valores a/b respectivamente. Luego en resultado se alojara el dato devuelto de la funcion mediante el return, del cual mostraremos en la consola.

    console.log(resultado);