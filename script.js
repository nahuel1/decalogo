document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#decalogo li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            // Quitar la clase 'selected' de todos los elementos
            listItems.forEach(li => li.classList.remove('selected'));
            // Agregar la clase 'selected' al elemento clicado
            item.classList.add('selected');
        });
    });
});