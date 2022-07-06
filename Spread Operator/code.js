/* 
  SPREAD OPERATOR (OPERADOR DE EXPANSIÓN)

 - Operadores Aritméticos     -> + - / *
 - Operadores de Asignación   -> =
 - Operadores de Comparación  -> >, <, >=, <=
 - Operadpres Lógicos         -> &&, ||
 * Operador de Expansión      -> ...

 El operador de expansión, trabaja con los datos de un 'Array'.

*/

// let numbers = [1,2,3,4,5];

// console.log(...numbers); // Con los '...' se aplica el operador de expansión

/* 
ENVIAR ELEMENTOS DE UN ARRAY A UNA FUNCIÓN.
*/

/* const addNumbers = (a,b,c) => {
  console.log(a + b + c);
}

let numbers = [1,2,3]; // Se declara un array

addNumbers(...numbers); */

/* 
  AÑADIR UN ARRAY A OTRO ARRAY
*/

/* let pokemones =  ['Pikachu','Charmander','Bulbasaur'];
let newPokemones =  ['Dito','Snorlax'];


pokemones.push(...newPokemones); // Método Push (Llamar al 'Array' + .push)

console.log(pokemones); */

/* 
COPIAR UN ARRAY
*/

/* 
let numbers = [1,2,3,4,5];
let copyNumbers = [...numbers];

console.log(copyNumbers); */

/* 
CONCATENAR AARAYS
*/

/* let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];

// let concatNumbers = numbers1.concat(numbers2); // Método '.concat'
let concatNumbers = [...numbers1 , ...numbers2]; // Método 'expansión'

console.loge(concatNumbers); */

/* 
ENVIAR UN NÚMERO INDEFINIDO DE ARGUMENTOS A UNA FUNCIÓN (Parámetros REST)
*/

/* const restParms = (...numbers) => {
    console.log(numbers);
}

restParms(1,2,3,4,5); // Invocar función y agregar valores */

/* 
LIBRERIA MATH
*/

/* const numbers = [-14, 5, 4, 10, 40];

console.log( Math.max(...numbers) ); // Math Max para encontrar el número más alto del 'Array'
console.log( Math.min(...numbers) ); // Math Min para encontrar el número menor */

/* 
ELIMINAR ELEMENTOS DUCPLICADOS
*/

const numbers = [-14, 5, 4, 10, 40, 5, 10];
console.log(...new Set(numbers)); // 'new Set' no permite los datos duplicados

