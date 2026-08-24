"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const name = prompt("Ingrese su nombre: ");
const option = prompt(`
    ingrese una opción sobre su cargo laboral:
    1.Contador
    2.Tecnico
    3.Mecanico
    4.Desarrollador
    `);
function cargoLaboral(option) {
    switch (option) {
        case "1":
            return `Hola ${name}, su cargo laboral es Contador`;
        case "2":
            return `Hola ${name}, su cargo laboral es Tecnico`;
        case "3":
            return `Hola ${name}, su cargo laboral es Mecanico`;
        case "4":
            return `Hola ${name}, su cargo laboral es Desarrollador`;
        default:
            return `Hola ${name}, opción no válida`;
    }
}
console.log(cargoLaboral(option));
