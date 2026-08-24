"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const peso = parseFloat(prompt("Ingrese su peso en kilogramos: "));
const altura = parseFloat(prompt("Ingrese su altura en metros: "));
const imc = peso / (altura ** 2);
if (imc < 18.5) {
    console.log(`Su IMC es ${imc.toFixed(2)} y su peso es bajo`);
}
else if (imc >= 18.5 && imc <= 25.0) {
    console.log(`Su IMC es ${imc.toFixed(2)} y su peso es normal`);
}
else if (imc > 25.0 && imc >= 30.0) {
    console.log(`Su IMC es ${imc.toFixed(2)} y su peso es alto`);
}
else {
    console.log(`Su IMC es ${imc.toFixed(2)} y su peso es obesidad`);
}
