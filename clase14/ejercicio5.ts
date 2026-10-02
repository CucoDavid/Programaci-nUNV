interface ReporteInventario {
    mensaje: string;
    totalElementos: number;
    operacionExitosa: boolean;
}

function reportarInventario<T>(lista: T[]): ReporteInventario {
    return {
        mensaje: `Se han procesado ${lista.length} elementos correctamente.`,
        totalElementos: lista.length,
        operacionExitosa: true
    };
}

const codigosBarras: number[] = [741852, 963258, 852963];
const descripciones: string[] = ["Galletas", "Jugo de naranja", "Leche"];
const existencias: boolean[] = [true, false, true];

console.log(reportarInventario(codigosBarras));
console.log(reportarInventario(descripciones));
console.log(reportarInventario(existencias));