// Array que almacena los nombres de los amigos
let amigos = ["Eduardo", "Matias", "Rayen", "Anaira", "Ines", "Valeria"];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Obtener el valor y eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista en pantalla
    actualizarLista();
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = "";

    // Recorrer el array y agregar cada amigo a la lista
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎊</p>`;
}

// Cargar la lista inicial de amigos al cargar la página
document.addEventListener("DOMContentLoaded", actualizarLista);
