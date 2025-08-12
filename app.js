// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var amigos = [];

//fuction to add a friend
function agregarAmigo(name) {
    let nombreDelAmigo = document.getElementById("amigo").value;
    if (nombreDelAmigo == "") {
        alert("Por favor, ingresa un nombre.");
    } else if (amigos.includes(nombreDelAmigo)) {
        alert("El amigo ya está en la lista.");
    } else {
        amigos.push(nombreDelAmigo);
        limpiarCaja();
        mostrarAmigos();
    }
}

//fuction clear box text
function limpiarCaja(){
    document.getElementById("amigo").value = "";
    return;
}

//mostrar amigos
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//fuction para sortear amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    limpiarLista();
    document.getElementById("resultado").textContent = "El amigo secreto sorteado es: " + amigoSorteado;
}


//fuction para limpiar la lista de amigos
function limpiarLista() {
    document.getElementById("listaAmigos").innerHTML = "";
}
