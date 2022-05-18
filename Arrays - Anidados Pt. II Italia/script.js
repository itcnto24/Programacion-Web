/* var miArray=['Dato1','Dato2', 'Dato3'];
var arrMulti=[
    ['Dato1'], ['Dato2'], ['Dato3'], // Indice 0
    ['Dato1'], ['Dato2'], ['Dato3'], // Indice 1
    ['Dato1'], ['Dato2'], ['Dato3'], // Indice 2
    // Sub 0      Sub 1     Sub 2
]; */

/* 
Definimos nuestro array vacío
 */

var pokemones=[];

/* 
Traemos los datos de los inputs
 */

var nombre=document.getElementById('nombre');
var tipo=document.getElementById('tipo');
var poder=document.getElementById('poder');
var mensaje=document.getElementById('mensaje');

var agregar=document.getElementById('agregar');
agregar.addEventListener('click', agregarPokemon);

var mostrar=document.getElementById('mostrar');
mostrar.addEventListener('click', mostrarPokemones);
/* Definir la función que va a agregar pokemones al arrar */

function agregarPokemon(){
    /* Aquí va nuestro código */

/* 
Así agrgegamos datos a un array con push:
pokemones.push('Pikachu','Eléctrico', 1000);
*/

/* Puedo sustituir lo anterior con: */
pokemones.push([nombre.value, tipo.value, poder.value]);

// La variable irá cambiando conforme se agreguen nuevos datos
var i = pokemones.length - 1;
// Imprimimos el mensaje en la etiqueta 'p' con Id 'mensaje'
mensaje.innerHTML='Se agregó ' + pokemones[i][0];
}

/* 
Definimos la función que va a mostrar todos los datos del Array
*/

function mostrarPokemones(){
    // código a ejecutar


    document.write(
        '<ul>' +
        '<li><img src="imagenes/' + pokemones[0][0] + '.png" alt="Squirtle.png"></li>' +
        '<li> Pokemón: ' + pokemones[0][0] + '</li>' +
        '<li> Tipo: ' + pokemones[0][1] + '</li>' +
        '<li> Poder: ' + pokemones[0][2] + '</li>' +
        '</ul>'
        );
}