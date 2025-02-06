document.addEventListener("DOMContentLoaded", function () {
    // Funcionalidad del Carrusel
    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    const carousel = document.querySelector(".carousel");

    function moveCarousel() {
        currentIndex = (currentIndex + 1) % totalSlides;
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(moveCarousel, 3000);

    // Slider de productos
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const productContainer = document.querySelector(".productos-container");

    let productIndex = 0;
    const productWidth = 300; // Ancho de cada producto

    prevBtn.addEventListener("click", () => {
        if (productIndex > 0) {
            productIndex--;
        }
        productContainer.style.transform = `translateX(-${productIndex * productWidth}px)`;
    });

    nextBtn.addEventListener("click", () => {
        if (productIndex < slides.length - 1) {
            productIndex++;
        }
        productContainer.style.transform = `translateX(-${productIndex * productWidth}px)`;
    });
});
