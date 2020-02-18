
function saludar(nombre) {
    console.log('Hola ' + nombre)
}

function procesarEntradaUsuario(callback) {
    var nombre = prompt("Por favor ingresar tu nombre.")
    callback(nombre);
}

procesarEntradaUsuario(saludar)
