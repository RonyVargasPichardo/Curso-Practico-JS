
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
console.log(calcPromedio([1,2,3,4]));








/**     Encontrar la MEDIANA */

/*  Arrow funcion para verificar si la lista de un array es par o impar.
    Si es par me devuelve true si no lo es me devuelve false.
    Aqui uso el modulo de js que consiste en revisar si una
    division no deja residuo(ej: 0.2) el residuo seria el numero(2)    */

function calcularLaMediana(lista) {
    const ordenar = lista => lista.sort((a, b) => a - b ) // metodo .sort este recibe una funcion para ordenarlo de forma adecuada; 
    const listaOrdenada = ordenar(lista);   // ordena una lista desordenada de array, compara un elemento con otro.
    let mitadLista = parseInt(listaOrdenada.length / 2) ;    //divido la listaOrdenada en dos para encontrarle la mitad 
    const esPar = longitudLista => (longitudLista % 2 === 0); //arrow funcion, retorna true o false, para saber si la lista es par o impar
    let mediana;

    if (esPar(listaOrdenada.length)){
        let num1 , num2; //lo dos numeros del medio de la listaOrdenada
        num1 = mitadLista;
        num2 = --mitadLista;
        mediana = (listaOrdenada[num1] + listaOrdenada[num2]) / 2 // encuentro su media aritmetica, resultado obtengo la mediana de la listaOrdenada
        console.log(`La mediana de esta lista ${listaOrdenada} es: ${mediana}`); 
    }
    else {
        mediana = listaOrdenada[mitadLista];
        console.log(`La mediana de esta lista ${listaOrdenada} es: ${mediana}`)
    }
}

calcularLaMediana([2000, 200, 1000, 500, 600, 520]);




