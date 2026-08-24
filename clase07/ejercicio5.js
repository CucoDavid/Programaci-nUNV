"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
console.log(`
    ==========================================================================
    
                Es coge una opcion zona oriental, zonca central, zona occidental
                1. Zona Oriental
                2. Zona Central
                3. Zona Occidental
    ==========================================================================
    `);
const destino = prompt("Ingrese el destino del paquete:");
let lugar = "";
let zona = "";
switch (destino) {
    case "1":
        const orienteprc = 3.50;
        console.log("El destino es zona oriental");
        zona = "Zona Oriental";
        console.log(`
    ==========================================================================
    
                Es coge una opcion zona oriental, zonca central, zona occidental
                1. San miguel
                2. Usulután
                3. La Unión
                4. Morazán
    ==========================================================================
    `);
        const depa = prompt("Ingrese el departamento del paquete:");
        switch (depa) {
            case "1":
                console.log("El departamento es San miguel");
                lugar = lugar + "San miguel";
                break;
            case "2":
                console.log("El departamento es Usulután");
                lugar = lugar + "Usulután";
                break;
            case "3":
                console.log("El departamento es La Unión");
                lugar = lugar + "La Unión";
                break;
            case "4":
                console.log("El departamento es Morazán");
                lugar = lugar + "Morazán";
                break;
            default:
                console.log("Opción no válida");
        }
        console.log(`=======================================================================
            La zona a que corresponde el envio de tu pedido es
            ${zona}
            el departamento de envio es:
            ${lugar}
            costo del envio es:
            $${orienteprc}
            ==========================================================================`);
        break;
    case "2":
        const centralprc = 5;
        console.log("El destino es zona central");
        zona = "Zona Central";
        console.log(`
    ==========================================================================
    
                Escoja una opcion en zona central
                1. San Salvador
                2. La Libertad
                3. Cuscatlán
                4. Chalatenango
    ==========================================================================
    `);
        const depaCentral = prompt("Ingrese el departamento del paquete:");
        switch (depaCentral) {
            case "1":
                console.log("El departamento es San Salvador");
                lugar = lugar + "San Salvador";
                break;
            case "2":
                console.log("El departamento es La Libertad");
                lugar = lugar + "La Libertad";
                break;
            case "3":
                console.log("El departamento es Cuscatlán");
                lugar = lugar + "Cuscatlán";
                break;
            case "4":
                console.log("El departamento es Chalatenango");
                lugar = lugar + "Chalatenango";
                break;
            default:
                console.log("Opción no válida");
        }
        console.log(`=======================================================================
            La zona a que corresponde el envio de tu pedido es
            ${zona}
            el departamento de envio es:
            ${lugar}
            costo del envio es:
            $${centralprc}
            ==========================================================================`);
        break;
    case "3":
        const occidentprc = 6.25;
        console.log("El destino es zona occidental");
        zona = "Zona Occidental";
        console.log(`
    ==========================================================================
    
                Escoja una opcion en zona occidental
                1. Ahuachapán
                2. Sonsonate
                3. Santa Ana
                4. La Paz
    ==========================================================================
    `);
        const depaOccidente = prompt("Ingrese el departamento del paquete:");
        switch (depaOccidente) {
            case "1":
                console.log("El departamento es Ahuachapán");
                lugar = lugar + "Ahuachapán";
                break;
            case "2":
                console.log("El departamento es Sonsonate");
                lugar = lugar + "Sonsonate";
                break;
            case "3":
                console.log("El departamento es Santa Ana");
                lugar = lugar + "Santa Ana";
                break;
            case "4":
                console.log("El departamento es La Paz");
                lugar = lugar + "La Paz";
                break;
            default:
                console.log("Opción no válida");
        }
        console.log(`=======================================================================
            La zona a que corresponde el envio de tu pedido es
            ${zona}
            el departamento de envio es:
            ${lugar}
            costo del envio es:
            $${occidentprc}
            ==========================================================================`);
        break;
    default:
        console.log("Opción no válida");
}
