
/*Creamos el arreglo de "ingresos", donde dentro creamos objetos predeterminados, para que podamos ver si funciona de antemano los calculos de las funciones totalIngresos/totalEgresos. Posteriormente alojaran elementos de ingreso/egreso que son los que cargaremos manualemnte de forma dinamica.*/

const ingresos = [
    new Ingreso('Salario', 2300.00),
    new Ingreso('Venta de coche', 1500.00)
];

const egresos = [
    new Egreso('Renta departamento', 900.00),
    new Egreso('Ropa', 400.00)
];

/* (4*) Se crea f()cargaApp, que se ejecuta con el evento onload llamado desde el body. Esta funcion a la vez llama a la f()cargarCabecero, donde se ejecutan las operaciones de los datos y los ingrusta tomando como indicador el id de cada uno y posterior asignandole los resultados obtenidos */

let cargarApp = () =>
{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

/*Se crea funcion flecha cargaApp, que se ejecuta con el evento onload llamado desde el body */

let totalIngresos = ()=> /*(4*)*/
{
    let totalIngreso = 0;

    for(let ingreso of ingresos)
    {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=> /*(4*)*/
{
    let totalEgreso = 0;

    for(let egreso of egresos)
    {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = ()=> /*(4*)*/
{
    let presupuesto = totalIngresos() - totalEgresos();
    
    let porcentajeEgreso = totalEgresos()/totalIngresos();

    document.getElementById('presupuesto').innerHTML=formatoMoneda(presupuesto);

    document.getElementById('porcentaje').innerHTML=formatoPorcentaje(porcentajeEgreso);

    document.getElementById('ingresos').innerHTML=formatoMoneda(totalIngresos());

    document.getElementById('egresos').innerHTML=formatoMoneda(totalEgresos());
}

/*(5*) Concepto de Internalization de moneda; que aplicaremos a nuestros elementos de presupuesto/porcentajeEgreso/totalIngresos()/totalEgresos(). Especificamos idioma/region, style:currency(moneda), currency:ARG (Peso Argentino o "USD" para dolar segun indiquemos, aunque estemos en Argentina ya que nos aparece el simbolo $ y es mejor que ARG) y nº de digitos:2 */

/*Luego con estas dos funciones hechas variables, envolvemos el resultado en el para que apliquen las propiedades formatoMoneda/formatoPorcentaje. */

const formatoMoneda = (valor)=>
{
    return valor.toLocaleString('es-AR',{style:'currency',currency:'ARG', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>
{
    return valor.toLocaleString('es-AR',{style:'percent', minimumFractionDigits:2});
}


/*Sector de funciones DINAMICAS: 1) Carga de Ingresos & CrearIngresoHTML

- Se crea la f() cargar Ingresos, dentro creamos la variable ingresoHTML, esta contendra la cadena de los valores ingresados desde la pagina (descripcion y valor). creamos un for; dentro la variable ingreso que servira para alojar cada elemento (iterar) del array creado al comienzo "ingresos". A medida que lo recorra ira guardando en ingresosHTML la cadena de cada elemento creado, CONCATENANDO (+=) asi cada elemento que alojara ingreso en cada momento; concatenara una funcion crearIngresoHTML(igreso); de la que pasamos como valor el ingreso que tendra en cada momento, pero que hace la funcion? Justamente CREARA lo que contiene la cadena ingresosHTML, para basicamente mostrarla en la lista de Ingresos. Se entendio? Explico, lo que sucede sino tuvieramos la funcion crearIngresoHTML.

Sino estuviera NO podriamos ver los elementos que carguemos visualmente, ya que logicamente estaran cargados pero no podremos verlo hasta que no pasemos toda la cadena a una funcion que la muestre y que es esta. En realidad lo mostrara mediante la declaracion:
         document.getElementById('lista.ingresos').innerHTML = ingresosHTML;
Pero la creacion de toda la estructura HTML con sus DIVS y todo se hara desde "crearIngresoHTML". Es sencillo de entender como esta codificada la f() crearIngresoHTML, basicamente crea la funcion que tiene como paramentro ingreso (crearIngresoHTML(ingreso)), dentro crea una variable NUEVA (distinta pero similar no confundir con la de cargarIngresos), que se llama "ingresoHTML", en ella guarda toda la cadena en formato Template Strings (``), y dentro pega TODA la estructura HTML estatica a modo de ejemplo que creamos para los elementos. En este caso copiamos y pegamos solo 1 elemento, no los dos ya que tenemos que usar el formato para 1. Ademas, para reemplazar el valor de "Salario" y el valor +2.200 que habia antes es que sistituimos por el paramentro ingreso que se esta iterando en ese momento + el atributo de la clase (descripcion), quedando: ${ingreso.descripcion}.

Luego para el id elemento_valor, osea +2.200 lo es reemplazado por el ingreso.valor con las propiedades de la funcion formatoMoneda que lo modifica segun preferencias establecidas ya.

-------------------------------------------
EXPLICACION LOGICA NECESARIA EXPLICADA POR MI: Por un lado tenemos la fucion que va a guardar y mostrar para ingreso (funcion cargarIngresos), la clave es esta declaracion

ingresosHTML += crearIngresoHTML(ingreso);

Lo que aqui sucede es que se mostrara en ingresosHTML cada ingreso pero como? Mediante la concatenacion con crearIngresoHTML que CREA la parte HTML con sus Divs e ingresos en cada instancia con su (descripcion+valor). Y tiene como paramentro a ingreso (crearIngresoHTML(ingreso)) para logicamente identificar cada elemento ingreso y poder declarar en el; ej: ${ingreso.descripcion}/${formatoMoneda(ingreso.valor)}.

No hay que ser muy genio para entender ahora que lo analice, que la funcion flecha const crearIngresoHTML =(ingreso)=> hay que crearla haciendole llegar el array ingreso porque de otra manera no podriamos haber guardado y mostrado el elemento de ingreso creado.

-------------------------------------------

 Luego de todo lo explicado que no es poco, debemos llamar a esta funcion cargarIngresos(); desde la funcion flecha "cargarApp(), donde esta llamada se hace desde el body y que ejecutara todas las F() que esta contiene.

*/

const cargarIngresos = ()=> /* FUNCION CARGAR INGRESOS */
{   let ingresosHTML ='';

    for (let ingreso of ingresos)
    {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

/**/

const crearIngresoHTML =(ingreso)=>  /* FUNCION CREAR INGRESOS */
{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos"> 

    <div class="elemento_descripcion">${ingreso.descripcion}</div> 
    
    <div class="derecha limpiarEstilos">

        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>

        
        <div class="elemento_eliminar">
            
            <button class='elemento_eliminar--btn'>
                <ion-icon name='close-outline' onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
            </button>

        </div>
    </div> 

</div>

    `;

    return ingresoHTML;
}

const eliminarIngreso = (id)=> /*(8*)Funcion que elimina los Ingresos Dinamicamente*/
{
    let indiceEliminar= ingresos.findIndex(ingreso => ingreso.id ===id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const eliminarEgreso = (id)=> /*(8*)Funcion que elimina los Egresos Dinamicamente*/
{
    let indiceEliminar= egresos.findIndex(egreso => egreso.id ===id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

/*Por ultimo ya creado todo esto, podremos comprobar que los elementos se cargan de forma dinamica  desde los arreglos de ingreso/egreso de arriba, osea si creamos nuevos objetos de Ingreso manualmente. Aclaracion 1) Los elementos cargados estaticamente a modo de ejemplo en el HTML se reemplazaran), pero entonces que se ve en la pagina? Se ven los elementos de los arrays. 2) Todavia no hicimos el metodo para que extraiga los valores input de Agregar elementos asique veremos solo los objetos creados en los arrays. 
-------------------------------------------------------------------------------------
*/


/* Sector de funciones DINAMICAS: 1) Carga de Egresos & CrearEgresoHTML 
  -Realizamos la misma logica de codificacion que de Ingresos, ahora para los Egresos.
  (CREE ENGRESOS SOLO Y ME SALIO TODO MENOS 2 COSAS chicas QUE EXPLICO)
 
  -En la funcion crearEgresoHTML en la declaracion del porcentaje se puede observar que el % al que se refiere y hay que expresar es,  la diferencia o divicion entre ESE valor de egreso de ese elemento en particular sobre el total de Egresos. Dejo el codigo aca:
  <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>

  -Lo otro era que tuve error era que la F() cargarApp habia llamado mal a la funcion, habia puesto cargarEngresos(); tener siempre ojo con errores de tipeo.

*/

const cargarEgresos =()=>
{
    let egresosHTML='';

    for(let egreso of egresos)
    {
        egresosHTML += crearEgresoHTML(egreso);
    }

    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=>
{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">

                    <div class="elemento_descripcion">${egreso.descripcion}</div> 

                    <div class="derecha limpiarEstilos">

                        <div class="elemento_valor"> - ${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>

                        <div class="elemento_eliminar">

                            <button class='elemento_eliminar--btn'>

                                <ion-icon name='close-outline' onclick='eliminarEgreso(${egreso.id})'></ion-icon>

                            </button>

                        </div>
                    </div>

                </div>

    `;

    return egresoHTML;
}



/*Por ultimo creamos la funcion para Agregar los elementos (ingresos-egresos)
Explicamos: 
1) Creamos la F(flecha) agregarDato. Dentro creamos una variable "forma" que alojara el objeto de nuestro formulario,declarando dentro de [] el id del formulario "forma" quedando: let forma = document.forms['forma']

2) Ahora preguntaremos cual de las opciones del "select" selecciono el usuario; para ello definimos una variable "tipo" que alojara el objeto select+objeto(value), usando la variable creada antes "forma" indicaremos mediante [] el id que correspondiente al select, quedando:let tipo = forma['tipo'];

3) Con la misma logica y declaracion que el anterior, crearemos 2 variables que alojaran los valores de nuestros inputs respectivamente (descripcion-valor).

4) Ahora resuperaremos los valores de los inputs donde para acceder a el desclaramos (.value). Pero antes validaremos (para no cargar valores vacios con objetos), entonces creamos un if con la siguiente declaracion para descripcion y valor, que alguno de ambos sea distinto a cadena vacia, quedando:
if(descripcion.value !=='' && valor.value !=='')

5)Y aca, es donde usamos la variable "tipo" que aloja el valor del select+opcion (value). Dentro del if/else creado utlizaremos esta variable para preguntar si es igual a 'ingreso' o 'egreso', preguntando mediante otro if, quedando if(tipo.value === 'ingreso') o if(tipo.value === 'egreso') y creando un objeto segun sea el caso para uno u otro, de esta manera:

ingresos.push(new Ingreso(descripcion.value,valor.value))
egresos.push(new Egreso(descripcion.value,valor.value))

6) Aclaramos que como los valores que agreguemos serna del tipo String, por ello para descripcion no hay problema (seran letras/palabras), pero para valor.value debemos igresar valores numericos, por ello que es que podemos declararlo de las siguientes 2 formas, del que tomaremos la ultima que es mas sencilla de declarar:
 -Encerramos a valor.value entre () mas el metodo Number, quedando: 
 Number(valor.value) o agregamos signo mas y el nombre del atributo, quedando: +valor.value. De estas 2 maneras se hace la conversion a un valor numerico.-

 7) Por ultimo y finalizando como al agregar elementos tiene que actualizarse esto en pantalla es que debemos llamar a las funcion de cargarCabecero()/cargarIngresos() para el 2do if y para el 3ro cargarCabecero()/cargarEgresos()

*/

let agregarDato = ()=>
{
    let forma = document.forms['forma'];
    let tipo = forma['tipo']; //Regresa todo el valor del tipo select
    let descripcion = forma['descripcion']; //Regresa todo el valor del tipo input
    let valor = forma['valor']; //Regresa todo el valor del tipo input

    if(descripcion.value !=='' && valor.value !=='')
    {
        if(tipo.value === 'ingreso')
        {
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarIngresos();
        }

        else if(tipo.value === 'egreso')
        {
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}