document.addEventListener('DOMContentLoaded', function() {
    // Buscar todos los carruseles en la página
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const carouselData = JSON.parse(carousel.getAttribute('data-carousel')); // Leer datos del atributo
        const carouselInner = carousel.querySelector('.carousel-inner');
        const carouselControls = carousel.querySelector('.carousel-controls');
        let currentSlide = 0;
        let isAnimating = false;

        // Crear slides y dots
        carouselData.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
            slide.style.backgroundImage = `url(${image.url})`;
            carouselInner.appendChild(slide);

            const dot = document.createElement('div');
            dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                if (!isAnimating) {
                    goToSlide(index);
                }
            });
            carouselControls.appendChild(dot);
        });

        const slides = carouselInner.querySelectorAll('.carousel-slide');
        const dots = carouselControls.querySelectorAll('.carousel-dot');

        function goToSlide(index) {
            if (currentSlide === index) return;
            isAnimating = true;

            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');

            currentSlide = index;

            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');

            setTimeout(() => {
                isAnimating = false;
            }, 800);
        }

        function nextSlide() {
            if (!isAnimating) {
                goToSlide((currentSlide + 1) % slides.length);
            }
        }

        // Cambio automático de slides
        let intervalId = setInterval(nextSlide, 5000);

        // Detener la rotación automática al interactuar
        carouselControls.addEventListener('mouseenter', () => {
            clearInterval(intervalId);
        });

        // Reanudar rotación automática
        carouselControls.addEventListener('mouseleave', () => {
            intervalId = setInterval(nextSlide, 5000);
        });
    });
});


// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.boxShadow = window.scrollY > 50 ? 'var(--shadow)' : 'none';
});