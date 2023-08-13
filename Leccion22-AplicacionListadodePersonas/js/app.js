
const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara'),
    
];

function mostrarPersonas()
{
    console.log('Mostrar personas');
    let texto ='';

    for(let persona of personas)
    {
        console.log(persona);
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
    }

    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona()
{
    const forma = document.forms['forma']; //(3*)

    //En c/u recuperamos el objeto completo, debemos traer el valor text de los imputs.

    const nombre = forma['nombre']; 
    const apellido = forma['apellido'];

    //(4*)
    if (nombre.value !='' && apellido.value !='')
    {

        //Creamos el objeto con los datos de persona.
    const persona = new Persona (nombre.value, apellido.value);
    //A modo muestra imprimimos por consola como queda esa variable con los datos persona.
    console.log(persona);

    //Por ultimo, cargamos este objeto en el arreglo persona[]
    personas.push(persona);

    mostrarPersonas(); //Sino llamamos a la funcion esta crea el objeto y todo, pero no lo muestra en formulario.

    }

    else
    {
        console.log('No hay informacion que agregar');
    }

    


}
