/* 
MODELO DE OBJETO DEL DOCUMENTO - DOM (Document Object Model)

- Es toda la estructura HTML del documento.
- El 99% de las veces que usamos Javascript, interactuamos con el DOM.
- El DOM no es Javascript.
- El DOM se considera un API (Aplication Programing Interface).
- El DOM viene intefrado en el navegador y podemos usarla con Javascript.

NODOS

Cada parte del documento es un nodo, aunque técnicamente los elementos son objetos, para javascript cada parte del árbol es un nodo.

Hay varios tripos de nodos (12), los más usados son:

- Element node: Cualquier etiqueta del HTML → 1
- Text node: Contenido de la etiqueta → 3 
- Comment node: Cualquier comentario en HTML → 8

NOTA: Cualquier consulta para saber el tipo de nodo, nos devuelve uno de estos números.

ACCEDER AL 'DOM' DESDE NAVEGADOR

1. Para acceder a un elemento de HTML desde el navegador utilizamos las 'DevTools'.
2. Tenemos que seleccionar la etiqueta que queremos consultar.
3. En la consola usamos el comando: $0 → Despliega las propiedads del nodo.

NOTA: Este comando: $0, solo funciona en el navegador, no en el archivo Javascript.

CONSULTANDO AL 'H1'

>> $0 // Nodo del H1
>> $0.id // "title"
>> $0.className // "title"
>> $0.textContent // "DOM - Document Object Model"
>> $0.nodeType // 1

CONSULTANDO CONTENIDO 'H1'

>> $0.childNodes // NodeList
>> $0.childNodes[0] // #text "DOM - Document Object Model"
>> $0.childNodes[0].length // 27 
>> $0.childNodes[0].data //"DOM - Document Object Model"
>> $0.childNodes[0].nodeType // 3

CONSULTANDNO AL COMENTARIO

>> $0 // <!--   <p>¡Soy un comentario!</p>   -->
>> $0.textContent // " <p>¡Soy un comentario!</p> "
>> $0.length // 28
>> $0.nodeType // 8
*/