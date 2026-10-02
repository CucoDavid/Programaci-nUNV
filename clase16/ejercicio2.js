import promptSync from "prompt-sync";
const prompt = promptSync();
function dias(day) {
    if (day === 0) {
        return 0;
    }
    return day + dias(day - 1);
}
const ahorro = Number(prompt("Ingresa la cantidad de dias que deseas ahorrar: "));
if (ahorro < 0) {
    console.log("No existen los dias negativos");
}
else {
    const ahorrado = dias(ahorro);
    console.log(`El ahorro de los dias ${ahorro}, es de $${ahorrado}`);
}
//# sourceMappingURL=ejercicio2.js.map