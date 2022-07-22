/*  
  ID

document.getElementById ('id') --> Accedemos a un elemento a través de su id.

- Los id's se escriben como strings: '' o "".
- Se recomienda que el elemento sea guardado en una constante.

*/

// const titulo = document.getElementById('title');
// console.log(titulo);
// console.log(titulo.textContent); // con Javascript

/* 
 .textContent --> Nos va a servir para mostrar el contenido de texto y/o modificarlo
*/

// titulo.textContent = 'Cambio de Información';
// console.log(titulo.textContent);

/* 
  SELECTOR CSS

document.querySelector('selectorCSS') --> Vamos a acceder al primer elemento que coincida con el selector CSS.

- Los selectores se escriben como strings entre: '' o ""
- Se guardan en una constante.
*/

// const title = document.querySelector('h1'); // Tag
// const title = document.querySelector('#title'); // con '#' accedemos al ID
// const title = document.querySelector('.title'); // con '.' indicamos una clase  
//  console.log(title)

/* 
  Acceso a través de clases, pseudo clases y pseudo elementos.
*/

// const parrafo = document.querySelector('.paragraph');
// console.log(parrafo.textContent);

// const parrafo = document.querySelector('.paragraph:nth-child(2)'); // ':' para activar pseudo clase de CSS --> nth-child()
// console.log(parrafo.textContent);

// const parrafo = document.querySelector('.paragraph::after'); // '::' para acceder a psudo elemento en CSS --> after o before. Hay que definirlo en CSS. No funciona con querySelector.
// console.log(parrafo.textContent);

/* 
  Tener acceso a través de la sucesión de ids y selectores CSS
*/

// document.getElementById('title').querySelector('span'); // Típo de acceso sucesivo
// console.log(titulo.textContent);

/*
  TODOS LOS SELECTORES CSS

  document.querySelectorAll('selectorCSS') --> Accedemos a todos los elementos que coinciden con el selector CSS.

  - Nos devuelce un nodeList (Lista de Nodos)
  - Los selectores se escriben como strings '' o " "
  - Hay que guardarlos en una constante.
*/

// constant parrafos = document.querySelectorAll('p'); // Tags
const parrafos = document.querySelectorAll('.paragraph');
// console.log(parrafos);

/* Index */

console.log(parrafos[0].textContent);
console.log(parrafos[1].textContent);
console.log(parrafos[2].textContent);