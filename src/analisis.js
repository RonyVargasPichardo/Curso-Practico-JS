
const salarioColombia = colombia.map( (persona) => persona.salary ) ;
const salarioColombiaOrdenado = salarioColombia.sort( (salarioA, salarioB) => salarioA - salarioB)
const esPar = longitudLista => longitudLista % 2 === 0 ;

//promedio de una lista de numeros
const mediaAritmetica = lista => lista.reduce( (acumulado, valor) => acumulado + valor) / lista.length;
   

//calcular mediana general de un pais
const medianaSalariosPais = (lista) =>{
    const mitadLista = parseInt(lista.length / 2);
    let mediana;

    if(esPar(lista.length)){
        let num1 = lista[mitadLista - 1]
        let num2 = lista[mitadLista]
        return mediana = mediaAritmetica([num1, num2])
        
    }else {
       return  mediana = lista[mitadLista];
    }
} 

//calcular la mediana general el top x% de un pais
const medianaTopPorciento = (lista, porciento) => {
    const sliceStart = parseInt( lista.length * (100 - porciento)/ 100) ; 
    const listaTopPorciento = lista.slice(sliceStart);
    const medianaTopPorciento = medianaSalariosPais(listaTopPorciento);
    return medianaTopPorciento;
}

const medianaGeneralCol = medianaSalariosPais(salarioColombiaOrdenado);
const medianaGeneralColTop = medianaTopPorciento(salarioColombiaOrdenado, 10);


console.log({
    medianaGeneralCol,
    medianaGeneralColTop
})

// console.log(`La mediana del grupo de salarios de ${pais} es: ${mediana}$`);

// console.log(`La mediana del grupo de salarios de ${pais} es: ${mediana}$`);

