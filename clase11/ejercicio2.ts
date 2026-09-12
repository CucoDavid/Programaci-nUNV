import promptSync from "prompt-sync";
const prompt = promptSync();

function generarSaludo(
    nombre: string,
    apellido?: string,
    dato = "Univo"
    
): string {
    if (apellido !== undefined) {
        return `Hola, ${nombre} ${apellido} ${dato}`;
    }

    return `Hola, ${nombre}`;
}

const nombre: string = prompt("Ingresa tu primer nombre");
const apellido: string = prompt("Ingrese su apellido.")


console.log(generarSaludo(`${nombre},${apellido} `));