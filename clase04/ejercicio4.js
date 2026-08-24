import promptSync from "prompt-sync";
const prompt = promptSync();
const Estudiante = prompt("Ingresa tu nombre de estudiante: ");
const N1 = Number(prompt("Ingresa un numero:"));
const N2 = Number(prompt("Ingresa otro numero:"));
const suma = N1 + N2;
const resta = N1 - N2;
const multiplicacion = N1 * N2;
const divison = N1 / N2;
console.log(`
    =================================================================================================
                Hola ${Estudiante} estos son los resultados de tus operaciones
    =================================================================================================
                Suma: ${suma}
                Resta: ${resta}
                Multiplicación: ${multiplicacion}
                División: ${divison}
    
    `);
