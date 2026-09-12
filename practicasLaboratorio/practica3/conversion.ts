import PromptSync from "prompt-sync";

const prompt = PromptSync();

function conversiones(
    option: string,
    callback: (resultado: number) => number
): number {

    switch (option.toLowerCase()) {

        case "farenheit":

            let temperatura: number = parseFloat(
                prompt("Ingrese la temperatura en Celsius: ")
            );

            return callback((temperatura * 9 / 5) + 32);

        case "celsius":

            let farenheit: number = parseFloat(
                prompt("Ingrese la temperatura en Farenheit: ")
            );

            return callback((farenheit - 32) * 5 / 9);

        case "kelvin":

            let celsius: number = parseFloat(
                prompt("Ingrese la temperatura en Celsius: ")
            );

            return callback(celsius + 273.15);

        default:

            throw new Error(
                "Opción inválida. Por favor, elige 'farenheit', 'celsius' o 'kelvin'."
            );
    }
}

const option: string = prompt(
    "Ingrese la unidad de temperatura a la que desea convertir (farenheit, celsius, kelvin): "
);

const resultado = conversiones(option, (resultado) => {
    return resultado;
});

console.log("Resultado:", resultado);