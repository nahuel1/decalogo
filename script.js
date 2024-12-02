document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('#decalogo li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            // Quitar la clase 'selected' de todos los elementos
            listItems.forEach(li => li.classList.remove('selected'));
            
            // Agregar la clase 'selected' al elemento clicado
            item.classList.add('selected');
            
            // Añadir animación de resplandor temporal
            item.classList.add('highlight');
            setTimeout(() => {
                item.classList.remove('highlight');
            }, 500); // Duración del efecto (en milisegundos)
        });
    });
});
