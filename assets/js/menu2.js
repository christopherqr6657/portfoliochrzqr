// Obtener todos los enlaces del menú
const menuLinks = document.querySelectorAll('.portfolio__menu .portfolio__link');

// Obtener todos los elementos <figure> dentro de <section class="portfolio__gallery">
const figures = document.querySelectorAll('section.portfolio__gallery figure');

// Agregar un event listener a cada enlace del menú
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Obtener la categoría seleccionada desde el atributo data-category del enlace
        const filtro = this.getAttribute('data-category');

        // Cambiar la clase activa en el menú
        menuLinks.forEach(item => item.parentElement.classList.remove('portfolio__option--active'));
        this.parentElement.classList.add('portfolio__option--active');

        // Filtrar los elementos <figure> según la categoría seleccionada
        figures.forEach(figure => {
            const categoria = figure.querySelector('.gallery__category').textContent.trim();

            // Mostrar u ocultar elementos según el filtro
            if (filtro === 'Todo' || categoria === filtro) {
                figure.style.display = 'block';
            } else {
                figure.style.display = 'none';
            }
        });
    });
});
