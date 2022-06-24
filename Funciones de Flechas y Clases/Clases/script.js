/* 

CLASES

Es una estructura de Es6, que funciona como una plantilla o molde para crear objetos.

Definimos una clase usando la palabra reservada 'class' seguido de nombre de la clase.

Cuando creamos un objeto a través de una clase se le llama 'instancear'.

Para poder crear una 'clase' necesitamos de una 'functionn' constructora. Llamada obligatoriamente 'constructor' y se ejecuta cada vez que instanceamos o creamos un objeto.

class Pokemon {
    constructor (nombre, tipo, poder){
        this.nombre = nombre
    }

    // Aquí van los métodos (funciones)
}

- Cuando definimos clases la primera letra de su nombre va en MAYÚSCULAS.
- Los parámetros van entre los paréntesis y son las propiedades que van a tener los objetos.
- Para asignar los parámetros al objetos, utilizamos la palaba reservada 'this' -> Hace refernecia al objeto.

    'Esta propiedad del objeto' = 'Este parámetro'

Simplemente estamos asociando las propiedades de objeto con los valores que enviamos por parámetros.

--------

MÉTODOS

Son funciones asociadas a los objetos. 

Los métodos se declaran dentro de la clase, pero fuera del contructor.

pokedex(){
    // return `Este es ${this.nombre}` // `` los acentitos salen con 'Alt Gr +  tecla c}'
}


No se usa la palabra reservada 'function', ni flecha. Esta es la sintaxis de un método dentro de la clase.

--------

CREAR UN OBJETO

Para crear un objeto necesitamos usar la palabra reservada 'new' y el nombre de la clase.

const pikachu = new Pokemon ('Pikachu','Eléctrico', '1000');

Una vez instanciado el objeto, podremos acceder a sus propiedades y métodos utilizando la nomenclatura del punto '.'

pikachu.nombre;
pikachu.poder;
pikachu.tipo;
pikachu.pokedex();

*/

class Pokemon {
    constructor (nombre, tipo, poder){
        this.nombre = nombre
        this.tipo = tipo
        this.poder = poder
    }
    pokedex(){
        //Método
        return `Este es ${this.nombre} es un pokemon de tipo ${this.tipo} y su poder es de ${this.poder}` 
    }
}

//Crear Objetos a tráves de una clase
const pikachu = new Pokemon ('Pikachu', 'Eléctrico', 1000);
const charmander = new Pokemon ('Charmander', 'Fuego', 900);

console.log(pikachu);
console.log(charmander);

console.log(pikachu.nombre);
console.log(charmander.tipo);

console.log(pikachu.pokedex());
console.log(charmander.pokedex());