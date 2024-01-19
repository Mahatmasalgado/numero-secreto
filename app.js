let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMinimo = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    //innerHTML lo que devuelve es su descendencia de la etiqueta
    //es como devolver todo lo que se encuentra dentro de esa etiqueta
    //? Al reasignarle algo es eliminar lo que tenía y ponerle el puro texto
}
function verificarIntento(){
    let elemento = document.getElementById('valorUsuario');
    let valorUsuario = parseInt(elemento.value);
    if(valorUsuario === numeroSecreto){
        asignarTextoElemento('p', "Acertaste al número secreto: " + numeroSecreto + `, en ${numeroIntentos} ${numeroIntentos==1?'intento': 'intentos'}`);
        document.getElementById("reiniciar").removeAttribute("disabled"); //le quitamos el atributo disable        
    }else{
        if(numeroSecreto < valorUsuario){
            asignarTextoElemento('p', 'El número secreto es menor a ' + valorUsuario);
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor a ' + valorUsuario);
        }
        limpiarCaja();
        numeroIntentos++;
    }
}

function limpiarCaja(){
    let elemento = document.getElementById('valorUsuario');
    elemento.value = ''; // vaciamos casilla
}

function generarNumeroSecreto(min, max){
    let numeroGenerado =  (Math.floor(Math.random()*(max-min+1)) + min)
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        return NaN;
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(min, max);
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del número Secreto");
    asignarTextoElemento('p', "Indica un número entre 1 y 10");
    numeroIntentos = 1;
    numeroSecreto = generarNumeroSecreto(numeroMinimo, numeroMaximo);
}

function reiniciarJuego(){
    //limpiamos caja
    limpiarCaja();
    
    //restablecemos todo inicial
    condicionesIniciales(); //le quitamos el atributo disable        
    //agregamos disabled
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
