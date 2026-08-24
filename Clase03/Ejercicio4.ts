const alumno: string ="Juan Pérez";
const notal: number = 8.5;
const notax: number = 7.0;
const nota6: number = 9.2;
const promediov: number = (notal + notax + nota6) / 3;
const asistencia: number = 0.80; // Ejemplo de valor, reemplazar con el valor real

const resu:string =
promediov >= 7 && asistencia >= 0.80 ? "Aprobado" : "No Aprobado";

console.log("El estudiante " + alumno + " tiene un promedio de: " + promediov.toFixed(2) + " y una asistencia del " + (asistencia * 100).toFixed(2) + "%. Resultado: " + resu);
