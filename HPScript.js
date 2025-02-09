const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');
const raquetasCarousel = document.querySelector('.raquetas-carousel');
const raquetasItems = document.querySelectorAll('.raqueta-item');
let currentIndex = 0;

function showRaquetas(index) {
    const itemWidth = raquetasItems[0].offsetWidth + parseInt(getComputedStyle(raquetasCarousel).gap); // Incluye el gap dinámicamente
    const containerWidth = document.querySelector('.raquetas-container').offsetWidth - 500; // Resta el ancho de .raquetas-img
    const itemsVisible = Math.floor(containerWidth / itemWidth);
    const maxIndex = raquetasItems.length - itemsVisible; // Ajusta para que la última tarjeta sea visible

    currentIndex = Math.min(Math.max(index, 0), maxIndex); // Asegura que no se pase

    const translateValue = -itemWidth * currentIndex;
    raquetasCarousel.style.transform = `translateX(${translateValue}px)`;
}

nextBtn.addEventListener('click', () => {
    showRaquetas(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showRaquetas(currentIndex - 1);
});

window.addEventListener('resize', () => {
    showRaquetas(currentIndex); // Ajusta la posición cuando cambia el tamaño de la ventana
});

// Inicializa el carrusel en la tarjeta 1
showRaquetas(0);