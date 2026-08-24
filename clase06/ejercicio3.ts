import promptSync from "prompt-sync";

const prompt = promptSync();

const nombre: string = prompt("Ingresa tu nombre");

let nombre2: string= nombre.trim();

nombre2 = nombre2.slice(0,1);
let nombre3: string = nombre2.toUpperCase();
let nombre4: string = nombre.toLowerCase();
nombre4 = nombre4.slice(1)
console.log(nombre3 + nombre4);




