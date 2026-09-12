function enviarmensaje(mensaje: string, callback: (mensaje: string) => void): void {

    callback(mensaje);
}

function mostrarMensaje(mensaje: string): void {
    console.log(`El mensaje es: ${mensaje}`);
}


enviarmensaje("Tienes un nuevo mensaje", mostrarMensaje);

mostrarMensaje("Tu cuenta está bloqueada");