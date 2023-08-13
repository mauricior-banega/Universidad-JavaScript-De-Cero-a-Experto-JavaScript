/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 18-03

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: Funciones Set Interval
-Lo que realiza es, llamar a una funcion cada cierto tiempo de forma constante durante el tiempo establecido.

-Utilizaremos una funcion Callback del tipo de objeto "Date" llamada reloj, que a travez de metodos aplicados nos devolvera la hora/minuto/segundo. Pero lo imprimira cada 1 segundo, ya que asi lo definiremos atravez del llamado a esa funcion desde setInterval. 

- ACLARACIONES: 
 Metodo GetHours = Devuelve la hora
Metodo GetMinutes = Devuelve los minutos
Metodo GetSeconds = Devuelve los segundos

(i) Recordamos: 

*/

let reloj = () => 
{
    let fecha = new Date();
    console.log(`${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}`)
}

setInterval(reloj,1000);

//Vemos como la funcion setInterval llama a la funcion reloj cada 1s. Y cada segundo que pasa nos va pasando como pasa el tiempo constantemente.