// Datos de los guías turísticos
const guides = [
    {
        name: 'Arinda vangrieken ',
        specialty: ['Guia Jefe'],
        location: 'Riohacha',
        rating: 4.9,
        reviews: 156,
        price: '50€/hora',
        image: '/api/placeholder/400/300',
        URL: '/html/guia-arinda-vangrieken.html'
    },
    {
        name: 'Miguel Ángel Ruiz',
        specialty: ['Arquitectura', 'Fotografía'],
        location: 'Madrid',
        rating: 4.8,
        reviews: 123,
        price: '50€/hora',
        image: '/assets/images/WhatsApp Image 2024-11-06 at 9.09.45 AM.jpeg',
        URL: '/html/guia-miguel-angel-ruiz.html'
    },
    {
        name: 'Carmen Vega',
        specialty: ['Cultura Local', 'Gastronomía'],
        location: 'Sevilla',
        rating: 4.9,
        reviews: 98,
        price: '45$/hora',
        image: '/api/placeholder/400/300',
        URL: '/html/guia-carmen-vega.html'
    }
];

// Datos de los destinos turísticos
const destinations = [
    {
        name: 'Sierra mamey',
        description: 'La Ruta El Mamey es un recorrido turístico en la Sierra Nevada que combina cultura y aventura.',
        guides: 45,
        tours: 120,
        image: '/assets/images/images-destinations/1.Sierra mamey.jpg',
        URL: '/html/1.Destinations/1.Destinations-Sierra_mamey.html'
    },
    {
        name: 'Cabo de la Vela',
        description: 'El Cabo de la Vela es un paraíso de playas y paisajes áridos en La Guajira.',
        guides: 45,
        tours: 120,
        image: '/assets/images/images-destinations/2.Cabo de la Vela.webp',
        URL: '/html/1.Destinations/2.Destinations-Cabo_de_la_vela.html'
    },
    {
        name: 'Santuario de FLamencos',
        description: 'Refugio natural en La Guajira, hogar de flamencos rosados y rica biodiversidad.',
        guides: 45,
        tours: 120,
        image: '/assets/images/images-destinations/3.Santuario dde Flamencos.jpg',
        URL: '/html/1.Destinations/3.Destinations-Santuario_de_flamencos.html'
    },
    {
        name: 'Tour por la Guajira',
        description: 'Recorre La Guajira: playas, desiertos, cultura Wayuu y naturaleza.',
        guides: 45,
        tours: 120,
        image: '/assets/images/images-destinations/4.Tour-Guajira.jpg',
        URL: '/html/1.Destinations/4.Destinations-Tour_guajira.html'
    },
    {
        name: 'City Tour Riohacha',
        description: 'Descubre Riohacha: playas, cultura Wayuu, historia y belleza natural.',
        guides: 45,
        tours: 120,
        image: '/assets/images/images-destinations/5.Tour-Riohacha.jpeg',
        URL: '/html/1.Destinations/5.Destinations-Tour_Riohacha.html'
    },
    {
        name: 'City Tour Valledupar',
        description: 'Valledupar: música vallenata, cultura, historia y paisajes únicos.',
        guides: 45,
        tours: 120,
        image: '/assets/images/images-destinations/6.Tour-Valledupar.jpg',
        URL: '/html/1.Destinations/6.Destinations-Tour_Valledupar.html'
    }
];

// Función para crear una clasificación por estrellas para las valoraciones
function createStarRating(rating) {
    return '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '★' : '');
}

// Función para renderizar los guías en la interfaz de usuario
function renderGuides() {
    const guidesGrid = document.getElementById('guidesGrid');
    guidesGrid.innerHTML = guides.map(guide => `
        <div class="guide-card">
        <a href="/path/to/${guide.name}.html">
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
            </a>
        </div>
    `).join('');
}


// Función para renderizar los destinos en la interfaz de usuario
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

// Función para la animación de desplazamiento suave al hacer clic en enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Inicialización de la página: renderiza los guías y destinos cuando la página carga
window.onload = function() {
    renderGuides();
    renderDestinations();
};

// Función para realizar la búsqueda de guías en función del destino seleccionado
function searchGuides() {
    const selectedDestination = document.getElementById('destinationSelect').value;
    
    if (!selectedDestination) {
        alert('Por favor selecciona un destino');
        return;
    }

    // Objeto que mapea los destinos a sus respectivos archivos HTML
    const destinationPages = {
        'Sierra-Mamey': '/html/1.Destinations/1.Destinations-Sierra_mamey.html',
        'Cabo-vela': '/html/1.Destinations/2.Destinations-Cabo_de_la_vela.html',
        'Santuario-de-Flamencos': '/html/1.Destinations/3.Destinations-Santuario_de_flamencos.html',
        'la-Guajira': '/html/1.Destinations/4.Destinations-Tour_guajira.html',
        'Tour-Riohacha': '/html/1.Destinations/5.Destinations-Tour_Riohacha.html',
        'Tour-Valledupar': '/html/1.Destinations/6.Destinations-Tour_Valledupar.html',
    };

    // Obtiene la URL correspondiente al destino seleccionado
    const destinationUrl = destinationPages[selectedDestination];

    if (destinationUrl) {
        window.location.href = destinationUrl;
    } else {
        // En caso de que el destino no tenga una página asignada
        window.location.href = '/guides.html?destination=' + selectedDestination;
    }
}
