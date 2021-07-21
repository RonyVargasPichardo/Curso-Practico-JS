

/*Calculando el area y el perimetro de las figuras Geometricas */


/* Cuadrado */
console.group('Cuadrado');
const perimetroCuadrado = lado => alert(`Los lados del cuadrado miden: ${lado}cm.
Perimetro: ${lado * 4}cm`);

const areaCuadrado = lado => alert(`Los lados del cuadrado miden: ${lado}cm.
Area: ${lado * lado}cm^2`);
console.groupEnd();


/* Triangulo */
console.group('Triangulo');
const perimetroTriangulo = (lado1, lado2, base) => {
    alert(`Los lados del triangulo miden: ${lado1}cm, ${lado2}cm y su base: ${base}cm.
    Perimetro: ${lado1 + lado2 + base}`);
}
const areaTriangulo = (base, altura) => {
    alert(`La base del triangulo es: ${base}cm y su altura es: ${altura}cm.
    Area: ${(base * altura) / 2}`);
} 
console.groupEnd();



/* Circulo */
const PI = Math.PI;

console.group('Circulo');       
const diametroCirculo = radio => radio * 2;

const circunferenciaCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return alert(`El radio del circulo es: ${radio}cm.
    Circunferencia: ${Math.floor(diametro * PI)}cm`);
};

const areaCirculo = (radio) => alert(`El radio del circulo es: ${radio}cm.
Area: ${Math.floor((radio * radio)* PI)}cm^2`);
console.groupEnd();




/// calculado el area y perimetro de las figuras geometricas con html integrando JS


function calcularPerimetroCuadrado(){ 
    const inputCuadrado = document.getElementById('ladoCuadrado');
    const valueCuadrado = parseInt(inputCuadrado.value);
    perimetroCuadrado(valueCuadrado);
}
function calcularAreaCuadrado(){ 
    const inputCuadrado = document.getElementById('ladoCuadrado');
    const valueCuadrado = inputCuadrado.value;
    areaCuadrado(valueCuadrado);
}

function calcularPerimetroTriangulo(){ 
    const inputTrianguloL1 = parseInt(document.getElementById('lado1').value);
    const inputTrianguloL2 = parseInt( document.getElementById('lado2').value);
    const inputTrianguloB = parseInt( document.getElementById('base').value);

    perimetroTriangulo(inputTrianguloL1, inputTrianguloL2, inputTrianguloB);
}
function calcularAreaTriangulo(){ 
    const inputTrianguloB = parseInt( document.getElementById('base').value);
    const inputTrianguloA = parseInt(document.getElementById('altura').value);

    areaTriangulo(inputTrianguloB, inputTrianguloA)
}
function calcularPerimetroCirculo(){ 
    const inputRadio = parseInt(document.getElementById('radio').value);

    circunferenciaCirculo(inputRadio);
}
function calcularAreaCirculo(){ 
    const inputRadio = parseInt(document.getElementById('radio').value);
    areaCirculo(inputRadio);
}


