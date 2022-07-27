/* 
Accedemos a los objetos a través constante, getElementById y ID.
*/

const titulo = document.getElementById('title');
console.log(titulo);

/* 
ATRIBUTOS

element.getAttribute('attribute') --> Devolver el atributo que tenga declarado en a etiqueta html.

element.setAttribute('attribute', 'value') --> Modifica el valor del atributo
*/

// console.log(titulo.getAttribute('class'));

// titulo.setAttribute('id', 'big-title');
// console.log(titulo);

/* 
CLASES

element.classList.add('clase', 'clase', ...) --> Añadir una o más clases

element.classList.remove('class', 'class', ...) --> Permite eliminar una o mas clases

element.classList.contains('class') --> Devolve 'true' si tiene la clase o 'false' si no la tiene.

element.classList.replace('oldClass', 'newClass') --> Sustituye una clase por otra.
*/

// titulo.classList.add('big-title', 'red-title');
// titulo.classList.remove('main-title', 'red-title');

// console.log(titulo);
// console.log(titulo.classList.contains('main-title'));

/* if(titulo.classList.contains('red-title')) {
    console.log('Si lo tiene')
} else {
    console.log('Estás perdido')
}
 */

// titulo.classList.replace('big-title', 'small-title');
// console.log(titulo);

/* 
ATRIBUTOS "DIRECTOS"
    id
    className
    nodeName
    textContent
    innerHtml
*/

/* console.log(titulo.id); // 'title'
console.log(titulo.className); // 'main-title'
console.log(titulo.nodeName); // 'H1'
console.log(titulo.nodeType); // '1' (valor numerico como resultado)
console.log(titulo.hidden); // 'false'
console.log(titulo.textContent); // 'DOM · Atributos y Clases desde JavaScritp' (suprime las etiquetas)
console.log(titulo.innerHTML); // 'DOM · Atributos y Clases desde JavaScritp' (imprime las etiquetas)
 */

/* 
ATRIBUTOS "ANIDADOS"
*/

// console.log(titulo.firstChild.nodeValue);
// console.log(titulo.firstChild.nodeType);
// console.log(titulo.firstChild.isConnected);

/* 
ATRIBUTOS 'NodeList'
*/

console.log(titulo.childNodes[0])
console.log(titulo.childNodes[0].length)
console.log(titulo.childNodes[0].nodeName)

console.log(titulo.childNodes[1])
console.log(titulo.childNodes[1].textContent)
console.log(titulo.childNodes[1].hidden)
console.log(titulo.childNodes[1].nodeType)
