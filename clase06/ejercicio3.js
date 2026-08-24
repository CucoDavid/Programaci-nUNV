import promptSync from "prompt-sync";
const prompt = promptSync();
const nombre = prompt("Ingresa tu nombre");
let nombre2 = nombre.trim();
nombre2 = nombre2.slice(0, 1);
let nombre3 = nombre2.toUpperCase();
let nombre4 = nombre.toLowerCase();
nombre4 = nombre4.slice(1);
console.log(nombre3 + nombre4);
