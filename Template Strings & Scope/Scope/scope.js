/* 

Scope o Ámbito es la zona donde existe una variable o constante

Las variables o constantes pueden ser de dos tipos (contexto):

 - Global: Podemos acceder a ellas desde cualquier parte del código
 - Local: Variables o constantes creadas dentro de una función, solo se puede acceder
   a ellas dentro de la función o función anidada.

- REPASO-

"Variables" son espacios que reservamos para almacenar información que 
podría cambiar a lo largo del uso del programa.

 - Se declaran      -> var nombre;
 - Se inicializan   -> var nombre = 'Ita';
 - Se modifican     -> nombre = 'It';

Con Ecma Script 6 (Última versión de JS) se usa para declarar variables la
palabra 'let'. No se recomienda usar 'var', esto es por un concepto recientemente
llamado 'hoisting'.

*/

let nombre = 'Italia'; // Inicializamos una variable global
console.log(`Hola mi nombre es ${nombre}`);

function saludar(){
    console.log(`Hola ${nombre}`)
    let apellido = 'Canto'; // Esto es una variable de ámbito Local - "local scope"
    console.log(`Tu nombre completo es ${nombre} ${apellido}`)

  // Esto sería una función anidada 
  function despedida(){
      // Código que ejecuta mi función anidada
      nombre = 'Ita';
      console.log(nombre);
  }
  despedida();

}

saludar(); // Invocamos a la función
// console.log(apellido); // El resultado sería un error
//despedida(); // Igual sería un error 
