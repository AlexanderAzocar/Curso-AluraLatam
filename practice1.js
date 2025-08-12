//fuctions of practice 1

//funcion de saludo sin parametros
function saludo() {
    console.log("¡Hola, bienvenido a mi practica de javaScript!");
    return;
}

//funcion de llamada con 1 parametro
function saludoConNombre(nombre) {
    console.log(`¡Hola, ${nombre}! Bienvenido a mi practica de javaScript!`);
    return;
}

//funcion para calcular el doble de un numero
function dobleDeNumero(numero) {
    return numero * 2;
}

//funcion para calcular promedio, con tres parametros
function promedioDeTresNumeros(numero1, numero2, numero3) {
    let suma = numero1 + numero2 + numero3;
    return suma / 3;
}

// funcion para cmparar dos numeros
function compararNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        return `El numero mayor es ${numero1}`;
    } else if (numero2 > numero1) {
        return `El numero mayor es ${numero2}`;
    } else {
        return "Los numeros son iguales";
    }
}

// funcion de multiplicar un numero por si mismo
function multiplicarPorSiMismo(numero) {
    return numero * numero;
}

//llamada a la funcion multiplicarPorSiMismo
console.log(multiplicarPorSiMismo(5)); //para verificar el resultado en la

//llamada a la funcion compararNumeros
console.log(compararNumeros(5, 10)); //para verificar el resultado en la consola

//llamada a la funcion promedioDeTresNumeros
console.log(promedioDeTresNumeros(18,17,16)); //para verificar el resultado en la consola

//llamada a la funcion dobleDeNumero
console.log(dobleDeNumero(7)); //para verificar el resultado en la consola

//llamada a la funcion saludoConNombre
saludoConNombre("Alexander");

//llamada a la funcion saludo
saludo();