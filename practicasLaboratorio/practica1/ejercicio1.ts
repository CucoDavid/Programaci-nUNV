import promptSync from "prompt-sync";
const prompt = promptSync();

const temperaturaCelsius: number = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
const temperaturaFahrenheit: number = (temperaturaCelsius * 9/5) + 32;
console.log(`La temperatura en grados Fahrenheit es: ${temperaturaFahrenheit}`);