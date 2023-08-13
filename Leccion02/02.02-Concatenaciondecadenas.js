/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 2.02

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
ASPECTOS IMPORTANTES DE VISUAL STUDIO CODE:
-Podes hacer un "GUARDADO AUTOMATICO" de todo lo que vamos codificando, eso lo realizamos llendo a Archivo+Auto Save o Autoguardado (podemos activar/desactivar).

-De otro practico, me acorde que podemos generar una ventana emergente desde donde se pueden cargar datos (el usuario) para que al ingresarlos, podamos hacer uso de el. Esto se hace asi: ejemplo = prompt("Ingrese su edad");

(1*): En JavaScript para definir una variable NO es necesario especificar que tipo es (int/string/bool etc) sino que solo ponemos "var". A diferencia de otros lenguajes ej Java. Como var tambien podemos usar "let" o "const", esto lo veremos mas adelante y en que caso usarlo.

- Para seleccionar todo el codigo "CTL+A".

-Para prender o apagar mas facil "Quokka" bajamos la extesion en VSC (Quokka Statusbar Buttons). Podremos ver que luego de instalarla veremos los botones donde con Q+(prendemos)/Q-(apagamos)/Q--(detenerlo en todos los archivos). Esto lo hacemos para ahorrarnos el paso anterior de activacion de Quokka.

-----------------------------------------------------------------------------------------
*/

//CONCATENACION DE CADENAS

var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto=nombre+' '+apellido; //Ej concatenamos mediante variables
console.log(nombreCompleto);


var nombreCompleto='Carlos'+' '+'Lara'; //Ej concatenamos mediante variables
console.log(nombreCompleto);

 //-----------------------------------------

var x = nombre + 2 + 4; //Ej concatenamos nombre (Juan), pero si ponemos numeros no los tomara como tal sino como cadena (string).
console.log(x); 

//Pero si quisera que esos nº si se sumen ponemos () ya que toma prioridad la suma. Ya que evalua de izq a der es que hay que ponerlo.

    x = nombre + (2 + 4);
    console.log(x); 

// Ahora como dijimos evalua de izq a der es que resuelve la suma primero y luego concatena el nombre (Juan) sin necesidad de poner el ()

//Este ejemplo de tomar o como cadena o numero, se lo conoce como "Contexto String o Contexto de Cadena".
    x = 2 + 4 + nombre;
    console.log(x); 


    
