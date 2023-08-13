/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.12

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: USO DE PROTOTYPE EN JS

//D e la f() constructor anterior ejemplificamos esta. Aqui veremos que agregamos un metodo llamado "prototype", que sirve para cambiar o agregar un atributo o valor del atributo de un objeto, sin necesidad de agregarlo desde el constructor.

function Persona(nombre, apellido, email)
{   
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function() //Metodo o F() que concatena los atributos para ser utilizado como atributo que se mostrara luego por consola.
    {
        return this.nombre +' '+this.apellido; 
    }
}
            //De esta manera agregamos tel a cada objeto perteneciente al objeto principal "Persona". Le agregamos de onda para el ej, un valor cualquier de nim y veremos que lo aplica en cada llamado console.log(padre.tel); y console.log(madre.tel); al mismo tel = '33552211'. Ahora veremos como podemos cambiar ese valor para cada uno, anulando el valor por defecto de estos objetos padre/madre pero si se aplicaria a objetos nuevos creados que pertenezcan a Persona.


        Persona.prototype.tel = '33552211'; 



        let padre = new Persona('Juan', 'Perez', 'jperez@mail.com'); 
        
        padre.tel = '11224466'
        console.log(padre.tel);

        //-------------


        let madre = new Persona('Laura', 'Quintero', 'jquintero@mail.com');

        madre.tel = '99556600'
        console.log(madre.tel);