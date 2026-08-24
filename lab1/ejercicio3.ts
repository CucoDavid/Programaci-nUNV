//Este ejercicio como es del los numeros naturales, entonces yo voy a tomar los primeros 10 jaj
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const numero: number = parseInt(prompt("Ingresa el numero natural hasta el que deseas sumar:"));

let suma: number = 0;
for (let i = 1; i <= numero; i++) {
    suma += i;
    console.log(`Suma parcial hasta ${i}: ${suma}`);
}

