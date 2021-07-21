

/*Calculando el area y el perimetro de las figuras Geometricas */


/* Cuadrado */
console.group('Cuadrado');
const perimetroCuadrado = lado => console.log(`Los lados del cuadrado miden: ${lado}cm.
Perimetro: ${lado * 4}cm`);

const areaCuadrado = lado => console.log(`Los lados del cuadrado miden: ${lado}cm.
Area: ${lado * lado}cm^2`);
console.groupEnd();


/* Triangulo */
console.group('Triangulo');
const perimetroTriangulo = (lado1, lado2, base) => {
    console.log(`Los lados del triangulo miden: ${lado1}cm, ${lado2}cm y su base: ${base}cm.
    Perimetro: ${lado1 + lado2 + base}`);
}
const areaTriangulo = (base, altura) => {
    console.log(`La base del triangulo es: ${base}cm y su altura es: ${altura}cm.
    Area: ${(base * altura) / 2}`);
} 
console.groupEnd();



/* Circulo */
const PI = Math.PI;

console.group('Circulo');       
const diametroCirculo = radio => radio * 2;

const circunferenciaCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return console.log(`El radio del circulo es: ${radio}cm.
    Circunferencia: ${Math.floor(diametro * PI)}cm`);
};

const areaCirculo = (radio) => console.log(`El radio del circulo es: ${radio}cm.
Area: ${Math.floor((radio * radio)* PI)}cm^2`);
console.groupEnd();
