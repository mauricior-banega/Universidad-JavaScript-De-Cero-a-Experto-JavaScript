/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 3

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


//TEMA: OPERADORES ARITMETICOS

// Suma +

let a = 3, b = 2;
let z = a + b;

console.log ("Resultado de la suma: " + z );

// Resta -

    z = a - b;

console.log ("Resultado de la resta: " + z );

// Multiplicacion

    z = a * b;

console.log ("Resultado de la multiplicacion: " + z );


// Division

z = a / b;

console.log ("Resultado de la division: " + z );

// Op.Modulo o Residuo de la division (el resto de la /)

z = a % b;

console.log ("Resultado de la division: " + z );

// Operador Exponente (o exponencial)

z = a ** b;

console.log ("Resultado de operacion exponente: " + z );

/* Op. de Incremento (2 tipos) ---------------------
 -Teniendo en cuenta los valores antes asignados:
    
    let a = 3, b = 2;
    let z = a + b;
*/
// Pre-incremento (el operador ++ antes de la variable)

z = ++a;

console.log (a);
console.log (z);

// Post-incremento (el operador ++ despues de la variable)

z = b++;

console.log (b);
console.log (z);


/* Op. de Decremento (2 tipos) ---------------------
 -Teniendo en cuenta los valores antes asignados:
    
    let a = 3, b = 2;
    let z = a + b;
*/
// Pre-decremento (el operador ++ antes de la variable)

z = --a;

console.log (a);
console.log (z);


// Post-decremento(el operador -- despues de la variable)

z = b--;

console.log (b);
console.log (z);

