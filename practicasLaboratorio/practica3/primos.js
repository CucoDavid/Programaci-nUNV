"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function contarCategorias(numeros) {
    let pares = 0;
    let impares = 0;
    let primos = 0;
    for (const numero of numeros) {
        if (numero % 2 === 0) {
            pares++;
        }
        else {
            impares++;
        }
        if (esPrimo(numero)) {
            primos++;
        }
    }
    return { pares, impares, primos };
}
function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let divisor = 2; divisor * divisor <= numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}
const numeros = [];
while (prompt("¿Desea ingresar un número? (s/n): ").toLowerCase() === "s") {
    const numero = parseInt(prompt("Ingrese un número: "), 10);
    numeros.push(numero);
}
const resultado = contarCategorias(numeros);
console.log("Cantidad de pares:", resultado.pares);
console.log("Cantidad de impares:", resultado.impares);
console.log("Cantidad de primos:", resultado.primos);
