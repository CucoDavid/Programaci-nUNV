"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// ejercicio1
let palabra = "       CUCO  DAVId";
function inversorDepalabras(palabra) {
    if (palabra === palabra.toUpperCase()) {
        return palabra.toLowerCase();
    }
    return palabra.toUpperCase();
}
console.log(inversorDepalabras(palabra));
//Ejercicio2
function eliminarspacios(palabra) {
    return palabra.trim();
}
console.log(eliminarspacios(palabra));
//ejercicio3
function indentificarLetras(palabra, letras) {
}
//ejercicio4
function cambiarTexto(texto, palabraBuscar, palabraNueva) {
    if (texto.includes(palabraBuscar)) {
        texto = texto.replace(palabraBuscar, palabraNueva);
        return texto;
    }
    return texto;
}
