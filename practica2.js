alert("¡Bienvenido al juego de adivinar el número secreto!");

let rango = parseInt(prompt('ingresa numero para definir el rango del número secreto, el que tu quieras jugar, por ejemplo 1000'));
let numeroSecreto = Math.floor(Math.random() * rango + 1);

console.log("Número secreto generado: " + numeroSecreto); // Para depuración, se

let maximosIntentos = parseInt(prompt('¿Cuántos intentos quieres tener para pasar el juego?'));
console.log("maximo de intentos: " + maximosIntentos); // Para depuración, se puede eliminar en producción

let intentos = 1; // Contador de intentos
let numeroUsuario = 0;

while (numeroUsuario !== numeroSecreto && intentos > 0) {
    numeroUsuario = parseInt(prompt(`Adivina el número secreto (entre 1 y ${rango}).`));
    console.log("Número ingresado por el usuario: " + numeroUsuario); // Para depuración, se puede eliminar en producción
    
    if (numeroUsuario == numeroSecreto) {
        alert(`¡Felicidades! Adivinaste el número secreto ${numeroSecreto} en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}!`);   
    } else {
        if (numeroUsuario < numeroSecreto) {
            alert("El número secreto es mayor. Intenta de nuevo.");
        } else {
            alert("El número secreto es menor. Intenta de nuevo.");
        }  intentos = intentos + 1;
              if  (intentos > maximosIntentos) {
                     alert(`haz superado el número máximo de intentos  (${maximosIntentos}). El número secreto era ${numeroSecreto}.`);
                     break;
              }
    }
}

