import promptSync from "prompt-sync";
const prompt = promptSync();

const entrada: string = prompt(
    "Favor ingresa tu nombre "
);



function saludo(mensaje: string): string {

    return (
        `
        Bienvenido a la universidad de Oriente
        ${mensaje}
        Es un placer poder ayudarte a ser un mejor profecional
        `
    );

}

console.log(saludo(entrada))