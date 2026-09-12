"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function enviarmensaje(mensaje, callback) {
    callback(mensaje);
}
function mostrarMensaje(mensaje) {
    console.log(`El mensaje es: ${mensaje}`);
}
enviarmensaje("Tienes un nuevo mensaje", mostrarMensaje);
mostrarMensaje("Tu cuenta está bloqueada");
