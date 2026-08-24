"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const temperaturaCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
console.log(`La temperatura en grados Fahrenheit es: ${temperaturaFahrenheit}`);
