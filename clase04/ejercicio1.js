import promptSync from "prompt-sync";
const prompt = promptSync();
const nombre = prompt("Ingrese su nombre:");
const edad = parseInt(prompt("Ingrese su edad:"));
console.log(`Hola, mucho gusto,espero teguste demasiado la materia de programacion estructurada ${nombre}. Aun eres muy joven, puedes lograr muchas cosas ${edad} años.`);
