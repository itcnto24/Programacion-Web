/* 
TARGET

lo podemos usar para delegar eventos y que através de una elemento padre, escuchar a sus elementos hijos.
*/

/* const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

one.addEventListener('click', (e) => console.log(e.target.textContent));
two.addEventListener('click', (e) => console.log(e.target.textContent));
three.addEventListener('click', (e) => console.log(e.target.textContent)); */

// Lo anterior se reseume en lo siguiente: 

const container = document.getElementById('container');

// container.addEventListener('click', (e) => console.log(e.target));
// container.addEventListener('click', (e) => console.log(e.target.textContent));
container.addEventListener('click', (e) => e.target.classList.add('color'));