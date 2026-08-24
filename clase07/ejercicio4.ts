import promptSync from "prompt-sync";
const prompt = promptSync();
const anio: string = prompt("Ingrese el año: ");

const anioNum: number = parseInt(anio,10);
if(anioNum % 4 === 0 && anioNum % 100 !== 0 || anioNum % 400 === 0) {
    console.log(`${anioNum} es un año bisiesto`);
}else{
    console.log(`${anioNum} no es un año bisiesto`);
}