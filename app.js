let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafio";

function mensajeEnConsola() {
    console.log("El boton fue clicado");
}

function mensajePrompt () {
    let ciudad = prompt("Nombre de una ciudad en Brasil");
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

function alerta() {
    alert("Yo amo Js");
}

function suma() {
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let resultado = num1 + num2;
    alert(`El resultado de la suma es: ${resultado}`);
}