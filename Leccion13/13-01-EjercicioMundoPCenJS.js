/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 13-(Video:Del 1 al 6))

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: PROYECTO "MUNDO PC"" EN JS (PRACTICO/CLASE)

-Archivo JS: Creacion de Clase (ACLARAR TODAS)

- ACLARACION: Crearemos un sistema (COMPLETAR)

(1*) 

*/

//Comenzaremos por la clase Dispositivo de Entrada; ya que de esta no depende ninguna clase, es una clase padre; de raton/teclado sus clases hijas.Que luego crearemos.

class DispositivodeEntrada
{
    constructor (tipoEntrada,marca)
    {
        
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada()
    {   
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada)
    { 
        
        return this._tipoEntrada = tipoEntrada;
    }

    get marca()
    {
        return this._marca;
    }

    set marca (marca)
    {
        return this._marca = marca;
    }

    /*toString(tipoEntrada)  - Esta linea no va, ya que el "toString" lo usa para mostrar desde los objetos creados (Raton/Teclado).
    {
        return `{Tipo de Entrada: ${this._tipoEntrada}} {Marca: ${this._marca}}`
    }
    */

}




class Raton extends DispositivodeEntrada
{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca)
    {   
        super (tipoEntrada,marca);
        /*this._tipoEntrada = tipoEntrada; Antes ponia esto, y esta mal: No se declaran de nuevo ya que estan definidos en la clase padre (DispositivodeEntrada)
        this._marca = marca;*/
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton()
    {
        return this._idRaton;
    }

    toString()
    {
        return `[Raton : [ID Raton: ${this._idRaton}] [Tipo de Entrada: ${this._tipoEntrada}] [Marca: ${this._marca}]`
    }
}

class Teclado extends DispositivodeEntrada
{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca)
    {   
        super (tipoEntrada, marca);
        /*this._tipoEntrada = tipoEntrada; Mismo error que en Raton, no se definen nuevamente estos objetos.
        this._marca = marca; */
        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado()
    {
        return this._idTeclado;
    }

    toString()
    {
        return `[Teclado : [ID Teclado: ${this._idTeclado}] [Tipo de Entrada: ${this._tipoEntrada}] [Marca: ${this._marca}]`
    }
}

class Monitor
{
    static contadorMonitores = 0;

    constructor(marca,tamaño)
    {
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }

    get idMonitor()
    {
        return this._idMonitor;
    }

    get marca()
    {
        return this._marca;
    }

    set marca(marca)
    {
        return this._marca;
    }

    get tamaño()
    {
        return this._tamaño;
    }

    set tamaño(tamaño)
    {
        return this._tamaño;
    }

    toString()
    {
        return `[Monitor : [ID Monitor: ${this._idMonitor}] [Marca: ${this._marca}] [Tamaño: ${this._tamaño}]`
    }
}

class Computadora 
{
    static contadorComputadoras = 0;

    constructor(nombre,monitor,raton,teclado) //monitor,raton,teclado Son objetos nuevos creados que alojaran datos de las clases (Monitor/Teclado/Raton). 
    {   
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre=nombre;
        this._monitor=monitor;
        this._raton=raton;
        this._teclado=teclado;
        
    }

    toString()
    {
        return `Computadora ${this._idComputadora}: Nombre ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`
    }
}


class Orden
{
    static contadorOrdenes = 0;

    constructor()
    {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras=[]; 
    }

    get idOrden()
    {
        return this._idOrden;
    }

//"computadora" es el nombre random que le damos a esta funcion para que atravez del metodo que asignemos valor despues (orden1.agregarComputadora(computadora1);) . Luego esta variable sera igual a "_computadoras" que ira a lojando en su Array.

    agregarComputadora(computadora) 
    {
        this._computadoras.push(computadora);
    }

    mostrarOrden()
    {
        let computadorasOrden='';//Creamos una variable temporal "computadorasOrden" que alojara una cadena vacia, para alojar los String que llamemos de cada computadora.

        for(let computadora of this._computadoras) //"computadora" Alojara 
        {
            computadorasOrden += `\n ${computadora}`;//Concatenamos cada uno de estos elementos
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }

}

let raton1= new Raton('USB','Genius');
let raton2= new Raton('Bluetooh','Redragon');
console.log(raton1.toString());

let teclado1= new Teclado('Bluetooh','Logitech');
let teclado2= new Teclado('USB','Genius');
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1= new Monitor('Samsung','21 pulgadas');
let monitor2= new Monitor('LG','30 pulgadas');
console.log(monitor1.toString());

let computadora1 = new Computadora('HP',monitor1,raton1,teclado1); //En este momento, cuando crea el objeto es que toma cada objeto de las otras clases para concatenarlos como atributos de cada uno.
console.log(computadora1.toString());

//De esa manera, llama a cada metodo toString de cada clase para imprimirlos. Podemos, para imprimir llamar al metodo toString o bien escribirlo en formato Template String y directamente  de forma automatica llama al metodo toString e imprime exactamente lo mismo.

console.log(`${computadora1}`);

//Esta es la ventaja de usar esta notacion de codigo. Ahora creamos para ejemplificar un objeto computadora mas.

let computadora2 = new Computadora('Armada',monitor2,raton2,teclado2);

console.log(`${computadora2}`);

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
