/* 

Template Strings

Son cadenas de texto que permiten simplificar el código cuando queremos concatenar datos.

Estos se delimitan con dos tildes invertidas o acentos graves:
`` (Salen con Alt Gr + tecla })

 `Template Strings`

Pueden tener "expresiones", identificadas con el signo del dolar y envueltas en llaves.

 ${}  <- Marcador

Una expresión es cualquier unicar de código válido que se resuelve en un valor.

 x = 'gato'         - Expresión de Asignación
 3 + 4              - Espresión de Aritmética
 true == true       - Expresión de Logica

${Expresión}

*/

var nombre='It';
var apellido= 'Canto';
var edad= '27';

// Así concatenamos cadenas de textos y variables
console.log('Hola ' + nombre + ' ' + apellido + ' tienes ' + (edad + 1) + ' años');

// Así utilizamos los templates srings
console.log(`Hola ${nombre} ${apellido} tienes ${edad} años`);

document.write(`El siguiente año tendrás ${edad+1} años`);