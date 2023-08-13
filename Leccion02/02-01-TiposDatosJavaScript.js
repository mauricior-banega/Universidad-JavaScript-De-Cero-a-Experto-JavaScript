/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 2

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

-----------------------------------------------------------------------------------------
*/
//Ejemplos de tipos de datos en JavaScript

//Tipo de dato string

var nombre ="Carlos";
console.log(nombre);

nombre = 10;
console.log(typeof nombre); //typeof: Nos da como resultado el tipo de objeto que es (numerico). (1*)

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato objeto
var objeto = {nombre:"Juan", apellido:"Perez", telefono: "4952145"}
console.log(objeto);

//Tipo de dato boolean (true/false) . Objeto bandera
var bandera= true;
console.log(typeof bandera);

//Tipo de dato function/funcion
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbol = Symbol("mi simbolo"); //Podemos agregar una cadena
console.log(simbol);
console.log(typeof simbol);



//Tipo clase es una funcion
class Persona
{
    constructor(nombre, apellido) //Constructor (vereemos mas adelante)
    {
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
    console.log(Persona);

//Tipo undefine (indefinida)

var x;
console.log(x);

x = undefined;
console.log(typeof x);

//null (Ausencia de valor). No es un tipo de dato, sino que es un objeto.

var  y=null;
console.log(typeof y);

//Array (Arreglo) - Tipo de dato Object

var auto = ['BMW','Audio','Volvo'];
console.log(auto);
console.log(typeof auto);

//Cadena de texto vacia (empty string) - Tipo de dato String
var z='';
console.log(z);
console.log(typeof z);

