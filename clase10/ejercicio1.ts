import promptSync from "prompt-sync";

const prompt = promptSync();

// Función para calcular la cantidad de áreas a calcular
function solicitarCantidadEspacios(): number {

    let cantidadEspacios: number;

    do {

        const entrada: string = prompt(
            "¿Cuántos espacios desea procesar? "
        );

        cantidadEspacios = Number(entrada);

        if (isNaN(cantidadEspacios)) {

            console.log(
                "Error: debe ingresar un valor numérico."
            );

        } else if (cantidadEspacios <= 0) {

            console.log(
                "Error: debe ingresar un número mayor a cero."
            );
        }

    } while (isNaN(cantidadEspacios) || cantidadEspacios <= 0);

    return cantidadEspacios;
}

// Función para solicitar una medida
function solicitarMedida(mensaje: string): number {

    let medida: number;

    do {

        const entrada: string = prompt(mensaje);

        medida = parseFloat(entrada);

        if (isNaN(medida)) {

            console.log(
                "Error: La medida debe ser mayor que cero."
            );

        } else if (medida <= 0) {

            console.log(
                "Error: La medida debe de ser mayor que cero."
            );
        }

    } while (Number.isNaN(medida) || medida <= 0);

    return medida;
}

// Función para calcular área
function calcularArea(base: number, altura: number): number {

    return base * altura;
}