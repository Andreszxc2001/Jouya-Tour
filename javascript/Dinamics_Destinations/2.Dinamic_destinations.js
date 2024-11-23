// Configuración mejorada del carrusel
document.addEventListener('DOMContentLoaded', function() {
    const carouselImages = [
        { url: '/assets/images/Carrusel-destinations/1.Sierra-mamey/Image-1.jpg', caption: 'Sagrada Familia' },
        { url: '/assets/images/Carrusel-destinations/1.Sierra-mamey/Image-2.webp', caption: 'Park Güell' },
        { url: '/assets/images/Carrusel-destinations/1.Sierra-mamey/Image-3.jpg', caption: 'Barrio Gótico' },
        { url: '/assets/images/Carrusel-destinations/1.Sierra-mamey/Image-4.jpg', caption: 'Barrio Gótico' }
    ];

    const carouselInner = document.querySelector('.carousel-inner');
    const carouselControls = document.querySelector('.carousel-controls');
    let currentSlide = 0;
    let isAnimating = false;

    // Crear slides y dots
    carouselImages.forEach((image, index) => {
        // Crear slide
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url(${image.url})`;
        carouselInner.appendChild(slide);

        // Crear dot
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            if (!isAnimating) {
                goToSlide(index);
            }
        });
        carouselControls.appendChild(dot);
    });

    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');

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
        }, 800); // Match transition duration
    }

    function nextSlide() {
        if (!isAnimating) {
            goToSlide((currentSlide + 1) % slides.length);
        }
    }

    // Cambio automático de slides
    let intervalId = setInterval(nextSlide, 5000);

    // Detener la rotación automática cuando el usuario interactúa
    carouselControls.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    // Reanudar la rotación automática cuando el usuario deja de interactuar
    carouselControls.addEventListener('mouseleave', () => {
        intervalId = setInterval(nextSlide, 5000);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.style.boxShadow = window.scrollY > 50 ? 'var(--shadow)' : 'none';
});