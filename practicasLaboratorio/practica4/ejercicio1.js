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
//ejercicio5
function contarPalabras(texto, primera, segunda) {
    return texto.startsWith(primera) ? texto.endsWith(segunda) ? true : false : false;
}
let texto = "hola mundo";
let palabra1 = "mundo";
let palabra2 = " hola";
console.log(contarPalabras(texto, palabra1, palabra2));
//ejercicio6
function promedioN(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
function aprobado(promedio) {
    return promedio >= 7 ? "Aprobado" : "Reprobado";
}
let n1 = 5;
let n2 = 10;
let n3 = 15;
let promedio = promedioN(n1, n2, n3);
console.log(aprobado(promedio));
