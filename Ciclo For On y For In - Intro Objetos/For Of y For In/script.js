/*

CICLO FOR IN O FOR OF

Son dos ciclos nuevos determinados ES6. Simplifican el bucle 'for' tradicional.

For Tradicional:

for(i = 0 ; i < 3 ; i++){
    // Código que se ejecuta
}

Estos nuevos ciclos permiten recorrer estrucutras de dator como los Arrays y Objetos.Arrays.Arrays.Arrays. 

For Of:

 for( variable of estructura){
    //Código que se ejecuta
 }

 For In: 

 for( variable in estructura){
    //Código que se ejecuta
 }

 - La variable toma el siguiente valor de la esctructura en cada iteración
 - No es necesario especificar el número de iteraciones (vueltas)
 - El bucle se incrementa solo
 - El bucle se detiene automáticamente
 
 */

// Estructura de datos

let pokemones = ['Pikachu', 'Cubone', 'Charmender', 'Chokorita'];

// Ciclo For Tradicional

/* for (i=0 ; i<3 ; i++){
    console.log(pokemones[i])
} */

// Ciclo For Of

for (let nombre of pokemones){
    console.log(nombre); // Valor de cada posición de la escrtuctura.

}

// Ciclo For In

for (let numero in pokemones){
    console.log(numero); // El índica (index) de los valores de la estructura.
}

