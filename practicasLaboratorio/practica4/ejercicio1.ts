/// ejercicio1
let palabra: string = "       CUCO  DAVId";
function inversorDepalabras(palabra: string): string {

    if (palabra === palabra.toUpperCase()) {
        return palabra.toLowerCase();
    }

    return palabra.toUpperCase();
}

console.log(inversorDepalabras(palabra));

//Ejercicio2

function eliminarspacios(palabra: string): string {
    return palabra.trim();
}

console.log(eliminarspacios(palabra));


//ejercicio3
function indentificarLetras(palabra: string, letras: string): void {

}

//ejercicio4

function cambiarTexto(
    texto: string,
    palabraBuscar: string,
    palabraNueva: string
): string {
    if (texto.includes(palabraBuscar)) {
        texto = texto.replace(palabraBuscar, palabraNueva)
        return texto;
    }
    return texto;
}



//ejercicio5

function contarPalabras(texto: string, primera: string, segunda: string): boolean {
    return texto.startsWith(primera) ? texto.endsWith(segunda) ? true : false : false;
}

let texto = "hola mundo";
let palabra1 = "mundo";
let palabra2 = " hola";
console.log(contarPalabras(texto, palabra1, palabra2));


//ejercicio6

function promedioN(n1: number, n2: number, n3: number): number {
    return (n1 + n2 + n3) / 3;

}

function aprobado(promedio: number): string {
    return promedio >= 7 ? "Aprobado" : "Reprobado";

}

let n1 = 5;
let n2 = 10;
let n3 = 15;
let promedio = promedioN(n1, n2, n3);

console.log(aprobado(promedio));

///ejercicio7
function analizarTemperatura(celsius: number): void {

    let fahrenheit: number = (celsius * 9 / 5) + 32;

    console.log("Temperatura en Celsius: " + celsius + " °C");
    console.log("Temperatura en Fahrenheit: " + fahrenheit + " °F");

    if (celsius <= 15) {
        console.log("La temperatura es Fría");
    } else if (celsius <= 25) {
        console.log("La temperatura es Agradable");
    } else {
        console.log("La temperatura es Caliente");
    }
}

let temperatura: number = parseFloat(prompt("Ingrese la temperatura en Celsius: ")!);

analizarTemperatura(temperatura);

