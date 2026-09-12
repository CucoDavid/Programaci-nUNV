import PromptSync from "prompt-sync";
const prompt = PromptSync();

function resgistrarProductos(
nombre:string,
precio:string,
categoria?:string,
monedas:string="USD"
):void{
console.log(
`
productos: ${nombre} | precio: $${precio} | categoria: ${categoria?? "sin categoria"}| moneda: $${monedas} 
`
);
}

let numeroProductos=Number(prompt("Ingrese el numeros de productos"));

for(let i=1; i <= numeroProductos; i + 1){

    let nombre=prompt("Ingresa el nombre del producto"+i);
    let precio=prompt("Ingrese el precio del producto"+i);
    let categoria=prompt("Ingrese la categoria del producto"+i);
    let moneda=prompt("Ingresa la moneda"+i);

    resgistrarProductos(nombre,precio,categoria,moneda)
}