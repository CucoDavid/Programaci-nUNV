import PromptSync from "prompt-sync";
const prompt = PromptSync();

const nota1: number= Number(prompt("Ingresa nota actividad 1"));
const nota2: number= Number(prompt("Ingresa nota actividad 2"));
const nota3: number= Number(prompt("Ingresa nota actividad 3"));

const promedio: number = nota1 + nota2 + nota3/3

console.log(`
    
    Tu promedio de notas es de ${promedio}

    Por que tus notas fueron
    nota1: ${nota1}
    nota2: ${nota2}
    nota3: ${nota3}   
    
    `)