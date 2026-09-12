import PromptSync from "prompt-sync";
const prompt = PromptSync();


const nombrecliente = prompt("Ingrese el nombre del cliente: ");
const codigo = prompt(`
    
    
    Ingrese el codigo del arreglo:
    codigo:| Descripcion:    | precio:
        1  |Arreglo básico   | $25.00
        2  |Arreglo temático | $45.00
        3  |Arco de globos   | $80.00

    `)

let departamento: string = prompt(`Ingrese el departamento de entrega: 
    
    
    
    
    
   `);

const cantidad = parseInt(prompt("Ingrese la cantidad de arreglos: "));
//aca saco lo de los precios y lo multiplico por la cantidad
function obtenerPrecio(codigo: string): number {
    switch (codigo) {
        case "1":
            return 25.00;
        case "2":
            return 45.00;
        case "3":
            return 80.00;
        default:
            return 0;
    }
}
///Calcular subtotal
const calcularSubtotal = (precio: number, cantidad: number): number => {
    return precio * cantidad;
}


// Calcular descuento
function calcularDescuento(subtotal: number, porcentaje: number = 0): number {
    if (porcentaje < 0 || porcentaje > 25) {
        porcentaje = 0;
    }

    return subtotal * (porcentaje / 100);
}