import PromptSync from "prompt-sync";
const prompt = PromptSync();
const numero:number = parseInt(prompt("Ingresa hasta el numero que deseas encontrar los numeros pares:"));
let j = 0;
for (let i = 2; i <= numero; i+=2){
    j++;
    console.log(`#${j} - Número par encontrado: ${i}`);
}
console.log(`El número de números pares encontrados es: ${j}`);