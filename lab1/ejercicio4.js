import PromptSync from "prompt-sync";
const prompt = PromptSync();
let nota = parseFloat(prompt("Ingrese la nota del estudiante (0-10): "));
console.log("Si deseas dejar de ingresar notas, ingresa un valor negativo.");
let sumaNotas = 0;
let i = 0;
while (nota >= 0) {
    sumaNotas += nota;
    i++;
    nota = parseFloat(prompt("Ingrese la nota del estudiante (0-10): "));
}
console.log(`La suma total de las notas es: ${sumaNotas}`);
console.log(`El número de notas ingresadas es: ${i}`);
console.log(`El promedio de las notas es: ${sumaNotas / i}`);
