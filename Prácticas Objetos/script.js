/* 
INSTRUCCIONES: Práctica Objetos

- Crear una clase 'Movie' con las propiedades: película, genero, año.

    class NombreClase {
        constructor(propiedades){
            this.propiedad = propiedad
        }
    }
 
- Crear un método que nos regrese la película.

    nombreMetodo() {
        return codigo que devuelve
    }

- Crear un método que nos regrese toda la información concatenada en un 'string'

    "Esta película se llama 'Nombre de Película' es de género 'género de película' creada en el año 'año de película'"

- Solicitar al usuario tres películas y agregarlas a un 'Array'

    prompt('mensaje')
    
    let nombreArray= [Objeto{}, Dato-1, Datp-2, Dato-3];

- Crear una función que muestre (por consola) el título de todas las películas.

    const nombreFuncion= () => {
        codigo a ejecutar
    }

    for (const nombre of array) {
        codigo que ejecuta
    }

    nombreFunction();

- Crea una función que muestre (por consola) toda la información concatenada en un string de las películas.

*/

class Movie {
    constructor(title, gender, year){
        this.title = tittle
        this.gender = gender
        this.year = year
    }
}

// MÉTODOS

    getTitle(){
        return this.title
    }

    getInfo(){
        return `Ésta película se llama ${this.title} es de género ${this.gender} y se estrenó en el año ${this.year}.`
    } // Forma para imprimir 

    let films = [];

    while(films.length < 3){
        let title = prompt ("Agrega un título de película");
        let gender = prompt ("¿Cuál es su género");
        let year = prompt ("¿En qué año se estrenó");

        films.push(new Movie(tittle, gender, year));
    }

// FUNCIONES

    const showNames = () => {
        for(const film or films){
            console.log(film.getTitle());
        }
    }

    showNames();

    