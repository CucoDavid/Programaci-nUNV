import promptSync from "prompt-sync";
const prompt = promptSync();

const Estudiante: string = prompt("Ingresa tu nombre de estudiante: ");
const N1: number = Number(prompt("Ingresa un numero:"));
const N2: number = Number(prompt("Ingresa otro numero:"));

const suma: number = N1 + N2;
const resta: number = N1 - N2;
const multiplicacion: number = N1 * N2;
const divison: number = N1 / N2;

console.log(`
    =================================================================================================
                Hola ${Estudiante} estos son los resultados de tus operaciones
    =================================================================================================
                Suma: ${suma}
                Resta: ${resta}
                Multiplicación: ${multiplicacion}
                División: ${divison}
    
    `);