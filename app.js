"use strict"

let amigos = [];
const botonSortear = document.querySelector('.button-draw');

function agregarAmigo() {
    document.querySelector('#resultado').innerHTML = '';
    const amigoElement = document.querySelector('#amigo');
    if (!(amigoElement.value.trim())) {
        alert('Por favor, inserte un nombre.');
        return;
    }
    if (botonSortear.disabled) botonSortear.disabled = false;
    amigos.push(amigoElement.value.trim());
    //console.log(amigos);
    actualizarListaAmigos();
    amigoElement.value = '';
}

function actualizarListaAmigos() {
    const listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = '';
    let amigosLI = '';
    for (let i = 0; i < amigos.length; i++) {
        amigosLI += `<li>${amigos[i]}</li>`;
    }
    listaAmigos.innerHTML = amigosLI;
}

function sortearAmigo() {
    const numeroAmigo =  Math.floor(Math.random()*amigos.length);
    document.querySelector('#resultado').innerHTML = `<li>El amigo secreto sorteado es: ${amigos[numeroAmigo]}</li>`;
    document.querySelector('#listaAmigos').innerHTML = '';
    amigos = [];
    botonSortear.disabled = true;
}