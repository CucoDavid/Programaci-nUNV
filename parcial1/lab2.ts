//Jose Antonio Cruz vigil
//Christopher David Campos Garcia
let empleados: string[] = ["ana", "Luis", "Marta"];
let salarios: number[] = [450.00, 550.00, 480.00];
let descuento: number[] = [46.16, 56.38, 49.20];
let antiguedad: number[] = [4, 1, 5];
let extras: number[] = [7, 0, 2];


//4 bono mediante el callback

type CalcularBono = (antiguo: number) => number;

function bono(antiguo: number): number {
    if (antiguo >= 3) {
        return 20;
    } else {
        return 0;
    }
}

function obtenerbono(antiguedad: number,
    callback: CalcularBono
): number {
    return callback(antiguedad);
}

antiguedad.forEach((anios, indice) => {
    const bonoEmpleado = obtenerbono(anios, bono);
    const salarioActual = salarios[indice] ?? 0;
    salarios[indice] = salarioActual + bonoEmpleado;

    console.log(
        `${empleados[indice] ?? "Empleado"}: salario $${salarioActual} + bono $${bonoEmpleado} = $${salarios[indice]}.`
    );
});

