

/** Encontrar el interes simple  */

//funcion que calcula el interes simple
function interesSimple(capital , anio, mes, tasaInteres) {                                                     
    const tiempo = ( anio * 12 ) + mes;    //convierto los a?os a meses...guardo cantidad de meses..obtengo el tiempo sumando los meses con los a?os           
    const interesSimple = ( capital * tiempo * tasaInteres ) / 100 ;  //realizo la formula del interes simple..
    return interesSimple;
}

//valido los campos
function validarCampos(){
   return (capital.value === '' || meses.value === '' || tasaDeInteres.value === '')
}

function CalcularTasaDeInteres(){
    const valorCapital = capital.value;
    const valorMeses = meses.value;
    const valorAnios = anios.value;
    const valorTasaInteres = tasaDeInteres.value;
    const validoCampos = validarCampos();
    let resultInteres;

    if(validoCampos){
        alert(`Ingresa los datos que faltan`) ;
    }else{
        resultInteres = interesSimple(+valorCapital, +valorAnios, +valorMeses, +valorTasaInteres);
        result.innerText = `El Interes Simple: ${resultInteres} `;
    }
}

//input de html
const capital = document.getElementById('capital');
const meses = document.getElementById('meses');
const anios = document.getElementById('anios');
const tasaDeInteres = document.getElementById('tasa');
const result = document.getElementById('resultInteres');



