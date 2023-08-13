/* 
    JavaScript (Curso de Udemy) - Cursos complementarios - PARTE 12-(Video:Del 1 al 5))

    Universidad JavaScript - De Cero a Experto JavaScript!

    Acerca de este curso: Programación Orientada a Objetos, Funciones Flecha, Callback, Promesas, Async, Await, DOM y mucho más!

    Instructor: Ing. Ubaldo Acosta - Global Mentoring 

*/

/*TEMA: PROYECTO DE "SISTEMA DE VENTAS" EN JS (PRACTICO/CLASE)

-Archivo JS: Creacion de Clase Producto + Clase Orden.

- ACLARACION: Crearemos un sistema de ventas que constara de 2 clases JS, que hara el proceso que internamente/externamente un ticket de compra muestra.

(1*) 

*/

//Creamos la clase Producto

class Producto
{
    static contadorProductos = 0;

    constructor(nombre,precio)
    {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto()
    {
        return this._idProducto;
    }

    get nombre()
    {
        return this._nombre;
    }

    set nombre(nombre)
    {
        this._nombre = nombre; 
    }

    get precio()
    {
        return this._precio;
    }

    set nombre(precio)
    {
        this._precio = precio; 
    }

    toString() //Aplicamos el concepto de Templates Literal (lo podemos buscar en la web apra ver el concepto). Aclara que podemos poner antes de finalizar el (`) el comando \n (new line) que significa un salto de linea.
    {
        return `Id Producto: ${this._idProducto}, Nombre: ${this._nombre} , Precio: $${this._precio}`
    }
}

//Creamos la clase Orden

class Orden //Recordamos que la relacion entre Orden/Producto NO ES DE HERENCIA, por ello es que no usamos extends a la clase Producto.
{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS()//Lo ponemos en MAYUS, solo porque se usa asi para constantes; pero recordemos que es un metodo que actuara como constante.
    {
        return 5; //Haremos que se puedan cargar maximo 5 productos.
    }

    constructor()
    {
        this._idOrden=++Orden.contadorOrdenes;
        this._productos = []; //Arreglo (Array) que alojara cada producto creado.
    //    this._contadorProductosAgregados = 0; No estamos usando esta variable, ya que usamos el metodo PUSH.
    }

    get idOrden()
    {
        return this._idOrden;
    }

    agregarProducto(producto)
    {
        if ( this._productos.length < Orden.MAX_PRODUCTOS ) //recorrera el array pero guardara hasta max el valor alojado en max productos.
        {
            this._productos.push(producto); /*Metodo PUSH: Con el insertamos en el Array "prductos", el valor que aloja producto en ese momento.
            -Otra sintaxis que podriamos haber hecho es esta:

            this._productos[this._contadorProductosAgregados++] = producto;

            */
        }
        else
        {
            console.log('No se pueden agregar mas productos');
        }
    }

    calcularTotal()
    {
        let totalVenta = 0;

        for (let producto of this._productos) //Declaramos la variable que va a iterar cada uno de los elementos del arreglo, posteriomente con la palabra of indicamos cual es el arreglo que vamos a recorrer.
        {
            totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio
        }

        return totalVenta;
    }

    mostrarOrden()
    {
        let productosOrden ='';
        for (let producto of this._productos)
        {
            productosOrden +='\n{'+producto.toString() +'}';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto('Pantalon',200); 
let producto2 = new Producto('Camisa',100); 
console.log(producto1.toString());

//------------------------

let orden1 = new Orden;
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden(); //Asi se imprime; manda a llamar al metodo mostrarOrden() que contiene concatenados los productos de forma concatenada alojadas en el array.

//------------------------

let orden2 = new Orden;
let producto3 = new Producto('Cinturon', 50);

orden2.agregarProducto(producto3); //Producto nuevo
orden2.agregarProducto(producto1); //Tambien podemos agregar productos ya creados a la nueva orden.
orden2.agregarProducto(producto2);


//Ahora cargaremos mas productos para mostrar que solo se pueden cargar 5 productos, nuestra restriccion.
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto2);
//Funciona, muestra que no se pueden agregar mas productos.

//Por ultimo mostramos la orden 2
orden2.mostrarOrden();