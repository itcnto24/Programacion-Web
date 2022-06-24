/* 

Funciones

Son fragmentos de código que escribimos para ejecutar una tarea y volver a escribir el mismo más de una vez.

- Modularizamos el código
- Es más solventar errores
- Deben realizar una sola tarea

Esta es la sintaxis tradicional

    funtion nombreFuncion () {
        // El código a ejecutar
    };

Esta es la forma con Es6

    const nombreFuncion = () => {
        // Código a ejecutar
    }

1.Funciones pueden recibir parámetros y van entre los paréntesis.

... (parametro1, parametro2) ...
    
Estos parámetros se usarán dentro de la función.

2. Las funciones pueden devolver valores y se usa la palabra reservada 'return'

... {
    return parametro1 + parametro2
}

3. Las funciones tienen que ser invocadas y las tenemos que llamar por fuera de la función

nombreFunction();

*/

// Tradicional

function saludar(){
    console.log('Hola cara de bola');
}

saludar();

// Nueva forma o Función de Flecha

const despedida=()=>{
    console.log('Adiós, bye bye...');
}

despedida();

// Funcion Flecha con parámetros

const mensajito=(dia)=>{
    console.log(`Hoy es ${dia}`);
} 

mensajito('Viernes');
mensajito('Lunes');
mensajito('Martes');