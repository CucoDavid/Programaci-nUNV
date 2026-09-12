type operacionNotas = (notas: number[]) => number;

function calcularPromedio(notas: number[]): number {
    let suma = 0;

    for (const nota of notas) {
        suma += nota;
    }

    return notas.length === 0 ? 0 : suma / notas.length;
}

function encontrarNotaMayor(notas: number[]): number {
    if (notas.length === 0) {
        throw new Error("No hay calificaciones para evaluar.");
    }

    const primeraNota = notas[0];

    if (primeraNota === undefined) {
        throw new Error("No hay calificaciones para evaluar.");
    }

    let notaMayor: number = primeraNota;

    for (const nota of notas) {
        if (nota > notaMayor) {
            notaMayor = nota;
        }
    }

    return notaMayor;
}

function procesarCalificaciones(
    nombreEstudiante: string,
    operacion: operacionNotas,
    ...calificaciones: number[]
): void {
    if (calificaciones.length == 0) {
        console.log(`No hay calificaciones para ${nombreEstudiante}.`);
        return;
    }
    const resultado: number = operacion(calificaciones);
    console.log("\nReporte del estudiante:");
    console.log(`Estudiante: ${nombreEstudiante}`);
    console.log(`Calificaciones: ${calificaciones.join(", ")}`);
    console.log(`Resultado: ${resultado}`);
}


procesarCalificaciones("Juan", calcularPromedio, 85, 90, 78, 92);
procesarCalificaciones("María", encontrarNotaMayor, 88, 95, 82, 91);

