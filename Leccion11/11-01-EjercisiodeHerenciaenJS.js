/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 11-01

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: EJERCISIO DE HERENCIA EN JS (PRACTICO)

-Conceptos: 

ACLARACIONES: Adjuntare en la carpeta de esta clase, el grafico que pide en el practico.
- 
(1*) 

*/

class Persona
{   
    static contadorPersonas = 0;

    constructor(nombre,apellido,edad)
    {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona()
    {
        return this._idPersona;
    }

    get nombre()
    {
        return this._nombre;
    }

    set nombre(nombre)
    {
        this._nombre = nombre; //1º Vistazo
    }

    get apellido()
    {
        return this._apellido;
    }

    set apellido(apellido)
    {
        this._apellido = apellido; 
    }

    get edad()
    {
        return this._edad;
    }

    set edad (edad)
    {
        this._edad = edad; 
    }

    toString() //Alcaracion, en este ejemplo podemos usar concatenacion pero tambien podemos usar el concepto de "templates string". Que es mas como de ver, y se usan simbolos de back slash (comilla inversa) corchetes y signo $. 
    
    //Quedando de asi this._idPersona+' '+this._nombre+' '+this._apellido+' '+this._edad;
    
    //A asi: Aparecera el icono del foco prendido, luego click y tocamos en Convert Templates String. Con el podemos desplegar el codigo en multiples lineas.

    {
        return `${this._idPersona} 
                ${this._nombre} 
                ${this._apellido}
                ${this._edad}`;  
        
    }

}

class Empleado extends Persona
{   

    static contadorEmpleado = 0;

    constructor (nombre,apellido,edad,sueldo)
    {   
        super (nombre,apellido,edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleado;
    }

    get idEmpleado()
    {
        return this._idEmpleado;
    }

    get sueldo()
    {
        return this._sueldo;
    }

    set sueldo(sueldo)
    {
        this._sueldo = sueldo;
        
    }

    toString()
    {
        return `${super.toString()} 
                ${this._idEmpleado} 
                ${this._sueldo}`;

        //Con este metodo hace la magia, trae los valores de toString de clase Persona, para ello, poner super.toString() yconcatenar lo demas. Aplicamos el mismo concepto de template string
    }

}

class Cliente extends Persona
{   

    static contadorCliente = 0;

    constructor (nombre,apellido,edad, fechaRegistro)
    {
        super(nombre,apellido,edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorCliente;
        
    }

    get idCliente()
    {
        return this._idCliente;
    }

    get fechaRegistro()
    {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro)
    {
        this._fechaRegistro = fechaRegistro;
        
    }

    toString()
    {
        return `${super.toString()}
                ${this._idCliente}
                ${this._fechaRegistro}`;
        
    }

}

let persona1 = new Persona('Julian',' Weich', 28,); 
console.log(persona1.toString());

let persona2 = new Persona('Pablo', ' Morgado', 36); 
console.log(persona2.toString());

let empleado1 = new Empleado('David','Ortiz','25' ,5000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Laura','Quitero','41' ,7000);
console.log(empleado2.toString());

let cliente1 = new Cliente('Susana','Gimenez',30, new Date());
console.log(cliente1.toString());

let cliente2 = new Cliente('Maria','Lara',32, new Date());
console.log(cliente2.toString());