
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





/**     Encontrar la MODA */


function calcularModa (lista) {
    
    lista.sort( (a, b) => a - b ); //ordeno mi lista de forma de menor a mayor ejem: 1,2,3...
    let obj = {}, listCount;      //creo dos variables una posse un objeto vacio y otra solo la declare;

    lista.map( elemento => {      //mapeo la lista para agregarle al obj la cantidad de veces que se repite un numero ejem: {'2' = 2, '1' = 3, } .

        if(obj[elemento]){
            obj[elemento] += 1;
        } else {
            obj[elemento] = 1;    //creo un nuevo elemento al objeto y le agrego el valor 1 ejemplo {'1' = 1}
        }

    })

    listCount = Object.entries(obj);           // combierto mi obj en un array para usar metodos del array.
    listCount.sort( (a, b ) => a[1] - b[1] )  //ordena mi array

    let variasModas = listCount.filter( (ele) => listCount[listCount.length -1][1] === ele[1]); //los numeros que se repiten mas de la lista con la misma cantidad
    variasModas.map( (elemento) => elemento.pop() )   //me elimina el ultimo elemento 
    
    if(variasModas.length > 1) {
        console.log(`tienes mas de una moda en esta lita: '${lista}'.
Las MODAS son: ${variasModas}`)
    }else {
        console.log(`La moda de esta lista: ${lista}.
La MODA es: ${listCount[listCount.length -1][0]}.`)
    }

    
}
calcularModa([2,2,2,2,4,6,6,6,6,5,7,8,9,10,10,10,10,23,65])
calcularModa([1,1,1,1,5,5,5,4])




/**RETO:    encontrar la media geometrica */

//formula  = GM = (x1 * x2 * x3)^1/n 
// donde x es cada uno de los elementos que conforma la lista.
// y n es la cantidad de elementos que conforma la lista.

function calcularMediaGeometrica(lista){
    //ordeno mi lista
    lista.sort( (a,b) => a - b);
    //obtengo la cantidad de elementos de la lista
    const cantidadElementos = lista.length;
    //multiplico cada elemento de mi lista y obtengo el resultado
    const resultMultiplicacion = lista.reduce( (acumulado, elemento) => acumulado * elemento);
    //calculo el resultado de la multiplicacion elevandolo a la potencia Y obtengo la media geometrica(GM)
    const GM = Math.pow(resultMultiplicacion, 1/cantidadElementos).toFixed(3);
    console.log(`La Media Geometrica de este grupo de elementos: '${lista}'.
ES: ${GM}.`) 
}
calcularMediaGeometrica([12,3,5,6,6,7,10,])
