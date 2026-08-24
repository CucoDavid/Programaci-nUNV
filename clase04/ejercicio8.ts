import promptSync from "prompt-sync";
const prompt = promptSync();

const libro1: string = prompt("Ingrese el nombre del libro1:");
const precioLibro1: number = Number(prompt("Ingrese el precio del libro1:"));
const libro2: string = prompt("Ingrese el nombre del libro2:");
const precioLibro2: number = Number(prompt("Ingrese el precio del libro2:"));     
const libro3: string = prompt("Ingrese el nombre del libro3:");
const precioLibro3: number = Number(prompt("Ingrese el precio del libro3:"));
const presupuesto: number = precioLibro1 + precioLibro2 + precioLibro3;

console.log(`
                ================================================================
                        Si compras los libros
                        libro1: ${libro1} -$ ${precioLibro1}
                        libro2: ${libro2} - $${precioLibro2}
                        libro3: ${libro3} - $${precioLibro3}
                        Genera un gasto total de: $${presupuesto}
                ================================================================`)
