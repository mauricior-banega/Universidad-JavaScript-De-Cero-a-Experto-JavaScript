/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 2.03

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

//TEMA: SINTAXIS PARA CAMBIAR VARIABLES

//Sintaxis: "var" - Esta sintaxis al dia de hoy no se recomienda, asique usaremos let o const, que ahora definiremos.
var apodo = "JJuanciten"; 

//Sintaxis: "let" - Esta, si se recomenda en reemplazo de var.
let nombre;
nombre = "Juan"; //Aclara que, podemos definir el dato que contedra o no previamente, dependiendo del caso de uso.
console.log(nombre);
console.log(typeof nombre);

//Sintaxis: "const" - Esta sintaxis permite NO cambiar el tipo de contenido de la variable, osea es fija. Podremos ver el error que nos muestra Quokka en rojo idnicandolo.
const apellido = "Juan";
//apellido = "Lara"; Comentamos asi nos permite seguir con los ej, ya que error nos los impide.

//Veremos ampliado el tema de estas variables que usaremos (let/const) mas adelante, cuando lleguemos aver funciones en adelante.

//-----------------------------------------------------------------------------------------

//TEMA: COMO ASIGNAR MEJOR EL NOMBRE DE VARIABLES

let nombreCompleto="Juan Perez"; //Sintaxis de altas y bajas o (notacion de camello). Si nuestra variable se compone de dos palabras, esta va la 1ª en minuscula y la 2ª en mayuscula.
console.log(nombreCompleto);

//Sintaxis para definir numeros

    let x, y; 

    x=10 , y=20;

    let z = x + y;
    console.log(z);

//-----------------------------------------------------------------------------------------

//TEMA: REGLAS PARA DEFINIR NOMBRE DE VARIABLES EN JS

 let nombreeCompleto = "Juan Perez";
 let nombreecompleto = "Carlos Lara";

 console.log(nombreeCompleto);
 console.log(nombreecompleto);

 //Como vemos en el ej es importante tener en cuenta que la diferencia entre letras mayusculas marca en si el tipo de variable que designamos ya que no es lo mismo una que otra por esto. de manera que tampoco podemos crear una variable que empiece con un nº, debemos asignarle un simbolo.

 //EJ: let 1nombreeCompleto; (DARIA ERROR). Entonces debemos codificarlo de esta manera

        let $1nombreeCompleto; // osea simbolo $ o _ (guion bajo).
        let _1nombreeCompleto;

//ACLARACION: Tampoco podemos usar lo que se llaman "palabras reservadas de JS" para definir variables ya que se usan para otras funciones en el programa.

