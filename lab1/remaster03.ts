import promptSync from "prompt-sync";

const prompt = promptSync();

let numerIngresado: number;
let suma: number = 0;
let i: number = 1;

numerIngresado = Number(prompt("Ingrese un número entero positivo: "));

while (isNaN(numerIngresado) || !Number.isInteger(numerIngresado) || numerIngresado <= 0) {
    console.log("Número inválido.");
    numerIngresado = Number(prompt("Ingrese un número entero positivo: "));
}

while (i <= numerIngresado) {
    suma = suma + i;
    i++;
}

console.log("La suma de los números del 1 al " + numerIngresado + " es: " + suma);