/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 8.09

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*  
 (1*): Cuando en una Funcion NO se define la palabra return; JS lo genera por defecto, de manera implicita (no se ve pero esta). De manera que si retorna lo que ahi se realice.



-----------------------------------------------------------------------------------------
*/


//TEMA: METODO CONSTRUCTOR EN OBJETOS EN JS

//Crearemos una funcion constructor de objetos (del tipo persona en este caso). Como hemos visto podemos crearlo definiedo el nombre del objeto y cargando de antemano los valores de cada atributo, pero para crear varias personas del mismo objeto es mejor usar un constructor como veremos a continuacion (padre/madre) del tipo de obj Persona.

    function Persona(nombre, apellido, email)
    {   
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    //Este metodo "new" crea un nuevo objeto del tipo Persona, que se guardara en la variable padre.
    let padre = new Persona('Juan', 'Perez', 'jperez@mail.com'); 
    

    console.log(padre);

    //Haremos lo mismo pero con el obj madre creado.
    let madre = new Persona('Laura', 'Quintero', 'jquintero@mail.com');

    console.log(madre);

    //Si quisieramos modificar el valor de nombre en el obj padre se pondria asi:

    padre.nombre = 'Carlos';

    console.log(padre);

    //No afectaria el nombre de madre sino solo el de padre (obvio). Pero asi lo ejemplifica en el video.