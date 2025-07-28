console.log("¡Bienvenido a mi practica 2 de javascript!");

let nombre = "Alexander";

console.log(`Hola, ${nombre} bienvenido a tu practica 2 de javascript`);

let pregunta = prompt("¿Cuál es el lenguaje de programación que más te gusta?")

console.log(`El lenguaje de programación que más te gusta es: ${pregunta}`);

let valor1 = 7;

let valor2 = 3;

let resultado = valor1 + valor2;

console.log(`el resultado de la suma de ${valor1} y ${valor2} es: ${resultado}`);

let edadUser = parseInt(prompt("¿Cuál es tu edad?"));
console.log(`Eres ${edadUser >= 18 ? "mayor" : "menor"} de edad.`);

let numero = parseInt(prompt("Ingresa un número"));
if(numero > 0) {
    console.log(`El número ${numero} es positivo.`);
} else if(numero < 0) {
    console.log(`El número ${numero} es negativo.`);
} else {
    console.log("El número es cero.");
}

let numeros = 1;

while(numeros < 11) {
    console.log(`numeros del 1 al 10 : ${numeros}`);
    numeros++;
}

let nota = parseFloat(prompt("Ingresa tu nota (0-10)"));

let verificar = `${nota >= 7 ? "aprobado" : "reprobado"}`;
console.log(`Tu nota es: ${nota}, por lo tanto, estas ${verificar}`);

let numeroRandon = Math.random() * 5;

console.log(`Número aleatorio generado: ${numeroRandon}`);

let numeroEntero = Math.floor(Math.random()*1000 + 1);
console.log(`Número entero aleatorio generado: ${numeroEntero}`);