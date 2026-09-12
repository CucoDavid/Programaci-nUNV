import PromptSync from "prompt-sync";
const prompt = PromptSync();


function contarCategorias(numeros: number[]): {
    pares: number;
    impares: number;
    primos: number;
} {
    let pares = 0;
    let impares = 0;
    let primos = 0;

    for (const numero of numeros) {
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }

        if (esPrimo(numero)) {
            primos++;
        }
    }

    return { pares, impares, primos };
}

function esPrimo(numero: number): boolean {
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
const numeros: number[] = [];

while (prompt("¿Desea ingresar un número? (s/n): ").toLowerCase() === "s") {

    const numero = parseInt(prompt("Ingrese un número: "), 10);
    numeros.push(numero);
}

const resultado = contarCategorias(numeros);
console.log("Cantidad de pares:", resultado.pares);
console.log("Cantidad de impares:", resultado.impares);
console.log("Cantidad de primos:", resultado.primos);