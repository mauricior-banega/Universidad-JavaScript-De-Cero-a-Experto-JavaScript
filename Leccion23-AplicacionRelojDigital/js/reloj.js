
/*Usaremos funciones flecha para familiarizarnos mas, pero es igual si usaramos las funciones comunes.
*/

const mostrarReloj = () =>
{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene','Feb', 'Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];

    let diaSemana = dias[fecha.getDay()]; //Preguntasa (3*)
    console.log(diaSemana);
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) => //(2*)
{
    if(hora<10)
        hora = '0'+hora;
    return hora;
}

//(1*)
setInterval(mostrarReloj,1000);