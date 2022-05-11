// Definimos nuestro arreglo multidimensional con los datos de los pokemones.

var pokemones=[
  ['Cubone', 'Tierra', 1000], //Indice 0
  ['Charmender', 'Fuego', 900], //Indice 1
  ['Squirtle', 'Agua', 800], // Indice 2
  // 0          1       2        ---> Subindices

];

/* // Imprimir en consola
console.log(pokemones[0],[1]); */

/* // Imprimir en página
document.write(pokemones[0][0]); */

// Creamos las variables que traerán la id de HTML
var miImagen=document.getElementById('imagen');
var miNombre=document.getElementById('nombre');
var miTipo=document.getElementById('tipo');
var miPoder=document.getElementById('poder');

// Pedirle al usuario a que salga el pokemon que elija
var numero=prompt('Elige un numero del 0 al 2');

// Insertar texto dentro del elemento HTML
miImagen.innerHTML= '<img src="imagenes/' + pokemones[numero][0] + '.png">';
miNombre.innerHTML='Pokemon: ' + pokemones[numero][0];
miTipo.innerHTML='Pokemon: ' + pokemones[numero][1];
miPoder.innerText='Poder: ' + pokemones[numero][2];