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
    // Aquí va el código que ejecuta la función

/* Condicional if */
if(nombre.value ===''){
    /* código que se escribe */
    mensaje.innerHTML= 'No olvides completar los datos y agregar un Pokemón!!';
} else {
/* Ejecuta esto si no se cumple la condición */
/* 
Así agrgegamos datos a un array con push:
pokemones.push('Pikachu','Eléctrico', 1000);
*/

/* Puedo sustituir lo anterior con: */
pokemones.push([nombre.value, tipo.value, poder.value]);

// La variable irá cambiando conforme se agreguen nuevos datos
var i = pokemones.length - 1;
// Imprimimos el mensaje en la etiqueta 'p' con Id 'mensaje'
mensaje.innerHTML='Se agregó ' + pokemones[i][0] + 'te quedan 2 Pokemones';
};
}

/* 
Definimos la función que va a mostrar todos los datos del Array
*/

function mostrarPokemones(){
    // Código a ejecutar
    if(pokemones.length == 0) {
        mensaje.innerHTML= 'Para ver tus Pokemones, primero agrega alguno';
    } else {
           /* Ciclo For: Sirve para hacer repeticiones de código */
        for(var r=0; r<3; r++){
     // Código que se repite
     // código a ejecutar

            document.write(
            '<ul>' +
            '<li><img src="imagenes/' + pokemones[r][0] + '.png" alt="Squirtle.png"></li>' +
            '<li> Pokemón: ' + pokemones[r][0] + '</li>' +
            '<li> Tipo: ' + pokemones[r][1] + '</li>' +
            '<li> Poder: ' + pokemones[r][2] + '</li>' +
            '</ul>'
            );
        };
    }
};