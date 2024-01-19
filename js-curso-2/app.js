// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
const titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del desafío";


function clickConsole(){
    console.log("El botón fue clicado");
}

function clickPrompt(){
    alert(`Estuve en ${prompt("Dame el nombre de una ciudad")} y me acordé de ti`);
}
function clickSuma(){
    const n1 = parseInt(prompt("Dame un número:"));
    const n2 = parseInt(prompt("Dame otro número:"));
    alert(`La suma de los número ${n1} y ${n2} es: ${n1+n2}`);
}
