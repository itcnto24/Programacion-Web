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

var agregar=document.getElementById('agregar');
agregar.addEventListener('click', agregarPokemon);

/* Definir la función que va a agregar pokemones al arrar */

function agregarPokemon(){
    /* Aquí va nuestro código */

/* 
Así agrgegamos datos a un array con push:
pokemones.push('Pikachu','Eléctrico', 1000);
*/

/* Puedo sustituir lo anterior con: */
pokemones.push([nombre.value, tipo.value, poder.value]);
}
