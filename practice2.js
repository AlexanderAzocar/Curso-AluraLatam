//fuction para calcular el IMC
function calcularImc (altura, peso) {
    return peso / (altura * altura);
}

// FUCTION para el factorial de un numero

function factorial (numero){
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * factorial(numero - 1);
    }
}

// Fuction para calcular dolares a reales
function dolaresAReales(dolares, tipoDeCambio) {
    return dolares * tipoDeCambio;
}

// funcion para calcualr una sala rectangular
function salaRectangular (altura, ancho) {
    let area = altura * ancho;
    let perinetro = 2 * (altura + ancho);
    return `El área de la sala es ${area.toFixed(2)} m² y el perímetro es ${perinetro} m.`;
}

function salaCircular (radio) {
    let area = Math.PI * Math.pow(radio, 2);
    let perimetro = 2 * Math.PI * radio;
    return `El área de la sala circular es ${area.toFixed(2)} m² y el perímetro es ${perimetro.toFixed(2)} m.`;
}

function tablaMultiplicar(numero) {
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    return resultado;
}

console.log(tablaMultiplicar(5));


console.log(salaRectangular(5, 10)); // Llamada a la función con altura y ancho de la sala

// Fuction para calcular reales a dolares
console.log("Fuction para calcular reales a dolares");
console.log(dolaresAReales(25, 4.80)); // Llamada a la función con 100 dólares y tipo de cambio de 5.25

// Ejemplo de uso de la función calcularImc
console.log(calcularImc(1.75, 70)); // Llamada a la función con altura en metros y peso en kg