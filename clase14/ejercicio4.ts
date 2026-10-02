function conservarDatoAny(dato: any): any {
    return dato;
}

function conservarDatoGenerico<T>(dato: T): T {
    return dato;
}

let resultadoAny = conservarDatoAny("Hola UNIVO");
resultadoAny.toFixed(2);
let resultadoGenerico = conservarDatoGenerico("Hola UNIVO");
