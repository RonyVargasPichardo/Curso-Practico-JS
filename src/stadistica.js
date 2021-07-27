
/**     Encontrar el PROMEDIO */

//creo una funcion para calcular el promedio y recibe una lista como parametro
function calcularPromedio(lista){
    const reducer = (acumulador, valor) => acumulador + valor; //arrow funcion reductora del metodo .reduce
    const sumaLista = lista.reduce(reducer, 0);// primer parametro es la funcion y el segundo es el valor de inicio del acumulador
    const promedio = sumaLista / lista.length;

    console.log(promedio)
}


//es6
const calcPromedio = lista => lista.reduce((acumulado, valor) => acumulado + valor) / lista.length ;
calcPromedio([1,2,3,4])

