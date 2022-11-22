import { crearLibro, cargarLibros } from './modules/books/books.js'
import {navbar} from './modules/navbar/navbar.js'
// console.log(libros);
cargarLibros();
navbar();

const nuevo_libro = document.querySelector('#nuevo-libro');

nuevo_libro.addEventListener('click', () => {
    crearLibro('Cien años de soledad',
        'Gabriel García Márquez',
        'novela',
        'sudamericana',
        'Cien años de soledad es una novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982. Es considerada una obra maestra de la literatura hispanoamericana y universal, así como una de las obras más traducidas y leídas en español',
        1967,
        'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1631642420-51O9mmoZLhL._SL500_.jpg?crop=1xw:1xh;center,top&resize=480%3A%2A',
        4 );
    cargarLibros();
})

