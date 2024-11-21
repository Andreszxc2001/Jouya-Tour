 // JavaScript para el carrusel
 let currentSlide = 0;
 const slides = document.querySelectorAll('.carousel-slide');
 
 function showSlide(index) {
     slides.forEach((slide, i) => {
         slide.classList.remove('active');
         if (i === index) slide.classList.add('active');
     });
 }

 function prevSlide() {
     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
     showSlide(currentSlide);
 }

 function nextSlide() {
     currentSlide = (currentSlide + 1) % slides.length;
     showSlide(currentSlide);
 }

 setInterval(nextSlide, 5000); // Cambia de imagen automáticamente cada 5 segundos

 // Navbar cambia de color al hacer scroll
 window.addEventListener('scroll', () => {
     const navbar = document.getElementById('navbar');
     if (window.scrollY > 50) {
         navbar.classList.add('scrolled');
     } else {
         navbar.classList.remove('scrolled');
     }
 });