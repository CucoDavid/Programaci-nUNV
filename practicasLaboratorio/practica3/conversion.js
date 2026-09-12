"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function conversiones(option, callback) {
    switch (option.toLowerCase()) {
        case "farenheit":
            let temperatura = parseFloat(prompt("Ingrese la temperatura en Celsius: "));
            return callback((temperatura * 9 / 5) + 32);
        case "celsius":
            let farenheit = parseFloat(prompt("Ingrese la temperatura en Farenheit: "));
            return callback((farenheit - 32) * 5 / 9);
        case "kelvin":
            let celsius = parseFloat(prompt("Ingrese la temperatura en Celsius: "));
            return callback(celsius + 273.15);
        default:
            throw new Error("Opción inválida. Por favor, elige 'farenheit', 'celsius' o 'kelvin'.");
    }
}
const option = prompt("Ingrese la unidad de temperatura a la que desea convertir (farenheit, celsius, kelvin): ");
const resultado = conversiones(option, (resultado) => {
    return resultado;
});
console.log("Resultado:", resultado);
