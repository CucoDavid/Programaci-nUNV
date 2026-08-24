import promptSync from "prompt-sync";
const prompt = promptSync();


let contrasena: string = prompt("Ingrese la contraseña: ");

while (contrasena !== "1234"){
    contrasena = prompt("Contraseña incorrecta, ingrese la contraseña nuevamente: ");
}

console.log("Contraseña correcta, acceso concedido.");
