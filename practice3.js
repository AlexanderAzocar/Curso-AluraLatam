let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLenguajesDeProgramacion() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

function ordenInverso () {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function promedioNumeros(listaNumeros) {
    let suma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
        suma += listaNumeros[i];
    }
    return suma / listaNumeros.length;
}

function numeroGrandePequeno(listaNumeros) {
    let numeroGrande = Math.max(...listaNumeros);
    let numeroPequeno = Math.min(...listaNumeros);
    return `El número más grande es ${numeroGrande} y el más pequeño es ${numeroPequeno}.`;
}

function sumarLista(listaNumeros) {
    return listaNumeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

function devolverElemento(listaNumeros, indice) {
    if (indice >= 0 && indice < listaNumeros.length) {
        return listaNumeros[indice];
    } else {
        return 'Índice fuera de rango';
    }
}

function cuadradoDeLista(listaNumeros) {
    return listaNumeros.map(numero => numero ** 2);
}