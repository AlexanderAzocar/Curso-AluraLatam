



let numeroSecreto = Math.floor(Math.random()*1000 + 1);
console.log("Número secreto generado: " + numeroSecreto); // Para depuración, se puede eliminar en producción
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 0;
//let palabraSon = "intento que es ";

alert("¡Bienvenido al juego de adivinar el número secreto!");
maximosIntentos = parseInt(prompt("¿Cuántos intentos quieres hacer? (máximo 10 intentos)"));

while (numeroUsuario !== numeroSecreto) {
       numeroUsuario = parseInt(prompt(`Intento ${intentos}: Adivina el número secreto (entre 1 y 10)`));

       console.log("numero ingresado: " + numeroUsuario);
       if (numeroSecreto == numeroUsuario) {
              alert(`¡Felicidades! Adivinaste el número secreto ${numeroSecreto} en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}!`);   
       } else {
              if (numeroUsuario < numeroSecreto) {
                     alert("El número secreto es mayor. Intenta de nuevo.");
              } else {
                     alert("El número secreto es menor. Intenta de nuevo.");
              }
              intentos = intentos + 1;
              if  (intentos > maximosIntentos) {
                     alert(`haz superado el número máximo de intentos  (${maximosIntentos}). El número secreto era ${numeroSecreto}.`);
                     break;
              }
       }
}