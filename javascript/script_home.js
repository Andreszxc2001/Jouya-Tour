const guides = [
    {
        name: 'Elena Torres',
        specialty: ['Historia', 'Arte', 'Gastronomía'],
        location: 'Barcelona',
        rating: 4.9,
        reviews: 156,
        price: '55€/hora',
        image: '/api/placeholder/400/300'
    },
    {
        name: 'Miguel Ángel Ruiz',
        specialty: ['Arquitectura', 'Fotografía'],
        location: 'Madrid',
        rating: 4.8,
        reviews: 123,
        price: '50€/hora',
        image: '/assets/images/WhatsApp Image 2024-11-06 at 9.09.45 AM.jpeg'
    },
    {
        name: 'Carmen Vega',
        specialty: ['Cultura Local', 'Gastronomía'],
        location: 'Sevilla',
        rating: 4.9,
        reviews: 98,
        price: '45$/hora',
        image: '/api/placeholder/400/300'
    }
    
];

const destinations = [
        {
            name: 'Pasadia Sierra mamey',
            description: 'La Ruta El Mamey es un recorrido turístico en la Sierra Nevada que combina cultura y aventura.',
            guides: 45,
            tours: 120,
            image: '/assets/images/sierra mamey 1.jpg',
            URL: '/html/Destinations/Sierra_mamey.html'
        },
      
    {
        name: 'Sierra mamey',
            description: 'La Ruta El Mamey es un recorrido turístico en la Sierra Nevada que combina cultura y aventura.',
            guides: 45,
            tours: 120,
            image: '/assets/images/sierra mamey 1.jpg',
            URL: '/html/Destinations/Sierra_mamey.html'
    },
    {
        name: 'Sierra mamey',
            description: 'La Ruta El Mamey es un recorrido turístico en la Sierra Nevada que combina cultura y aventura.',
            guides: 45,
            tours: 120,
            image: '/assets/images/sierra mamey 1.jpg',
            URL: '/html/Destinations/Sierra_mamey.html'
    },
    {
        name: 'Sierra mamey',
            description: 'La Ruta El Mamey es un recorrido turístico en la Sierra Nevada que combina cultura y aventura.',
            guides: 45,
            tours: 120,
            image: '/assets/images/sierra mamey 1.jpg',
            URL: '/html/Destinations/Sierra_mamey.html'
    },
    {
        name: 'Sierra mamey',
            description: 'La Ruta El Mamey es un recorrido turístico en la Sierra Nevada que combina cultura y aventura.',
            guides: 45,
            tours: 120,
            image: '/assets/images/sierra mamey 1.jpg',
            URL: '/html/Destinations/Sierra_mamey.html'
    },
    {
        name: 'Sierra mamey',
            description: 'La Ruta El Mamey es un recorrido turístico en la Sierra Nevada que combina cultura y aventura.',
            guides: 45,
            tours: 120,
            image: '/assets/images/sierra mamey 1.jpg',
            URL: '/html/Destinations/Sierra_mamey.html'
    }
];

function createStarRating(rating) {
    return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '★' : '');
}

function renderGuides() {
    const guidesGrid = document.getElementById('guidesGrid');
    guidesGrid.innerHTML = guides.map(guide => `
        <div class="guide-card">
            <img src="${guide.image}" alt="${guide.name}" class="guide-image">
            <div class="guide-info">
                <h3>${guide.name}</h3>
                <div class="categories">
                    ${guide.specialty.map(spec => `
                        <span class="category-tag">${spec}</span>
                    `).join('')}
                </div>
                <p>${guide.location}</p>
                <div class="guide-rating">
                    ${createStarRating(guide.rating)} (${guide.reviews} reseñas)
                </div>
                <div class="price-tag">${guide.price}</div>
            </div>
        </div>
    `).join('');
}

function renderDestinations() {
    const destinationsGrid = document.getElementById('destinationsGrid');
    destinationsGrid.innerHTML = destinations.map(destination => `
        <div class="destination-card">
            <a href="${destination.URL}">
                <img src="${destination.image}" alt="${destination.name}" class="destination-image">
                <div class="destination-info">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                    <div class="destination-stats">
                        <span>${destination.guides} guías</span>
                        <span>${destination.tours} tours</span>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

// Animación suave para el scroll del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicializar la página
window.onload = function() {
    renderGuides();
    renderDestinations();
};

