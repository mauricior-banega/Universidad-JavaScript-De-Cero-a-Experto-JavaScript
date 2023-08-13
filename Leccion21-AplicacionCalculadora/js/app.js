console.log('Aplicación calculadora');


function sumar()
{   
    //Apuntamos hacia en objeto form mediante su identificador
    const forma = document.getElementById('forma'); 
    
    let operandoA = forma['operandoA']; //Declaracion sin error que podria ser

    let operandoB = forma['operandoB']; //Declaracion sin error que podria ser
    
    
    //Guardamos en variable todo el objeto input text
    
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    
        if (isNaN(resultado))
    {
        resultado = 'La operacion no incluye numeros';
    }
   

    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;

    
}
 
