let cadena = prompt('Ingrese un texto')
let resultado = "";
let seguir = false;

do {
    resultado = resultado+cadena
    console.log(resultado)
    seguir = confirm('Continuar?')
    if (seguir){
        cadena= prompt('Ingrese otro texto')
    } 
} while (seguir==true)