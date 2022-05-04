// Guardamos el numero de pokemones que el usuario elige
var numero = prompt ("¿Cuánto chicos del barrio favotiros tienes?");

// Declaramos un array
var chicosbarrio = [];

// Declaramos nuestro ciclo
for (var i=0; i<3; i++){
// Traigo un dato del usuario
var chicos = prompt ("Escribe a tus chicos del barrio favoritos");
// Agrego el dato del usuario al Array
chicosbarrio.push(chicos);
}
// Imprimir el documento
document.write("<strong>" + chicosbarrio[i] + "</strong>  los más chidos <br>");

// Imprimimos la linea final en el documento
document.write("Has elegido a tus " + numero + " chicos del barrio favoritos!");

