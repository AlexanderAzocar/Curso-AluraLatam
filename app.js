//declaracion de variables
let numeroSecreto = 0;
//contador de intentos
let intentos = 0;


//funcion para asignar texto a un elemento HTML
function asignarTextoElemento (elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
} 

//funcion para jugar al juego del numero secreto
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}

//funcion para validar el intento del usuario
function validarIntentoDeUsuario() {
    let numeroDeUsuario = parseInt(document.getElementById("intentoDeUsuario").value);
    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `¡Felicidades! Has adivinado el número secreto en ${intentos} ${(intentos === 1) ? "vez":"veces"}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento("p", "El número secreto es mayor. Inténtalo de nuevo.");
    } else {
        asignarTextoElemento("p", "El número secreto es menor. Inténtalo de nuevo.");
    }
    intentos++;
    limpiarCaja();
    return;
}

//funcion para iniciar el juego del numero secreto
function nuevoJuego() {
    //limpiar el campo de entrada
    limpiarCaja();
    //llamar a la funcion de llamadas iniciales
    llamadasIniciales();
    //habilitar el boton de reiniciar
    document.getElementById("reiniciar").setAttribute("disabled", true);
    return;
}

//funcion para limpiar el campo de entrada
function limpiarCaja() {
    document.querySelector("#intentoDeUsuario"). value = "";
    return;
}

//llamadas a las funciones iniciales
function llamadasIniciales() {
    asignarTextoElemento("h1", 'Juego del Numero Secreto!');
    asignarTextoElemento("p", 'Indica un numero del 1 al 100');
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos = 1;
    
}

//funcion para reiniciar el juego
llamadasIniciales();

//llamada a la funcion jugarNumeroSecreto
generarNumeroSecreto();
