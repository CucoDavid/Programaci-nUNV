/// ejercicio1
let palabra:string = "       CUCO  DAVId";
function inversorDepalabras(palabra:string):string{

    if(palabra===palabra.toUpperCase()){
        return palabra.toLowerCase();
    } 

    return palabra.toUpperCase();
}

console.log(inversorDepalabras(palabra));

//Ejercicio2

function eliminarspacios(palabra:string):string{
    return palabra.trim();
}

console.log(eliminarspacios(palabra));


//ejercicio3
function indentificarLetras(palabra:string, letras:string):void{
    
}


//ejercicio4

function cambiarTexto(
    texto:string,
    palabraBuscar:string,
    palabraNueva:string
):string{
    if(texto.includes(palabraBuscar)){
        texto = texto.replace(palabraBuscar,palabraNueva)
        return texto;
    }
    return texto;
}

