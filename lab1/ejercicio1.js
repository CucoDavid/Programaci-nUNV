import PromptSync from "prompt-sync";
const prompt = PromptSync();
const numero = parseInt(prompt("Ingresa el numero que deseas multiplicar:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
