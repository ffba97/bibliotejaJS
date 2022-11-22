import { cargarLibros } from "../../books/books.js";

export const searcher = () => {
    const filter = document.querySelector('#search-filter')
    const searcher = document.querySelector('#searcher');
    filter.addEventListener('change', () =>
        console.log(filter.value)
    )

    searcher.addEventListener('input', ()=>{
        cargarLibros(filter.value,searcher.value)
    })

}