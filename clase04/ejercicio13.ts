import PromptSync from "prompt-sync";
const prompt = PromptSync();

const nombreHuesped: string = prompt("Ingrese el nombre del huésped: ");
const fechaEntrada: string = prompt("Ingrese la fecha de entrada: ");
const cantidadNoches: number = Number(prompt("Ingrese la cantidad de noches: "));
const precioPorNoche: number = Number(prompt("Ingrese el precio por noche: "));

const totalEstadia: number = cantidadNoches * precioPorNoche;

console.log(`
    ==================================================
    TARJETA DE RESERVACIÓN

    Huésped: ${nombreHuesped}
    Fecha de entrada: ${fechaEntrada}
    Cantidad de noches: ${cantidadNoches}
    Precio por noche: $${precioPorNoche}
    Total de la estadía: $${totalEstadia}
    ==================================================
`);
