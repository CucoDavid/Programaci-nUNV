"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const anio = prompt("Ingrese el año: ");
const anioNum = parseInt(anio, 10);
if (anioNum % 4 === 0 && anioNum % 100 !== 0 || anioNum % 400 === 0) {
    console.log(`${anioNum} es un año bisiesto`);
}
else {
    console.log(`${anioNum} no es un año bisiesto`);
}
