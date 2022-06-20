/*
 Propiedades y Métodos de Strings

 Propiedades son las características que tienen un elemento. 

  P. ej. Los strings tienen una longitud. (Cantidad de caracteres) -> length

  Métodos son las acciones o comportamientos que un elemento puede hacer o tener.

   P. ej. Los strings pueden convertirse en mayúsculas. -> toUpperCase

   Para utilizar estas propiedades y métodos, se usa la nomenclatura del punto '.'

    cadena.propiedad
    cadena.metodo(parámetro) <- En los métodos usamos paréntesis, porque pueden recibir parámetros.
*/

/* 
 Definimos nuestro string (cadena de caracteres)
*/

let cadena = 'Hola Mundo'; // Asignar el string

/* 
 Propiedades

 length -> Devolver la longitud de la cadena.

 Devolver: Respuesta a nuestra petición.
*/

console.log(cadena.length);

/* 
 Diferencia en tre el indez y el numero de caracter de un string

 H o l a _ M u n d o
 1 2 3 4 5 6 7 8 9 10 <- Logitud del string (length)

 H o l a _ M u n d o
 0 1 2 3 4 6 5 7 8 9  <- Indice (index)
*/

/* 
 Métodos 

 Todos los métodos devuelven una cadena nueva. La cadena original no será modificada.

 toUpperCase() -> Devuelve la cadena en mayúsculas.
*/

/* 
console.log(cadena.toUpperCase());

let cadenaMayus = cadena.toLocaleUpperCase(); // Guardamos el resultado del método en una nueva variable 
*/

/* 
 loLowerCase() -> adevuelve la cadena en minúscula.
*/

/*
console.log(cadena.toLowerCase()); // JS es un lenguaje 'Case Snsitive', es decir que hace diferencia entra mayúscula y minúsculas.
*/

/*
indexog(string) -> Devuelve la posición en la que se encuentra el string o el carácter, si no la encuentra devolverá -1.

H o l a   M u n d o
0 1 2 3 4 5 6 7 8 9 <- Indice (index)
*/

/*
console.log(cadena.indexOf('u'));
console.log(cadena.indexOf('Mundo'));
*/

/*
replace(valor a buscar, valor nuevo) -> Remplaza la cadena que le indiquemos y coloca el nuevo valor.
*/

/* 
console.log(cadena.replace('Mundo','Mamá));
*/

/*
sustring(inicio [,fin]) // [] -> el dato opcional

Extrae los caracteres desde 'inicio' hasta 'fin'.
Si no se incluye el 'fin' extrae hasta el final.

H o l a   M u n d o
0 1 2 3 4 5 6 7 8 9 <- Inidice (index)
*/

/*
console.log(cadena.substring(5));
console.log(cadena.substring(0,8));
*/

/*
slice(inicio [,fin]) Igual que substring pero admite valores negativos.

Si ponemos valores negativos comienza desde atrás.

Si no incluye 'fin' se extiende hasta el final.

H   o l a   M u n d o
1   2 3 4 5 6 7 8 9 10 <- Longitud (lenght)
10  9 8 7 6 5 4 3 2 1  <- Longitud Negativos (-)
*/

/*
console.log(cadena.slice(2));
console.log(cadena.slice(-3));
console.log(cadena.slice(1,6));
console.log(cadena.slice(5,-2));
*/

/*
trim() -> Elimina los espacios al inicio y al final de la cadena
*/

let cadena2= '    Hola Mundo     ';
console.log(cadena2.trim());
let cadenaSinEspacios = cadena2.trim();

/* PD: Si entré a su clase profeeee!!! Por qué no tengo asistencia? :o */

